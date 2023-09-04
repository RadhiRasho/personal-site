import { GoogleResponse } from "@/app/types/google-response";
import { NextRequest, NextResponse } from "next/server";

export async function verifyCaptcha(token: string) {
	try {
		const res = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
		);

		const google_response: GoogleResponse = await res.json();

		if (google_response.success === true) {
			return google_response.success;
		} else {
			throw new Error("Failed Captcha");
		}
	} catch (error) {
		throw error;
	}
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
