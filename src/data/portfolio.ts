export interface Project {
  id: string;
  name: string;
  industry: string;
  category: 'software' | 'ai' | 'marketing';
  image: string; // URL or CSS gradient description
  techStack: string[];
  problem: string;
  solution: string;
  result: string;
  stat: string; // High-level stat to display on the card
}

export const portfolioData: Project[] = [
  {
    id: 'nexus-crm',
    name: 'Nexus B2B SaaS Platform',
    industry: 'Enterprise Software',
    category: 'software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    problem: 'An enterprise sales firm was managing pipelines across multiple spreadsheet programs, leading to 24% data discrepancy and lost lead allocations.',
    solution: 'Designed and deployed Nexus, a custom multi-tenant SaaS CRM with real-time sync, automated task distribution, and integrated subscription tiers.',
    result: 'Unified operations onto one platform, eliminating pipeline leaks and increasing sales rep efficiency by 35% within the first quarter.',
    stat: '35% Efficiency Gain'
  },
  {
    id: 'cerebro-ai',
    name: 'Cerebro Autonomous Support Agent',
    industry: 'Customer Experience / AI',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'OpenAI API', 'Vector Databases', 'FastAPI', 'React', 'AWS'],
    problem: 'A fast-growing fintech platform was drowning under high customer support ticket volumes, with average response times stretching to 14 hours.',
    solution: 'Engineered an autonomous AI agent integrated with their internal knowledge base (RAG) and CRM. Cerebro can retrieve data, perform actions, and resolve account issues securely.',
    result: 'Successfully resolved 72% of incoming support tickets without human intervention, reducing the median first-response time down to under 5 seconds.',
    stat: '72% Auto-Resolved'
  },
  {
    id: 'hyper-seo',
    name: 'Growth Engine SEO Campaign',
    industry: 'E-commerce & Retail',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    techStack: ['Technical SEO', 'Content Siloing', 'GA4 Analytics', 'Schema Markup'],
    problem: 'A luxury watch marketplace had zero organic visibility for high-intent keywords, spending over \$15,000 monthly on Google Ads with shrinking returns.',
    solution: 'Conducted a deep technical audit, optimized indexation and Core Web Vitals, re-architected product pages with rich schema, and executed a semantic content mapping campaign.',
    result: 'Increased organic traffic by 310% in 6 months, securing page 1 rankings for 85 high-intent keywords and saving \$12,000/month in PPC spend.',
    stat: '+310% Organic Traffic'
  },
  {
    id: 'apex-lead-gen',
    name: 'Apex Lead Capture Ecosystem',
    industry: 'Real Estate / Lead Gen',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    techStack: ['Google Ads', 'PPC', 'Tailwind CSS', 'Next.js', 'HubSpot API'],
    problem: 'A real estate investment group was receiving poor-quality inquiries from generic landing pages, resulting in a low closing rate (<1%).',
    solution: 'Designed interactive, fast-loading Next.js landing pages featuring localized property calculators and launched search campaigns targeting ultra-high-intent buyer keywords.',
    result: 'Boosted conversion rate from 1.2% to 5.4%, reducing cost-per-lead (CPL) by 42% and generating over 800 highly qualified investment applications.',
    stat: '-42% Cost-Per-Lead'
  },
  {
    id: 'quantum-iot',
    name: 'Quantum IoT Core Dashboard',
    industry: 'Industrial IoT',
    category: 'software',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'TypeScript', 'WebSockets', 'Tauri', 'Rust', 'TimescaleDB'],
    problem: 'A manufacturing client needed to visualize real-time machine telemetry (100k events/sec) in a desktop app, but their current system lagged and crashed.',
    solution: 'Built a lightweight Rust-based Tauri desktop app with a React frontend, rendering high-speed telemetry using custom Canvas layouts and WebSockets.',
    result: 'Achieved sub-10ms rendering latency under peak load with negligible CPU overhead, enabling operators to preemptively stop failing equipment.',
    stat: '<10ms Render Latency'
  },
  {
    id: 'intellect-bot',
    name: 'Intellect Lead Scoring Pipeline',
    industry: 'Business Intelligence',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'LangChain', 'LlamaIndex', 'Pinecone', 'Make.com'],
    problem: 'An enterprise consulting agency had 4,000+ monthly cold leads and spent hundreds of sales hours manually sorting through low-value submissions.',
    solution: 'Built an AI automation pipeline that scraped submitter website data, evaluated company size/industry via AI, and automatically scored and updated CRM profiles in real time.',
    result: 'Automated 100% of lead enrichment and scoring, flagging high-priority leads in 3 minutes and reclaiming 120 sales hours per month.',
    stat: '100% Lead Enrichment'
  }
];
