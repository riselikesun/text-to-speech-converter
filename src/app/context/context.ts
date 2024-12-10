import { createContext, useContext } from "react";
import { ActionTypes } from "./action";

export interface IInitialSpeechState {
  selectedVoice: string;
  inputText: string;
  audioBlob: Blob | null;
}

export const initialSpeechState: IInitialSpeechState = {
  selectedVoice: "",
  inputText: "Good day, how are you?",
  audioBlob: null,
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
