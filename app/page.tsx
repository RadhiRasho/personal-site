"use client";

import Image from "next/image";
import RadhiRasho from "@/public/Radhi-Rasho.jpg";
import { AboutMe } from "@/components/about-me";

export default function Home() {
	return (
		<main className="flex min-h-full flex-col items-center justify-between mt-4">
			<div className="flex sm:flex-row flex-col min-h-fit justify-between gap-10 bg-gradient-conic">
				<Image className="rounded-full w-72" loading="lazy" alt="Radhi Rasho" src={RadhiRasho} />
				<div className="flex flex-col items-center justify-center gap-1">
					<h1 className="text-4xl font-bold">Radhi Rasho</h1>
					<h2 className="text-xl font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
						Software Engineer
					</h2>
				</div>
			</div>
			<AboutMe />
		</main>
	);
}
