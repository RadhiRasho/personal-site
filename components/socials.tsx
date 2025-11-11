"use client";

import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function Socials() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			data-visible={isVisible}
			className="relative z-50 flex h-fit w-full items-center justify-center p-4 md:fixed md:left-0 md:top-0 md:h-screen md:w-10 md:justify-start data-[visible=true]:opacity-100 data-[visible=false]:opacity-0 data-[visible=false]:translate-x-[-100px] data-[visible=true]:translate-x-0 transition-all"
		>
			<div className="flex h-fit w-full items-center justify-between gap-8 md:w-auto md:flex-col">
				<Link
					aria-label="Go to my Github profile"
					target="_blank"
					title="Go to my Github profile"
					href="https://github.com/radhirasho"
				>
					<FaGithub size={35} className="text-xs hover:text-red-500" />
				</Link>
				<Link
					aria-label="Go to my X/Twitter profile"
					target="_blank"
					title="Go to my Twitter profile"
					href="https://twitter.com/RadhiRasho"
				>
					<FaXTwitter size={35} className="text-xs hover:text-red-500" />
				</Link>
				<Link
					aria-label="Go to my LinkedIn profile"
					target="_blank"
					title="Go to my LinkedIn profile"
					href="https://www.linkedin.com/in/radhi-rasho"
				>
					<FaLinkedinIn size={35} className="text-xs hover:text-red-500" />
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
		</div>
	);
}
