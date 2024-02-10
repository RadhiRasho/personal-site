import Link from "next/link";
import {
	ContactIcon,
	Github,
	HomeIcon,
	Linkedin,
	MenuIcon,
	Moon,
	Sun,
	Table2Icon,
	Twitter,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function MobilMenu() {
	const pathname = usePathname();
	const { setTheme } = useTheme();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="sm:hidden h-10 mb-2 min-h-full">
			<div
				className={"absolute z-[100] flex justify-between align-baseline w-full"}
			>
				<MenuIcon
					className={`w-8 h-8 ${showMenu && "bg-red-500 rounded-br-lg"}`}
					onClick={() => setShowMenu(!showMenu)}
				/>
				<Button
					aria-label="Toggle Dark Mode"
					title="Toggle Dark Mode"
					variant="ghost"
					size="icon"
					className="hover:bg-transparent hover:text-red-500 flex mr-1 justify-end w-6"
				>
					<Sun
						size={35}
						strokeWidth={1.75}
						onClick={() => setTheme("dark")}
						aria-label="Toggle Light Mode"
						className="rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						size={35}
						strokeWidth={1.75}
						aria-label="Toggle Dark Mode"
						onClick={() => setTheme("light")}
						className="absolute rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
					/>
				</Button>
			</div>
			<div
				className={`${
					showMenu
						? "animate-in slide-in-from-left"
						: "animate-out slide-out-to-left transition-all ease-out collapse"
				} bg-secondary w-screen min-h-full pl-10 space-y-4 absolute z-[50]`}
			>
				<div className="flex flex-col justify-between">
					<div className=" py-2">
						<h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
							Navigation Menu
						</h2>
						<div className="space-y-1 flex flex-col">
							<Link
								onClick={() => setShowMenu(!showMenu)}
								href={"/"}
								className={`w-fit rounded-b-lg flex gap-3 px-1 items-center hover:text-red-500 justify-start font-bold text-md ${
									pathname === "/" && "text-red-500 border-b-2 border-b-red-500 pb-1"
								}`}
							>
								<HomeIcon strokeWidth={1.75} size={35} /> Home
							</Link>
							<Link
								onClick={() => setShowMenu(!showMenu)}
								href={"/projects"}
								className={`w-fit rounded-b-lg flex gap-3 px-1 items-center hover:text-red-500 justify-start font-bold text-md ${
									pathname === "/projects" &&
									"text-red-500 border-b-2 border-b-red-500 pb-1"
								}`}
							>
								<Table2Icon strokeWidth={1.75} size={35} /> Projects
							</Link>
							<Link
								onClick={() => setShowMenu(!showMenu)}
								href={"/contact"}
								className={`w-fit rounded-b-lg flex gap-3 px-1 items-center hover:text-red-500 justify-start font-bold text-md ${
									pathname === "/contact" &&
									"text-red-500 border-b-2 border-b-red-500 pb-1"
								}`}
							>
								<ContactIcon strokeWidth={1.75} size={35} />
								Contact
							</Link>
						</div>
					</div>
					<div className="py-2">
						<h4 className="mb-2 font-semibold tracking-tight">Socials</h4>
						<div className="space-y-1 flex flex-col justify-evenly flex-grow-0">
							<Link
								className="flex justify-start gap-3 hover:text-red-500 px-1 items-center"
								target="_blank"
								as="https://github.com/radhirasho"
								href="https://github.com/radhirasho"
								aria-label="Go to my Github profile"
								title="Go to my Github profile"
							>
								<Github
									aria-label="Go to my Github profile"
									strokeWidth={1.75}
									size={35}
									className="hover:text-red-500"
								/>
								Github
							</Link>
							<Link
								className="flex justify-start gap-3 hover:text-red-500 px-1 items-center"
								target="_blank"
								as="https://twitter.com/RadhiH1"
								href="https://twitter.com/RadhiH1"
								aria-label="Go to my Twitter profile"
								title="Go to my Twitter profile"
							>
								<Twitter
									aria-label="Go to my Twitter profile"
									strokeWidth={1.75}
									size={35}
									className="hover:text-red-500"
								/>
								X/Twitter
							</Link>
							<Link
								className="flex justify-start gap-3 hover:text-red-500 px-1 items-center"
								target="_blank"
								as="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
								href="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
								aria-label="Go to my LinkedIn profile"
								title="Go to my LinkedIn profile"
							>
								<Linkedin
									aria-label="Go to my LinkedIn profile"
									strokeWidth={1.75}
									size={35}
									className="hover:text-red-500"
								/>
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
