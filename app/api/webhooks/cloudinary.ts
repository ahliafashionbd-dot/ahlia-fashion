export async function POST(request: Request) {
	// Minimal webhook placeholder
	return new Response("Webhook received", { status: 200 });
}

export async function GET() {
	return new Response("Cloudinary webhook endpoint (GET)");
}
