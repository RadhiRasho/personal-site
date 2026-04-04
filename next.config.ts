import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "go-skill-icons.vercel.app",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["cobe"],
  },
  reactCompiler: true,
} satisfies NextConfig;

export default nextConfig;
