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
			className="relative overflow-hidden rounded-lg bg-white shadow-lg"
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3 }}
		>
			<Image
				src={imageUrl || "/placeholder.svg"}
				alt={title}
				width={400}
				height={300}
				className="h-48 w-full object-cover"
			/>
			<div className="p-4">
				<h3 className="mb-2 font-bold text-xl">{title}</h3>
				<p className="mb-4 text-gray-600 text-sm">{description}</p>
				<div className="mb-4 flex flex-wrap gap-2">
					{categories.map((category, index) => (
						<span
							key={index}
							className="rounded-full bg-blue-500 px-2 py-1 text-white text-xs"
						>
							{category}
						</span>
					))}
				</div>
				<div className="mb-4">
					<h4 className="mb-2 font-semibold text-sm">Technologies used:</h4>
					<div className="flex flex-wrap gap-2">
						{technologies.map((tech, index) => (
							<span
								key={index}
								className="rounded-full bg-gray-200 px-2 py-1 text-gray-700 text-xs"
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
		</motion.div>
	);
}
