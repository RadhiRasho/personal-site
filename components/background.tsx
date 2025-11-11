"use client";
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
import { useEffect, useRef, useState } from "react";

function AnimatedCard({
	children,
	direction = "left",
	delay = 0,
}: {
	children: React.ReactNode;
	direction?: "left" | "right";
	delay?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						setTimeout(() => {
							setIsVisible(true);
							setHasAnimated(true);
						}, delay);
						observer.disconnect();
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '50px',
			}
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [delay, hasAnimated]);

	const translateX = direction === 'left' ? '-50px' : '50px';

	return (
		<div
			ref={ref}
			className="flex w-full flex-col items-center gap-6"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateX(0)' : `translateX(${translateX})`,
				transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				willChange: isVisible ? 'auto' : 'opacity, transform',
			}}
		>
			{children}
		</div>
	);
}

export default function Background() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
			<AnimatedCard direction="left">
				<Card className="w-full bg-black/50 backdrop-blur-xxs md:w-10/12">
					<CardContent>
						<InitialInfo />
					</CardContent>
				</Card>
			</AnimatedCard>

			<AnimatedCard direction="left" delay={100}>
				<Card className="w-full bg-black/50 backdrop-blur-xxs transition-none md:w-10/12">
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
			</AnimatedCard>

			<AnimatedCard direction="right" delay={200}>
				<Card className="w-full bg-black/50 backdrop-blur-xxs md:w-10/12">
					<CardContent>
						<AboutSection />
					</CardContent>
				</Card>
			</AnimatedCard>
		</div>
	);
}
