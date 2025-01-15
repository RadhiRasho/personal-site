"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectCard, { type ProjectCardProps } from "./project-card";

const projects: ProjectCardProps[] = [
	{
		id: 1,
		title: "Personal Site",
		description:
			"This is what you are viewing currently, a project to show off stuff I like to do, and stuff I've built over time.",
		categories: [
			"Web Development",
			"Full Stack",
			"Front End",
			"Back End",
			"React",
		],
		technologies: [
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
		link: "https://github.com/radhirasho/personal-site",
	},
	{
		id: 2,
		title: "Todo CLI",
		description:
			"Simple Todo CLI tool where you can add, delete, list and prioritize your tasks in a cli. Can be ran on both windows and linux, but I have yet to add auto addition to PATH, will be working on that next",
		categories: ["CLI Tools"],
		technologies: ["Go", "SQLite", "CLI"],
		image: "/Todo-CLI.png",
		link: "https://github.com/radhirasho/todo-cli",
	},
	{
		id: 3,
		title: "German Quiz CLI",
		description:
			"Simple CLI tool to help me learn German, can be used by anyone to learn German",
		categories: ["CLI Tools", "Learning"],
		technologies: ["Go", "CLI", "JSON"],
		image: "/GermanQuiz.png",
		link: "https://github.com/radhirasho/german-quiz-cli",
	},
	{
		id: 4,
		title: "@radhirasho/latest",
		description:
			"@radhirasho/latest is a Node.js utility that checks the latest version of a given package from npm or other registries. It can be used as a CLI tool or as a library in your Node.js projects.",
		categories: ["Node.js Utilities", "NPM Packages", "CLI Tools"],
		technologies: ["Node.js", "CLI"],
		link: "https://github.com/RadhiRasho/latest",
	},
	{
		id: 5,
		title: "Simple Deno",
		description: "🧪 Experimenting with Deno 🦕",
		categories: ["Web Development"],
		technologies: ["Deno", "TypeScript"],
		link: "https://github.com/RadhiRasho/simple-deno",
	},
	{
		id: 6,
		title: "React Experiments",
		description: "Expirementing with React Related Technologies",
		categories: ["Web Development", "Front End", "React"],
		technologies: [
			"React",
			"TypeScript",
			"Next.js",
			"TailwindCSS",
			"React Hooks",
			"TanStack Query",
		],
		link: "https://github.com/RadhiRasho/react-experiments",
	},
	{
		id: 7,
		title: "Simple Speed",
		description: "Simple performance testing different languages ⚡",
		categories: ["Performance Testing"],
		technologies: ["Go", "Node.js", "C++", "Rust", "C", "Zig", "Bun"],
		link: "https://github.com/RadhiRasho/simple-speed",
	},
];

const allCategories = [
	"All",
	...new Set(projects.flatMap((project) => project.categories)),
];

export function ProjectsGrid() {
	const [filter, setFilter] = useState("All");

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.categories.includes(filter));

	return (
		<div className="container mx-auto px-4 py-16">
			<h2 className="mb-12 text-center font-bold text-4xl">My Projects</h2>
			<div className="mb-8 flex flex-wrap justify-center gap-4">
				{allCategories.map((category) => (
					<button
						type="button"
						key={category}
						onClick={() => setFilter(category)}
						className={`rounded-full px-4 py-2 ${
							filter === category
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-800 hover:bg-gray-300"
						} transition-colors duration-200`}
					>
						{category}
					</button>
				))}
			</div>
			<motion.div
				layout
				className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				<AnimatePresence>
					{filteredProjects.map((project) => (
						<motion.div
							key={project.id}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}
