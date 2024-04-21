"use client";
import { DesktopMenu } from "./desktop-menu";
import { MobilMenu } from "./mobile-menu";

export function NavBar() {
	return (
		<>
			<MobilMenu />
			<DesktopMenu />
		</>
	);
}
