import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.imgur.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  }
};

export default nextConfig;