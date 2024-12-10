async function getAudioBlob(
  stream: ReadableStream<Uint8Array> | null
): Promise<Blob | null> {
  if (!stream) {
    return null;
  }

  const chunks: Uint8Array[] = [];

  const reader = stream.getReader();
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (value) {
      chunks.push(value);
    }
    done = readerDone;
  }

  const audioBlob = new Blob(chunks, { type: "audio/mpeg" });
  return audioBlob;
}

export default getAudioBlob;
