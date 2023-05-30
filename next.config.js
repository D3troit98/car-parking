/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
  