import Image from "next/image";
import RadhiRasho from "@/public/Radhi-Rasho.jpg";

export default function Home() {
	return (
		<main className="flex min-h-full flex-col items-center justify-between">
			<Image className="rounded-full w-44" loading="lazy" placeholder="blur" alt="Radhi Rasho" src={RadhiRasho} />
		</main>
	);
}
