"use client";
import { DownloadIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export function Socials() {
	return (
		<section className="z-50 flex h-full w-full items-center justify-center p-4 md:fixed md:w-10 md:justify-start">

			<div className="flex w-full items-center justify-between gap-8 md:w-auto md:flex-col">
				<Link
					aria-label="Go to my Github profile"
					target="_blank"
					as="https://github.com/radhirasho"
					href="https://github.com/radhirasho"
				>
					<GithubIcon size={35} className="text-xs hover:text-red-500" />
				</Link>
				<Link
					aria-label="Go to my X/Twitter profile"
					target="_blank"
					as="https://twitter.com/RadhiRasho"
					href="https://twitter.com/RadhiRasho"
				>
					<TwitterIcon size={35} className="text-xs hover:text-red-500" />
				</Link>
				<Link
					aria-label="Go to my LinkedIn profile"
					target="_blank"
					as="https://www.linkedin.com/in/radhi-rasho/"
					href="https://www.linkedin.com/in/radhi-rasho/"
				>
					<LinkedinIcon size={35} className="text-xs hover:text-red-500" />
				</Link>
				<Link
					aria-label="Download my resume"
					target="_blank"
					as="/Radhi-Rasho-Resume.pdf"
					href="/Radhi-Rasho-Resume.pdf"
					download
				>
					<DownloadIcon size={35} className="text-xs hover:text-red-500" />
				</Link>
			</div>
		</section>
	);
}
