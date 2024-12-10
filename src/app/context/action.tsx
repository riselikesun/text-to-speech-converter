import internal from "stream";

type UPDATE_TEXT = "UPDATE_TEXT";
type UPDATE_VOICE = "UPDATE_VOICE";
type UPDATE_SPEECH = "UPDATE_SPEECH";

interface IUpdateText {
  type: UPDATE_TEXT;
  text: string;
}

interface IUpdateVoice {
  type: UPDATE_VOICE;
  voice: string;
}

interface IUpdateSpeech {
  type: UPDATE_SPEECH;
  speech: null | internal.Readable;
}

export type ActionTypes = IUpdateText | IUpdateVoice | IUpdateSpeech;
