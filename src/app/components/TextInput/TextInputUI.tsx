import { styled, TextareaAutosize } from "@mui/material";
import { ChangeEventHandler } from "react";

const TextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  fontSize: "16px",
  border: "none",
  color: theme.palette.text.primary,
  fontFamily: "inter",
  resize: "none",
  padding: 8,
  minWidth: "400px",
}));

interface ITextInputUI {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
}

const TextInputUI = (props: ITextInputUI) => {
  const { onChange, value } = props;

  return (
    <TextArea
      minRows={10}
      value={value}
      placeholder="Enter some text to convert to speech"
      onChange={onChange}
    />
  );
};

export default TextInputUI;
