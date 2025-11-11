import { MailIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";

export default function InitialInfo() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	const personalInfo = {
		name: "Radhi Rasho",
		title: "Software Engineer",
		location: "Lincoln, NE",
		email: "RadhiRasho@gmail.com",
	};

	return (
		<div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
			<div
				ref={ref}
				className="mx-auto w-full max-w-[250px] md:mx-0"
				style={{
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? 'scale(1)' : 'scale(0.5)',
					transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
				}}
			>
				<Image
					src="/Radhi-Rasho.jpg"
					alt="Radhi Rasho"
					width={250}
					height={250}
					priority
					className="h-auto w-auto rounded-lg"
				/>
			</div>
			<div className="flex h-full w-full flex-col justify-between gap-4 text-center md:text-left">
				<div>
					<h1 className="font-bold text-xl">{personalInfo.name}</h1>
					<p className="text-md text-muted-foreground">{personalInfo.title}</p>
				</div>
				<div className="flex flex-wrap justify-center gap-2 md:justify-start">
					<Badge
						variant="default"
						className="flex items-center gap-1 px-4 py-2"
					>
						<MapPinIcon className="h-4 w-4 shrink-0" />
						{personalInfo.location}
					</Badge>
					<Badge
						variant="default"
						className="flex items-center gap-1 px-4 py-2 hover:bg-white/80"
					>
						<a
							className="flex items-center justify-center gap-2 font-normal text-sm md:text-md"
							href={`mailto:${personalInfo.email}`}
						>
							<MailIcon size={24} className="shrink-0" />
							{personalInfo.email}
						</a>
					</Badge>
				</div>
			</div>
		</div>
	);
}
