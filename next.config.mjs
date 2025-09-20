/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  typescript: { 
    ignoreBuildErrors: true,
  },
  eslint: { 
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['portfolio.thefstack.com'],
    unoptimized: true,
  },
  trailingSlash: true,

  // 👇 Add these two lines for GitHub Pages
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
