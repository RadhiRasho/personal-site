import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const { email, name, message } = await req.json();

		const template = await formatTemplate(email, name, message);

		const transporter = createTransport({
			host: "smtp.gmail.com",
			port: 587,
			auth: {
				user: process.env.NEXT_PUBLIC_MAIL_USER,
				pass: process.env.NEXT_PUBLIC_MAIL_PASS,
			},
		});

		const options = {
			from: process.env.NEXT_PUBLIC_MAIL_USER,
			to: "RadhiRasho@gmail.com",
			subject: "New contact form submission",
			html: template,
			text: template,
		};

		try {
			const result = await transporter.sendMail(options);
			return NextResponse.json(result);
		} catch (err) {
			throw err;
		}
	} catch (err) {
		throw err;
	}
}

async function formatTemplate(email: string, name: string, message: string): Promise<string> {
	const pathToTemplate = path.resolve("public/templates", "email-templates.html");

	const file = await fs.readFile(pathToTemplate, "utf8");

	return file
		.replace(/{{email}}/g, email)
		.replace(/{{name}}/g, name)
		.replace(/{{message}}/g, message);
}
