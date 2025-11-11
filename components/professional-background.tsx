"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechnologiesList from "./technologies-list";

type Experience = {
	company: string;
	role: string;
	period: string;
};

type Education = {
	degree: string;
	school: string;
	year: string;
};

function AnimatedListItem({
	children,
	delay = 0
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLLIElement>(null);

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
		<li
			ref={ref}
			className="flex w-full items-start gap-4 md:w-auto"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
				transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
			}}
		>
			{children}
		</li>
	);
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
	return (
		<ul className="flex w-full flex-col items-center justify-evenly space-y-4 p-2 md:flex-row md:items-start md:space-x-4 md:space-y-0 md:p-4">
			{experiences.map((exp, index) => (
				<AnimatedListItem key={index} delay={index * 100}>
					<Briefcase className="mt-1 h-5 w-5 text-primary" />
					<div>
						<p className="font-semibold text-sm">{exp.role}</p>
						<p className="text-muted-foreground text-xs">{exp.company}</p>
						<p className="text-muted-foreground text-xs">{exp.period}</p>
					</div>
				</AnimatedListItem>
			))}
		</ul>
	);
}

function EducationList({ education }: { education: Education[] }) {
	return (
		<ul className="flex w-full flex-col items-center justify-evenly space-y-4 p-2 md:flex-row md:items-start md:space-x-4 md:space-y-0 md:p-4">
			{education.map((edu, index) => (
				<AnimatedListItem key={index} delay={index * 100}>
					<GraduationCap className="mt-1 h-5 w-5 text-primary" />
					<div>
						<p className="font-semibold text-sm">{edu.degree}</p>
						<p className="text-muted-foreground text-xs">{edu.school}</p>
						<p className="text-muted-foreground text-xs">{edu.year}</p>
					</div>
				</AnimatedListItem>
			))}
		</ul>
	);
}

export default function ProfessionalBackground() {
	const [activeTab, setActiveTab] = useState("experience");

	const experiences = [
		{
			company: "Assurity Life Insurance Company",
			role: "Software Engineer II",
			period: "March 2025 - Present",
		},
		{
			company: "Sandhills Global",
			role: "Software Developer",
			period: "January 2021 - January 2024",
		},
		{
			company: "Sandhills Global",
			role: "Software Development Intern",
			period: "June 2020 - January 2021",
		},
	];

	const education = [
		{
			degree: "A.S. in Sciences",
			school: "Southeast Community College",
			year: "2024 - Present",
		},
		{
			degree: "A.S. in Applied Computer Sciences",
			school: "Southeast Community College",
			year: "2018 - 2021",
		},
	];

	return (
		<Tabs
			defaultValue="experience"
			value={activeTab}
			onValueChange={setActiveTab}
			className="w-full"
		>
			<TabsList className="grid h-full w-full grid-cols-1 gap-0.5 bg-accent/80 md:grid-cols-3">
				<TabsTrigger
					className="cursor-pointer rounded-t-md rounded-b-xs md:rounded-r-xs md:rounded-l-md"
					value="experience"
				>
					Experience
				</TabsTrigger>
				<TabsTrigger
					className="cursor-pointer rounded-xs md:rounded-r-xs md:rounded-l-xs"
					value="education"
				>
					Education
				</TabsTrigger>
				<TabsTrigger
					className="cursor-pointer rounded-t-xs rounded-b-md md:rounded-r-md md:rounded-l-xs"
					value="skills"
				>
					Skills
				</TabsTrigger>
			</TabsList>
			<TabsContent value="experience">
				<ExperienceList experiences={experiences} />
			</TabsContent>
			<TabsContent value="education">
				<EducationList education={education} />
			</TabsContent>
			<TabsContent value="skills">
				<TechnologiesList />
			</TabsContent>
		</Tabs>
	);
}
