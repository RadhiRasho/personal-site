"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "./ui/tooltip";
import Link from "next/link";

type CaptchaTestProps = {
	setIsVerified: (isVerified: boolean) => void;
};

export default function CaptchaTest({ setIsVerified }: CaptchaTestProps) {
	async function handleCaptchaSubmission(token: string | null) {
		if (!token) return;

		const res = await fetch("/api/utils/captcha", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token }),
		});

		try {
			const { success } = await res.json();

			setIsVerified(!!success);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div className="border rounded-3xl p-10 space-y-8">
				<h1 className="text-lg">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger className="border-b-2 hover:border-b-red-500 ">Prove Your Existance...</TooltipTrigger>
							<TooltipContent align="center" className="w-80">
								A reference to one of my favorite games of all times,&nbsp;
								<Link
									className="hover:text-red-600 hover:border-b-red-500 italic border-b-2"
									target="_blank"
									href={"https://en.wikipedia.org/wiki/Nier:_Automata"}
								>
									Nier: Automata
								</Link>
								, where as the player plays through the game their character is asked to prove their existance and
								whether their efforts means they exist.
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</h1>
				<ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={handleCaptchaSubmission} />
			</div>
		</>
	);
}
