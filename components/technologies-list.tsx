import Image from "next/image";
import WindowsIcon from "@/public/windows.svg";
import AppleIcon from "@/public/apple.svg";

export function TechnologiesList() {
	return (
		<div className="flex flex-col gap-2 text-gray-400">
			<div className="flex flex-col gap-2">
				<div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-2 ">
					<div className="sm:border-r border-r-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Programming</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2">
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=js"}
								title={"JavaScript"}
								alt={"JavaScript"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=ts"}
								title={"TypeScript"}
								alt={"TypeScript"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=cs"}
								title={"C#"}
								alt={"CSharp"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=python"}
								title={"python"}
								alt={"Python"}
							/>{" "}
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Frameworks</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2">
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=nextjs"}
								alt={"nextjs"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=dotnet"}
								alt={"dotnet"}
							/>{" "}
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=react"} alt={"react"} />{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=angular"}
								alt={"angular"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=express"}
								alt={"express"}
							/>{" "}
						</div>
					</div>
					<div className="sm:border-r border-r-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Markup</h2>
						<div className="grid grid-flow-row grid-cols-6 gap-2">
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=html"} alt={"HTML"} />{" "}
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=md"} alt={"MarkDown"} />{" "}
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Syling </h2>
						<div className="grid grid-flow-row items-center grid-cols-4 gap-2">
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=css"} alt={"CSS"} />{" "}
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=sass"} alt={"SASS"} />{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=tailwindcss"}
								alt={"tailwindcss"}
							/>{" "}
						</div>
					</div>

					<div className="sm:border-r border-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Runtimes</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2">
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=nodejs"}
								title={"Node.JS"}
								alt={"NodeJS"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=dotnet"}
								title={".NET"}
								alt={".NET"}
							/>{" "}
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Developer Tools</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2">
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=vscode"}
								alt={"VS Code"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=visualstudio"}
								alt={"Visual Studio"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=github"}
								alt={"GitHub"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=docker"}
								alt={"Docker"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=docker"}
								alt={"Docker"}
							/>{" "}
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=git"} alt={"Git"} />{" "}
						</div>
					</div>
					<div className="sm:border-r border-r-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Operating Systems</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								loading="lazy"
								className="bg-[#242938] h-9 px-1 rounded-md"
								src={WindowsIcon}
								alt={"Windows"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=linux"}
								alt={"Visual Studio"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								className="bg-[#242938] h-9 px-1 rounded-md"
								src={AppleIcon}
								alt={"Mac OS"}
							/>{" "}
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Cloud</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=azure"}
								alt={"Azure Cloud"}
							/>{" "}
						</div>
					</div>
					<div className="sm:border-r border-gray-500">
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">SQL & NoSQL</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2 justify-between items-center">
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=mongo"}
								alt={"Mongo DB"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=postgres"}
								alt={"PostgreSQL"}
							/>{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=mysql"}
								alt={"My SQL"}
							/>{" "}
						</div>
					</div>
					<div>
						<h2 className="text-sm font-bold text-gray-800 dark:text-gray-300">Learning...</h2>
						<div className="grid grid-flow-row grid-cols-4 gap-2 justify-between items-center">
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=go"} alt={"GoLang"} />{" "}
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=rust"} alt={"Rust"} />{" "}
							<Image
								width={50}
								height={50}
								loading="lazy"
								src={"https://skillicons.dev/icons?i=svelte"}
								alt={"Svelte"}
							/>{" "}
							<Image width={50} height={50} loading="lazy" src={"https://skillicons.dev/icons?i=cpp"} alt={"C++"} />{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
