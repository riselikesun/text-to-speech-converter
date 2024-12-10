import { NextResponse } from "next/server";
import { getSpeech } from "../utils";

export async function POST(request: Request) {
  try {
    const { text, voiceId }: { text: string; voiceId: string } =
      await request.json();

    const stream = await getSpeech({ text, voiceId });

    const headers = new Headers();
    headers.set("Content-Type", "audio/mpeg");
//@ts-expect-error will fix later
    return new NextResponse(stream, { headers });
  } catch (error) {
    console.error("Error converting text to speech:", error);
    return new NextResponse("Failed to convert text to speech", {
      status: 500,
    });
  }
}
