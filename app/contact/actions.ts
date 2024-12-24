export async function submitCaptcha(token: string) {
	const captchaRes = await fetch("/api/utils/captcha", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token }),
	});

	return captchaRes.json();
}
