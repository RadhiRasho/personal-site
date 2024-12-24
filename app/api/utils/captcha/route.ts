import type { GoogleResponse } from "@/types/google-response";
import { type NextRequest, NextResponse } from "next/server";

async function verifyCaptcha(token: string) {
	const url: string = "https://www.google.com/recaptcha/api/siteverify";
	const res = await fetch(
		`${url}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
		{
			method: "POST",
		},
	);

	const google_response: GoogleResponse = await res.json();

	if (google_response.success === true) {
		return google_response.success;
	}

	throw new Error("Failed Captcha");
}

export async function POST(req: NextRequest) {
	try {
		const { token } = await req.json();
		const success = await verifyCaptcha(token);

		return NextResponse.json({ success });
	} catch (error) {
		return NextResponse.json({ success: false, error: error });
	}
}
