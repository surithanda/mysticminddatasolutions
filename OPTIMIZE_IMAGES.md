# Image Optimization Guide

## Current Situation
- Public folder size: **396 MB**
- Azure Free Tier limit: **250 MB**
- Need to reduce by: **146 MB minimum**

## Quick Fixes

### 1. Compress PNG Images
Install and use image compression:

```bash
npm install -g imagemin-cli imagemin-pngquant

# Compress all PNGs (reduces 60-80%)
imagemin public/images/**/*.png --out-dir=public/images --plugin=pngquant
```

### 2. Convert to WebP
WebP images are 25-35% smaller:

```bash
npm install -g @squoosh/cli

# Convert large PNGs to WebP
squoosh-cli --webp auto public/images/**/*.png
```

### 3. Move Video to CDN
The video file (27.69 MB) should be hosted externally:
- Upload `promo.mp4` to Azure Blob Storage or CDN
- Update video references to use CDN URL

### 4. Remove Unused Images
Review and delete:
- `public/abc.png` (large test file?)
- Duplicate images
- Unused marketing materials

## Long-term Solution

1. **Upgrade to Azure Standard Plan** ($10/month)
   - Supports up to 2GB
   - Better for production sites

2. **Use Next.js Image Optimization**
   - Host images on Azure CDN
   - Reference them in code
   - Serve optimized versions

3. **Implement Progressive Loading**
   - Load images on demand
   - Use placeholder thumbnails
