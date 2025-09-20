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
};

export default nextConfig;
