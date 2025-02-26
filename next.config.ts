/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "venture-design-and-innovation.ghost.io",
      "static.ghost.org",
      "localhost",
      "images.unsplash.com",
      "nyuct.com",
      "subdomain.nyuct.com", // Add specific subdomains if needed
    ],
    loader: "default", // Options: 'default', 'imgix', 'cloudinary', 'akamai', 'custom'
    path: "", // Leave empty to disable automatic path prefixing
  },
};

export default nextConfig;
