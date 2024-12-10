import { getElevenLabsClient } from "../utils";

export const dynamic = "force-static";

export async function GET() {
  const client = getElevenLabsClient();

  const { voices } = await client.voices.getAll();

  return Response.json({ voices });
}
