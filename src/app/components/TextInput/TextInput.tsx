import { ChangeEventHandler } from "react";
import TextInputUI from "./TextInputUI";
import {
  useSpeechContext,
  useSpeechDispatchContext,
} from "@/app/context/context";

const TextInput = () => {
  const { inputText } = useSpeechContext();
  const dispatch = useSpeechDispatchContext();

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    dispatch({ type: "UPDATE_TEXT", text: event.target.value });
  };

  return <TextInputUI value={inputText} onChange={onChange} />;
};

export default TextInput;
