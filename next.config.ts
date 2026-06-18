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
  typedRoutes: true,
  async redirects() {
    return [
      {
        source: "/dotfiles",
        destination: "https://github.com/radhirasho/dotfiles",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/radhirasho",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/radhirasho",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/RadhiRasho",
        permanent: true,
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
