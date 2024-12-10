import { useGetVoices } from "../../hooks";
import VoiceSelectorUI from "./VoiceSelectorUI";
import { SelectChangeEvent } from "@mui/material";
import {
  useSpeechContext,
  useSpeechDispatchContext,
} from "@/app/context/context";
import { useEffect } from "react";

const VoiceSelector = () => {
  const [voices, status] = useGetVoices();
  const { selectedVoice } = useSpeechContext();
  const dispatch = useSpeechDispatchContext();

  useEffect(() => {
    if (!selectedVoice && status === "fetched" && voices?.length) {
      const firstVoice = voices[0].voice_id;
      dispatch({ type: "UPDATE_VOICE", voice: firstVoice });
    }
  }, [selectedVoice, status, voices, dispatch]);

  const onChange = (event: SelectChangeEvent<string>) => {
    dispatch({ type: "UPDATE_VOICE", voice: event.target.value });
  };

  return (
    <VoiceSelectorUI
      value={selectedVoice}
      voices={voices || []}
      onChange={onChange}
    />
  );
};

export default VoiceSelector;
