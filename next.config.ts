import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
