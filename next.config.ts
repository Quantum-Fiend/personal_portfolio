import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // optional: add remark/rehype plugins here
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gratisography.com",
      },
    ],
  },
  allowedDevOrigins: ["192.168.1.5"],

  // Include .mdx as a page extension
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
