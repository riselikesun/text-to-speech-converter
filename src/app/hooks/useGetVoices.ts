import { useEffect, useState } from "react";
import { ElevenLabs } from "elevenlabs";
import { ApiDataFetchingState } from "../types";

export default function useGetSpeech(): [
  ElevenLabs.Voice[] | null,
  ApiDataFetchingState
] {
  const [voices, setVoice] = useState<ElevenLabs.Voice[] | null>(null);
  const [status, setStatus] = useState<ApiDataFetchingState>("initial");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/voices", {
          method: "GET",
        });

        const { voices } = await response.json();

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
