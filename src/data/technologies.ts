export interface Technology {
  name: string;
  category: 'software' | 'ai' | 'marketing';
  level: string; // e.g., 'Core', 'Infrastructure', 'Model', 'Tool'
  description: string;
}

export const technologiesData: Technology[] = [
  // Software Development
  { name: 'Next.js & React', category: 'software', level: 'Core Framework', description: 'Server-side rendered, lightning-fast web applications.' },
  { name: 'TypeScript', category: 'software', level: 'Language', description: 'Type-safe, robust code execution for modern app scaling.' },
  { name: 'Node.js', category: 'software', level: 'Backend Runtime', description: 'Scalable backend API development and service handling.' },
  { name: 'PostgreSQL', category: 'software', level: 'Database', description: 'Relational database systems with robust transaction support.' },
  { name: 'Tailwind CSS', category: 'software', level: 'Design System', description: 'Utility-first utility styling for gorgeous, fast interfaces.' },
  { name: 'Tauri & Electron', category: 'software', level: 'Desktop Client', description: 'Cross-platform native desktop application bundles.' },
  { name: 'Docker & Kubernetes', category: 'software', level: 'Infrastructure', description: 'Containerized deployment setups for microservices.' },
  { name: 'Stripe & Billing APIs', category: 'software', level: 'Integrations', description: 'Global subscription billing and payout handling.' },

  // AI & Automation
  { name: 'OpenAI GPT-4o / O1', category: 'ai', level: 'AI Model', description: 'Complex reasoning, agent decisions, and advanced analytics.' },
  { name: 'Claude 3.5 Sonnet', category: 'ai', level: 'AI Model', description: 'High-fidelity coding assistance and deep context processing.' },
  { name: 'LangChain & LlamaIndex', category: 'ai', level: 'Orchestration', description: 'Context-aware frameworks for RAG systems and autonomous agents.' },
  { name: 'Pinecone / Vector DBs', category: 'ai', level: 'Vector Storage', description: 'High-speed search databases for AI long-term memory.' },
  { name: 'Python & FastAPI', category: 'ai', level: 'Backend APIs', description: 'High-performance AI model routing and service handlers.' },
  { name: 'Make.com & Zapier', category: 'ai', level: 'Automation', description: 'Visual automation platforms linking internal cloud databases.' },
  { name: 'Hugging Face', category: 'ai', level: 'AI Models', description: 'Open-source models for custom local text-to-speech, translation.' },

  // Digital Marketing
  { name: 'Google Analytics 4', category: 'marketing', level: 'Analytics Platform', description: 'Funnel analytics, attribution modelling, and client reporting.' },
  { name: 'Google Ads (PPC)', category: 'marketing', level: 'Advertising', description: 'Search, Shopping, and Performance Max conversion campaigns.' },
  { name: 'Meta & LinkedIn Ads', category: 'marketing', level: 'Advertising', description: 'B2B/B2C targeted outreach to decision makers and consumers.' },
  { name: 'Semrush & Ahrefs', category: 'marketing', level: 'SEO Tooling', description: 'Keyword discovery, technical crawling, and competitor tracking.' },
  { name: 'Google Search Console', category: 'marketing', level: 'SEO Monitoring', description: 'Organic crawling health and key landing page search rankings.' },
  { name: 'HubSpot / HighLevel CRM', category: 'marketing', level: 'Growth / CRM', description: 'Automated email sequences, deal stages, and lead nurturing.' },
  { name: 'Hotjar', category: 'marketing', level: 'CRO Tooling', description: 'User session replays and scroll heatmaps for UX optimization.' }
];
