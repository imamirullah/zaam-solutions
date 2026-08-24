import { 
  Cpu, Bot, Brain, Globe, Smartphone, Monitor, Cloud, 
  Terminal, ShieldCheck, Search, MapPin, Percent, 
  Megaphone, FileText, BarChart3, LineChart, Zap
} from 'lucide-react';
import { ElementType } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  features: string[];
  benefits: string;
}

export interface ServiceCategory {
  category: 'software' | 'marketing';
  title: string;
  subtitle: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    category: 'software',
    title: 'Software Development & AI Automation',
    subtitle: 'Build intelligent, scalable, and custom digital systems.',
    description: 'We engineer cutting-edge custom software and integrate artificial intelligence to optimize workflows, automate business tasks, and drive operational efficiency.',
    items: [
      {
        id: 'ai-automation',
        title: 'AI Automation & Agents',
        description: 'Deploy custom AI bots, autonomous agents, and workflows that operate 24/7, handling operations, customer queries, and data workflows.',
        icon: Bot,
        features: [
          'Autonomous Agent Design',
          'RAG (Retrieval-Augmented Generation)',
          'CRM & Database Integrations',
          'Natural Language Processing tasks'
        ],
        benefits: 'Reduce human labor costs by up to 70% and respond to operational needs in milliseconds.'
      },
      {
        id: 'custom-ai',
        title: 'Custom AI Solutions',
        description: 'Tailor-made machine learning models, semantic search engines, and computer vision systems designed specifically for your proprietary data.',
        icon: Brain,
        features: [
          'Proprietary Model Fine-Tuning',
          'Semantic Search & Vector DBs',
          'Predictive Data Analytics',
          'Computer Vision & OCR Systems'
        ],
        benefits: 'Unlock intelligence hidden within your business files to make rapid, data-informed decisions.'
      },
      {
        id: 'web-dev',
        title: 'Web Application Development',
        description: 'High-performance, secure, responsive web applications built with Next.js, React, and robust cloud infrastructures.',
        icon: Globe,
        features: [
          'React & Next.js Frameworks',
          'State-of-the-Art Core Web Vitals',
          'Dynamic User Dashboards',
          'Secure Authentication & Role Systems'
        ],
        benefits: 'Offer your clients lightning-fast load times and a premium, responsive layout on any device.'
      },
      {
        id: 'mobile-dev',
        title: 'Android & iOS App Development',
        description: 'Cross-platform and native mobile applications that offer a sleek, iOS-native look and feel with seamless device performance.',
        icon: Smartphone,
        features: [
          'React Native & Flutter Solutions',
          'App Store & Play Store Deployment',
          'Offline Synchronization Support',
          'Push Notifications & Native APIs'
        ],
        benefits: 'Engage your user base directly on their mobile phones with premium, app-store-ready builds.'
      },
      {
        id: 'desktop-dev',
        title: 'Desktop Application Development',
        description: 'Powerful, system-integrated desktop client applications for Windows and macOS, maximizing hardware utility.',
        icon: Monitor,
        features: [
          'Electron & Tauri Frameworks',
          'Native OS Integrations',
          'Local File Access & Hardware Acceleration',
          'Cross-Platform Deployment'
        ],
        benefits: 'Provide offline-first professional tools with high computational performance.'
      },
      {
        id: 'saas-dev',
        title: 'SaaS Development',
        description: 'End-to-end multi-tenant Software-as-a-Service platforms featuring automated subscription billing, analytics, and admin panels.',
        icon: Zap,
        features: [
          'Stripe & Lemon Squeezy Billings',
          'Tenant Isolation & Database Schemas',
          'Granular Role-based Access (RBAC)',
          'Usage Tracking & Subscriptions'
        ],
        benefits: 'Launch a monetization-ready digital product with scalable, secure multi-tenant structures.'
      },
      {
        id: 'api-cloud',
        title: 'Cloud & API Integrations',
        description: 'Scalable cloud backends, microservices, and custom APIs designed to link legacy systems and cloud databases seamlessly.',
        icon: Cloud,
        features: [
          'RESTful & GraphQL API Designs',
          'Serverless & Containerized Deployments',
          'Third-party Webhook Systems',
          'High-Throughput Middleware'
        ],
        benefits: 'Sync external data sources safely and ensure your services scale infinitely under peak load.'
      }
    ]
  },
  {
    category: 'marketing',
    title: 'Digital Marketing & Growth',
    subtitle: 'Data-driven marketing to scale user acquisition and revenue.',
    description: 'We combine technical search engine optimization, pay-per-click advertising, and landing page conversion optimization to unlock scalable growth channels.',
    items: [
      {
        id: 'seo',
        title: 'Search Engine Optimization (SEO)',
        description: 'Comprehensive SEO strategy encompassing technical audits, content strategies, and authority building to achieve top organic rankings.',
        icon: Search,
        features: [
          'In-Depth Keyword Research',
          'Technical SEO & Core Web Vitals Audit',
          'Semantic Content Siloing',
          'High-Authority Link Building'
        ],
        benefits: 'Secure sustainable, zero-cost traffic from Google that outranks competitors and converts indefinitely.'
      },
      {
        id: 'local-seo',
        title: 'Local SEO & Google Business Profile',
        description: 'Optimizations engineered to rank your local business high on Google Maps search and localized queries.',
        icon: MapPin,
        features: [
          'Google Business Profile Optimization',
          'Local Directory Citation Audits',
          'Review Generation Campaigns',
          'Geo-Targeted Content Creation'
        ],
        benefits: 'Dominate localized searches in your area to capture high-intent buyers looking for quick services.'
      },
      {
        id: 'google-ads',
        title: 'Google Ads & Pay-Per-Click (PPC)',
        description: 'High-ROI search, display, and performance-max campaigns built to drive direct lead generation and e-commerce checkouts.',
        icon: Percent,
        features: [
          'High-Intent Keyword Bidding',
          'A/B Testing Ad Copy & Layouts',
          'Negative Keyword Scrubbing',
          'Retargeting & Pixel Placements'
        ],
        benefits: 'Achieve immediate visibility and generate sales/leads on day one of launching campaigns.'
      },
      {
        id: 'social-marketing',
        title: 'Social Media Growth & Ads',
        description: 'Paid campaigns and organic blueprints on LinkedIn, Meta, and Twitter, placing your technology brand in front of decisions-makers.',
        icon: Megaphone,
        features: [
          'B2B LinkedIn Ad Targeting',
          'Meta Custom Audiences & Lookalikes',
          'Creative Asset Production',
          'Audience Engagement & Community'
        ],
        benefits: 'Build a recognizable technology presence that commands authority and attracts outbound leads.'
      },
      {
        id: 'content-marketing',
        title: 'Technical Content Marketing',
        description: 'Authoritative, developer-level articles, whitepapers, and guides that address exact customer paint points.',
        icon: FileText,
        features: [
          'B2B Whitepapers & Case Studies',
          'SEO-Optimized Blog Outlines',
          'Ebooks & Technical Guides',
          'Email Newsletters & Nurturing'
        ],
        benefits: 'Establish your brand as the leading technical voice, shortening long sales cycles.'
      },
      {
        id: 'analytics-cro',
        title: 'Analytics, CRO & Reporting',
        description: 'Full conversion tracking (GA4), funnel analysis, and UI adjustments to squeeze maximum revenue out of your traffic.',
        icon: BarChart3,
        features: [
          'Google Analytics 4 Funnel Setup',
          'Heatmapping & Scroll Maps (Hotjar)',
          'A/B Landing Page Split Testing',
          'Interactive ROI Dashboards'
        ],
        benefits: 'Understand exactly where users drop off and double your conversion rate without increasing marketing spend.'
      }
    ]
  }
];
