"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useRef, useState } from "react";

type Categories = {
	name: string;
	icons: string[];
};

const categories: Categories[] = [
	{
		name: "Front End",
		icons: [
			"ts,js,html,css,sass,reactquery",
			"nextjs,react,tailwind,svelte,astro,vuejs",
		],
	},
	{
		name: "Back End",
		icons: ["ts,js,python,go,cs,vb", "elysia,hono,express,nodejs,bun,deno"],
	},
	{ name: "Databases", icons: ["mongodb,mysql,postgresql,redis,sqlite"] },
	{
		name: "Technologies",
		icons: [
			"docker,linux,windows,apple",
			"visualstudio,vscode,git,github,postman,npm",
		],
	},
	{ name: "Testing Libraries", icons: ["jest,vitest,playwright"] },
];

// Helper function to capitalize and format technology names
function formatTechName(name: string): string {
	const specialCases: Record<string, string> = {
		ts: "TypeScript",
		js: "JavaScript",
		cs: "C#",
		vb: "Visual Basic",
		nextjs: "Next.js",
		vuejs: "Vue.js",
		nodejs: "Node.js",
		vscode: "VS Code",
		npm: "NPM",
		postgresql: "PostgreSQL",
		visualstudio: "Visual Studio",
	};

	return specialCases[name] || name.charAt(0).toUpperCase() + name.slice(1);
}

// Animated container component
function AnimatedContainer({ children }: { children: React.ReactNode }) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className="space-y-8"
			style={{
				opacity: isVisible ? 1 : 0,
				transition: 'opacity 0.6s ease-out',
			}}
		>
			{children}
		</div>
	);
}

function TechIconSkeleton() {
	return (
		<div className="absolute inset-0 rounded bg-muted/30">
			<div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/10 to-transparent" />
		</div>
	);
}

function TechIcon({ icon }: { icon: string }) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div
					className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded bg-transparent transition-transform hover:scale-110"
					role="img"
					aria-label={`${formatTechName(icon)} technology`}
				>
					{!isLoaded && <TechIconSkeleton />}
					<Image
						width={48}
						height={48}
						loading="lazy"
						className="relative z-10 h-auto w-full object-contain transition-opacity duration-300"
						src={`https://go-skill-icons.vercel.app/api/icons?i=${icon}`}
						alt={`${formatTechName(icon)} icon`}
						onLoad={() => setIsLoaded(true)}
						style={{
							opacity: isLoaded ? 1 : 0,
						}}
					/>
				</div>
			</TooltipTrigger>
			<TooltipContent
				className="font-medium text-xs"
			>
				{formatTechName(icon)}
			</TooltipContent>
		</Tooltip >
	);
}

export default function TechnologiesList() {
	return (
		<>
			<TooltipProvider delayDuration={300}>
				<Card className="mx-auto w-full max-w-4xl border-none bg-transparent shadow-none">
					<CardContent className="p-0 py-4">
						<AnimatedContainer>
							{categories.map((category) => (
								<TechnologyCategory key={category.name} {...category} />
							))}
						</AnimatedContainer>
					</CardContent>
				</Card>
			</TooltipProvider>
		</>
	);
}

type TechnologyCategoryProps = {
	name: string;
	icons: string[];
};

function TechnologyCategory({ name, icons }: TechnologyCategoryProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1, rootMargin: '50px' }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className="group"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
				transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
			}}
		>
			<h3
				className="mb-4 font-medium text-muted-foreground text-sm tracking-wide transition-colors group-hover:text-foreground"
				aria-label={`${name} technologies`}
			>
				{name}
			</h3>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
				{icons.map((iconSet, index) => (
					<CategoryCard key={`${name}-${iconSet}`} iconSet={iconSet} index={index} delay={index * 50} />
				))}
			</div>
		</div>
	);
}

function CategoryCard({ iconSet, index, delay }: { iconSet: string; index: number; delay: number }) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => setIsVisible(true), delay);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [delay]);

	return (
		<div
			ref={ref}
			data-visible={isVisible}
			className="w-full data-visible=true:opacity-100 data-visible=false:opacity-0 data-visible=true:scale-100 data-visible=false:scale-95 transition-opacity"
		>
			<Card className="w-full min-h-fit h-fit rounded-sm border p-0 backdrop-blur-sm">
				<CardContent className="flex w-full items-center justify-evenly gap-2 px-2 md:px-1 py-2">
					{iconSet.split(",").map((icon) => (
						<TechIcon key={icon} icon={icon} />
					))}
				</CardContent>
			</Card>
		</div>
	);
}
