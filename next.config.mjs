// In your next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  typescript: { 
    ignoreBuildErrors: true 
  },
  eslint: { 
    ignoreDuringBuilds: true 
  },
  images: {
    domains: ['portfolio.thefstack.com'],
    unoptimized: true,
  },
  trailingSlash: true,
};

// Only set basePath and assetPrefix for production build
if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/portfolio';
  nextConfig.assetPrefix = '/portfolio/';
}

export default nextConfig;