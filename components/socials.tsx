"use client";

import {
	DownloadIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function Socials() {
	return (
		<section className="z-50 flex h-full w-full items-center justify-center p-4 md:fixed md:w-10 md:justify-start">
			<motion.div
				layout
				initial={"hidden"}
				animate={"visible"}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
				variants={{
					hidden: { opacity: 0, x: -100 }, // Increased y value for more dramatic effect from bottom
					visible: { opacity: 1, x: 0 }, // Maintains center position as destination
				}}
			>
				<div className="flex h-fit w-full items-center justify-between gap-8 md:w-auto md:flex-col">
					<Link
						aria-label="Go to my Github profile"
						target="_blank"
						title="Go to my Github profile"
						href="https://github.com/radhirasho"
					>
						<GithubIcon size={35} className="text-xs hover:text-red-500" />
					</Link>
					<Link
						aria-label="Go to my X/Twitter profile"
						target="_blank"
						title="Go to my Twitter profile"
						href="https://twitter.com/RadhiRasho"
					>
						<TwitterIcon size={35} className="text-xs hover:text-red-500" />
					</Link>
					<Link
						aria-label="Go to my LinkedIn profile"
						target="_blank"
						title="Go to my LinkedIn profile"
						href="https://www.linkedin.com/in/radhi-rasho"
					>
						<LinkedinIcon size={35} className="text-xs hover:text-red-500" />
					</Link>
					<a
						aria-label="Download my resume"
						target="_blank"
						href="/Resume.pdf"
						title="Download my resume"
						rel="noreferrer"
					>
						<DownloadIcon size={35} className="text-xs hover:text-red-500" />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
