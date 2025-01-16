/** @type {import('next').NextConfig} */
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
	transpilePackages: ["three"],
};

export default nextConfig;
