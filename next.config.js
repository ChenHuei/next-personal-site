const withOptimizedImages = require('next-optimized-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}

module.exports = withOptimizedImages(nextConfig)
