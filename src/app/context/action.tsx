type UPDATE_TEXT = "UPDATE_TEXT";
type UPDATE_VOICE = "UPDATE_VOICE";
type UPDATE_AUDIO_BLOB = "UPDATE_AUDIO_BLOB";

interface IUpdateText {
  type: UPDATE_TEXT;
  text: string;
}

interface IUpdateVoice {
  type: UPDATE_VOICE;
  voice: string;
}

interface IUpdateSpeech {
  type: UPDATE_AUDIO_BLOB;
  audioBlob: Blob | null;
}

export type ActionTypes = IUpdateText | IUpdateVoice | IUpdateSpeech;
