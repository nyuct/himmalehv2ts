/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    domains: ["venture-design-and-innovation.ghost.io", "static.ghost.org", "localhost", "images.unsplash.com", "*.nyuct.com"],
    loader: "default", // or 'imgix', 'cloudinary', etc.
    path: "", // Leave empty to disable path prefixing
  },
};

export default nextConfig;

