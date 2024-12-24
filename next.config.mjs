/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
			},
		],
		dangerouslyAllowSVG: true,
	},
	transpilePackages: ["three"],
};

export default nextConfig;
