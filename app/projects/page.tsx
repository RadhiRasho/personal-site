import { Project } from "@/components/project";
import type { ProjectProps } from "@/types/project";

export default function Projects() {
	const projects: ProjectProps[] = [
		{
			title: "Personal Site",
			description:
				"This is what you are viewing currently, a project to show off stuff I like to do, and stuff I've built over time.",
			tags: [
				"Next.js",
				"Vercel",
				"GitHub",
				"Node.js",
				"Bun",
				"React",
				"TailwindCSS",
				"TypeScript",
			],
			image: "/radhi-rasho.dev.jpeg",
			href: "https://github.com/radhirasho/personal-site",
		},
		{
			title: "Todo CLI",
			description:
				"Simple Todo CLI tool where you can add, delete, list and prioritize your tasks in a cli. Can be ran on both windows and linux, but I have yet to add auto addition to PATH, will be working on that next",
			tags: ["Go", "SQLite", "CLI"],
			image: "/Todo-CLI.png",
			href: "https://github.com/radhirasho/todo-cli",
		},
		{
			title: "German Quiz CLI",
			description:
				"Simple CLI tool to help me learn German, can be used by anyone to learn German",
			tags: ["Go", "CLI", "JSON"],
			image: "/GermanQuiz.png",
			href: "https://github.com/radhirasho/german-quiz-cli",
		},
		{
			title: "Daily Meme",
			description:
				"Small project that I did to simply grab a meme from the publically avaliable API by Dev Daksan on GitHub and sends it via Email at a scheduled time everyday. It creates a system tray icon on Windows mainly with a few options that you can run such as sending a meme on demand, or changing the time of the scheduled meme.",
			tags: ["Python", "GitHub", "Windows", "System Tray"],
			image: "/DailyMeme.png",
			href: "https://github.com/radhirasho/DailyMeme",
		},
	];
	return (
		<main className="flex min-h-full flex-col items-center mt-4 mx-2 justify-between">
			<div className="grid  xl:grid-cols-2 gap-2 translation-all">
				{projects.map((project, index) => (
					<Project key={`${project.title}-${index}`} {...project} />
				))}
			</div>
		</main>
	);
}
