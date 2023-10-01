import Image from "next/image";
import RadhiRasho from "@/public/Radhi-Rasho.jpg";

export default function Home() {
	return (
		<main className="flex min-h-full flex-col items-center mt-4 justify-between">
			<Image className="rounded-full w-44" loading="eager" placeholder="blur" alt="Radhi Rasho" src={RadhiRasho} />
		</main>
	);
}
