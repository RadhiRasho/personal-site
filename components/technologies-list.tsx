"use client";

import Image from "next/image";
import HonoIcon from "@/public/hono-logo.svg";

export function TechnologiesList() {
	return (
		<div className="flex flex-col gap-2 text-gray-400">
			<div className="flex flex-col gap-2">
				<div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-2">
					<div className="sm:border-r border-r-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Programming
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=js"}
								alt={"JavaScript"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=ts"}
								alt={"TypeScript"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=cs"}
								alt={"CSharp"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=python"}
								alt={"Python"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=go"}
								alt={"GoLang"}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Frameworks
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=nextjs"}
								alt={"Next.JS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=svelte"}
								alt={"Svelte"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=astro"}
								alt={"Astro"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=react"}
								alt={"React.JS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=electron"}
								alt={"Electron"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=express"}
								alt={"Express.JS"}
							/>
							<Image
								width={50}
								height={50}
								src={HonoIcon}
								className="bg-[#242938] h-[14mm] w-[14mm]  p-1 rounded-md"
								alt={"Hono"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=elysia"}
								className="bg-[#242938] h-[14mm] w-[14mm]  p-1 rounded-md"
								alt={"Elysia.JS"}
							/>
						</div>
					</div>
					<div className="sm:border-r border-r-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Markup
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=html"}
								alt={"HTML"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=md"}
								alt={"MarkDown"}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Styling
						</h2>
						<div className="grid grid-flow-row items-center grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=css"}
								alt={"CSS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=sass"}
								alt={"SASS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=tailwindcss"}
								alt={"tailwindcss"}
							/>
						</div>
					</div>

					<div className="sm:border-r border-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Runtimes
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=nodejs"}
								alt={"NodeJS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=bun"}
								alt={"BunJS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=dotnet"}
								alt={".NET"}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Developer Tools
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=vscode"}
								alt={"VS Code"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=visualstudio"}
								alt={"Visual Studio"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=github"}
								alt={"GitHub"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=bitbucket"}
								alt={"BitBucket"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=docker"}
								alt={"Docker"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=git"}
								alt={"Git"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=npm"}
								alt={"NPM"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=yarn"}
								alt={"Yarn"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=vercel"}
								alt={"Vercel"}
							/>
						</div>
					</div>
					<div className="sm:border-r border-r-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Operating Systems
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=windows"}
								alt={"Windows"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=linux"}
								alt={"Linux"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=apple"}
								alt={"Mac OS"}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Cloud
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=azure"}
								alt={"Azure Cloud"}
							/>
						</div>
					</div>
					<div className="sm:border-r border-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							SQL & NoSQL
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=mongo"}
								alt={"Mongo DB"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=postgres"}
								alt={"PostgreSQL"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=mysql"}
								alt={"MySQL"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=sqlite"}
								alt={"SQLite"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=sequelize"}
								alt={"Sequelize ORM"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=redis"}
								alt={"Redis"}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Learning...
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=rust"}
								alt={"Rust"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=cpp"}
								alt={"C++"}
							/>
						</div>
					</div>
					<div className="sm:border-r border-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Testing Frameworks
						</h2>
						<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-8 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=jest"}
								alt={"Jest"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
