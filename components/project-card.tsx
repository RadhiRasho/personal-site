import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

export interface ProjectCardProps {
	id?: number;
	title: string;
	description: string;
	categories: string[];
	technologies: JSX.Element[];
	image?: string;
	link: string;
}

export default function ProjectCard({
	title,
	description,
	categories,
	technologies,
	image,
	link,
}: ProjectCardProps) {
	const imageUrl =
		image ||
		`https://api.microlink.io/?url=${encodeURIComponent(link)}&screenshot=true&meta=false&embed=screenshot.url`;

	return (
		<motion.div
			className={
				"flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border bg-background/90 bg-no-repeat object-cover shadow-lg backdrop-blur-xs"
			}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.2 }}
		>
			<div className="flex flex-col justify-between gap-4">
				<div className="flex h-56 w-full overflow-hidden rounded-t-2xl">
					<Image
						src={imageUrl || "/placeholder.svg"}
						alt={title}
						priority
						width={500}
						height={500}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="px-3">
					<p className="font-bold text-sm">{title}</p>
					<p className="text-gray-500 text-xs">{description}</p>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-4 p-3">
				<div className="flex flex-col justify-between gap-2">
					<div className="flex flex-col justify-between gap-2">
						<div className="flex flex-wrap gap-2">
							{categories.map((category, index) => (
								<span
									key={index}
									className="rounded-full bg-blue-900 px-2 py-1 text-white text-xs"
								>
									{category}
								</span>
							))}
						</div>
						<div className="font-semibold text-xs">Technologies used:</div>
						<div className="flex flex-wrap justify-between gap-1">
							{technologies.map((tech, index) => (
								<span className="hover:scale-125" key={index}>
									{tech}
								</span>
							))}
						</div>
					</div>
					<Link
						as={link}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex w-full items-center justify-center border-t-2 p-2 text-slate-400 underline-offset-4 transition-all duration-200 hover:text-slate-200 hover:underline"
					>
						View Project <ArrowUpRight className="ml-1 h-4 w-4" />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
