import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const openAi = new OpenAI({
	apiKey: "",
	dangerouslyAllowBrowser: true,
});

export default openAi;
