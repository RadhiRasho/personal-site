"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
	const pathname = usePathname();

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
							<Link href="/contact" legacyBehavior passHref>
								<NavigationMenuLink
									className={`hover:text-red-600 focus:text-red-600 ${
										pathname === "/contact" && "text-red-600"
									} ${navigationMenuTriggerStyle()}`}
								>
									Contact
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu className="px-4 flex w-20 flex-row justify-between">
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href="https://github.com/radhirasho" passHref>
								<Github className="hover:text-red-600" />
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="https://twitter.com/RadhiH1" passHref>
								<Twitter className="hover:text-red-600" />
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
}
