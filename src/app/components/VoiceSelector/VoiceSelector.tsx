import { useState } from "react";
import { useGetVoices } from "../../hooks";
import VoiceSelectorUI from "./VoiceSelectorUI";
import { SelectChangeEvent } from "@mui/material";

const VoiceSelector = () => {
  const [value, setValue] = useState("");
  const [voices, status] = useGetVoices();

  if (!value && status === "fetched" && voices) {
    const firstVoice = voices[0].voice_id;

    setValue(firstVoice);
  }

  const onChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
  };

  return <VoiceSelectorUI value={value} voices={voices} onChange={onChange} />;
};

export default VoiceSelector;
