import type { StaticImageData } from "next/image";

export type Project = {
	title: string;
	description: string;
	image?: StaticImageData;
	href?: string;
	tags?: string[];
};
