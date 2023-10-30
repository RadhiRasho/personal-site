import { Project } from "@/components/project";
import devSite from "@/public/radhi-rasho.dev.jpeg";

export default function Projects() {
	const projects = [
		{
			title: "Personal Site",
			description:
				"This is what you are viewing currently, a project to show off stuff I like to do, and stuff I've built over time.",
			tags: ["Next.js", "Vercel", "GitHub", "Node.js", "React", "TailwindCSS", "TypeScript"],
			image: devSite,
			href: "https://github.com/radhirasho/personal-site",
		},
		{
			title: "Meme Sender",
			description:
				"Small project that I did to simply grab a meme from the publically avaliable API by Dev Daksan on GitHub and sends it via Email at a scheduled time everyday. It creates a system tray icon on Windows mainly with a few options that you can run such as sending a meme on demand, or changing the time of the scheduled meme.",
			tags: ["Python", "GitHub", "Windows", "System Tray"],
			href: "https://github.com/radhirasho/DailyMeme",
		},
	];
	return (
		<main className="flex min-h-full flex-col items-center mt-4 justify-between">
			{projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</main>
	);
}
