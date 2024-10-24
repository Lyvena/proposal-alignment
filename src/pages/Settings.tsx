import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Brain } from "lucide-react";
import { useAISettings } from "@/hooks/useAISettings";

const Settings = () => {
  const { toast } = useToast();
  const { apiKey, setApiKey, isEnabled, setIsEnabled } = useAISettings();
  const [tempApiKey, setTempApiKey] = useState(apiKey);

  const handleSave = () => {
    setApiKey(tempApiKey);
    toast({
      title: "Settings saved",
      description: "Your AI settings have been updated successfully.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              AI Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">Enable AI Features</h3>
                <p className="text-sm text-gray-500">
                  Turn on AI-powered analysis and recommendations
                </p>
              </div>
              <Switch
                checked={isEnabled}
                onCheckedChange={setIsEnabled}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="apiKey" className="font-medium">
                OpenAI API Key
              </label>
              <Input
                id="apiKey"
                type="password"
                placeholder="sk-..."
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                Enter your OpenAI API key to enable AI features. Get your key from the
                {" "}
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  OpenAI dashboard
                </a>
              </p>
            </div>

            <Button onClick={handleSave}>Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;