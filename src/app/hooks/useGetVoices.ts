import { useEffect, useState } from "react";
import getElevenLabsClient from "../utils/getElevenLabsClient";
import { ElevenLabs } from "elevenlabs";

type ApiDataFetchingState = "initial" | "fetching" | "fetched" | "error";

export default function useGetSpeech(): [
  ElevenLabs.Voice[] | null,
  ApiDataFetchingState
] {
  const [voices, setVoice] = useState<ElevenLabs.Voice[] | null>(null);
  const [status, setStatus] = useState<ApiDataFetchingState>("initial");

  useEffect(() => {
    async function fetchData() {
      try {
        const client = getElevenLabsClient();

        const { voices } = await client.voices.getAll();

        setVoice(voices);
        setStatus("fetched");
      } catch {
        setStatus("error");
      }
    }

    fetchData();
  }, []);

  return [voices, status];
}
