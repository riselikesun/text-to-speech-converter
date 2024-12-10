import { useState } from "react";
import TranslateButtonUI from "./TransformButtonUI";
import getSpeech from "../../utils/getSpeech";
import { ApiDataFetchingState } from "@/app/types";
import internal from "stream";

const TransformButton = () => {
  const [fetchingStatus, setFetchingStatus] =
    useState<ApiDataFetchingState>("initial");
  const [speech, setSpeech] = useState<null | internal.Readable>(null);

  const text = "Good day, how are you?";
  const voiceId = "9BWtsMINqrJLrRacOk9x";

  const onClick = async () => {
    if (fetchingStatus === "fetching") {
      return;
    }

    try {
      setFetchingStatus("fetching");

      const speechResponse = await getSpeech({ text, voiceId });

      setSpeech(speechResponse);

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
