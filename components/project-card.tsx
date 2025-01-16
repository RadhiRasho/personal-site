import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export interface ProjectCardProps {
	id?: number;
	title: string;
	description: string;
	categories: string[];
	technologies: string[];
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
			className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border bg-background/90 shadow-lg"
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.2 }}
		>
			<div className="flex flex-col justify-between gap-4 p-4">
				<div className="flex h-52 w-full overflow-hidden">
					<Image
						src={imageUrl || "/placeholder.svg"}
						alt={title}
						width={400}
						height={400}
						className="h-full w-full object-cover"
					/>
				</div>
				<div>
					<h3 className="font-bold text-xl">{title}</h3>
					<p className="text-gray-500 text-sm">{description}</p>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-4 p-4">
				<div className="flex flex-col justify-between gap-2">
					<div className="flex flex-col justify-between gap-2">
						<div className="flex flex-wrap gap-2">
							{categories.map((category, index) => (
								<span
									key={index}
									className="rounded-full bg-blue-500 px-2 py-1 text-white text-xs"
								>
									{category}
								</span>
							))}
						</div>
						<h4 className="font-semibold text-xs">Technologies used:</h4>
						<div className="flex flex-wrap gap-1">
							{technologies.map((tech, index) => (
								<span
									key={index}
									className="rounded-full bg-muted px-2 py-1 text-xs"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center text-blue-500 transition-colors duration-200 hover:text-blue-700"
					>
						View Project <ArrowUpRight className="ml-1 h-4 w-4" />
					</a>
				</div>
			</div>
		</motion.div>
	);
}
