"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Typewriter from "./fancy/typewriter";
import { TechnologiesList } from "./technologies-list";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export function AboutMe() {
	const words = useMemo<string[]>(() => {
		return [
			"Software Engineer",
			"Web Developer",
			"Full Stack Engineer",
			"Localhost:3000/Coding",
			"git commit -m 'Hello World'",
		];
	}, []);

	return (
		<>
			<div className="flex sm:flex-row flex-col min-h-fit w-10/12 items-center justify-evenly gap-5 mb-4 bg-gradient-conic">
				<Image
					className="rounded-full w-auto h-auto"
					priority
					alt="Radhi Rasho"
					width={400}
					height={400}
					src={"/Radhi-Rasho-pro.jpg"}
				/>
				<div className="flex flex-col w-56 items-center justify-center gap-2">
					<h1 className="text-3xl font-bold font-serif">Radhi Rasho</h1>
					<Typewriter
						text={words}
						speed={70}
						className="text-base/loose font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
						waitTime={3500}
						deleteSpeed={40}
						cursorChar="_"
						cursorClassName={"text-xs font-bold text-red-500"}
					/>
				</div>
			</div>
			<Accordion
				autoFocus
				defaultValue={"About Me"}
				collapsible
				type="single"
				className="w-10/12 border rounded-lg px-2 mb-4"
			>
				<AccordionItem value="About Me">
					<AccordionTrigger className="hover:text-red-500 font-bold focus:text-red-500 focus-within:text-red-500">
						About Me
					</AccordionTrigger>
					<AccordionContent>
						<p className="dark:text-gray-300 text-sm">
							Hello, I am Radhi Rasho, a Full Stack Software Engineer who enjoys
							crafting web applications that solve real-world problems. I have a
							curious mind and a thirst for knowledge, so I never stop exploring
							new technologies and learning new skills. I thrive on challenges
							that push me out of my comfort zone and help me grow as a
							developer.
							<br />
							<br />
							I&apos;m currently working at&nbsp;
							<Link
								className="dark:text-gray-200 hover:text-red-500"
								target="_blank"
								href="https://www.sandhills.com/"
							>
								<span className="underline text-sm hover:text-red-500">
									Sandhills Global
								</span>
							</Link>
							&nbsp;. I have a Associates Degree in Computer Science from&nbsp;
							<Link
								className="dark:text-gray-200 hover:text-red-500"
								target="_blank"
								href="https://www.southeast.edu/"
							>
								<span className="underline text-sm hover:text-red-500">
									Southeast Community College
								</span>
							</Link>
							.
							<br />
							<br />
							When I&apos;m not coding, I&apos;m usually playing video games,
							watching anime, listening to music, working out, or spending time
							with friends and family.
							<br />
							<br />
							In my free time, I like working on computers, such as building
							custom PC&apos;s, or repairing already built ones with new
							components. I find it interested how different parts work
							together, to do amazing things.
							<br />
							<br />
							Feel free to check out my&nbsp;
							<Link
								className="dark:text-gray-200 hover:text-red-500"
								href="/projects"
							>
								<span className="underline text-sm hover:text-red-500">
									projects
								</span>
							</Link>
							&nbsp; or&nbsp;
							<Link
								className="dark:text-gray-200 hover:text-red-500"
								href="/contact"
							>
								<span className="underline text-sm hover:text-red-500">
									contact me
								</span>
							</Link>
							&nbsp; if you&apos;d like to get in touch.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="Professional Experience">
					<AccordionTrigger className="hover:text-red-500 font-bold focus:text-red-500 focus-within:text-red-500">
						Professional Experience
					</AccordionTrigger>
					<AccordionContent className="text-sm">
						<div className="flex flex-col gap-2 dark:text-gray-300">
							<div className="text-sm font-semibold underline hover:text-red-500">
								<Link
									as="https://www.sandhills.com/"
									target="_blank"
									href="https://www.sandhills.com/"
								>
									Sandhills Global
								</Link>
							</div>
							<div className="text-xs italic font-semibold dark:text-gray-300">
								Software Developer
								<span className="text-xs dark:text-gray-300 text-gray-900">
									{" "}
									- 2021 to Present
								</span>
								<br />
								Software Developer Intern
								<span className="text-xs dark:text-gray-300 text-gray-900">
									{" "}
									- 2020 to 2021
								</span>
							</div>
							<div className="dark:text-gray-300 text-sm">
								I first started off as an intern at Sandhills Global in Summer
								of 2020, where I worked on a small projects that allowed me to
								learn the ropes of the company&apos;s development process. After
								my internship, I was offered a full time position as a Software
								Developer.
								<br />
								<br />
								During my time at Sandhills Global, I&apos;ve had the
								opportunity to work on two significant projects:
							</div>
							<div className="dark:text-gray-300 text-sm">
								<Link
									className="font-semibold  underline text-sm hover:text-red-500"
									target="_blank"
									href={"https://www.fr8star.com"}
								>
									FR8Star
								</Link>
								&nbsp;
								<span className="text-xs">
									- JavaScript, React.JS, MobX, C#, .NET, Ant Design, Node.JS,
									PostgreSQL, Docker, Redis
								</span>
								<br />
								<br />
								<Link
									className="font-semibold  underline text-sm hover:text-red-500"
									target="_blank"
									href={"https://www.gocurrency.com/"}
								>
									GoCurrency
								</Link>
								&nbsp;
								<span className="text-xs">
									- JavaScript, Typescript, C#, .NET, Next.JS, Node.JS, SASS,
									Mongo DB, Redis, Express.JS, Azure DevOps, Docker, Github
									Actions
								</span>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="Technologies">
					<AccordionTrigger className="hover:text-red-500 font-bold peer-focus-within:text-red-500">
						Technologies
					</AccordionTrigger>
					<AccordionContent className="hover:text-white">
						<TechnologiesList />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}
