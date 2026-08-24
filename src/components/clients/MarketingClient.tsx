'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, MessageSquare, Sparkles, 
  Cpu, Zap, ChevronDown, HelpCircle, Search, Target, Users, Mail, TrendingUp, BarChart3
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function MarketingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Rank higher on Google with technical SEO audit corrections, structured schema data, content strategy, and white-hat link building.',
      icon: Search
    },
    {
      title: 'Pay-Per-Click Advertising (PPC)',
      desc: 'Google Ads and Meta Ads campaigns managed and optimized for conversions and return-on-investment (ROI), not just raw traffic volume.',
      icon: Target
    },
    {
      title: 'Social Media Marketing',
      desc: 'Content design, copy strategy, scheduling, and active community outreach that builds organic audiences and brand authority.',
      icon: Users
    },
    {
      title: 'Content Marketing & Copywriting',
      desc: 'Long-form blog assets, optimized product landing pages, and email newsletter copy structured to index on Google and convert leads.',
      icon: Sparkles
    },
    {
      title: 'Email Marketing & Automation',
      desc: 'Tacit nurture flows, transaction confirmations, and active newsletters configured to convert prospects and retain current clients.',
      icon: Mail
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Reviewing web page flows, running A/B design tests, and cleaning up copy funnels to turn more of your active users into buyers.',
      icon: TrendingUp
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Clear, unified Looker Studio reporting dashboards so you always know search query positions, CPA margins, and organic visitor volumes.',
      icon: BarChart3
    }
  ];

  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term compounding asset. While minor technical audit corrections can show index improvements in 2-4 weeks, high-volume organic search rankings and keyword acquisition curves typically require 3 to 6 months of active content publishing and search optimization."
    },
    {
      q: "What's the difference between SEO and PPC — which should I choose?",
      a: "PPC (Pay-Per-Click ads) provides instant traffic and lead capture the moment campaigns are launched, but stops immediately once budget is turned off. SEO (Search Engine Optimization) takes longer to build but constructs a permanent search presence that drives high-quality organic traffic for free. We recommend running PPC to capture active demand while simultaneously optimizing your site for long-term SEO."
    },
    {
      q: "Do you provide monthly reporting?",
      a: "Yes. We configure clear, automated GA4 dashboards linked to search engines. You receive a direct link to track impressions, conversions, target search query positions, and acquisition channels in real time, accompanied by a monthly summary call."
    },
    {
      q: "Can you manage our social media content and posting?",
      a: "Yes. Our social media team handles full-funnel content schedules: graphic asset designs, caption copywriting, hashtag researches, and organic calendar publications, plus community management to grow real organic relationships."
    }
  ];

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-20">
      {/* Background Ambient Lights */}
      <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <Badge variant="purple">Growth Marketing</Badge>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          Marketing That Moves the Needle
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
          Building a great product is only half the job — people need to find it. Our digital marketing team combines SEO, paid advertising, content, and analytics to drive real, measurable growth.
        </p>
      </div>

      {/* --- SUB-SERVICES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {subServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Card key={idx} className="flex flex-col gap-5 p-6" hoverable={true}>
              <div className="w-10 h-10 rounded-xl bg-purple-brand/10 flex items-center justify-center text-purple-brand flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">{service.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="flex flex-col gap-10 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/40 dark:bg-white/[0.01] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-800 dark:text-white hover:text-purple-brand transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-purple-brand flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-0 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-white/5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- SERVICES CTA --- */}
      <div className="max-w-4xl mx-auto w-full mt-6">
        <Card className="p-8 md:p-12 flex flex-col items-center gap-6 text-center" borderGlow={true}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Need to Scale Your Traffic?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
            Let our marketing strategists review your current organic search positions, Google Ads structure, and copy funnels. Get in touch for a technical review.
          </p>
          <div className="flex gap-4">
            <Button href="/contact" variant="primary" icon={<MessageSquare className="w-4 h-4" />}>
              Get a Free Consultation
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
