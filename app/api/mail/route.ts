import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand, SendEmailCommandInput, SESClientConfig } from "@aws-sdk/client-ses";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const { email, name, message } = await req.json();

		const configs: SESClientConfig = {
			credentials: {
				accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
				secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
			},
			region: process.env.NEXT_PUBLIC_AWS_REGION,
		};

		const client = new SESClient(configs);

		const template = await formatTemplate(email, name, message);

		const params: SendEmailCommandInput = {
			Destination: {
				ToAddresses: [process.env.NEXT_PUBLIC_MAIL_USER!],
			},
			Message: {
				Body: {
					Html: {
						Charset: "UTF-8",
						Data: template,
					},
					Text: {
						Charset: "UTF-8",
						Data: `Message from ${name} \n ${message}`,
					},
				},
				Subject: {
					Charset: "UTF-8",
					Data: `Contact From ${name}`,
				},
			},
			Source: process.env.NEXT_PUBLIC_MAIL_USER!,
		};

		const sendEmailCommand = new SendEmailCommand(params);

		try {
			const response = await client.send(sendEmailCommand);
			return NextResponse.json(response.$metadata);
		} catch (err) {
			console.error("Failed to send the email", err);
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
