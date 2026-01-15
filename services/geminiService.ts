
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types.ts";

// Always use named parameter and process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutAdvice = async (history: Message[]) => {
  // Use gemini-3-flash-preview for basic text tasks as per guidelines
  const model = 'gemini-3-flash-preview';
  
  const contents = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: "You are the 'Neon Coach', an elite AI fitness engineer at NEON GYM. Your tone is motivating, direct, and scientifically grounded. You help users optimize their human performance through precision training, nutrition advice, and recovery strategies. Keep responses concise and formatted with markdown.",
        temperature: 0.7,
      }
    });
    // Use the .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The systems are currently recalibrating. Please try again in a moment, elite.";
  }
};

export const getNearbyHubs = async (lat: number, lng: number) => {
  try {
    // Maps grounding is only supported in Gemini 2.5 series models.
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Where are the nearest high-performance gyms or athletic centers to my current location?",
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: lat,
              longitude: lng
            }
          }
        }
      }
    });

    const text = response.text || "Scanning for nearby elite hubs...";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, chunks };
  } catch (error) {
    console.error("Maps Grounding Error:", error);
    return { text: "Location services error. Please check your permissions.", chunks: [] };
  }
};
