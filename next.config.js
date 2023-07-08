const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "plus.unsplash.com",
      "gravatar.com"
    ],
  },
  serverRuntimeConfig: {
    apiResponseSizeLimit: '8mb',
    apiPayLoadLimit:'50mb'
  },
 publicRuntimeConfig: {
    apiResponseSizeLimit: '8mb',
  }, 
};

module.exports = nextConfig;
