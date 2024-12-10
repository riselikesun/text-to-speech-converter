import { useSpeechContext } from "@/app/context/context";
import AudioPlayerUI from "./AudioPlayerUI";
import { useMemo } from "react";

const AudioPlayer = () => {
  const { audioBlob } = useSpeechContext();

  const audioUrl = useMemo(() => {
    if (!audioBlob) {
      return;
    }

    return URL.createObjectURL(audioBlob);
  }, [audioBlob]);

  if (!audioBlob) {
    return null;
  }

  return <AudioPlayerUI src={audioUrl} />;
};

export default AudioPlayer;
