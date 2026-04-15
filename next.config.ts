import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gratisography.com",
      },
    ],
  },
};

export default nextConfig;
