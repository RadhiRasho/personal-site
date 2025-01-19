"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";

const categories = [
	{ name: "Front End", icons: ["ts,js,html,css,sass", "nextjs,react,tailwind,svelte,astro"] },
	{ name: "Back End", icons: ["ts,js,nodejs,bun,deno", "elysia,express,python,go,cs"] },
	{ name: "Databases", icons: ["mongodb,mysql,postgresql,redis,sqlite"] },
	{ name: "Technologies", icons: ["docker,linux,windows,apple,ubuntu", "visualstudio,vscode,git,github,postman"] },
	{ name: "Testing Libraries", icons: ["jest,vitest,bun,nodejs"] },
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
		},
	},
};

export function TechnologiesList() {
	return (
		<Card className="mx-auto w-full max-w-4xl overflow-hidden border-none">
			<CardContent className="py-2">
				<motion.div
					className="space-y-6"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{categories.map((category) => (
						<TechnologyCategory key={category.name} {...category} />
					))}
				</motion.div>
			</CardContent>
		</Card>
	);
}

function TechnologyCategory({ name, icons }: { name: string; icons: string[] }) {
	return (
		<motion.div variants={itemVariants}>
			<h2 className="mb-3 font-semibold text-xl">{name}</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{icons.map((iconSet, index) => (
					<motion.div key={index} variants={itemVariants}>
						<Card className="overflow-hidden transition-all hover:scale-105 hover:shadow-md">
							<CardContent className="p-2">
								<Image
									width={100}
									height={50}
									className="h-auto w-full"
									src={`https://skillicons.dev/icons?i=${iconSet}`}
									alt={`${name} icons`}
								/>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

