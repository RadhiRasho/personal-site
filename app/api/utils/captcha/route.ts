import { GoogleResponse } from "@/types/google-response";
import { NextRequest, NextResponse } from "next/server";

async function verifyCaptcha(token: string) {
	const res = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
	);

	const google_response: GoogleResponse = await res.json();

	if (google_response.success === true) {
		return google_response.success;
	}

	throw new Error("Failed Captcha");
}

export async function POST(req: NextRequest, _: NextResponse) {
	try {
		const { token } = await req.json();
		const success = await verifyCaptcha(token);

		return NextResponse.json({ success });
	} catch (error) {
		return NextResponse.json({ success: false, error: error });
	}
}
