/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
