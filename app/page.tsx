"use client";
import Landing from "@/components/Landing";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<main className="relative flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-between">
			<Landing />
			<About />
			<Projects />
		</main>
	);
}
