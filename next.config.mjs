/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set NEXT_PUBLIC_BASE_PATH=/your-repo-name in GitHub Actions vars
  // if your site is at username.github.io/repo-name
  // Leave empty if using username.github.io (root)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
