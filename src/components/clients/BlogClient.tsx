'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'software' | 'marketing' | 'hybrid'>('all');

  const blogPosts = [
    // Software
    {
      title: 'Web App vs Website: Which Does Your Business Need?',
      category: 'software',
      summary: 'Explore the key differences in functionality, databases, user auth, and business logic to decide the right fit for your goals.',
      date: 'Aug 24, 2026',
      readTime: '6 min read'
    },
    {
      title: 'How Much Does It Cost to Build a Custom App in 2026?',
      category: 'software',
      summary: 'A transparent guide detailing scoping phases, engineering milestones, tech stack selections, and budget estimations for tech MVPs.',
      date: 'Aug 20, 2026',
      readTime: '8 min read'
    },
    {
      title: '5 Signs Your Business Needs Custom Software (Not Off-the-Shelf Tools)',
      category: 'software',
      summary: 'If spreadsheet limits, manual integrations, or security gaps are slowing down operations, it is time to build customized systems.',
      date: 'Aug 14, 2026',
      readTime: '5 min read'
    },
    {
      title: 'MVP Development: How to Launch Your SaaS Idea in 90 Days',
      category: 'software',
      summary: 'How to scale back scope, write essential core features, deploy code, and gather live client feedbacks in under three months.',
      date: 'Aug 10, 2026',
      readTime: '7 min read'
    },
    {
      title: 'Shopify vs Custom E-commerce: Which Should You Choose?',
      category: 'software',
      summary: 'Compare template-based storefront parameters against customized Jamstack databases to choose the optimal platform for transaction margins.',
      date: 'Aug 04, 2026',
      readTime: '6 min read'
    },
    // Marketing
    {
      title: 'SEO Checklist for New Websites: 20 Things to Do Before Launch',
      category: 'marketing',
      summary: 'A step-by-step checklist covering page speeds, canonical redirections, XML sitemaps, structured schemas, and indexing checks.',
      date: 'Jul 28, 2026',
      readTime: '9 min read'
    },
    {
      title: 'Google Ads vs Facebook Ads: Where Should You Spend Your Budget?',
      category: 'marketing',
      summary: 'Identify the differences between high-intent query capturing (Search Engine PPC) and display branding (Social Media campaigns).',
      date: 'Jul 22, 2026',
      readTime: '7 min read'
    },
    {
      title: 'How Long Does SEO Actually Take to Work?',
      category: 'marketing',
      summary: 'Deconstructing the crawl rates, domain authority metrics, search engine indexing cycles, and conversion tracking milestones.',
      date: 'Jul 15, 2026',
      readTime: '6 min read'
    },
    {
      title: 'Local SEO Guide for Small Businesses',
      category: 'marketing',
      summary: 'How to optimize your Google Business Profile, collect consistent reviews, align directory NAP listings, and rank for regional searches.',
      date: 'Jul 10, 2026',
      readTime: '5 min read'
    },
    {
      title: 'Content Marketing vs Paid Ads: What\'s Better for Startups?',
      category: 'marketing',
      summary: 'Reviewing short-term paid traffic capture against long-term compounding organic search engine equity for bootstrapped startups.',
      date: 'Jul 04, 2026',
      readTime: '8 min read'
    },
    // Combined / Hybrid
    {
      title: 'Why Your Website Redesign Needs an SEO Strategy From Day One',
      category: 'hybrid',
      summary: 'How to map page redirects, structure menu linkages, and build schema scripts before code release to prevent dropping search positions.',
      date: 'Jun 28, 2026',
      readTime: '7 min read'
    },
    {
      title: 'How We Helped our Clients Grow Organic Traffic by 150% in 6 Months',
      category: 'hybrid',
      summary: 'A technical review of code modifications, structured data adjustments, and content silos used to scale index rankings.',
      date: 'Jun 20, 2026',
      readTime: '8 min read'
    },
    {
      title: 'The Real Cost of Ignoring Website Speed and SEO',
      category: 'hybrid',
      summary: 'Analyzing bounce rates, organic ranking penalties, and lower customer conversion ratios caused by slow page rendering latency.',
      date: 'Jun 14, 2026',
      readTime: '5 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory === 'all') return true;
    return post.category === activeCategory;
  });

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-12">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <Badge variant="cyan">Knowledge Hub</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          Insights & Strategies
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          Deep-dives, guides, and engineering logs covering custom software architecture, autonomous AI integrations, and technical SEO growth funnels.
        </p>
      </div>

      {/* --- FILTER NAVIGATION --- */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto w-full p-1 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
        {(['all', 'software', 'marketing', 'hybrid'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-grow sm:flex-none py-2 px-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-955 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            {cat === 'hybrid' ? 'Thought Leadership' : cat}
          </button>
        ))}
      </div>

      {/* --- BLOG POSTS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full mt-4">
        {filteredPosts.map((post, idx) => (
          <Card key={idx} className="flex flex-col justify-between gap-6 p-6" borderGlow={true}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[10px] text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
                <span className="text-slate-300 dark:text-white/10">•</span>
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-cyan-brand transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-white/5">
              <Badge variant={post.category === 'software' ? 'cyan' : post.category === 'marketing' ? 'purple' : 'blue'}>
                {post.category === 'hybrid' ? 'Thought Leadership' : post.category}
              </Badge>
              <button className="text-xs text-cyan-brand font-bold inline-flex items-center gap-1 hover:text-purple-brand transition-colors cursor-pointer">
                <span>Read Post</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
