import { AITool } from '../types';

export const aiTools: AITool[] = [
  // Writing & Content
  {
    name: 'ChatGPT',
    description: 'Advanced conversational AI for writing, brainstorming, and problem-solving with GPT-4 capabilities',
    features: ['Conversational AI', 'Code Generation', 'Creative Writing'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Claude',
    description: "Anthropic's AI assistant for analysis, writing, and complex reasoning with strong safety features",
    features: ['Analysis', 'Writing', 'Safety'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://claude.ai'
  },
  {
    name: 'Jasper',
    description: 'AI copywriter for marketing content, blogs, and social media with brand voice training',
    features: ['Marketing Copy', 'Brand Voice', 'Templates'],
    pricing: 'paid',
    category: 'writing',
    url: 'https://jasper.ai'
  },
  {
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for marketing and sales content with workflow automation',
    features: ['Sales Copy', 'Workflows', 'Templates'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://copy.ai'
  },
  {
    name: 'Writesonic',
    description: 'AI writing assistant for articles, ads, and product descriptions with SEO optimization',
    features: ['SEO Writing', 'Article Generator', 'Ad Copy'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://writesonic.com'
  },
  {
    name: 'Grammarly',
    description: 'AI writing assistant for grammar, style, and tone improvement with plagiarism detection',
    features: ['Grammar Check', 'Tone Detection', 'Plagiarism'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://grammarly.com'
  },
  {
    name: 'QuillBot',
    description: 'AI paraphrasing tool with grammar checker and summarizer for content improvement',
    features: ['Paraphrasing', 'Summarization', 'Citation'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://quillbot.com'
  },
  {
    name: 'Notion AI',
    description: 'Integrated AI writing assistant within Notion workspace for notes and documents',
    features: ['Workspace Integration', 'Note Taking', 'Content Generation'],
    pricing: 'paid',
    category: 'writing',
    url: 'https://notion.so/product/ai'
  },
  {
    name: 'Rytr',
    description: 'AI writing assistant for blogs, ads, emails, and social media content',
    features: ['Blog Writing', 'Email Copy', 'Social Media'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://rytr.me'
  },
  {
    name: 'Wordtune',
    description: 'AI writing companion that rewrites and rephrases text for clarity and style',
    features: ['Text Rewriting', 'Clarity', 'Style Enhancement'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://wordtune.com'
  },
  {
    name: 'ContentBot',
    description: 'AI content generator for blog posts, ad copy, and social media with automation',
    features: ['Blog Posts', 'Ad Copy', 'Automation'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://contentbot.ai'
  },
  {
    name: 'Peppertype.ai',
    description: 'AI content marketing platform with over 25+ content types and templates',
    features: ['Content Marketing', '25+ Types', 'Templates'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://peppertype.ai'
  },
  {
    name: 'Simplified AI Writer',
    description: 'AI writing tool with design capabilities for complete content creation',
    features: ['Writing + Design', 'Templates', 'Collaboration'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://simplified.com'
  },
  {
    name: 'Hypotenuse AI',
    description: 'AI content generator for product descriptions, blog articles, and marketing copy',
    features: ['Product Descriptions', 'Blog Articles', 'Batch Generation'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://hypotenuse.ai'
  },
  {
    name: 'Anyword',
    description: 'AI copywriting platform with predictive performance scoring',
    features: ['Performance Scoring', 'A/B Testing', 'Brand Voice'],
    pricing: 'freemium',
    category: 'writing',
    url: 'https://anyword.com'
  },

  // Coding & Development
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code and entire functions in real-time',
    features: ['Code Completion', 'Multi-language', 'IDE Integration'],
    pricing: 'paid',
    category: 'coding',
    url: 'https://github.com/features/copilot'
  },
  {
    name: 'Cursor',
    description: 'AI-first code editor built for pair programming with AI assistance',
    features: ['AI Editor', 'Chat Interface', 'Code Generation'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://cursor.sh'
  },
  {
    name: 'Tabnine',
    description: 'AI code completion for faster and smarter coding across multiple IDEs',
    features: ['Auto-completion', 'Privacy-focused', 'Team Training'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://tabnine.com'
  },
  {
    name: 'Codeium',
    description: 'Free AI-powered code acceleration toolkit with chat and search features',
    features: ['Free Tier', 'Code Chat', 'Code Search'],
    pricing: 'free',
    category: 'coding',
    url: 'https://codeium.com'
  },
  {
    name: 'v0 by Vercel',
    description: 'Generate UI components and web apps with simple text prompts',
    features: ['UI Generation', 'React Components', 'Text to Code'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://v0.dev'
  },
  {
    name: 'Replit Ghostwriter',
    description: 'AI-powered coding assistant in the browser with collaborative features',
    features: ['Browser IDE', 'Collaboration', 'Deployment'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://replit.com'
  },
  {
    name: 'CodeT5',
    description: 'Open-source AI model for code understanding and generation',
    features: ['Open Source', 'Code Understanding', 'Multi-task'],
    pricing: 'free',
    category: 'coding',
    url: 'https://huggingface.co/Salesforce/codet5-large'
  },
  {
    name: 'Amazon CodeWhisperer',
    description: 'AI coding companion from AWS with security scanning',
    features: ['Security Scanning', 'AWS Integration', 'Enterprise Ready'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://aws.amazon.com/codewhisperer'
  },
  {
    name: 'Sourcegraph Cody',
    description: 'AI coding assistant that knows your entire codebase',
    features: ['Codebase Aware', 'Code Search', 'Enterprise'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://sourcegraph.com/cody'
  },
  {
    name: 'Phind',
    description: 'AI-powered search engine optimized for developers and technical questions',
    features: ['Developer Search', 'Code Examples', 'Technical Q&A'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://phind.com'
  },
  {
    name: 'Codex by OpenAI',
    description: 'AI system that translates natural language to code',
    features: ['Natural Language', 'Multiple Languages', 'Code Translation'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://openai.com/codex'
  },
  {
    name: 'DeepCode',
    description: 'AI-powered code review tool for finding bugs and security issues',
    features: ['Code Review', 'Bug Detection', 'Security Analysis'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://deepcode.ai'
  },
  {
    name: 'Kite',
    description: 'AI-powered coding assistant with intelligent code completions',
    features: ['Code Completions', 'Documentation', 'Multi-language'],
    pricing: 'free',
    category: 'coding',
    url: 'https://kite.com'
  },
  {
    name: 'Mutable AI',
    description: 'AI-accelerated software development with automated refactoring',
    features: ['Auto Refactoring', 'Code Generation', 'Bug Fixes'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://mutable.ai'
  },
  {
    name: 'Blackbox AI',
    description: 'AI-powered coding assistant for faster development',
    features: ['Code Search', 'Auto-complete', 'Error Detection'],
    pricing: 'freemium',
    category: 'coding',
    url: 'https://blackbox.ai'
  },

  // Design & Creative
  {
    name: 'Midjourney',
    description: 'AI art generator for creating stunning visual content with artistic styles',
    features: ['Artistic Styles', 'High Quality', 'Discord Bot'],
    pricing: 'paid',
    category: 'design',
    url: 'https://midjourney.com'
  },
  {
    name: 'DALL-E 3',
    description: 'Create realistic images and art from natural language descriptions',
    features: ['Text to Image', 'High Resolution', 'Safety Features'],
    pricing: 'paid',
    category: 'design',
    url: 'https://openai.com/dall-e-3'
  },
  {
    name: 'Stable Diffusion',
    description: 'Open-source AI model for generating images from text prompts',
    features: ['Open Source', 'Customizable', 'Local Install'],
    pricing: 'free',
    category: 'design',
    url: 'https://stablediffusionweb.com'
  },
  {
    name: 'Leonardo AI',
    description: 'AI image generation with fine-tuned models for various art styles',
    features: ['Fine-tuned Models', 'Image Editor', '3D Textures'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://leonardo.ai'
  },
  {
    name: 'Adobe Firefly',
    description: "Adobe's AI-powered creative tools integrated into Creative Cloud",
    features: ['Adobe Integration', 'Commercial Safe', 'Text Effects'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://firefly.adobe.com'
  },
  {
    name: 'Canva AI',
    description: "AI-powered design tools integrated into Canva's platform",
    features: ['Magic Design', 'Background Remover', 'Templates'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://canva.com/ai'
  },
  {
    name: 'Remove.bg',
    description: 'AI background removal tool for images with precision',
    features: ['Background Removal', 'API Available', 'Bulk Processing'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://remove.bg'
  },
  {
    name: 'Runway ML',
    description: 'AI-powered video editing and creative tools suite',
    features: ['Video Generation', 'Image to Video', 'Magic Tools'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://runwayml.com'
  },
  {
    name: 'Figma AI',
    description: 'AI features within Figma for design automation and assistance',
    features: ['Design Automation', 'Figma Integration', 'Plugin Ecosystem'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://figma.com'
  },
  {
    name: 'Photoshop AI',
    description: 'AI-powered features in Photoshop including generative fill and neural filters',
    features: ['Generative Fill', 'Neural Filters', 'Sky Replacement'],
    pricing: 'paid',
    category: 'design',
    url: 'https://adobe.com/products/photoshop'
  },
  {
    name: 'Ideogram',
    description: 'AI image generator with excellent text rendering capabilities',
    features: ['Text in Images', 'Typography', 'Logo Design'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://ideogram.ai'
  },
  {
    name: 'Pika Labs',
    description: 'AI video generation from text prompts and images',
    features: ['Text to Video', 'Image to Video', 'Animation'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://pika.art'
  },
  {
    name: 'Framer AI',
    description: 'AI-powered website design and prototyping tool',
    features: ['Website Generation', 'Prototyping', 'Responsive Design'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://framer.com'
  },
  {
    name: 'Uizard',
    description: 'AI-powered UI design tool that transforms sketches into digital designs',
    features: ['Sketch to Design', 'UI Generation', 'Wireframing'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://uizard.io'
  },
  {
    name: 'Looka',
    description: 'AI logo maker and brand identity platform',
    features: ['Logo Generation', 'Brand Kit', 'Marketing Materials'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://looka.com'
  },
  {
    name: 'Designs.ai',
    description: 'AI-powered creative suite for logos, videos, and marketing materials',
    features: ['Logo Maker', 'Video Creator', 'Design Assistant'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://designs.ai'
  },
  {
    name: 'Artbreeder',
    description: 'AI-powered image generation and editing with collaborative features',
    features: ['Image Breeding', 'Character Creation', 'Landscape Generation'],
    pricing: 'freemium',
    category: 'design',
    url: 'https://artbreeder.com'
  },

  // Productivity
  {
    name: 'Otter.ai',
    description: 'AI-powered meeting transcription and note-taking with speaker identification',
    features: ['Transcription', 'Meeting Notes', 'Speaker ID'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://otter.ai'
  },
  {
    name: 'Calendly',
    description: 'AI-assisted scheduling and calendar management with smart routing',
    features: ['Smart Scheduling', 'Calendar Sync', 'Workflow Automation'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://calendly.com'
  },
  {
    name: 'Reclaim.ai',
    description: 'AI calendar assistant for time blocking and focus time optimization',
    features: ['Time Blocking', 'Focus Time', 'Habit Tracking'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://reclaim.ai'
  },
  {
    name: 'Superhuman',
    description: 'AI-powered email client for faster email management and productivity',
    features: ['Email Triage', 'AI Compose', 'Keyboard Shortcuts'],
    pricing: 'paid',
    category: 'productivity',
    url: 'https://superhuman.com'
  },
  {
    name: 'ClickUp AI',
    description: 'AI-powered project management and productivity suite',
    features: ['Task Automation', 'Content Generation', 'Smart Templates'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://clickup.com/ai'
  },
  {
    name: 'Zapier',
    description: 'Automate workflows between apps with AI assistance',
    features: ['Workflow Automation', 'App Integrations', 'AI Actions'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://zapier.com'
  },
  {
    name: 'Motion',
    description: 'AI-powered task and calendar management with intelligent scheduling',
    features: ['AI Scheduling', 'Task Management', 'Time Optimization'],
    pricing: 'paid',
    category: 'productivity',
    url: 'https://usemotion.com'
  },
  {
    name: 'Todoist',
    description: 'Task management with AI-powered natural language processing',
    features: ['Natural Language', 'Smart Scheduling', 'Project Templates'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://todoist.com'
  },
  {
    name: 'Krisp',
    description: 'AI-powered noise cancellation for calls and meetings',
    features: ['Noise Cancellation', 'Voice Clarity', 'Meeting Insights'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://krisp.ai'
  },
  {
    name: 'Clockwise',
    description: 'AI assistant for focus time and meeting optimization',
    features: ['Focus Time', 'Meeting Optimization', 'Team Analytics'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://clockwise.com'
  },
  {
    name: 'Fireflies.ai',
    description: 'AI meeting assistant for recording, transcribing, and analyzing meetings',
    features: ['Meeting Recording', 'Transcription', 'Analytics'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://fireflies.ai'
  },
  {
    name: 'Mem',
    description: 'AI-powered note-taking app with automatic organization',
    features: ['Auto Organization', 'Smart Search', 'Knowledge Graph'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://mem.ai'
  },
  {
    name: 'Brain.fm',
    description: 'AI-generated music for focus, relaxation, and productivity',
    features: ['Focus Music', 'Neuroscience-based', 'Productivity Enhancement'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://brain.fm'
  },
  {
    name: 'Grammarly Business',
    description: 'AI writing assistant for teams with brand voice and analytics',
    features: ['Team Management', 'Brand Voice', 'Analytics'],
    pricing: 'paid',
    category: 'productivity',
    url: 'https://grammarly.com/business'
  },
  {
    name: 'Scheduler AI',
    description: 'AI-powered meeting scheduling assistant',
    features: ['Smart Scheduling', 'Email Integration', 'Time Zone Management'],
    pricing: 'freemium',
    category: 'productivity',
    url: 'https://scheduler.ai'
  },

  // Research & Analysis
  {
    name: 'Perplexity AI',
    description: 'AI-powered search engine with real-time information and source citations',
    features: ['Real-time Search', 'Source Citations', 'Pro Models'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://perplexity.ai'
  },
  {
    name: 'Consensus',
    description: 'AI-powered search for scientific research papers with evidence synthesis',
    features: ['Scientific Papers', 'Evidence Synthesis', 'Research Insights'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://consensus.app'
  },
  {
    name: 'Elicit',
    description: 'AI research assistant for literature reviews and systematic analysis',
    features: ['Literature Review', 'Data Extraction', 'Research Workflow'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://elicit.org'
  },
  {
    name: 'Semantic Scholar',
    description: 'AI-powered scientific literature search with paper insights',
    features: ['Academic Search', 'Citation Analysis', 'Paper Insights'],
    pricing: 'free',
    category: 'research',
    url: 'https://semanticscholar.org'
  },
  {
    name: 'Wolfram Alpha',
    description: 'Computational knowledge engine for math and data analysis',
    features: ['Computational Engine', 'Mathematics', 'Data Analysis'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://wolframalpha.com'
  },
  {
    name: 'ResearchRabbit',
    description: 'AI-powered research discovery platform for academic papers',
    features: ['Paper Discovery', 'Citation Networks', 'Research Collections'],
    pricing: 'free',
    category: 'research',
    url: 'https://researchrabbit.ai'
  },
  {
    name: 'Scite',
    description: 'AI-powered citation analysis tool for research papers',
    features: ['Citation Analysis', 'Smart Citations', 'Research Validation'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://scite.ai'
  },
  {
    name: 'Scholarcy',
    description: 'AI research summarization tool for academic papers',
    features: ['Paper Summarization', 'Key Findings', 'Reference Extraction'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://scholarcy.com'
  },
  {
    name: 'SciSpace',
    description: 'AI-powered research platform with paper analysis and Q&A',
    features: ['Paper Analysis', 'AI Q&A', 'Research Collaboration'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://typeset.io'
  },
  {
    name: 'Litmaps',
    description: 'AI-powered literature mapping for research discovery',
    features: ['Literature Mapping', 'Citation Networks', 'Research Visualization'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://litmaps.co'
  },
  {
    name: 'Iris.ai',
    description: 'AI research assistant for scientific literature discovery',
    features: ['Literature Discovery', 'Concept Mapping', 'Research Insights'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://iris.ai'
  },
  {
    name: 'Zeta Alpha',
    description: 'AI-powered research platform for technical documentation',
    features: ['Technical Search', 'Documentation AI', 'Research Analytics'],
    pricing: 'freemium',
    category: 'research',
    url: 'https://zeta-alpha.com'
  },

  // Media & Communication
  {
    name: 'ElevenLabs',
    description: 'AI voice synthesis and cloning technology with natural-sounding voices',
    features: ['Voice Cloning', 'Multilingual', 'Real-time Voice'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://elevenlabs.io'
  },
  {
    name: 'Synthesia',
    description: 'AI video creation with virtual presenters and avatars',
    features: ['AI Avatars', 'Text to Video', 'Custom Avatars'],
    pricing: 'paid',
    category: 'media',
    url: 'https://synthesia.io'
  },
  {
    name: 'Descript',
    description: 'AI-powered audio and video editing with text-based editing',
    features: ['Text-based Editing', 'Voice Cloning', 'Overdub'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://descript.com'
  },
  {
    name: 'Lumen5',
    description: 'AI video creation from text content with automated scene generation',
    features: ['Text to Video', 'Auto Scenes', 'Stock Media'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://lumen5.com'
  },
  {
    name: 'Murf AI',
    description: 'AI voiceover generator with natural voices and speech synthesis',
    features: ['Voice Generation', 'Multiple Languages', 'Voice Styles'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://murf.ai'
  },
  {
    name: 'Pictory',
    description: 'AI video creation from scripts and articles with automated editing',
    features: ['Script to Video', 'Auto Editing', 'Captions'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://pictory.ai'
  },
  {
    name: 'Speechify',
    description: 'AI text-to-speech with natural voices and speed control',
    features: ['Text to Speech', 'Speed Control', 'Multiple Platforms'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://speechify.com'
  },
  {
    name: 'VEED.io',
    description: 'AI-powered online video editor with automated features',
    features: ['Auto Subtitles', 'Video Templates', 'Screen Recording'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://veed.io'
  },
  {
    name: 'Filmora',
    description: 'AI-powered video editing software with smart features',
    features: ['Auto Editing', 'AI Effects', 'Smart Cutout'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://filmora.wondershare.com'
  },
  {
    name: 'Podcastle',
    description: 'AI-powered podcasting platform with editing and enhancement',
    features: ['Podcast Editing', 'Voice Enhancement', 'Auto Transcription'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://podcastle.ai'
  },
  {
    name: 'Resemble AI',
    description: 'AI voice cloning and synthesis for content creators',
    features: ['Voice Cloning', 'Real-time Voice', 'API Integration'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://resemble.ai'
  },
  {
    name: 'Kapwing',
    description: 'AI-powered video editing with smart tools and templates',
    features: ['Smart Video Tools', 'Templates', 'Collaboration'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://kapwing.com'
  },
  {
    name: 'Fliki',
    description: 'AI video and audio content creation from text',
    features: ['Text to Video', 'AI Voices', 'Media Library'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://fliki.ai'
  },
  {
    name: 'Clipchamp',
    description: 'AI-powered video editor with smart editing features',
    features: ['Auto Captions', 'Background Removal', 'Voice Generator'],
    pricing: 'freemium',
    category: 'media',
    url: 'https://clipchamp.com'
  },

  // Business & Marketing
  {
    name: 'HubSpot AI',
    description: 'AI-powered CRM and marketing automation with content generation',
    features: ['CRM Integration', 'Marketing Automation', 'Content AI'],
    pricing: 'freemium',
    category: 'business',
    url: 'https://hubspot.com'
  },
  {
    name: 'Salesforce Einstein',
    description: 'AI-powered CRM features for sales and marketing optimization',
    features: ['Sales AI', 'Lead Scoring', 'Predictive Analytics'],
    pricing: 'paid',
    category: 'business',
    url: 'https://salesforce.com/products/einstein'
  },
  {
    name: 'Mailchimp AI',
    description: 'AI-powered email marketing with smart recommendations',
    features: ['Email Optimization', 'Audience Insights', 'A/B Testing'],
    pricing: 'freemium',
    category: 'business',
    url: 'https://mailchimp.com'
  },
  {
    name: 'Monday.com AI',
    description: 'AI-powered project management with automation and insights',
    features: ['Project Automation', 'Predictive Analytics', 'Smart Notifications'],
    pricing: 'freemium',
    category: 'business',
    url: 'https://monday.com'
  },
  {
    name: 'Drift',
    description: 'AI-powered conversational marketing and sales platform',
    features: ['Chatbots', 'Lead Qualification', 'Sales Acceleration'],
    pricing: 'freemium',
    category: 'business',
    url: 'https://drift.com'
  },
  {
    name: 'Zendesk AI',
    description: 'AI-powered customer service and support automation',
    features: ['Auto Responses', 'Ticket Routing', 'Sentiment Analysis'],
    pricing: 'paid',
    category: 'business',
    url: 'https://zendesk.com'
  },
  {
    name: 'Hootsuite Insights',
    description: 'AI-powered social media analytics and content optimization',
    features: ['Social Analytics', 'Content Optimization', 'Trend Analysis'],
    pricing: 'paid',
    category: 'business',
    url: 'https://hootsuite.com'
  },
  {
    name: 'Tableau AI',
    description: 'AI-powered data visualization and business intelligence',
    features: ['Smart Analytics', 'Automated Insights', 'Natural Language Queries'],
    pricing: 'paid',
    category: 'business',
    url: 'https://tableau.com'
  },
  {
    name: 'Shopify AI',
    description: 'AI-powered e-commerce optimization and automation',
    features: ['Product Recommendations', 'Inventory Management', 'Customer Insights'],
    pricing: 'freemium',
    category: 'business',
    url: 'https://shopify.com'
  },
  {
    name: 'LinkedIn Sales Navigator AI',
    description: 'AI-powered sales prospecting and lead generation',
    features: ['Lead Scoring', 'Sales Insights', 'Relationship Mapping'],
    pricing: 'paid',
    category: 'business',
    url: 'https://business.linkedin.com/sales-solutions'
  },
  {
    name: 'Intercom AI',
    description: 'AI-powered customer communication and support',
    features: ['Smart Routing', 'Auto Responses', 'Customer Insights'],
    pricing: 'paid',
    category: 'business',
    url: 'https://intercom.com'
  },
  {
    name: 'Marketo AI',
    description: 'AI-powered marketing automation and lead nurturing',
    features: ['Lead Scoring', 'Predictive Content', 'Campaign Optimization'],
    pricing: 'paid',
    category: 'business',
    url: 'https://marketo.com'
  },

  // Education
  {
    name: 'Khan Academy AI',
    description: 'AI-powered personalized learning and tutoring platform',
    features: ['Personalized Learning', 'AI Tutoring', 'Progress Tracking'],
    pricing: 'free',
    category: 'education',
    url: 'https://khanacademy.org'
  },
  {
    name: 'Coursera AI',
    description: 'AI-powered course recommendations and learning optimization',
    features: ['Course Recommendations', 'Learning Analytics', 'Skill Assessment'],
    pricing: 'freemium',
    category: 'education',
    url: 'https://coursera.org'
  },
  {
    name: 'Duolingo AI',
    description: 'AI-powered language learning with personalized lessons',
    features: ['Adaptive Learning', 'Speech Recognition', 'Progress Tracking'],
    pricing: 'freemium',
    category: 'education',
    url: 'https://duolingo.com'
  },
  {
    name: 'Socratic by Google',
    description: 'AI-powered homework help and learning assistance',
    features: ['Homework Help', 'Step-by-step Solutions', 'Subject Coverage'],
    pricing: 'free',
    category: 'education',
    url: 'https://socratic.org'
  },
  {
    name: 'Gradescope AI',
    description: 'AI-powered grading and assessment platform for educators',
    features: ['Auto Grading', 'Feedback Generation', 'Analytics'],
    pricing: 'freemium',
    category: 'education',
    url: 'https://gradescope.com'
  },
  {
    name: 'Century AI',
    description: 'AI-powered adaptive learning platform for schools',
    features: ['Adaptive Learning', 'Student Analytics', 'Curriculum Alignment'],
    pricing: 'paid',
    category: 'education',
    url: 'https://century.tech'
  },
  {
    name: 'Cognii AI',
    description: 'AI-powered virtual learning assistant and tutor',
    features: ['Virtual Tutoring', 'Assessment', 'Personalized Feedback'],
    pricing: 'paid',
    category: 'education',
    url: 'https://cognii.com'
  },
  {
    name: 'Squirrel AI',
    description: 'AI-powered adaptive learning system for K-12 education',
    features: ['Adaptive Learning', 'Knowledge Graphs', 'Learning Analytics'],
    pricing: 'paid',
    category: 'education',
    url: 'https://squirrelai.com'
  },
  {
    name: 'Thinkster Math',
    description: 'AI-powered math tutoring and learning platform',
    features: ['Math Tutoring', 'Problem Solving', 'Progress Tracking'],
    pricing: 'paid',
    category: 'education',
    url: 'https://hellothinkster.com'
  },
  {
    name: 'EdApp AI',
    description: 'AI-powered microlearning platform for corporate training',
    features: ['Microlearning', 'Content Creation', 'Learning Analytics'],
    pricing: 'freemium',
    category: 'education',
    url: 'https://edapp.com'
  },
  {
    name: 'Carnegie Learning',
    description: 'AI-powered math and literacy learning solutions',
    features: ['Adaptive Learning', 'Learning Science', 'Student Support'],
    pricing: 'paid',
    category: 'education',
    url: 'https://carnegielearning.com'
  },
  {
    name: 'Knewton Alta',
    description: 'AI-powered adaptive learning for higher education',
    features: ['Adaptive Learning', 'Analytics', 'Content Integration'],
    pricing: 'paid',
    category: 'education',
    url: 'https://knewtonalta.com'
  },

  // Healthcare
  {
    name: 'IBM Watson Health',
    description: 'AI-powered healthcare analytics and decision support',
    features: ['Clinical Decision Support', 'Medical Analytics', 'Drug Discovery'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://ibm.com/watson-health'
  },
  {
    name: 'Google Health AI',
    description: 'AI-powered medical imaging and healthcare analytics',
    features: ['Medical Imaging', 'Predictive Analytics', 'Clinical Research'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://health.google'
  },
  {
    name: 'PathAI',
    description: 'AI-powered pathology and diagnostic assistance',
    features: ['Pathology AI', 'Diagnostic Support', 'Clinical Research'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://pathai.com'
  },
  {
    name: 'Babylon Health',
    description: 'AI-powered virtual healthcare and symptom checking',
    features: ['Symptom Checker', 'Virtual Consultations', 'Health Monitoring'],
    pricing: 'freemium',
    category: 'healthcare',
    url: 'https://babylonhealth.com'
  },
  {
    name: 'Ada Health',
    description: 'AI-powered symptom assessment and health guidance',
    features: ['Symptom Assessment', 'Health Insights', 'Medical Knowledge'],
    pricing: 'freemium',
    category: 'healthcare',
    url: 'https://ada.com'
  },
  {
    name: 'Zebra Medical Vision',
    description: 'AI-powered medical imaging analysis and diagnostics',
    features: ['Medical Imaging', 'Diagnostic AI', 'Radiological Analysis'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://zebra-med.com'
  },
  {
    name: 'Tempus',
    description: 'AI-powered precision medicine and clinical data analysis',
    features: ['Genomic Analysis', 'Clinical Data', 'Precision Medicine'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://tempus.com'
  },
  {
    name: 'Arterys',
    description: 'AI-powered medical imaging platform for cardiovascular analysis',
    features: ['Cardiovascular AI', 'Medical Imaging', 'Cloud Platform'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://arterys.com'
  },
  {
    name: 'Freenome',
    description: 'AI-powered early cancer detection through blood testing',
    features: ['Cancer Detection', 'Biomarker Analysis', 'Early Screening'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://freenome.com'
  },
  {
    name: 'Owkin',
    description: 'AI-powered drug discovery and medical research platform',
    features: ['Drug Discovery', 'Medical Research', 'Federated Learning'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://owkin.com'
  },
  {
    name: 'DeepMind Health',
    description: 'AI-powered healthcare research and clinical applications',
    features: ['Medical Research', 'Clinical AI', 'Healthcare Innovation'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://deepmind.com/applied/deepmind-health'
  },
  {
    name: 'Atomwise',
    description: 'AI-powered drug discovery and molecular analysis',
    features: ['Drug Discovery', 'Molecular Analysis', 'Pharmaceutical AI'],
    pricing: 'paid',
    category: 'healthcare',
    url: 'https://atomwise.com'
  }
];