import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import dynamic from "next/dynamic";
import Socials from "@/components/socials";

const Globe = dynamic(() => import("@/components/globe"), { ssr: true });

const Font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Radhi Rasho",
	description: "My Personal Website",
	twitter: {
		card: "summary_large_image",
		creator: "@radhirasho",
		description: "My Personal Website",
		images: "https://radhi-rasho.dev/Home-Page.png",
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
		images: "https://radhi-rasho.dev/Home-Page.png",
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
	userScalable: true,
};

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${Font.className} max-h-screen max-w-screen overflow-x-hidden bg-[length:12rem] bg-[url(/topography.svg)] bg-fixed bg-repeat bg-black/95`}
			>
				<Globe />
				<Socials />
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
