"use client";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	ContactIcon,
	Github,
	HomeIcon,
	Linkedin,
	Moon,
	Sun,
	Table2Icon,
	Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DesktopMenu() {
	const pathname = usePathname();
	const { setTheme } = useTheme();

	return (
		<div className={`${pathname === "/travel" ? "hidden" : ""}`}>
			<div className="hidden sm:flex flex-row justify-between">
				<NavigationMenu className="px-0 flex min-w-screen flex-col">
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href="/" as="/" legacyBehavior passHref>
								<NavigationMenuLink
									className={`dark:hover:text-red-500 dark:focus:text-red-500 focus:text-red-800 flex justify-start gap-3 text-xs ${
										pathname === "/" &&
										"text-red-800 dark:text-red-500 border-b-4 border-b-red-800 dark:border-b-red-500"
									} ${navigationMenuTriggerStyle()}`}
								>
									<HomeIcon strokeWidth={1.75} size={25} /> Home
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/projects" as="/projects" legacyBehavior passHref>
								<NavigationMenuLink
									className={`dark:hover:text-red-500 dark:focus:text-red-500 focus:text-red-800 flex justify-start gap-3 text-xs ${
										pathname === "/projects" &&
										"text-red-800 dark:text-red-500 border-b-4 border-b-red-800 dark:border-b-red-500"
									} ${navigationMenuTriggerStyle()}`}
								>
									<Table2Icon strokeWidth={1.75} size={25} /> Projects
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/contact" as="/contact" legacyBehavior passHref>
								<NavigationMenuLink
									className={`dark:hover:text-red-500 dark:focus:text-red-500 focus:text-red-800 flex justify-start gap-3 text-xs ${
										pathname === "/contact" &&
										"text-red-800 dark:text-red-500 border-b-4 border-b-red-800 dark:border-b-red-500"
									} ${navigationMenuTriggerStyle()}`}
								>
									<ContactIcon strokeWidth={1.75} size={25} /> Contact
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu className="pr-2 flex flex-row justify-between">
					<NavigationMenuList className="gap-1">
						<NavigationMenuItem>
							<Button
								variant="ghost"
								size="icon"
								aria-label="Toggle Dark Mode"
								className="hover:bg-transparent hover:text-red-500 text-xs w-6 flex justify-end"
							>
								<Sun
									strokeWidth={1.75}
									size={30}
									onClick={() => setTheme("dark")}
									className="rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
								/>
								<Moon
									strokeWidth={1.75}
									size={30}
									onClick={() => setTheme("light")}
									className="absolute rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
								/>
							</Button>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								aria-label="Go to my Github profile"
								target="_blank"
								as="https://github.com/radhirasho"
								href="https://github.com/radhirasho"
							>
								<Github
									strokeWidth={1.75}
									size={30}
									className="hover:text-red-500 text-xs"
								/>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								aria-label="Go to my X/Twitter profile"
								target="_blank"
								as="https://twitter.com/RadhiH1"
								href="https://twitter.com/RadhiH1"
							>
								<Twitter
									strokeWidth={1.75}
									size={30}
									className="hover:text-red-500 text-xs"
								/>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								aria-label="Go to my LinkedIn profile"
								target="_blank"
								as="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
								href="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
							>
								<Linkedin
									strokeWidth={1.75}
									size={30}
									className="hover:text-red-500 text-xs"
								/>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
}
