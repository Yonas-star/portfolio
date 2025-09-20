/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['portfolio.thefstack.com'],
    unoptimized: true, // Required for static exports
  },
  // Remove headers() and redirects() as they don't work with static exports
  // We'll handle these differently for static hosting
};

export default nextConfig;