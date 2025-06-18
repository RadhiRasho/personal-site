import Background from "@/components/background";
import Landing from "@/components/Landing";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<main className="relative flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-between">
			<Landing />
			<Background />
			<Projects />
		</main>
	);
}
