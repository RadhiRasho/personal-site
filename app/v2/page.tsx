"use client";

import Globe from "@/components/Globe";
import { Socials } from "@/components/Socials";
import Float from "@/components/fancy/float";
import ScrambleIn from "@/components/fancy/scramblein";
import Typewriter from "@/components/fancy/typewriter";
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
		];
	}, []);

	return (
		<main className="min-h-screen h-full w-full min-w-screen flex items-center justify-between">
			<div className="fixed top-28 -right-64 -z-10">
				<Globe />
			</div>
			<section className="relative flex p-4 mb-4 min-h-screen h-full w-full min-w-screen">
				<div className="flex items-center justify-between w-8/12 gap-2">
					<div className="flex flex-col w-full items-center justify-center gap-2">
						<Float className={"hover:z-10 -z-10"}>
							<div className="sm:w-40 sm:h-40 h-32 w-32 md:w-48 md:h-48 shadow-2xl relative overflow-hidden hover:scale-105 duration-200 cursor-pointer transition-transform">
								<Image
									src={"/Radhi-Rasho-pro.jpg"}
									alt="Me"
									height={600}
									width={600}
									className="w-auto h-auto object-cover absolute rounded-3xl"
								/>
							</div>
						</Float>
						<h1 className="flex justify-between gap-1 items-baseline text-xl font-bold">
							Hi, I'm
							<ScrambleIn
								text="Radhi Rasho"
								className="text-3xl font-black font-serif bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-text bg-clip-text text-transparent bg-300% motion-safe:animate-gradient"
								scrambleSpeed={50}
								scrambledLetterCount={5}
								scrambledClassName="text-3xl font-black font-serif bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-text bg-clip-text text-transparent bg-300% motion-safe:animate-gradient"
								characters="RadhiRasho"
								autoStart={true}
							/>
						</h1>
						<Typewriter
							text={words}
							speed={70}
							className="text-base/loose font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
							waitTime={3500}
							deleteSpeed={40}
							cursorChar="_"
							cursorClassName={"text-xs font-bold text-red-500"}
						/>
					</div>
					<div className="fixed">
						<Socials />
					</div>
				</div>
				<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-black to-transparent blur-lg">
					&nbsp;
				</div>
			</section>
		</main>
	);
}
