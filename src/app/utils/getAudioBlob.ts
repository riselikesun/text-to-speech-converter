import internal from "stream";

async function getAudioBlob(stream: internal.Stream): Promise<Blob | null> {
  if (!stream) {
    return null;
  }

  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  const audioBlob = new Blob(chunks, { type: "audio/mpeg" }); // Adjust MIME type if needed

  return audioBlob;
}

export default getAudioBlob;
