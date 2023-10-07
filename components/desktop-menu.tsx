"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ContactIcon, Github, HomeIcon, Linkedin, Moon, Sun, Table2Icon, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface DesktopMenuProps {
	className?: string;
}

export function DesktopMenu({ className }: DesktopMenuProps) {
	const pathname = usePathname();
	const { setTheme } = useTheme();

	return (
		<div className={`hidden sm:flex flex-row justify-between`}>
			<NavigationMenu className="px-0 flex min-w-screen flex-col">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={`hover:text-red-500 focus:text-red-500 flex justify-start gap-3 ${
									pathname === "/" && "text-red-500 border-b-4 border-b-red-500"
								} ${navigationMenuTriggerStyle()}`}
							>
								<HomeIcon strokeWidth={1.75} size={25} /> Home
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/projects" legacyBehavior passHref>
							<NavigationMenuLink
								className={`hover:text-red-500 focus:text-red-500 flex justify-start gap-3 ${
									pathname === "/projects" && "text-red-500 border-b-4 border-b-red-500"
								} ${navigationMenuTriggerStyle()}`}
							>
								<Table2Icon strokeWidth={1.75} size={25} /> Projects
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/contact" legacyBehavior passHref>
							<NavigationMenuLink
								className={`hover:text-red-500 focus:text-red-500 flex justify-start gap-3 ${
									pathname === "/contact" && "text-red-500 border-b-4 border-b-red-500"
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
							className="hover:bg-transparent hover:text-red-500 w-6 flex justify-end"
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
						<Link target="_blank" as="https://github.com/radhirasho" href="https://github.com/radhirasho">
							<Github strokeWidth={1.75} size={30} className="hover:text-red-500" />
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link target="_blank" as="https://twitter.com/RadhiH1" href="https://twitter.com/RadhiH1">
							<Twitter strokeWidth={1.75} size={30} className="hover:text-red-500" />
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							target="_blank"
							as="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
							href="https://www.linkedin.com/in/radhi-rasho-7827b218a/"
						>
							<Linkedin strokeWidth={1.75} size={30} className="hover:text-red-500" />
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
