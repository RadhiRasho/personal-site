"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

type CaptchaTestProps = {
	setIsVerified: (isVerified: boolean) => void;
};

export default function CaptchaTest({ setIsVerified }: CaptchaTestProps) {
	const recaptchaRef = useRef(null);

	async function handleCaptchaSubmission(token: string | null) {
		// Server function to verify captcha
		const res = await fetch("/api/utils/captcha", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token }),
		});

		try {
			const { success } = await res.json();

			setIsVerified(success);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="border rounded-3xl p-10 space-y-8">
				<h1 className="text-lg">Prove your existance...</h1>
				<p className="text-xs w-72">
					I&apos;m sorry, but I have to ask you to prove that you&apos;re not a robot. Please click the checkbox below
					to verify that you&apos;re a human.
				</p>
				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
					ref={recaptchaRef}
					onChange={handleCaptchaSubmission}
				/>
			</div>
		</>
	);
}
