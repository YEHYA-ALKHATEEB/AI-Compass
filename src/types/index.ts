export interface AITool {
  name: string;
  description: string;
  features: string[];
  pricing: 'free' | 'freemium' | 'paid';
  category: string;
  url: string;
}