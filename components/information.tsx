"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./section";
import { useEffect, useRef, useState } from "react";

const sections = [
	{
		imageAlt: "Helsinki Cathedral, Finland",
		image: "/Helsinki-Cathedral.jpg",
		sizes: [500, 500],
		content:
			"I am a Software Engineer that specializes in building web applications with modern technologies such as React, Next.js, and Node.js. I have a passion for creating innovative solutions that solve real-world problems and continuously learning new technologies to stay at the forefront of emerging trends.",
	},
	{
		imageAlt: "Brandenburg Gate, Berlin",
		image: "/Brandenburg-Gate-Berlin.jpg",
		sizes: [500, 500],
		content:
			"I have experience working with a variety of technologies and tools, including TypeScript, Tailwind CSS, Golang, SQLite, and more. I am always looking for new challenges and opportunities to grow as a developer and expand my skill set.",
		reverse: true,
	},
	{
		imageAlt: "Cologne Cathedral, Cologne",
		image: "/Cologne-Cathedral-Exterior.jpg",
		sizes: [500, 500],
		content:
			"In my free time, I enjoy working on personal projects, contributing to open-source software, playing video games and board games with the family. I am a firm believer in the power of technology to change the world for the better and am excited to be a part of the ever-evolving tech industry.",
	},
	{
		imageAlt: "Hönö, Sweden",
		image: "/Ocean-View.jpg",
		sizes: [500, 500],
		content:
			"I also like to travel and explore new horizons, new places, try new foods, and meet new people. I am always looking for new adventures and experiences to broaden my horizons and challenge myself to grow as a person. The globe includes markers for all the places I have visited so far, and I hope to add many more in the future.",
		reverse: true,
	},
];

function AnimatedSection({ section, index }: { section: typeof sections[0]; index: number }) {
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
			{ threshold: 0.3 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateX(0)' : `translateX(${section.reverse ? '100px' : '-100px'})`,
				transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
			}}
		>
			<Section {...section} />
		</div>
	);
}

export function AboutSection() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLElement>(null);

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
		<section
			ref={ref}
			className="w-full"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
				transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
			}}
		>
			<Card className="w-full border-none bg-transparent">
				<CardContent className="p-0 md:p-6 md:pt-0">
					<div className="flex flex-col items-center gap-6">
						{sections.map((section, index) => (
							<AnimatedSection key={index} section={section} index={index} />
						))}
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
