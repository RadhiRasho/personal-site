import { Project } from "@/components/project";
import MySite from "@/public/radhi-rasho.dev.jpeg";
import DailyMeme from "@/public/Daily-Meme.png";
import { Project as ProjectType } from "@/types/project";

export default function Projects() {
	const projects: ProjectType[] = [
		{
			title: "Personal Site",
			description:
				"This is what you are viewing currently, a project to show off stuff I like to do, and stuff I've built over time.",
			tags: ["Next.js", "Vercel", "GitHub", "Node.js", "React", "TailwindCSS", "TypeScript"],
			image: MySite,
			href: "https://github.com/radhirasho/personal-site",
		},
		{
			title: "Daily Meme",
			description:
				"Small project that I did to simply grab a meme from the publically avaliable API by Dev Daksan on GitHub and sends it via Email at a scheduled time everyday. It creates a system tray icon on Windows mainly with a few options that you can run such as sending a meme on demand, or changing the time of the scheduled meme.",
			tags: ["Python", "GitHub", "Windows", "System Tray"],
			image: DailyMeme,
			href: "https://github.com/radhirasho/DailyMeme",
			disclosure:
				"<strong class='text-[12px]'>Disclosure:</strong> Vector Illustration by <a class='text-[12px] font-bold hover:text-red-500' target='_blank' href='https://vectorified.com/download-image#meme-icon-31.png'>Vectorified</a> Under CC BY-NC 4.0 Licence",
		},
	];
	return (
		<main className="flex min-h-full flex-col items-center mt-4 mx-2 justify-between">
			<div className="grid  xl:grid-cols-2 gap-2 translation-all">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</main>
	);
}
