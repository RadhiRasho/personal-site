"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechnologiesList from "./technologies-list";

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
				<ul className="flex w-full flex-col items-center justify-evenly space-y-4 p-2 md:flex-row md:items-start md:space-x-4 md:space-y-0 md:p-4">
					{experiences.map((exp, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="flex w-full items-start gap-4 md:w-auto"
						>
							<Briefcase className="mt-1 h-5 w-5 text-primary" />
							<div>
								<p className="font-semibold text-sm">{exp.role}</p>
								<p className="text-muted-foreground text-xs">{exp.company}</p>
								<p className="text-muted-foreground text-xs">{exp.period}</p>
							</div>
						</motion.li>
					))}
				</ul>
			</TabsContent>
			<TabsContent value="education">
				<ul className="flex w-full flex-col items-center justify-evenly space-y-4 p-2 md:flex-row md:items-start md:space-x-4 md:space-y-0 md:p-4">
					{education.map((edu, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="flex w-full items-start gap-4 md:w-auto"
						>
							<GraduationCap className="mt-1 h-5 w-5 text-primary" />
							<div>
								<p className="font-semibold text-sm">{edu.degree}</p>
								<p className="text-muted-foreground text-xs">{edu.school}</p>
								<p className="text-muted-foreground text-xs">{edu.year}</p>
							</div>
						</motion.li>
					))}
				</ul>
			</TabsContent>
			<TabsContent value="skills">
				<TechnologiesList />
			</TabsContent>
		</Tabs>
	);
}
