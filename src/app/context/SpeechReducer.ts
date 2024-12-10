import { ActionTypes } from "./action";
import { IInitialSpeechState } from "./context";

const SpeechReducer = (
  speechState: IInitialSpeechState,
  action: ActionTypes
): IInitialSpeechState => {
  switch (action.type) {
    case "UPDATE_TEXT": {
      return { ...speechState, inputText: action.text };
    }

    case "UPDATE_VOICE": {
      return { ...speechState, selectedVoice: action.voice };
    }

    case "UPDATE_AUDIO_BLOB": {
      return { ...speechState, audioBlob: action.audioBlob };
    }

    default: {
      throw Error("Unknown action: " + action);
    }
  }
};

export default SpeechReducer;
