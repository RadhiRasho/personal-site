"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import * as z from "zod";

import type { MailResponse } from "@/types/mail";

const formSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: "Must be at least 2 characters" })
			.max(50, {
				message: "Must be less than 50 characters",
			}),
		email: z.string().email("Must be a valid email address").max(50, {
			message: "Must be less than 50 characters long",
		}),
		message: z
			.string()
			.min(20, { message: "Must be longer than 20 characters" })
			.max(280, {
				message: "Must No Longer than 280 characters (X/Twitter reference)",
			}),
	})
	.required();

export default function Contact() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const { executeRecaptcha } = useGoogleReCaptcha();

	const [messageSent, setMessageSent] = useState(false);

	useEffect(() => {
		if (window !== undefined) {
			const messageSent = sessionStorage.getItem("messageSent");

			if (messageSent) {
				setMessageSent(true);
			}
		}
	}, []);

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			if (!executeRecaptcha) {
				throw new Error("Recaptcha not found");
			}

			const captchaToken = await executeRecaptcha("submit");

			if (!captchaToken) {
				throw new Error("Captcha token not found");
			}

			const captchaRes = await fetch("/api/utils/captcha", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token: captchaToken }),
			});

			const { success: captchaSubmitted } = await captchaRes.json();

			if (!captchaSubmitted) {
				throw new Error("Captcha not submitted");
			}

			const res = await fetch("/api/mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...values, captchaSubmitted }),
			});

			const response: MailResponse = await res.json();

			if (!response.accepted) {
				throw new Error("Error sending mail", { cause: response.rejected });
			}

			setMessageSent(!messageSent);
			sessionStorage.setItem("messageSent", "true");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<main className="flex min-h-full flex-col items-center mt-4 justify-between">
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
				language="en-US"
				scriptProps={{
					async: true,
					defer: true,
					nonce: "random_nonce",
				}}
			>
				<Form {...form}>
					{!messageSent ? (
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="border-2 rounded-3xl w-fit px-5 py-2 space-y-2 MailResponse, mx-2 mb-2"
						>
							<div className="text-md">Contact Me</div>
							<FormDescription className="text-xs">
								Leave me a message and I&apos;ll get back to you as soon as I
								can:{" "}
							</FormDescription>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs">Name</FormLabel>
										<FormControl>
											<Input
												className="text-xs"
												placeholder="Radhi Rasho"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-xs" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs">Email</FormLabel>
										<FormControl>
											<Input
												className="text-xs"
												placeholder="example@email.com"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-xs" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs">Message</FormLabel>
										<FormControl>
											<Textarea
												rows={4}
												className="text-xs"
												placeholder="Hello There..."
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-xs" />
									</FormItem>
								)}
							/>
							<br />
							<Button className="text-xs px-4" type="submit">
								Submit
							</Button>
						</form>
					) : (
						<div className="border rounded-3xl p-10 space-y-8 text-xs">
							Thank you for contacting me.
						</div>
					)}
				</Form>
			</GoogleReCaptchaProvider>
		</main>
	);
}
