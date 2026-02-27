import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing API Key" });
    }

    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent(req.body);

    return res.status(200).json(result);

  } catch (err) {
    return res.status(500).json({ error: "AI failed" });
  }
}
