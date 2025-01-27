import type { NextConfig } from "next";

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
			},
			{
				protocol: "https",
				hostname: "api.microlink.io",
			},
		],
		dangerouslyAllowSVG: true,
	},
} satisfies NextConfig;

export default nextConfig;
