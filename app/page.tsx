"use client";

import Globe from "@/components/Globe";
import { Socials } from "@/components/Socials";
import Float from "@/components/fancy/float";
import ScrambleIn from "@/components/fancy/scramblein";
import Typewriter from "@/components/fancy/typewriter";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useMemo } from "react";

export default function Home() {
	const words = useMemo(() => {
		return [
			"Software Engineer",
			"Web Developer",
			"Full Stack Engineer",
			"Localhost:3000/Coding",
			"git commit -m 'Hello World'",
			"git commit -m 'Hallo Welt!'",
			"It's Gotta Be Cornflower Bluuueee",
		];
	}, []);

	return (
		<main className="flex h-full min-h-screen w-full min-w-screen items-center justify-between">
			<div className="md:-right-96 -bottom-32 -z-20 fixed h-full w-full">
				<Globe />
			</div>
			<section className="relative mb-4 flex h-full min-h-screen w-full min-w-screen p-4">
				<div className="flex w-full items-center justify-between gap-2 md:w-8/12">
					<div className="flex w-full flex-col items-center justify-center gap-2">
						<Float className={"-z-10"}>
							<div className="relative h-52 w-52 cursor-pointer overflow-hidden shadow-2xl transition-transform duration-200 hover:scale-105">
								<Image
									src={"/Radhi-Rasho-pro.jpg"}
									alt="Me"
									height={1000}
									width={1000}
									className="absolute h-auto w-auto rounded-3xl object-cover"
								/>
							</div>
						</Float>
						<div className="-m-1 flex w-full flex-col items-center justify-center rounded-xl border bg-background/80 px-10 py-6 shadow-2xl backdrop-blur-sm md:w-7/12 md:rounded-none md:border-none md:bg-background/0 md:shadow-none md:backdrop-blur-none">
							<div className="flex flex-col items-baseline justify-between gap-1 font-bold md:flex-row">
								Hi, I'm
								<ScrambleIn
									text="Radhi Rasho"
									className="animate-text bg-300% bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text font-black font-serif text-2xl text-transparent motion-safe:animate-gradient"
									scrambleSpeed={50}
									scrambledLetterCount={5}
									scrambledClassName="text-2xl font-black font-serif bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-text bg-clip-text text-transparent bg-300% motion-safe:animate-gradient"
									characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
									autoStart={true}
								/>
							</div>
							<Typewriter
								text={words}
								speed={70}
								className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text font-bold text-base/loose text-transparent"
								waitTime={3500}
								deleteSpeed={40}
								cursorChar="_"
								cursorClassName={"text-xs font-bold text-red-500"}
							/>
						</div>
					</div>
					<div className="hidden md:fixed md:block">
						<Socials />
					</div>
				</div>
				<div className="-z-10 fixed inset-0 bg-gradient-to-tr from-black to-transparent blur-lg">
					&nbsp;
				</div>
			</section>
		</main>
	);
}
