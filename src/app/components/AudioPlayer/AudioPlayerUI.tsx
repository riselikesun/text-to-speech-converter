import { Box } from "@mui/material";

interface IProps {
  src?: string;
}

const AudioPlayerUI = (props: IProps) => {
  const { src } = props;

  return (
    <Box padding="12px 16px" display="flex">
      <audio style={{ width: "100%" }} controls src={src} />
    </Box>
  );
};

export default AudioPlayerUI;
