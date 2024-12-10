"use client";

import { useReducer } from "react";
import SpeechReducer from "./SpeechReducer";
import {
  initialSpeechState,
  SpeechContext,
  SpeechDispatchContext,
} from "./context";

export function SpeechProvider({ children }: React.PropsWithChildren) {
  const [speech, dispatch] = useReducer(SpeechReducer, initialSpeechState);

  return (
    <SpeechContext.Provider value={speech}>
      <SpeechDispatchContext.Provider value={dispatch}>
        {children}
      </SpeechDispatchContext.Provider>
    </SpeechContext.Provider>
  );
}
