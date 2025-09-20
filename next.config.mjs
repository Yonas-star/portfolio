/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // Static export for GH Pages
  basePath: '/portfolio',            // Match your repo name
  assetPrefix: '/portfolio/',        // Ensure assets load correctly
  reactStrictMode: true,
  images: {
    domains: ['portfolio.thefstack.com'], // For external images
    unoptimized: true,                   // Required for static export
  },
};
export default nextConfig;
