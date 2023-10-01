"use client";
import { MobilMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";

export function NavBar() {
	return (
		<>
			<MobilMenu />
			<DesktopMenu />
		</>
	);
}
