import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

type ProjectProps = {
	title: string;
	description: string;
	image?: StaticImageData;
	href?: string;
	tags?: string[];
};

export function Project({ title, description, image, href, tags }: ProjectProps) {
	return (
		<div className="flex justify-between overflow-hidden transition-all duration-75 delay-0 rounded-xl w-[95vw] xl:w-[75vw] h-fit mb-2 border-2 dark:border-white border-black">
			<div className="flex relative w-full justify-between gap-2">
				<div
					className={`flex flex-col items-center md:items-start w-full h-fit z-50 md:bg-gradient-to-r dark:from-primary-foreground from-white ${
						image ? "from-[68%]" : "from-100%"
					} p-2`}
				>
					{href ? (
						<Link href={href} className="text-lg font-bold underline hover:text-red-500">
							{title}
						</Link>
					) : (
						<p className="text-lg font-bold">{title}</p>
					)}
					<p className="text-md w-9/12">{description}</p>
					<br />
					<div className="w-fit">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
							{tags?.map((tag, index) => (
								<Badge className="flex justify-center !text-xs" key={index}>
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</div>
				{image && (
					<Image
						src={image}
						alt={title}
						priority
						className="hidden dark:bg-primary md:flex w-3/6 lg:w-2/6 h-full absolute right-0"
					/>
				)}
			</div>
		</div>
	);
}
