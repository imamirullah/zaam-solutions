'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, MessageSquare, Sparkles, 
  Cpu, Zap, ChevronDown, HelpCircle, Smartphone, Globe, Shield, Terminal
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function SoftwareClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subServices = [
    {
      title: 'Web Application Development',
      desc: 'Custom, scalable web apps built with modern frameworks, tailored to your workflow.',
      icon: Cpu
    },
    {
      title: 'Mobile App Development (iOS & Android)',
      desc: 'Native and cross-platform apps designed for performance and user experience.',
      icon: Smartphone
    },
    {
      title: 'E-commerce Development',
      desc: 'Shopify, WooCommerce, and custom storefronts built to convert visitors into customers.',
      icon: Globe
    },
    {
      title: 'SaaS Product Development',
      desc: 'From MVP scoping to full-scale platform engineering, we help you build and iterate.',
      icon: Terminal
    },
    {
      title: 'API Integration & Automation',
      desc: 'Connect your internal tools and automate business workflows to save time and reduce errors.',
      icon: Zap
    },
    {
      title: 'UI/UX Design',
      desc: 'User research, wireframes, and layouts people actually enjoy using.',
      icon: Sparkles
    },
    {
      title: 'Website Maintenance & Support',
      desc: 'Ongoing updates, server monitoring, security patches, and performance optimizations.',
      icon: Shield
    }
  ];

  const faqs = [
    {
      q: "How long does it take to build a custom website or app?",
      a: "Typically between 3 to 12 weeks depending on the complexity of the project. Small websites or MVPs can be built and deployed in 3-4 weeks, while complex SaaS platforms or multi-feature mobile apps require 8-12 weeks of engineering, integration, and QA testing."
    },
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Yes. We provide flexible support retainers that include security updates, server monitoring, codebase backups, bug fixes, feature extensions, and performance monitoring."
    },
    {
      q: "Can you work with our existing development team?",
      a: "Yes, we regularly collaborate with in-house product and engineering teams. We coordinate via Git, join daily standups, and establish clear API and component-level boundaries."
    },
    {
      q: "What's the difference between a web app and a website?",
      a: "A website is primarily informational (static text and images for reading, like a brochure), whereas a web app is interactive and dynamic. Web apps require user authentication, database states, payment gateways, custom dashboards, and business logic."
    }
  ];

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-20">
      {/* Background Ambient Lights */}
      <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <Badge variant="cyan">Software Engineering</Badge>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          Custom Software Built for Growth
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
          Whether you need a customer-facing app, an internal tool, or a full SaaS platform, we design and build software that's fast, secure, and built to scale with your business.
        </p>
      </div>

      {/* --- SUB-SERVICES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {subServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Card key={idx} className="flex flex-col gap-5 p-6" hoverable={true}>
              <div className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand flex-shrink-0">
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
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-800 dark:text-white hover:text-cyan-brand transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-cyan-brand flex-shrink-0" />
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
      <div className="max-w-4xl mx-auto w-full text-center mt-6">
        <Card className="p-8 md:p-12 flex flex-col items-center gap-6" borderGlow={true}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Have a Specific Product Idea?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
            We partner with startups and companies to turn drafts and wireframes into live, secure production software. Get in touch for a scoping review.
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
