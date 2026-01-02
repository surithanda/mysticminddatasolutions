import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable source maps in production to reduce build size
  productionBrowserSourceMaps: false,
  // Optimize build output
  compress: true,
}

export default nextConfig
