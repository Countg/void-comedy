import showDates from "@/lib/showDates";

export async function GET() {
  try {
    const shows = await showDates();
    return Response.json(shows);
  } catch (err) {
    console.error("API /shows error:", err);
    return new Response("Failed to fetch shows", { status: 500 });
  }
}
