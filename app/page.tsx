"use client";

import Globe from "@/components/Globe";
import Landing from "@/components/Landing";
import { ProjectsGrid } from "@/components/project-grid";

export default function Home() {
	return (
		<main className="relative flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-between">
			<Landing />
			<section className="relative mx-10 flex h-full min-h-screen w-full min-w-screen flex-col gap-10 md:p-10">
				<span className="self-center text-2xl">Projects</span>
				<ProjectsGrid />
			</section>
		</main>
	);
}
