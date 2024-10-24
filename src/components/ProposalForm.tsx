import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { analyzeProposal, getRecommendations } from '@/utils/aiService';
import AIAnalysis from './AIAnalysis';
import { Loader2 } from 'lucide-react';

const ProposalForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const { toast } = useToast();
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const onSubmit = async (data) => {
    setIsAnalyzing(true);
    try {
      const aiAnalysis = await analyzeProposal(data);
      setAnalysis(aiAnalysis);
      
      toast({
        title: "Proposal Analyzed",
        description: "Your proposal has been analyzed by our AI system.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze the proposal. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  React.useEffect(() => {
    const loadRecommendations = async () => {
      const recs = await getRecommendations("research");
      setRecommendations(recs);
    };
    loadRecommendations();
  }, []);

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Submit a Proposal</h2>
        
        <div className="space-y-2">
          <Input {...register('title')} placeholder="Proposal Title" />
          {recommendations.length > 0 && (
            <div className="text-sm text-gray-600">
              AI Tip: {recommendations[0]}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Textarea 
            {...register('description')} 
            placeholder="Proposal Description" 
            className="min-h-[150px]"
          />
          {watch('description')?.length > 0 && recommendations[1] && (
            <div className="text-sm text-gray-600">
              AI Tip: {recommendations[1]}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Input 
            {...register('fundingAmount')} 
            type="number" 
            placeholder="Funding Amount ($)" 
          />
          {watch('fundingAmount') > 0 && recommendations[2] && (
            <div className="text-sm text-gray-600">
              AI Tip: {recommendations[2]}
            </div>
          )}
        </div>

        <Button type="submit" disabled={isAnalyzing}>
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            'Submit Proposal'
          )}
        </Button>
      </form>

      {analysis && <AIAnalysis analysis={analysis} />}
    </div>
  );
};

export default ProposalForm;