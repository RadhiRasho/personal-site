"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "./ui/textarea";

const formSchema = z
	.object({
		name: z.string().min(2, { message: "Must be at least 2 characters" }).max(50, {
			message: "Must be less than 50 characters",
		}),
		email: z.string().email("Must be a valid email address").max(50, {
			message: "Must be less than 50 characters long",
		}),
		message: z.string().min(20, { message: "Must be longer than 20 characters" }).max(280, {
			message: "Must No Longer than 280 characters (insert Twitter reference)",
		}),
	})
	.required();

export function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const [messageSent, setMessageSent] = useState(sessionStorage.getItem("messageSent") === "Sent");

	function onSubmit(values: z.infer<typeof formSchema>) {
		sessionStorage.setItem("messageSent", "Sent");
		setMessageSent(!messageSent);
		console.log(values);
	}

	return (
		<main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
			{messageSent ? (
				<div>Thank you for contacting us.</div>
			) : (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="border rounded-3xl p-10 space-y-8">
						<h1>Contact Me</h1>
						<FormDescription>Leave me a message and I&apos;ll get back to you as soon as I can: </FormDescription>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Radhi Rasho" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="example@email.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea aria-expanded={false} placeholder="Hello There..." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			)}
		</main>
	);
}
