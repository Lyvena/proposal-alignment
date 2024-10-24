import OpenAI from 'openai';
import { useAISettings } from '@/hooks/useAISettings';

export const getOpenAIInstance = () => {
  const { apiKey, isEnabled } = useAISettings.getState();
  
  if (!isEnabled || !apiKey) {
    throw new Error('AI features are disabled or API key is not set');
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });
};

export const analyzeProposalWithAI = async (proposal: any) => {
  try {
    const openai = getOpenAIInstance();
    
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI expert analyzing research proposals for alignment with beneficial AI development."
        },
        {
          role: "user",
          content: `Please analyze this research proposal and provide an alignment score (0-100), potential risks, and suggestions for improvement: ${JSON.stringify(proposal)}`
        }
      ]
    });

    const analysis = response.choices[0].message.content;
    // Parse the AI response and return structured data
    // This is a simplified example - you'd want to add more robust parsing
    return {
      alignmentScore: 85,
      risks: ["Sample risk 1", "Sample risk 2"],
      suggestions: ["Sample suggestion 1", "Sample suggestion 2"]
    };
  } catch (error) {
    console.error('AI analysis failed:', error);
    throw error;
  }
};