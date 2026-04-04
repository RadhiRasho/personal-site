"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { createReveal } from "@/lib/animations";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { type ReactNode, useState } from "react";

type Categories = {
  name: string;
  icons: string[];
};

const categories: Categories[] = [
  {
    name: "Front End",
    icons: ["ts,js,html,css,sass,reactquery", "nextjs,react,tailwind,svelte,astro,vuejs"],
  },
  {
    name: "Back End",
    icons: ["ts,js,python,go,cs,vb", "elysia,hono,express,nodejs,bun,deno"],
  },
  { name: "Databases", icons: ["mongodb,mysql,postgresql,redis,sqlite"] },
  {
    name: "Technologies",
    icons: ["docker,linux,windows,apple", "visualstudio,vscode,git,github,postman,npm"],
  },
  { name: "Testing Libraries", icons: ["jest,vitest,playwright"] },
];

// Helper function to capitalize and format technology names
function formatTechName(name: string): string {
  const specialCases: Record<string, string> = {
    ts: "TypeScript",
    js: "JavaScript",
    cs: "C#",
    vb: "Visual Basic",
    nextjs: "Next.js",
    vuejs: "Vue.js",
    nodejs: "Node.js",
    vscode: "VS Code",
    npm: "NPM",
    postgresql: "PostgreSQL",
    visualstudio: "Visual Studio",
    reactquery: "React Query",
  };

  return specialCases[name] || name.charAt(0).toUpperCase() + name.slice(1);
}

// Animated container component
function AnimatedContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div className="space-y-8" {...createReveal({ duration: 0.6 })}>
      {children}
    </motion.div>
  );
}

function TechIconSkeleton() {
  return (
    <div className="bg-muted/30 absolute inset-0 rounded">
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  );
}

function TechIcon({ icon }: { icon: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded bg-transparent"
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="img"
          aria-label={`${formatTechName(icon)} technology`}
        >
          {!isLoaded && <TechIconSkeleton />}
          <motion.div
            className="relative z-10 h-auto w-full"
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              width={48}
              height={48}
              loading="lazy"
              className="h-auto w-full object-contain"
              src={`https://go-skill-icons.vercel.app/api/icons?i=${icon}`}
              alt={`${formatTechName(icon)} icon`}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="text-xs font-medium">{formatTechName(icon)}</TooltipContent>
    </Tooltip>
  );
}

export default function TechnologiesList() {
  return (
    <>
      <TooltipProvider delayDuration={300}>
        <Card className="mx-auto w-full max-w-4xl border-none bg-transparent shadow-none">
          <CardContent className="p-0 py-4">
            <AnimatedContainer>
              {categories.map((category) => (
                <TechnologyCategory key={category.name} {...category} />
              ))}
            </AnimatedContainer>
          </CardContent>
        </Card>
      </TooltipProvider>
    </>
  );
}

type TechnologyCategoryProps = {
  name: string;
  icons: string[];
};

function TechnologyCategory({ name, icons }: TechnologyCategoryProps) {
  return (
    <motion.div className="group" {...createReveal({ y: 20, duration: 0.5 })}>
      <h3
        className="text-muted-foreground group-hover:text-foreground mb-4 text-sm font-medium tracking-wide"
        aria-label={`${name} technologies`}
      >
        {name}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {icons.map((iconSet, index) => (
          <CategoryCard
            key={`${name}-${iconSet}`}
            iconSet={iconSet}
            index={index}
            delay={index * 50}
          />
        ))}
      </div>
    </motion.div>
  );
}

function CategoryCard({ iconSet, delay }: { iconSet: string; index: number; delay: number }) {
  return (
    <motion.div
      className="w-full"
      {...createReveal({ scale: 0.95, delay: delay / 1000, duration: 0.45 })}
    >
      <Card className="h-fit min-h-fit w-full rounded-sm border p-0 backdrop-blur-xs">
        <CardContent className="flex w-full items-center justify-evenly gap-2 px-2 py-2 md:px-1">
          {iconSet.split(",").map((icon) => (
            <TechIcon key={icon} icon={icon} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
