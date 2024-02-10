import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { NavBar } from "@/components/nav-menu";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NavBar />
					{children}
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
