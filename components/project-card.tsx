import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

export interface ProjectCardProps {
  id?: number;
  title: string;
  description: string;
  categories: string[];
  technologies: JSX.Element[];
  image?: string;
  link: string;
  sizes?: number[];
}

export default function ProjectCard({
  title,
  description,
  categories,
  technologies,
  image,
  link,
  sizes,
}: ProjectCardProps) {
  const imageUrl =
    image ||
    `https://api.microlink.io/?url=${encodeURIComponent(link)}&screenshot=true&meta=true&embed=screenshot.url`;

  return (
    <motion.article
      className="bg-background/90 flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border bg-no-repeat object-cover shadow-lg backdrop-blur-xs"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-between gap-4">
        <motion.div
          className="flex h-56 w-full overflow-hidden rounded-t-2xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            loading="lazy"
            width={sizes?.[0] || 800}
            height={sizes?.[1] || 450}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="px-3">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 p-3">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span key={index} className="rounded-full bg-blue-900 px-2 py-1 text-xs text-white">
                  {category}
                </span>
              ))}
            </div>
            <div className="text-xs font-semibold">Technologies used:</div>
            <div className="flex flex-wrap justify-between gap-1">
              {technologies.map((tech, index) => (
                <motion.span key={index} whileHover={{ scale: 1.15 }} className="inline-flex">
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div transition={{ duration: 0.2, ease: "easeOut" }}>
            <Link
              as={link}
              href={link as Route}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center border-t-2 p-2 text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
            >
              View Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
