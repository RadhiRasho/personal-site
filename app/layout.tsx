import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Socials } from "@/components/Socials";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

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
	viewport: "width=device-width, initial-scale=1",
	openGraph: {
		title: "Radhi Rasho",
		description: "My Personal Website",
		images: "https://radhi-rasho.dev/radhi-rasho.dev.jpeg",
		type: "website",
		url: "https://radhi-rasho.dev",
		siteName: "Radhi Rasho",
	},
};

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={robotoMono.className}>
				<div className="fixed w-full min-w-screen p-4 md:hidden">
					<Socials />
				</div>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
