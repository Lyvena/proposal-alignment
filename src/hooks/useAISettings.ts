import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AISettings {
  apiKey: string;
  isEnabled: boolean;
  setApiKey: (key: string) => void;
  setIsEnabled: (enabled: boolean) => void;
}

export const useAISettings = create<AISettings>()(
  persist(
    (set) => ({
      apiKey: '',
      isEnabled: false,
      setApiKey: (apiKey) => set({ apiKey }),
      setIsEnabled: (isEnabled) => set({ isEnabled }),
    }),
    {
      name: 'ai-settings',
    }
  )
);