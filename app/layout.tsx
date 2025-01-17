import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Globe from "@/components/Globe";
import { Socials } from "@/components/Socials";

const Font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Radhi Rasho",
	description: "My Personal Website",
	twitter: {
		card: "summary_large_image",
		creator: "@radhirasho",
		description: "My Personal Website",
		images: "https://radhi-rasho.dev/radhi-rasho.dev.jpeg",
		site: "www.radhi-rasho.dev",
		title: "Radhi Rasho",
		creatorId: "@radhirasho",
	},
	applicationName: "Radhi Rasho",
	robots: "index, follow",
	authors: [{ name: "Radhi Rasho", url: "https://github.com/radhirasho" }],
	category: "Personal Website",
	classification: "Personal Website",
	keywords: [
		"Radhi Rasho",
		"Personal Website",
		"Web Developer",
		"Software Engineer",
		"Full Stack Developer",
	],
	openGraph: {
		title: "Radhi Rasho",
		description: "My Personal Website",
		images: "https://radhi-rasho.dev/radhi-rasho.dev.jpeg",
		type: "website",
		url: "https://radhi-rasho.dev",
		siteName: "Radhi Rasho",
	},
	creator: "Radhi Rasho",
};

export const viewport: Viewport = {
	themeColor: "black",
	colorScheme: "dark",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: true,
};

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${Font.className} min-h-screen min-w-screen bg-[length:12rem] bg-topography bg-fixed bg-repeat`}
			>
				<div className="z-50 flex h-full w-full items-center justify-center p-4 md:fixed md:w-10 md:justify-start">
					<Socials />
				</div>
				<div className="md:-right-[30%] -bottom-52 md:-bottom-32 -z-30 fixed h-full w-full transition-all duration-300">
					<Globe />
				</div>
				<div className="-z-[5] fixed inset-0 bg-gradient-to-tr from-black via-black/60 to-transparent">
					&nbsp;
				</div>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
