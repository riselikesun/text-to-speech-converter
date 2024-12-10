import { ElevenLabsClient } from "elevenlabs";
import { getConfig } from "../config";

let client: ElevenLabsClient | undefined;

const getElevenLabsClient = (): ElevenLabsClient => {
  if (client) {
    return client;
  }

  const config = getConfig();

  return (client = new ElevenLabsClient({ apiKey: config.ElevenLabsApiKey }));
};

export default getElevenLabsClient;
