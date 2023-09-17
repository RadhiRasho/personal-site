"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function NavBar() {
	const pathname = usePathname();
	const { setTheme } = useTheme();

	return (
		<>
			<div className="flex flex-row justify-between">
				<NavigationMenu className="px-4 flex min-w-screen flex-col">
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href="/" legacyBehavior passHref>
								<NavigationMenuLink
									className={`hover:text-red-600 focus:text-red-600 ${
										pathname === "/" && "text-red-600"
									} ${navigationMenuTriggerStyle()}`}
								>
									Home
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/projects" legacyBehavior passHref>
								<NavigationMenuLink
									className={`hover:text-red-600 focus:text-red-600 ${
										pathname === "/projects" && "text-red-600"
									} ${navigationMenuTriggerStyle()}`}
								>
									Projects
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/contacts" legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} hover:text-red-600 focus:text-red-600 ${
										pathname === "/contact" && "text-red-600"
									}`}
								>
									Contacts
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu className="px-4 flex flex-row justify-between">
					<NavigationMenuList>
						<NavigationMenuItem>
							<Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-red-600">
								<Sun
									size={35}
									onClick={() => setTheme("dark")}
									className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
								/>
								<Moon
									size={35}
									onClick={() => setTheme("light")}
									className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
								/>
							</Button>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link as="https://github.com/radhirasho" href="https://github.com/radhirasho">
								<Github size={35} className="hover:text-red-600" />
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link as="https://twitter.com/RadhiH1" href="https://twitter.com/RadhiH1">
								<Twitter size={35} className="hover:text-red-600" />
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								as="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
								href="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
							>
								<Linkedin size={35} className="hover:text-red-600" />
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
}
