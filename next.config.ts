import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",

  allowedDevOrigins: [
    "192.168.1.117",
    "192.168.1.173",
    "192.168.1.216",
    "192.168.1.71"
  ],

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;