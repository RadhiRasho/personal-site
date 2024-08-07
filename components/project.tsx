"use client";

import type { ProjectProps } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export function Project({
	title,
	description,
	image,
	href,
	tags,
}: ProjectProps) {
	return (
		<div className="flex justify-between overflow-hidden rounded-xl w-auto h-full border-4 dark:border-white border-black">
			<div className="flex w-full h-full justify-between gap-2">
				<div className="flex flex-col justify-between items-center md:items-start w-full h-full p-2 gap-2">
					<div className="flex flex-col justify-between items-center w-full md:items-start">
						{href ? (
							<Link
								href={href}
								target="_blank"
								className="text-sm font-bold underline hover:text-red-500"
							>
								{title}
							</Link>
						) : (
							<p className="text-xs font-bold">{title}</p>
						)}
						<p className="text-xs w-full">{description}</p>
					</div>
					<div className="w-full">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[0.15rem]">
							{tags?.map((tag) => (
								<Badge className="flex justify-center text-center" key={tag}>
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</div>
				{image && (
					<Image
						src={image}
						alt={title}
						width={400}
						height={300}
						priority
						className="hidden hover:bg-fixed md:flex w-auto max-w-[30%] scale-105 min-h-[100%] h-full object-center object-cover"
					/>
				)}
			</div>
		</div>
	);
}
