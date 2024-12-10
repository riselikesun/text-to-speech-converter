import internal from "stream";
import getElevenLabsClient from "../utils/getElevenLabsClient";
import { getConfig } from "../config";

interface IGetSpeech {
  text: string;
  voiceId: string;
}

export default async function getSpeech(
  payload: IGetSpeech
): Promise<internal.Readable> {
  const { text, voiceId = "21m00Tcm4TlvDq8ikWAM" } = payload;

  const config = getConfig();
  const client = getElevenLabsClient();

  return client.textToSpeech.convert(voiceId, {
    model_id: config.ElevenLabsVoiceModelId,
    text,
  });
}
