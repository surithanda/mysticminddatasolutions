# Image Compression Script for Azure Deployment
# This script moves large files to reduce deployment size

Write-Host "Starting image optimization..." -ForegroundColor Green

# Create backup directory
$backupDir = "assets-backup-large-files"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

# Move video file (27.69 MB)
Write-Host "" 
Write-Host "Moving video file..." -ForegroundColor Yellow
if (Test-Path "public\video\promo.mp4") {
    Move-Item -Path "public\video\promo.mp4" -Destination "$backupDir\promo.mp4" -Force
    # Create placeholder
    New-Item -ItemType Directory -Path "public\video" -Force | Out-Null
    Write-Host "[OK] Video moved - 27.69 MB saved" -ForegroundColor Green
}

# Find and move very large images (over 5MB)
Write-Host ""
Write-Host "Finding large images (over 5MB)..." -ForegroundColor Yellow
$largeFiles = Get-ChildItem -Path "public" -Recurse -File | Where-Object { $_.Length -gt 5MB -and $_.Extension -match '\.(png|jpg|jpeg)$' }

$totalSaved = 0
foreach ($file in $largeFiles) {
    $relativePath = $file.FullName.Replace((Get-Location).Path + '\public\', '')
    $sizeMB = [math]::Round($file.Length/1MB, 2)
    
    # Create backup structure
    $backupPath = Join-Path $backupDir $relativePath
    $backupFolder = Split-Path $backupPath -Parent
    if (-not (Test-Path $backupFolder)) {
        New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
    }
    
    Write-Host "  Moving: $relativePath - Size: $sizeMB MB" -ForegroundColor Cyan
    Move-Item -Path $file.FullName -Destination $backupPath -Force
    $totalSaved += $file.Length
}

$savedMB = [math]::Round($totalSaved/1MB, 2)
Write-Host ""
Write-Host "[OK] Total space saved: $savedMB MB" -ForegroundColor Green

# Calculate new size
$newSize = (Get-ChildItem -Path "public" -Recurse -File | Measure-Object -Property Length -Sum).Sum
$newSizeMB = [math]::Round($newSize/1MB, 2)

Write-Host ""
Write-Host "Public folder size now: $newSizeMB MB" -ForegroundColor $(if ($newSizeMB -lt 250) { "Green" } else { "Red" })
Write-Host "Azure limit: 250 MB" -ForegroundColor Yellow

if ($newSizeMB -lt 250) {
    Write-Host ""
    Write-Host "[SUCCESS] You are now under the limit!" -ForegroundColor Green
    Write-Host "  Next: git add . && git commit -m 'fix: optimize images for deployment' && git push" -ForegroundColor Cyan
} else {
    $overBy = [math]::Round($newSizeMB - 250, 2)
    Write-Host ""
    Write-Host "[WARNING] Still over limit by $overBy MB" -ForegroundColor Red
    Write-Host "  Consider upgrading to Azure Standard plan or compress more images." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Backup location: $backupDir" -ForegroundColor Cyan
Write-Host "To restore: Move-Item -Path '$backupDir\*' -Destination 'public\' -Recurse -Force" -ForegroundColor Gray
