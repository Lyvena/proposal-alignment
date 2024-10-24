import { motion } from "framer-motion";
import { Brain, AlertTriangle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AIAnalysisProps {
  analysis: {
    alignmentScore: number;
    risks: string[];
    suggestions: string[];
  };
}

const AIAnalysis = ({ analysis }: AIAnalysisProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            AI Analysis Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Alignment Score</h3>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-primary transition-all duration-1000"
                style={{ width: `${analysis.alignmentScore}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {analysis.alignmentScore.toFixed(1)}% aligned with AI safety guidelines
            </p>
          </div>

          {analysis.risks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Potential Risks
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {analysis.risks.map((risk, index) => (
                  <li key={index} className="text-gray-600">{risk}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.suggestions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-400" />
                Suggestions
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {analysis.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-600">{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIAnalysis;