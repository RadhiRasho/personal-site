"use client";

import Image from "next/image";
import WindowsIcon from "@/public/windows.svg";
import AppleIcon from "@/public/apple.svg";
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
								title={"JavaScript: 5 Years"}
								alt={"JavaScript"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=ts"}
								title={"TypeScript: 2 Years"}
								alt={"TypeScript"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=cs"}
								title={"C#: 4 Years"}
								alt={"CSharp"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=python"}
								title={"Python: 1 Year"}
								alt={"Python"}
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
								title={"Next.JS: 1 Year"}
								alt={"Next.JS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=svelte"}
								title="Svelte: 6 Months"
								alt={"Svelte"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=react"}
								title={"React.JS: 4 Years"}
								alt={"React.JS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=electron"}
								title={"Electron: 2 Months"}
								alt={"Electron"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=express"}
								title={"Express.JS: 3 Years"}
								alt={"Express.JS"}
							/>
							<Image
								width={50}
								height={50}
								src={HonoIcon}
								className="bg-[#242938] h-[14mm] w-[14mm]  p-1 rounded-md"
								title={"Hono: 2 Months"}
								alt={"Hono"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=bootstrap"}
								title={"Bootstrap: 1 Year"}
								alt={"Bootstrap"}
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
								title={"HTML: 6 Years"}
								alt={"HTML"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=md"}
								title={"MarkDown: 3 Years"}
								alt={"MarkDown"}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">
							Styling{" "}
						</h2>
						<div className="grid grid-flow-row items-center grid-cols-4 lg:grid-cols-8 gap-2">
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=css"}
								title={"CSS"}
								alt={"CSS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=sass"}
								title={"SASS"}
								alt={"SASS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=tailwindcss"}
								title={"Tailwind CSS: 2 Years"}
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
								title={"Node.JS: 3 Years"}
								alt={"NodeJS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=bun"}
								title={"Bun: 5 Months"}
								alt={"BunJS"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=dotnet"}
								title={".NET"}
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
								title={"VS Code: 5 Years"}
								alt={"VS Code"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=visualstudio"}
								title={"Visual Studio: 4 Years"}
								alt={"Visual Studio"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=github"}
								title={"GitHub: 3 Years"}
								alt={"GitHub"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=docker"}
								title={"Docker: 2 Years"}
								alt={"Docker"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=git"}
								title={"Git"}
								alt={"Git"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=babel"}
								title={"Babel: 2 Years"}
								alt={"Babel"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=webpack"}
								title={"Webpack: 2 Years"}
								alt={"Webpack"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=vercel"}
								title={"Vercel: 6 Months"}
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
								className="bg-[#242938] h-9 px-1 rounded-md"
								src={WindowsIcon}
								title={"Windows: 7 Years"}
								alt={"Windows"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=linux"}
								title={"Linux: 2 Years"}
								alt={"Linux"}
							/>
							<Image
								width={50}
								height={50}
								className="bg-[#242938] h-9 px-1 rounded-md"
								src={AppleIcon}
								title={"Mac OS: 3 Years"}
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
								title="Azure Cloud Services: 1 Year"
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
								title={"Mongo DB: 1 Year"}
								alt={"Mongo DB"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=postgres"}
								title={"PostgreSQL: 2 Years"}
								alt={"PostgreSQL"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=mysql"}
								title={"MySQL: 3 Years"}
								alt={"MySQL"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=sequelize"}
								title={"Sequelize ORM: 2 Years"}
								alt={"Sequelize ORM"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=redis"}
								title={"Redis: 3 Years"}
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
								src={"https://skillicons.dev/icons?i=go"}
								title="GoLang: Learning..."
								alt={"GoLang"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=rust"}
								title="Rust: Learning..."
								alt={"Rust"}
							/>
							<Image
								width={50}
								height={50}
								src={"https://skillicons.dev/icons?i=cpp"}
								title="C++: Learning..."
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
								title={"Jest: 2 Years"}
								alt={"Jest"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
