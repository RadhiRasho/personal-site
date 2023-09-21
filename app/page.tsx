"use client";

import Image from "next/image";
import RadhiRasho from "@/public/Radhi-Rasho.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-full flex-col items-center justify-between mt-4">
			<div className="flex min-h-fit justify-between gap-10 bg-gradient-conic">
				<Image className="rounded-full w-80" loading="lazy" alt="Radhi Rasho" src={RadhiRasho} />
				<div className="flex flex-col items-center justify-center gap-5">
					<h1 className="text-4xl font-bold">Radhi Rasho</h1>
					<h2 className="text-2xl font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
						Full Stack Developer
					</h2>
				</div>
			</div>
			<Accordion defaultValue={"About Me"} type="single" className="w-4/6">
				<AccordionItem value="About Me">
					<AccordionTrigger className="hover:text-red-500 focus:text-red-500 focus-within:text-red-500">
						About Me
					</AccordionTrigger>
					<AccordionContent className="hover:text-white">
						<p className="text-gray-400">
							Hi, I&apos;m Radhi Rasho. I&apos;m a full stack software engineer with a passion for building web
							applications. I love to learn new things and I&apos;m always looking for new challenges. I&apos;m always
							looking for new opportunities to learn and grow as a developer.
							<br />
							<br />
							I&apos;m currently working at{" "}
							<Link className="underline  hover:text-red-500" href="https://www.sandhills.com/">
								Sandhills Global
							</Link>{" "}
							as a Full Stack Software Engineer. I&apos;m have a Associates Degree in Computer Science from{" "}
							<Link className="underline hover:text-red-500" href="https://www.southeast.edu/">
								Southeast Community College
							</Link>
							.
							<br />
							<br />
							When I&apos;m not coding, I&apos;m usually playing video games, watching anime, listening to music, or
							spending time with friends and family.
							<br />
							<br />
							Feel free to check out my{" "}
							<Link className="underline hover:text-red-500" href="/projects">
								projects
							</Link>{" "}
							or{" "}
							<Link className="underline hover:text-red-500" href="/contact">
								contact me
							</Link>{" "}
							if you&apos;d like to get in touch.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="Professional Experience">
					<AccordionTrigger className="hover:text-red-500 focus:text-red-500 focus-within:text-red-500">
						Professional Experience
					</AccordionTrigger>
					<AccordionContent className="hover:text-white">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between items-center flex-wrap">
								<Link
									className="text-md text-primary font-bold underline hover:text-red-500"
									href="https://www.sandhills.com/"
								>
									Sandhills Global
								</Link>
								<h3 className="text-sm text-primary font-semibold italic">Full Stack Software Engineer</h3>
							</div>
							<p className="text-base text-gray-400">
								As a Full Stack Software Engineer at Sandhills Global, I&apos;m responsible for building and maintaining
								web applications for our customers. I work with a team of developers to build applications using React,
								Next.js, and Node.js.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
}
