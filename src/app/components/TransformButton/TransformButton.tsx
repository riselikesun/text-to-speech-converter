import { useState } from "react";
import TranslateButtonUI from "./TransformButtonUI";
import getSpeech from "../../utils/getSpeech";
import { ApiDataFetchingState } from "@/app/types";
import {
  useSpeechContext,
  useSpeechDispatchContext,
} from "@/app/context/context";
import { getAudioBlob } from "@/app/utils";

const TransformButton = () => {
  const [fetchingStatus, setFetchingStatus] =
    useState<ApiDataFetchingState>("initial");
  const { inputText, selectedVoice } = useSpeechContext();
  const dispatch = useSpeechDispatchContext();

  const onClick = async () => {
    if (fetchingStatus === "fetching") {
      return;
    }

    try {
      setFetchingStatus("fetching");

      const speechResponse = await getSpeech({
        text: inputText,
        voiceId: selectedVoice,
      });

      const audioBlob = await getAudioBlob(speechResponse);

      dispatch({ type: "UPDATE_AUDIO_BLOB", audioBlob });

      setFetchingStatus("fetched");
    } catch {
      setFetchingStatus("error");
    }
  };

  return (
    <TranslateButtonUI
      loading={fetchingStatus === "fetching"}
      onClick={onClick}
    />
  );
};

export default TransformButton;
