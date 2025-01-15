import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Socials } from "@/components/Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Radhi Rasho",
	description: "My Personal Website",
};

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
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
