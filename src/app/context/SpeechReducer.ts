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

    case "UPDATE_SPEECH": {
      return { ...speechState, speechBlob: action.speech };
    }

    default: {
      throw Error("Unknown action: " + action);
    }
  }
};

export default SpeechReducer;
