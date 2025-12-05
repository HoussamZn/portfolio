import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS } from '../data/portfolioData';

// Construct a context string for the AI
const PORTFOLIO_CONTEXT = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website. 
Your goal is to answer questions about ${PERSONAL_INFO.name} based on the following data:

Bio: ${PERSONAL_INFO.bio}
Contact: ${PERSONAL_INFO.email}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Instructions:
1. Be professional, enthusiastic, and concise.
2. If asked about contact info, provide the email.
3. If asked about something not in the data, politely say you don't have that information but suggest contacting ${PERSONAL_INFO.name} directly.
4. Keep responses short (under 100 words) unless asked for details.
5. Use markdown for formatting if needed.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    // We will return a dummy session or handle error in UI, but here we can't do much without a key.
    // The UI should handle the missing key state.
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: PORTFOLIO_CONTEXT,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I didn't catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};