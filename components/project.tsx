"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Project } from "@/types/project";

export function Project({ title, description, image, href, tags }: Project) {
	return (
		<div className="flex justify-between overflow-hidden rounded-xl w-auto h-full border-2 dark:border-white border-black">
			<div className="flex w-full h-full justify-between gap-2">
				<div className="flex flex-col justify-between items-center md:items-start w-full h-full p-2 gap-2">
					<div className="flex flex-col justify-between items-center w-full md:items-start">
						{href ? (
							<Link href={href} target="_blank" className="text-sm font-bold underline hover:text-red-500">
								{title}
							</Link>
						) : (
							<p className="text-xs font-bold">{title}</p>
						)}
						<p className="text-xs w-full">{description}</p>
					</div>
					<div className="w-full">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[0.15rem]">
							{tags?.map((tag, index) => (
								<Badge className="flex justify-center text-center" key={index}>
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
						priority
						className="hidden hover:bg-fixed md:flex w-auto max-w-[30%] scale-105 min-h-[100%] h-full object-center object-cover"
					/>
				)}
			</div>
		</div>
	);
}
