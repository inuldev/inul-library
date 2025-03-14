import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "", // default port for https is 443
      },
    ],
  },
};

export default nextConfig;
