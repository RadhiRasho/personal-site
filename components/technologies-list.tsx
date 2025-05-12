import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";

type Categories = {
	name: string;
	icons: string[]
}

const categories: Categories[] = [
	{
		name: "Front End",
		icons: ["ts,js,html,css,sass,reactquery", "nextjs,react,tailwind,svelte,astro,vuejs"],
	},
	{
		name: "Back End",
		icons: ["ts,js,python,go,cs", "elysia,hono,express,nodejs,bun,deno"],
	},
	{ name: "Databases", icons: ["mongodb,mysql,postgresql,redis,sqlite"] },
	{
		name: "Technologies",
		icons: [
			"docker,linux,windows,apple",
			"visualstudio,vscode,git,github,postman,npm",
		],
	},
	{ name: "Testing Libraries", icons: ["jest,vitest,playwright"] },
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.05,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
		},
	},
};

// Helper function to capitalize and format technology names
const formatTechName = (name: string): string => {
	const specialCases: Record<string, string> = {
		ts: "TypeScript",
		js: "JavaScript",
		cs: "C#",
		nextjs: "Next.js",
		vuejs: "Vue.js",
		nodejs: "Node.js",
		vscode: "VS Code",
		npm: "NPM",
		postgresql: "PostgreSQL",
	};

	return specialCases[name] || name.charAt(0).toUpperCase() + name.slice(1);
};

export function TechnologiesList() {
	return (
		<TooltipProvider delayDuration={300}>
			<Card className="mx-auto w-full max-w-4xl border-none bg-transparent shadow-none">
				<CardContent className="p-0 py-4">
					<motion.div
						className="space-y-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						viewport={{ once: true }}
					>
						{categories.map((category) => (
							<TechnologyCategory key={category.name} {...category} />
						))}
					</motion.div>
				</CardContent>
			</Card>
		</TooltipProvider>
	);
}

type TechnologyCategoryProps = {
	name: string;
	icons: string[];
};

function TechnologyCategory({ name, icons }: TechnologyCategoryProps) {
	return (
		<motion.div variants={itemVariants} className="group">
			<h3 className="mb-4 font-medium text-muted-foreground text-sm tracking-wide transition-colors group-hover:text-foreground"
				aria-label={`${name} technologies`}>
				{name}
			</h3>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
				{icons.map((iconSet, index) => (
					<motion.div key={index} variants={itemVariants} className="w-full">
						<div className="relative">
							<Card className="w-full shrink-0 border bg-card/30 p-0 backdrop-blur-sm transition-all hover:scale-[102%] hover:shadow-md">
								<CardContent className="flex w-full items-center justify-evenly gap-2 p-3">
									{iconSet.split(",").map((icon, idx) => (
										<Tooltip key={icon}>
											<TooltipTrigger asChild>
												<motion.div
													className="flex h-8 w-8 cursor-pointer items-center justify-center sm:h-10 sm:w-10"
													whileHover={{ scale: 1.1 }}
													role="img"
													aria-label={`${formatTechName(icon)} technology`}
												>
													<Image
														width={100}
														height={100}
														priority={index === 0 && idx < 2}
														loading={index === 0 && idx < 2 ? "eager" : "lazy"}
														className="h-auto w-full object-contain"
														src={`https://go-skill-icons.vercel.app/api/icons?i=${icon}`}
														alt={`${formatTechName(icon)} icon`}
													/>
												</motion.div>
											</TooltipTrigger>
											<TooltipContent
												side="bottom"
												align="center"
												sideOffset={8}
												className="font-medium text-xs">
												{formatTechName(icon)}
											</TooltipContent>
										</Tooltip>
									))}
								</CardContent>
							</Card>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
