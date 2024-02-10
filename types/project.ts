import type { StaticImageData } from "next/image";

export type ProjectProps = {
	title: string;
	description: string;
	image?: StaticImageData;
	href?: string;
	tags?: string[];
};
