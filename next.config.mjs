/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static export
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  basePath: '/portfoilio',     // Replace with your repo name
  assetPrefix: '/my-v0-project/', // Ensures assets load on GitHub Pages
  images: {
    domains: ['portfolio.thefstack.com'],
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
