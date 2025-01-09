"use client";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export function Socials() {
	return (
		<div className="flex flex-col justify-between items-center gap-8">
			<Link
				aria-label="Go to my Github profile"
				target="_blank"
				as="https://github.com/radhirasho"
				href="https://github.com/radhirasho"
			>
				<GithubIcon size={35} className="hover:text-red-500 text-xs" />
			</Link>
			<Link
				aria-label="Go to my X/Twitter profile"
				target="_blank"
				as="https://twitter.com/RadhiH1"
				href="https://twitter.com/RadhiH1"
			>
				<TwitterIcon size={35} className="hover:text-red-500 text-xs" />
			</Link>
			<Link
				aria-label="Go to my LinkedIn profile"
				target="_blank"
				as="https://www.linkedin.com/in/radhi-rasho/"
				href="https://www.linkedin.com/in/radhi-rasho/"
			>
				<LinkedinIcon size={35} className="hover:text-red-500 text-xs" />
			</Link>
		</div>
	);
}
