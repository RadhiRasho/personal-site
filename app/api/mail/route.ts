import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { readFile } from "fs/promises";
import path from "path";
import { Mail } from "@/types/mail";

export function middleware(request: NextRequest) {
	const req = request.headers;
}

export async function POST(req: NextRequest, res: NextResponse) {
	const { email, name, message, captcha } = await req.json();

	if (!captcha)
		return NextResponse.json({ error: "Captcha is required" }, { status: 400 });

	const template = await formatTemplate(email, name, message);

	const transporter = createTransport({
		host: "smtp.gmail.com",
		port: 587,
		auth: {
			user: process.env.NEXT_PUBLIC_MAIL_USER,
			pass: process.env.NEXT_PUBLIC_MAIL_PASS,
		},
	});

	const options: Mail = {
		from: process.env.NEXT_PUBLIC_MAIL_USER,
		to: process.env.NEXT_PUBLIC_MAIL_USER_TO,
		subject: "New contact form submission",
		html: template,
		text: template,
	};

	const result = await transporter.sendMail(options);
	return NextResponse.json(result);
}

async function formatTemplate(
	email: string,
	name: string,
	message: string,
): Promise<string> {
	const pathToTemplate = path.resolve(
		"public/templates",
		"email-templates.html",
	);

	const file = await readFile(pathToTemplate, "utf8");

	return file
		.replace(/{{email}}/g, email)
		.replace(/{{name}}/g, name)
		.replace(/{{message}}/g, message);
}
