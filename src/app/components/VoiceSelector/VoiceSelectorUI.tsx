import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ElevenLabs } from "elevenlabs";

interface IVoiceSelectorUI {
  value: string;
  voices: ElevenLabs.Voice[] | null;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}

const VoiceSelectorUI = (props: IVoiceSelectorUI) => {
  const { value, voices, onChange } = props;

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel variant="filled" id="voice-selector">
          Voice
        </InputLabel>
        <Select
          variant="filled"
          labelId="voice-selector"
          id="voice-selector"
          value={value}
          label="Voice"
          onChange={onChange}
        >
          {voices?.map((voice) => {
            const { voice_id, name } = voice;

            return (
              <MenuItem key={voice_id} value={voice_id}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default VoiceSelectorUI;
