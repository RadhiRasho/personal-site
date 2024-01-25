export async function GET() {
	return new Response(
		"The site is running on the cloud \nThere is nothing to fear \nYou can access and sync \nAll the data you want to hear",
		{ status: 200 },
	);
}
