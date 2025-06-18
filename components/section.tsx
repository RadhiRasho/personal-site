import Image from "next/image";

interface SectionProps {
	imageAlt: string;
	image: string;
	content: string;
	reverse?: boolean;
}

export function Section({
	imageAlt,
	image,
	content,
	reverse = false,
}: SectionProps) {
	return (
		<div
			className={`flex flex-col justify-evenly gap-4 leading-8 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}
		>
			<div className="relative h-full w-full overflow-hidden lg:w-1/3">
				<div className="zoom-in-150 aspect-square w-full">
					<Image
						alt={imageAlt}
						src={image}
						title={imageAlt}
						className="h-full w-full rounded-lg object-cover"
						width={500}
						height={500}
						priority
					/>
				</div>
			</div>
			<p className="flex w-full items-baseline text-xs leading-5 md:text-sm lg:w-3/5">
				{content}
			</p>
		</div>
	);
}
