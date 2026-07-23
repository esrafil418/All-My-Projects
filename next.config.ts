import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgpeek.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
