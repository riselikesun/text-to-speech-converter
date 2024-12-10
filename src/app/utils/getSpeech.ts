interface IGetSpeech {
  text: string;
  voiceId: string;
}

export default async function getSpeech(
  payload: IGetSpeech
): Promise<ReadableStream<Uint8Array> | null> {
  const { text, voiceId = "21m00Tcm4TlvDq8ikWAM" } = payload;

  const response = await fetch("/api/text-to-speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      voiceId,
    }),
  });

  return response.body;
}
