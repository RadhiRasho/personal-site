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
		<div className="flex h-full w-auto justify-between overflow-hidden rounded-xl border-4 border-black dark:border-white">
			<div className="flex h-full w-full justify-between gap-2">
				<div className="flex h-full w-full flex-col items-center justify-between gap-2 p-2 md:items-start">
					<div className="flex w-full flex-col items-center justify-between md:items-start">
						{href ? (
							<Link
								href={href}
								target="_blank"
								className="font-bold text-sm underline hover:text-red-500"
							>
								{title}
							</Link>
						) : (
							<p className="font-bold text-xs">{title}</p>
						)}
						<p className="w-full text-xs">{description}</p>
					</div>
					<div className="w-full">
						<div className="grid grid-cols-2 gap-[0.15rem] sm:grid-cols-3 lg:grid-cols-4">
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
						className="hidden h-full min-h-[100%] w-auto max-w-[30%] scale-105 object-cover object-center hover:bg-fixed md:flex"
					/>
				)}
			</div>
		</div>
	);
}
