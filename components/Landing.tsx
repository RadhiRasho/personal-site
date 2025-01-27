"use client";

import Image from "next/image";
import { useMemo } from "react";
import Float from "./fancy/float";
import ScrambleIn from "./fancy/scramblein";
import Typewriter from "./fancy/typewriter";

export default function Landing() {
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
		<section className="relative mb-4 flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-center gap-2 p-4 md:w-8/12 lg:items-baseline">
			<Float>
				<div className="relative flex h-52 w-52 cursor-pointer overflow-hidden shadow-2xl transition-transform duration-200 hover:scale-105">
					<Image
						src="/Neues-Rathaus-Hannover.jpg"
						alt="Radhi Rasho"
						title="Neues Rathaus, Hannover"
						priority
						height={500}
						width={500}
						className="absolute h-full w-full rounded-3xl object-cover antialiased"
					/>
					<div
						className="absolute inset-0 rounded-3xl bg-black bg-opacity-20 transition-all duration-500 hover:bg-opacity-0"
						title="Neues Rathaus, Hannover"
					/>
				</div>
			</Float>
			<div className="z-20 flex w-full flex-grow-0 flex-col items-center justify-center rounded-xl border bg-background/80 p-4 shadow-2xl backdrop-blur-sm lg:w-7/12 lg:items-start lg:rounded-none lg:border-none lg:bg-background/0 lg:p-2 lg:shadow-none lg:backdrop-blur-none">
				<div className="flex flex-col items-baseline justify-between gap-0.5 font-bold md:gap-2 lg:flex-row">
					<span className="tracking-tighter">Hi, I'm</span>
					<ScrambleIn
						text="Radhi Rasho"
						className="animate-text bg-[size:300%] bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text font-black font-serif text-transparent text-xl motion-safe:animate-gradient"
						scrambleSpeed={25}
						scrambledLetterCount={2}
						scrambledClassName="text-xl font-black font-serif bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-text bg-clip-text text-transparent bg-[size:300%] motion-safe:animate-gradient"
						characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
						autoStart
					/>
				</div>
				<Typewriter
					text={words}
					speed={20}
					className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text font-bold text-base/loose text-transparent"
					waitTime={3500}
					deleteSpeed={40}
					cursorChar="_"
					cursorClassName={"text-xs font-bold text-red-500"}
				/>
			</div>
		</section>
	);
}
