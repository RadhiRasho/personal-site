"use client";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectCard, { type ProjectCardProps } from "./project-card";

const formatTechName = (name: string): string => {
	const specialCases: Record<string, string> = {
		ts: "TypeScript",
		js: "JavaScript",
		cs: "C#",
		nextjs: "Next.js",
		vuejs: "Vue.js",
		nodejs: "Node.js",
		vscode: "VS Code",
		npm: "NPM",
		postgresql: "PostgreSQL",
		reactquery: "React Query",
	};

	return specialCases[name] || name.charAt(0).toUpperCase() + name.slice(1);
};

const SkillIcon = ({ name, size = 35 }: { name: string; size?: number }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div
					className="flex items-center justify-center"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					role="img"
					aria-label={`${formatTechName(name)} technology`}
					style={{
						transform: isHovered ? 'scale(1.1)' : 'scale(1)',
						transition: 'transform 0.2s ease-out',
					}}
				>
					<Image
						width={size}
						height={size}
						loading="lazy"
						className="h-auto w-full object-contain"
						src={`https://go-skill-icons.vercel.app/api/icons?i=${name}`}
						alt={`${formatTechName(name)} icon`}
					/>
				</div>
			</TooltipTrigger>
			<TooltipPortal>
				<TooltipContent
					side="bottom"
					align="center"
					sideOffset={8}
					className="font-medium text-xs"
				>
					{formatTechName(name)}
				</TooltipContent>
			</TooltipPortal>
		</Tooltip>
	);
};

const projects: ProjectCardProps[] = [
	{
		id: 1,
		title: "Personal Site",
		description:
			"This is what you are viewing currently, a project to show off stuff I like to do, and stuff I've built over time.",
		categories: ["Web Development", "Full Stack", "Front End", "React"],
		technologies: [
			<SkillIcon name="nextjs" key="nextjs" />,
			<SkillIcon name="vercel" key="vercel" />,
			<SkillIcon name="github" key="github" />,
			<SkillIcon name="nodejs" key="nodejs" />,
			<SkillIcon name="bun" key="bun" />,
			<SkillIcon name="react" key="react" />,
			<SkillIcon name="tailwind" key="tailwind" />,
			<SkillIcon name="ts" key="typescript" />,
		],
		image: "/Home-Page.png",
		sizes: [800, 450],
		link: "https://github.com/radhirasho/personal-site",
	},
	{
		id: 2,
		title: "Todo CLI",
		description:
			"Simple Todo CLI tool where you can add, delete, list and prioritize your tasks in a cli. Can be ran on both windows and linux, but I have yet to add auto addition to PATH, will be working on that next",
		categories: ["CLI Tools"],
		technologies: [
			<SkillIcon name="go" key="golang" />,
			<SkillIcon name="sqlite" key="sqlite" />,
			<SkillIcon name="bash" key="bash" />,
		],
		link: "https://github.com/radhirasho/todo-cli",
	},
	{
		id: 3,
		title: "German Quiz CLI",
		description:
			"Simple CLI tool to help me learn German, can be used by anyone to learn German",
		categories: ["CLI Tools", "Learning"],
		technologies: [
			<SkillIcon name="go" key="golang" />,
			<SkillIcon name="bash" key="bash" />,
			<SkillIcon name="json" key="json" />,
		],
		image: "/GermanQuiz.png",
		sizes: [800, 450],
		link: "https://github.com/radhirasho/german-quiz-cli",
	},
	{
		id: 4,
		title: "@radhirasho/latest",
		description:
			"@radhirasho/latest is a Node.js utility that checks the latest version of a given package from npm or other registries. It can be used as a CLI tool or as a library in your Node.js projects.",
		categories: ["Node.js Utilities", "NPM Packages", "CLI Tools"],
		technologies: [
			<SkillIcon name="nodejs" key="nodejs" />,
			<SkillIcon name="bash" key="bash" />,
		],
		link: "https://github.com/RadhiRasho/latest",
	},
	{
		id: 5,
		title: "Simple Deno",
		description: "🧪 Experimenting with Deno 🦕",
		categories: ["Web Development"],
		technologies: [
			<SkillIcon name="deno" key="deno" />,
			<SkillIcon name="ts" key="typescript" />,
		],
		link: "https://github.com/RadhiRasho/simple-deno",
	},
	{
		id: 6,
		title: "React Experiments",
		description: "Expirementing with React Related Technologies",
		categories: ["Web Development", "Front End", "React"],
		technologies: [
			<SkillIcon name="react" key="react" />,
			<SkillIcon name="nextjs" key="nextjs" />,
			<SkillIcon name="ts" key="typescript" />,
			<SkillIcon name="tailwind" key="tailwind" />,
			<SkillIcon name="reactquery" key="reactquery" />,
		],
		link: "https://github.com/RadhiRasho/react-experiments",
	},
	{
		id: 7,
		title: "Simple Speed",
		description: "Simple performance testing different languages ⚡",
		categories: ["Performance Testing"],
		technologies: [
			<SkillIcon name="go" key="golang" />,
			<SkillIcon name="nodejs" key="nodejs" />,
			<SkillIcon name="cpp" key="cpp" />,
			<SkillIcon name="bun" key="bun" />,
			<SkillIcon name="rust" key="rust" />,
			<SkillIcon name="zig" key="zig" />,
			<SkillIcon name="c" key="c" />,
		],
		link: "https://github.com/RadhiRasho/simple-speed",
	},
];

const allCategories = [
	"All",
	...new Set(projects.flatMap((project) => project.categories)),
];

export default function Projects() {
	const [filter, setFilter] = useState("All");

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.categories.includes(filter));

	return (
		<section className="relative mx-10 flex h-full min-h-screen w-full min-w-screen flex-col gap-10 md:p-10">
			<span className="self-center text-2xl">Projects</span>
			<div className="mx-5">
				<div className="mb-8 flex flex-wrap items-center justify-center gap-4">
					{allCategories.map((category) => (
						<button
							type="button"
							key={category}
							onClick={() => setFilter(category)}
							data-active={filter === category}
							className={
								"rounded-xl bg-gray-200 px-4 py-2 font-medium text-gray-800 text-xs transition-colors duration-300 hover:bg-gray-300 data-[active=true]:bg-purple-600 data-[active=true]:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
							}
						>
							{category}
						</button>
					))}
				</div>
				<TooltipProvider delayDuration={300}>
					<div
						key={filter}
						className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
					>
						{filteredProjects.map((project) => (
							<div
								key={project.id}
								className="h-full w-full animate-fadeIn"
							>
								<ProjectCard {...project} />
							</div>
						))}
					</div>
				</TooltipProvider>
			</div>
		</section>
	);
}
