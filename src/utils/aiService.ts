// This is a mock AI service - in production, this would connect to a real AI API
export const analyzeProposal = async (proposal: {
  title: string;
  description: string;
  fundingAmount: number;
}) => {
  // Simulate API call
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