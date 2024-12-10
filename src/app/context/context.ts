import { createContext, useContext } from "react";
import { ActionTypes } from "./action";
import internal from "stream";

export interface IInitialSpeechState {
  selectedVoice: string;
  inputText: string;
  speechBlob: null | internal.Readable;
}

export const initialSpeechState: IInitialSpeechState = {
  selectedVoice: "",
  inputText: "Good day, how are you?",
  speechBlob: null,
};

const SpeechContext = createContext<IInitialSpeechState>(initialSpeechState);

const SpeechDispatchContext = createContext<React.Dispatch<ActionTypes>>(
  () => {}
);

export function useSpeechContext() {
  return useContext(SpeechContext);
}

export function useSpeechDispatchContext() {
  return useContext(SpeechDispatchContext);
}

export { SpeechContext, SpeechDispatchContext };
