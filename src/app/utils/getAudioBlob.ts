import internal, { Readable } from "stream";

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

// const webStream = Readable.toWeb(stream);

// for await (const chunk of webStream) {
//   console.log(chunk); // Process each chunk
// }