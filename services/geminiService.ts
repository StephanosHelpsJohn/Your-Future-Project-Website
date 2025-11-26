import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCareerAdvice = async (
  prompt: string,
  history: { role: string; content: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a context-aware prompt
    const systemInstruction = `
      You are "FutureGuide", an advanced AI career and college counselor integrated into Stephan Nicklow's "Your Future Project" website.
      Your mission is to help youth make the right decisions when choosing college and their working career.
      
      Tone: Futuristic, encouraging, wise, and precise.
      Style: Keep answers concise (under 150 words) unless asked for details. Use bullet points for readability.
      
      If the user asks about Stephan Nicklow, explain that he is the founder dedicated to mentoring youth.
    `;

    // Convert simple history to chat format if needed, but for single turn text generation we can append.
    // However, best practice for chat is using the chat API.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text || "I'm processing your future trajectory, but the data stream was interrupted. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the Future Mainframe unstable. Please check your API key or try again later.";
  }
};