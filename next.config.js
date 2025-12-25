/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [25, 50, 75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
