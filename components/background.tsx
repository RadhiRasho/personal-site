"use client";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AboutSection } from "./information";
import InitialInfo from "./initial-info";
import ProfessionalBackground from "./professional-background";

export default function Background() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
			<motion.div
				layout
				initial={"hidden"}
				whileInView={"visible"}
				animate={"visible"}
				viewport={{ once: true, amount: "some" }}
				transition={{
					duration: 0.5,
					ease: "easeIn",
				}}
				variants={{
					hidden: { opacity: 0, x: "-100%" },
					visible: { opacity: 1, x: 0 },
				}}
				className="flex w-full flex-col items-center gap-6"
			>
				<Card className="w-full bg-black/50 backdrop-blur-xs md:w-10/12">
					<CardContent>
						<InitialInfo />
					</CardContent>
				</Card>
			</motion.div>
			<motion.div
				layout
				initial={"hidden"}
				whileInView={"visible"}
				viewport={{ once: true, amount: "some" }}
				transition={{
					duration: 0.5,
					ease: "easeIn",
				}}
				variants={{
					hidden: { opacity: 0, x: "-100%" },
					visible: { opacity: 1, x: 0 },
				}}
				className="flex w-full flex-col items-center gap-6"
			>
				<Card className="w-full bg-black/50 backdrop-blur-xs transition-none md:w-10/12">
					<CardHeader>
						<CardTitle>About Me</CardTitle>
						<CardDescription>
							Passionate about creating innovative web solutions and
							continuously learning new technologies.
						</CardDescription>
					</CardHeader>
					<CardContent className="transition-all duration-300 ease-in-out">
						<ProfessionalBackground />
					</CardContent>
				</Card>
			</motion.div>
			<motion.div
				layout
				initial={"hidden"}
				whileInView={"visible"}
				animate={"visible"}
				viewport={{ once: true, amount: "some" }}
				transition={{
					duration: 0.5,
					ease: "easeIn",
				}}
				variants={{
					hidden: { opacity: 0, x: "100%" },
					visible: { opacity: 1, x: 0 },
				}}
				className="flex w-full flex-col items-center gap-6"
			>
				<Card className="w-full bg-black/50 backdrop-blur-[0.1px] md:w-10/12">
					<CardContent>
						<AboutSection />
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}
