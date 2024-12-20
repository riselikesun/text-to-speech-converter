interface IConfig {
  ElevenLabsApiKey: string;
  ElevenLabsVoiceModelId: string;
}

const getConfig = (): IConfig => {
  const config: IConfig = {
    ElevenLabsApiKey: process.env.ELEVEN_LABS_API_KEY || "",
    ElevenLabsVoiceModelId:
      process.env.ELEVEN_LABS_VOICE_MODEL_ID ||
      "eleven_multilingual_v2",
  };

  return config;
};

export default getConfig;
