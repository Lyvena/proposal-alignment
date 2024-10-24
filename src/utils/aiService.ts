import { useAISettings } from '@/hooks/useAISettings';
import { analyzeProposalWithAI } from './openai';

export const analyzeProposal = async (proposal: {
  title: string;
  description: string;
  fundingAmount: number;
}) => {
  const { isEnabled } = useAISettings.getState();

  if (isEnabled) {
    return analyzeProposalWithAI(proposal);
  }

  // Fallback to mock data when AI is disabled
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    alignmentScore: Math.random() * 100,
    risks: [
      "Consider ethical implications",
      "Evaluate environmental impact",
      "Review data privacy concerns"
    ].filter(() => Math.random() > 0.5),
    suggestions: [
      "Add more detail about safety measures",
      "Include success metrics",
      "Clarify resource allocation"
    ].filter(() => Math.random() > 0.5)
  };
};

export const getRecommendations = async (proposalType: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    "Consider including quantitative metrics",
    "Add references to similar successful projects",
    "Detail risk mitigation strategies"
  ];
};