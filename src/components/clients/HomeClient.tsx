'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cpu, Zap, Search, Bot, Brain, Globe, 
  Smartphone, Shield, CheckCircle2, ChevronRight, MessageSquare,
  Sparkles, Award, Star, ArrowRight, Fingerprint, MapPin, Monitor, TrendingUp, Mail,
  Database, Layers, Palette, CreditCard, Code2, Boxes, Target, Terminal
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { servicesData } from '@/data/services';
import { portfolioData } from '@/data/portfolio';
import { technologiesData } from '@/data/technologies';
import { SparklesCore } from '@/components/ui/sparkles';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const getTechIcon = (name: string) => {
  switch (name) {
    case 'Next.js & React':
      return <Globe className="w-5 h-5 text-cyan-500" />;
    case 'TypeScript':
      return <Code2 className="w-5 h-5 text-blue-500" />;
    case 'Node.js':
      return <Terminal className="w-5 h-5 text-emerald-500" />;
    case 'PostgreSQL':
      return <Database className="w-5 h-5 text-[#336791]" />;
    case 'Tailwind CSS':
      return <Palette className="w-5 h-5 text-teal-400" />;
    case 'Tauri & Electron':
      return <Monitor className="w-5 h-5 text-purple-400" />;
    case 'Docker & Kubernetes':
      return <Boxes className="w-5 h-5 text-[#2496ED]" />;
    case 'Stripe & Billing APIs':
      return <CreditCard className="w-5 h-5 text-[#635BFF]" />;
    case 'OpenAI GPT-4o / O1':
      return <Sparkles className="w-5 h-5 text-[#10a37f]" />;
    case 'Claude 3.5 Sonnet':
      return <Bot className="w-5 h-5 text-[#d97706]" />;
    case 'LangChain & LlamaIndex':
      return <Cpu className="w-5 h-5 text-cyan-400" />;
    case 'Pinecone / Vector DBs':
      return <Database className="w-5 h-5 text-[#EC4899]" />;
    case 'Python & FastAPI':
      return <Terminal className="w-5 h-5 text-[#3776AB]" />;
    case 'Make.com & Zapier':
      return <Zap className="w-5 h-5 text-[#ff6600]" />;
    case 'Hugging Face':
      return <Brain className="w-5 h-5 text-[#FFD21E]" />;
    case 'Google Analytics 4':
      return <TrendingUp className="w-5 h-5 text-[#E37400]" />;
    case 'Google Ads (PPC)':
      return <TrendingUp className="w-5 h-5 text-[#4285F4]" />;
    case 'Meta & LinkedIn Ads':
      return <Target className="w-5 h-5 text-[#1877F2]" />;
    case 'Semrush & Ahrefs':
      return <Search className="w-5 h-5 text-[#FF6422]" />;
    case 'Google Search Console':
      return <Search className="w-5 h-5 text-[#4285F4]" />;
    case 'HubSpot / HighLevel CRM':
      return <Bot className="w-5 h-5 text-[#FF7A59]" />;
    case 'Hotjar':
      return <MessageSquare className="w-5 h-5 text-[#FF1A1A]" />;
    default:
      return <Cpu className="w-5 h-5 text-cyan-brand" />;
  }
};

export default function HomeClient() {
  const [activeTechCategory, setActiveTechCategory] = useState<'software' | 'ai' | 'marketing'>('software');

  // Filter tech stack
  const filteredTech = technologiesData.filter(
    (t) => t.category === activeTechCategory
  );

  // Take 2 featured case studies
  const featuredProjects = portfolioData.slice(0, 2);

  return (
    <div className="relative w-full flex flex-col gap-16 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/8 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/8 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-blue-brand/5 blur-[120px] pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 px-6 w-full flex flex-col items-center justify-center overflow-hidden min-h-[85vh]">
        {/* Ribbed Cylindrical Column Gradient Background */}
        <div className="absolute inset-0 -z-35 ribbed-hero-bg opacity-95" />

        {/* Main Title Centered */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-slate-900 dark:text-white relative z-20 tracking-tight leading-tight"
        >
          We Build It. We Market It.<br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            You Grow.
          </span>
        </motion.h1>

        {/* Aceternity Sparkles Divider with Glowing Lines (Directly Masked) */}
        <div className="w-[90vw] sm:w-[40rem] md:w-[50rem] h-40 relative z-10 mt-[20px] [mask-image:radial-gradient(350px_200px_at_top,white_10%,transparent_100%)]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
          {/* Core Sparkles component */}
          <SparklesCore
            id="ts-particles-hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.0}
            particleDensity={8000}
            className="w-full h-full"
            particleColor={["#000000", "#06B6D4", "#A855F7", "#3B82F6", "#EC4899", "#EAB308", "#EF4444"]}
            speed={2.5}
          />
        </div>

        {/* Headline Copy & CTA Centered */}
        <div className="relative z-20 mt-[30px] flex flex-col items-center gap-6 max-w-3xl text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-350 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            A full-stack software development and digital marketing agency helping startups and businesses design powerful digital products and get them in front of the right audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-2"
          >
            <Button href="/contact" variant="primary" size="lg" icon={<MessageSquare className="w-4 h-4" />}>
              Get a Free Consultation
            </Button>
            <Button href="/services" variant="glass" size="lg">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="max-w-7xl mx-auto w-full px-6 py-12">
        <div 
          className="relative overflow-hidden grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-slate-100/30 dark:bg-white/[0.01] backdrop-blur-xl text-center group"
          onMouseMove={(e) => {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          {/* Spotlight Hover Glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.08), transparent 80%)'
            }}
          />

          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center lg:border-r lg:border-slate-200/30 lg:dark:border-white/5 py-4 transition-all duration-300 hover:scale-105 cursor-default">
            <span className="block text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-brand to-blue-brand bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              120+
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mt-3">
              Projects Delivered
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center lg:border-r lg:border-slate-200/30 lg:dark:border-white/5 py-4 transition-all duration-300 hover:scale-105 cursor-default">
            <span className="block text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-brand to-purple-brand bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              80+
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mt-3">
              Happy Clients
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center lg:border-r lg:border-slate-200/30 lg:dark:border-white/5 py-4 transition-all duration-300 hover:scale-105 cursor-default">
            <span className="block text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-brand to-cyan-brand bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              150%
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mt-3">
              Avg Traffic Growth
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center py-4 transition-all duration-300 hover:scale-105 cursor-default">
            <span className="block text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-brand to-purple-brand bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              15+ Yrs
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mt-3">
              Combined Team Exp
            </span>
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY COMPANIES SECTION --- */}
      <section className="relative max-w-7xl mx-auto w-[calc(100%-3rem)] py-32 px-6 md:px-12 overflow-hidden bg-slate-100/10 dark:bg-white/[0.01] border border-slate-200/50 dark:border-white/5 rounded-3xl backdrop-blur-sm">
        {/* Spotlight Beam Effect */}
        <div className="absolute top-[-30%] left-[-15%] w-[60%] h-[160%] bg-gradient-to-br from-indigo-500/20 via-blue-600/10 to-transparent blur-[120px] pointer-events-none -skew-x-12 origin-top-left -z-10" />
        {/* Theme-Adaptive Dotted Grid Background restored to the section backdrop */}
        <div 
          className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(rgba(0,0,0,0.22)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(rgba(255,255,255,0.4)_1.5px,transparent_1.5px)]" 
          style={{ 
            backgroundSize: '24px 24px'
          }} 
        />

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent tracking-tight leading-none">
            Brands with a spotlight
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base text-center mt-3 max-w-xl">
            Brands who funded us deserve more than a spotlight. Check out what they are saying.
          </p>

          {/* Logo Showcase Infinite Scroll Row (Solid body-matched background to mask dots behind it) */}
          <div className="relative w-full mt-12 overflow-hidden py-6 px-6 select-none bg-slate-50 dark:bg-black border border-slate-200/30 dark:border-white/5 rounded-2xl z-10">
            {/* Left and Right Fade Masking */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-black dark:via-black/85 dark:to-transparent z-10 pointer-events-none rounded-l-2xl" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-black dark:via-black/85 dark:to-transparent z-10 pointer-events-none rounded-r-2xl" />

            <style>{`
              @keyframes marquee-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-25%); }
              }
              .animate-marquee {
                animation: marquee-scroll 25s linear infinite;
              }
            `}</style>

            <div className="flex w-max items-center gap-16 md:gap-24 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
              {[
                // Logo 1: MSA Partners
                {
                  href: "https://msapartners.in",
                  content: (
                    <div className="flex items-center gap-2 hover:opacity-85 transition-opacity">
                      <img 
                        src="/logos/msapartners.png" 
                        alt="MSA Partners Logo" 
                        className="h-9 w-auto object-contain dark:invert" 
                      />
                      <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Partners</span>
                    </div>
                  )
                },
                // Logo 2: Club Human AI
                {
                  href: "https://clubhumanai.com",
                  content: (
                    <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#002B66] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)] shrink-0">
                        <Fingerprint className="text-white w-4.5 h-4.5" />
                      </div>
                      <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                        Club Human <span className="text-purple-500 font-mono">AI</span>
                      </span>
                    </div>
                  )
                },
                // Logo 3: Decobens
                {
                  href: "https://decobens.com",
                  content: (
                    <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                      <img 
                        src="/logos/decobens.png" 
                        alt="Decobens Logo" 
                        className="h-9 w-auto object-contain" 
                      />
                      <span className="text-base font-bold text-slate-800 dark:text-white font-serif">Decobens</span>
                    </div>
                  )
                },
                // Logo 4: Skillsha
                {
                  href: "https://skillsha.com",
                  content: (
                    <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                      <img 
                        src="/logos/skillsha.png" 
                        alt="Skillsha Logo" 
                        className="h-8 w-auto object-contain" 
                      />
                      <span className="text-base font-bold text-slate-800 dark:text-white">SkillSha</span>
                    </div>
                  )
                },
                // Logo 5: Xyro Synapse
                {
                  href: "https://xyrosynapse.com",
                  content: (
                    <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4500] to-[#992900] flex items-center justify-center shadow-[0_0_10px_rgba(255,69,0,0.3)] shrink-0">
                        <Cpu className="text-white w-4.5 h-4.5" />
                      </div>
                      <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                        Xyro<span className="text-[#FF4500] font-medium">Synapse</span>
                      </span>
                    </div>
                  )
                }
              ].concat(
                // Duplicate lists to make scroll loop seamless
                [
                  {
                    href: "https://msapartners.in",
                    content: (
                      <div className="flex items-center gap-2 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/msapartners.png" 
                          alt="MSA Partners Logo" 
                          className="h-9 w-auto object-contain dark:invert" 
                        />
                        <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Partners</span>
                      </div>
                    )
                  },
                  {
                    href: "https://clubhumanai.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#002B66] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)] shrink-0">
                          <Fingerprint className="text-white w-4.5 h-4.5" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                          Club Human <span className="text-purple-500 font-mono">AI</span>
                        </span>
                      </div>
                    )
                  },
                  {
                    href: "https://decobens.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/decobens.png" 
                          alt="Decobens Logo" 
                          className="h-9 w-auto object-contain" 
                        />
                        <span className="text-base font-bold text-slate-800 dark:text-white font-serif">Decobens</span>
                      </div>
                    )
                  },
                  {
                    href: "https://skillsha.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/skillsha.png" 
                          alt="Skillsha Logo" 
                          className="h-8 w-auto object-contain" 
                        />
                        <span className="text-base font-bold text-slate-800 dark:text-white">SkillSha</span>
                      </div>
                    )
                  },
                  {
                    href: "https://xyrosynapse.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4500] to-[#992900] flex items-center justify-center shadow-[0_0_10px_rgba(255,69,0,0.3)] shrink-0">
                          <Cpu className="text-white w-4.5 h-4.5" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                          Xyro<span className="text-[#FF4500] font-medium">Synapse</span>
                        </span>
                      </div>
                    )
                  }
                ]
              ).concat(
                [
                  {
                    href: "https://msapartners.in",
                    content: (
                      <div className="flex items-center gap-2 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/msapartners.png" 
                          alt="MSA Partners Logo" 
                          className="h-9 w-auto object-contain dark:invert" 
                        />
                        <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Partners</span>
                      </div>
                    )
                  },
                  {
                    href: "https://clubhumanai.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#002B66] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)] shrink-0">
                          <Fingerprint className="text-white w-4.5 h-4.5" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                          Club Human <span className="text-purple-500 font-mono">AI</span>
                        </span>
                      </div>
                    )
                  },
                  {
                    href: "https://decobens.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/decobens.png" 
                          alt="Decobens Logo" 
                          className="h-9 w-auto object-contain" 
                        />
                        <span className="text-base font-bold text-slate-800 dark:text-white font-serif">Decobens</span>
                      </div>
                    )
                  },
                  {
                    href: "https://skillsha.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/skillsha.png" 
                          alt="Skillsha Logo" 
                          className="h-8 w-auto object-contain" 
                        />
                        <span className="text-base font-bold text-slate-800 dark:text-white">SkillSha</span>
                      </div>
                    )
                  },
                  {
                    href: "https://xyrosynapse.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4500] to-[#992900] flex items-center justify-center shadow-[0_0_10px_rgba(255,69,0,0.3)] shrink-0">
                          <Cpu className="text-white w-4.5 h-4.5" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                          Xyro<span className="text-[#FF4500] font-medium">Synapse</span>
                        </span>
                      </div>
                    )
                  }
                ]
              ).concat(
                [
                  {
                    href: "https://msapartners.in",
                    content: (
                      <div className="flex items-center gap-2 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/msapartners.png" 
                          alt="MSA Partners Logo" 
                          className="h-9 w-auto object-contain dark:invert" 
                        />
                        <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Partners</span>
                      </div>
                    )
                  },
                  {
                    href: "https://clubhumanai.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#002B66] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)] shrink-0">
                          <Fingerprint className="text-white w-4.5 h-4.5" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                          Club Human <span className="text-purple-500 font-mono">AI</span>
                        </span>
                      </div>
                    )
                  },
                  {
                    href: "https://decobens.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/decobens.png" 
                          alt="Decobens Logo" 
                          className="h-9 w-auto object-contain" 
                        />
                        <span className="text-base font-bold text-slate-800 dark:text-white font-serif">Decobens</span>
                      </div>
                    )
                  },
                  {
                    href: "https://skillsha.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <img 
                          src="/logos/skillsha.png" 
                          alt="Skillsha Logo" 
                          className="h-8 w-auto object-contain" 
                        />
                        <span className="text-base font-bold text-slate-800 dark:text-white">SkillSha</span>
                      </div>
                    )
                  },
                  {
                    href: "https://xyrosynapse.com",
                    content: (
                      <div className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4500] to-[#992900] flex items-center justify-center shadow-[0_0_10px_rgba(255,69,0,0.3)] shrink-0">
                          <Cpu className="text-white w-4.5 h-4.5" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                          Xyro<span className="text-[#FF4500] font-medium">Synapse</span>
                        </span>
                      </div>
                    )
                  }
                ]
              ).map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 transform transition-transform hover:scale-105 duration-200"
                >
                  {logo.content}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SUMMARY SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 py-16 relative overflow-hidden">
        {/* Subtle grid dots backdrop for the entire services section */}
        <div 
          className="absolute inset-0 pointer-events-none -z-20 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]"
          style={{ backgroundSize: '24px 24px' }}
        />

        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Dual Engines For Digital Dominance
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We bridge the gap between complex software engineering and high-performing client growth marketing channels.
          </p>
        </div>

        {/* Dual Engines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          
          {/* Engine 01 - Software Development */}
          <div className="flex flex-col gap-6 relative">
            {/* Background cyan glow */}
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-cyan-brand/5 dark:bg-cyan-brand/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

            {/* Header / Engine Tag */}
            <div className="flex flex-col gap-2 border-b border-slate-200/50 dark:border-white/5 pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-brand font-bold">
                Engine 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Cpu className="w-7 h-7 text-cyan-brand" />
                Software Development
              </h3>
            </div>

            {/* Services Grid */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
              {/* Card 1: AI Automation */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-cyan-brand/30 dark:hover:border-cyan-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand transition-transform group-hover:scale-110">
                    <Zap className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      AI Automation
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Automate manual tasks and repetitive business workflows with intelligent AI pipeline integrations.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 2: AI Chat Bots */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-cyan-brand/30 dark:hover:border-cyan-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand transition-transform group-hover:scale-110">
                    <MessageSquare className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      AI Chat Bots
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Deploy conversational support agents trained on custom documentation to engage and convert 24/7.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 3: Website Development */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-cyan-brand/30 dark:hover:border-cyan-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand transition-transform group-hover:scale-110">
                    <Globe className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      Website Development
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      High-speed web systems and responsive search-optimized landing pages powered by modern engines.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 4: App Development */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-cyan-brand/30 dark:hover:border-cyan-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand transition-transform group-hover:scale-110">
                    <Smartphone className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      App Development
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Custom native iOS and Android mobile solutions built for speed, fluid animations, and responsiveness.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 5: Desktop App Development */}
              <CardContainer containerClassName="w-full h-full md:col-span-2">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-cyan-brand/30 dark:hover:border-cyan-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand transition-transform group-hover:scale-110">
                    <Monitor className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      Desktop App Development
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      High-performance cross-platform software systems engineered for desktop operations on macOS, Windows, and Linux.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>

          {/* Engine 02 - Digital Marketing */}
          <div className="flex flex-col gap-6 relative">
            {/* Background purple glow */}
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-purple-brand/5 dark:bg-purple-brand/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

            {/* Header / Engine Tag */}
            <div className="flex flex-col gap-2 border-b border-slate-200/50 dark:border-white/5 pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-brand font-bold">
                Engine 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Globe className="w-7 h-7 text-purple-brand" />
                Digital Marketing
              </h3>
            </div>

            {/* Services Grid */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
              {/* Card 1: SEO */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-purple-brand/30 dark:hover:border-purple-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-purple-brand/10 flex items-center justify-center text-purple-brand transition-transform group-hover:scale-110">
                    <TrendingUp className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      SEO
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Scale organic organic search traffic and claim authority rank results with optimized page architectures.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 2: Meta Ads */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-purple-brand/30 dark:hover:border-purple-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-purple-brand/10 flex items-center justify-center text-purple-brand transition-transform group-hover:scale-110">
                    <Sparkles className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      Meta Ads
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Convert high-converting target profiles across Facebook and Instagram with data-driven social campaigns.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 3: Google Ads */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-purple-brand/30 dark:hover:border-purple-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-purple-brand/10 flex items-center justify-center text-purple-brand transition-transform group-hover:scale-110">
                    <Search className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      Google Ads
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Target high-intent search terms and maximize conversion return on ad spend with PPC campaign tuning.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 4: Google Business Profile (GMB) */}
              <CardContainer containerClassName="w-full h-full">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-purple-brand/30 dark:hover:border-purple-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-purple-brand/10 flex items-center justify-center text-purple-brand transition-transform group-hover:scale-110">
                    <Shield className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      Google Business Profile (GMB)
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Claim and optimize local rankings to dominate search visibility on Google Maps and regional packs.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 5: Local SEO */}
              <CardContainer containerClassName="w-full h-full md:col-span-2">
                <CardBody className="group relative flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] border border-slate-200/50 dark:border-white/5 hover:border-purple-brand/30 dark:hover:border-purple-brand/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full h-full">
                  <CardItem translateZ="50" className="w-10 h-10 rounded-xl bg-purple-brand/10 flex items-center justify-center text-purple-brand transition-transform group-hover:scale-110">
                    <MapPin className="w-5 h-5" />
                  </CardItem>
                  <div className="flex flex-col gap-1">
                    <CardItem translateZ="60" as="h4" className="font-bold text-slate-900 dark:text-white text-base">
                      Local SEO
                    </CardItem>
                    <CardItem translateZ="80" as="p" className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Optimize location-targeted directories and regional landing pages to drive localized lead conversions.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>

        </div>
      </section>

      {/* --- CORE TEAM SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col gap-12 py-16 relative overflow-hidden">
        {/* Subtle grid dots backdrop for the team section */}
        <div 
          className="absolute inset-0 pointer-events-none -z-20 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]"
          style={{ backgroundSize: '24px 24px' }}
        />

        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Meet the Core Operators
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            The engineering and marketing operators behind your business scaling engines.
          </p>
        </div>

        {/* Team Grid of 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mt-6">
          {/* Member 1: Amir Khan */}
          <CardContainer containerClassName="w-full h-full">
            <CardBody className="bg-white/40 dark:bg-white/[0.02] dark:border-white/5 border-slate-200/60 w-full h-full rounded-2xl p-6 border flex flex-col gap-4 group/card hover:shadow-2xl dark:hover:shadow-cyan-500/[0.03]">
              {/* Profile Image (Rounded-full) */}
              <CardItem translateZ="100" className="w-24 h-24 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                  className="h-24 w-24 object-cover rounded-full group-hover/card:shadow-xl border-2 border-slate-200/80 dark:border-white/10"
                  alt="Amir Khan Portrait"
                />
              </CardItem>

              {/* Name & Designation */}
              <div className="flex flex-col gap-1">
                <CardItem
                  translateZ="50"
                  className="text-xl font-extrabold text-slate-900 dark:text-white"
                >
                  Amir Khan
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-xs font-mono uppercase tracking-wider text-cyan-brand font-bold"
                >
                  Founder & Technical Director
                </CardItem>
              </div>

              {/* LinkedIn & Email Icons */}
              <div className="flex gap-3 items-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-brand dark:hover:text-cyan-brand transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="mailto:amir@msapartners.in"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-brand dark:hover:text-cyan-brand transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </CardItem>
              </div>

              {/* Explanation (Experience & Info) */}
              <CardItem
                as="p"
                translateZ="70"
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1"
              >
                Over 10 years of experience building high-availability web systems, native applications, and complex cloud solutions.
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Member 2: Rohan Sharma */}
          <CardContainer containerClassName="w-full h-full">
            <CardBody className="bg-white/40 dark:bg-white/[0.02] dark:border-white/5 border-slate-200/60 w-full h-full rounded-2xl p-6 border flex flex-col gap-4 group/card hover:shadow-2xl dark:hover:shadow-purple-500/[0.03]">
              {/* Profile Image (Rounded-full) */}
              <CardItem translateZ="100" className="w-24 h-24 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
                  className="h-24 w-24 object-cover rounded-full group-hover/card:shadow-xl border-2 border-slate-200/80 dark:border-white/10"
                  alt="Rohan Sharma Portrait"
                />
              </CardItem>

              {/* Name & Designation */}
              <div className="flex flex-col gap-1">
                <CardItem
                  translateZ="50"
                  className="text-xl font-extrabold text-slate-900 dark:text-white"
                >
                  Rohan Sharma
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-xs font-mono uppercase tracking-wider text-purple-brand font-bold"
                >
                  Lead Growth Architect
                </CardItem>
              </div>

              {/* LinkedIn & Email Icons */}
              <div className="flex gap-3 items-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-brand dark:hover:text-purple-brand transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="mailto:rohan@msapartners.in"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-brand dark:hover:text-purple-brand transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </CardItem>
              </div>

              {/* Explanation (Experience & Info) */}
              <CardItem
                as="p"
                translateZ="70"
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1"
              >
                Specialist in conversion copywriting, Meta/Google ad funnel optimization, and technical search visibility systems.
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Member 3: Aditi Rao */}
          <CardContainer containerClassName="w-full h-full">
            <CardBody className="bg-white/40 dark:bg-white/[0.02] dark:border-white/5 border-slate-200/60 w-full h-full rounded-2xl p-6 border flex flex-col gap-4 group/card hover:shadow-2xl dark:hover:shadow-blue-500/[0.03]">
              {/* Profile Image (Rounded-full) */}
              <CardItem translateZ="100" className="w-24 h-24 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
                  className="h-24 w-24 object-cover rounded-full group-hover/card:shadow-xl border-2 border-slate-200/80 dark:border-white/10"
                  alt="Aditi Rao Portrait"
                />
              </CardItem>

              {/* Name & Designation */}
              <div className="flex flex-col gap-1">
                <CardItem
                  translateZ="50"
                  className="text-xl font-extrabold text-slate-900 dark:text-white"
                >
                  Aditi Rao
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-xs font-mono uppercase tracking-wider text-blue-brand font-bold"
                >
                  Lead AI Systems Engineer
                </CardItem>
              </div>

              {/* LinkedIn & Email Icons */}
              <div className="flex gap-3 items-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-brand dark:hover:text-blue-brand transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="mailto:aditi@msapartners.in"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-brand dark:hover:text-blue-brand transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </CardItem>
              </div>

              {/* Explanation (Experience & Info) */}
              <CardItem
                as="p"
                translateZ="70"
                className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1"
              >
                Specialist in building autonomous agent frameworks, pipeline integrations, and custom database bot models.
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* --- TECHNOLOGY STACK GRID --- */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col gap-12 py-16">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Modern, Production-Ready Stack
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            We use stable, scalable architectures to ensure your system loads quickly, indexes correctly, and handles high request volumes.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 max-w-lg mx-auto w-full p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
          {(['software', 'ai', 'marketing'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTechCategory(cat)}
              className={`flex-1 py-2.5 px-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeTechCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {cat === 'software' ? 'Software' : cat === 'ai' ? 'AI & Automation' : 'Growth Marketing'}
            </button>
          ))}
        </div>

        {/* Stack Grid Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col items-center justify-center gap-3 text-center p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-50/40 dark:bg-white/[0.01] hover:bg-slate-100/60 dark:hover:bg-white/[0.03] hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none cursor-default"
            >
              {/* Icon Wrapper with a subtle background glow */}
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/40 dark:border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                {getTechIcon(tech.name)}
              </div>

              <div className="flex flex-col gap-1 mt-1">
                <span className="text-sm font-extrabold text-slate-800 dark:text-white group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest font-mono">
                  {tech.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ENGAGEMENT WORKFLOW --- */}
      <section className="relative px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 py-24 overflow-hidden">
        {/* Subtle grid backdrop inside the section */}
        <div 
          className="absolute inset-0 pointer-events-none -z-20 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"
          style={{ backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/4 left-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-[-10%] w-[30vw] h-[30vw] rounded-full bg-purple-brand/5 blur-[120px] pointer-events-none -z-10" />

        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            The Delivery Pipeline
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            A transparent four-stage engineering and deployment cycle built to keep projects on track.
          </p>
        </div>

        {/* Vertical Alternating Timeline */}
        <div className="relative max-w-5xl mx-auto w-full flex flex-col mt-8">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-white/10" />

          {[
            {
              step: '01',
              badge: 'INITIATION',
              color: '#ff5a36',
              title: 'Blueprint & UX Logic',
              desc: 'Align on system specs, target buyer search terms, conversion metrics, and project goals.',
              tags: ['Wireframes', 'Identity'],
              icon: Search
            },
            {
              step: '02',
              badge: 'EXECUTION',
              color: '#3b82f6',
              title: 'Core Engineering',
              desc: 'Engineer custom React code, TypeScript schemas, API flows, and clean UI components.',
              tags: ['React/Node', 'API Bridge'],
              icon: Code2
            },
            {
              step: '03',
              badge: 'LOGIC',
              color: '#10b981',
              title: 'Intelligence Injection',
              desc: 'Integrate database endpoints, autonomous AI agent funnels, and SSL security parameters.',
              tags: ['AI Nodes', 'Auto-Scale'],
              icon: Cpu
            },
            {
              step: '04',
              badge: 'VELOCITY',
              color: '#a855f7',
              title: 'Growth & Scaling',
              desc: 'Force indexing, activate pay-per-click campaigns, track GA4 dashboards, and scale organic growth.',
              tags: ['Ad Systems', 'Media Sync'],
              icon: Zap
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={item.step} 
                className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12 last:mb-0"
              >
                {/* Step Circle Badge */}
                <div 
                  className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#08080c] flex items-center justify-center text-xs font-mono font-bold text-slate-500 dark:text-slate-400 z-20 shadow-sm"
                >
                  {item.step}
                </div>

                {/* Left Side Column */}
                {isEven ? (
                  // Spacer on Left
                  <div className="w-1/2 hidden md:block" />
                ) : (
                  // Card on Left
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 order-2 md:order-1">
                    <div className="flex flex-col sm:flex-row md:flex-row-reverse items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-white/40 dark:bg-white/[0.01] hover:bg-white/60 dark:hover:bg-white/[0.03] border border-slate-200/50 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full">
                      {/* Left: Icon & Tags (on desktop) */}
                      <div className="flex flex-col items-start gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Title & Description (on desktop, right-aligned) */}
                      <div className="flex flex-col gap-1 md:items-end md:text-right">
                        <div 
                          className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest"
                          style={{ color: item.color }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                          {item.badge}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed max-w-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Side Column */}
                {isEven ? (
                  // Card on Right
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-white/40 dark:bg-white/[0.01] hover:bg-white/60 dark:hover:bg-white/[0.03] border border-slate-200/50 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none w-full">
                      {/* Left: Title & Description */}
                      <div className="flex flex-col gap-1">
                        <div 
                          className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest"
                          style={{ color: item.color }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                          {item.badge}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed max-w-sm">
                          {item.desc}
                        </p>
                      </div>

                      {/* Right: Icon & Tags */}
                      <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Spacer on Right
                  <div className="w-1/2 hidden md:block order-2" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* --- FEATURED CASE STUDIES --- */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col gap-12 py-16">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Real Projects. Real Metrics.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            See how our integrated development and advertising strategies scale traffic, save support overhead, and increase conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col gap-6" borderGlow={true}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                  {project.industry}
                </span>
                <span className="text-[10px] text-cyan-brand font-bold uppercase tracking-wider bg-cyan-brand/10 px-2 py-0.5 rounded-full border border-cyan-brand/20">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  <strong>Challenge:</strong> {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-655 dark:text-slate-355">Outcome Metric:</span>
                <span className="text-sm font-black text-cyan-brand">{project.stat}</span>
              </div>

              <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-200/50 dark:border-white/5">
                <div className="flex gap-1.5">
                  {project.techStack.slice(0, 3).map((tech: string) => (
                    <span key={tech} className="text-[10px] bg-slate-200/50 dark:bg-white/5 px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href="/portfolio" className="text-xs text-cyan-brand font-bold inline-flex items-center gap-1 hover:text-purple-brand transition-colors">
                  <span>View Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* --- CLIENT TESTIMONIAL --- */}
      <section className="px-6 max-w-7xl mx-auto w-full py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 flex flex-col items-center gap-6 text-center" borderGlow={true}>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
            "Our website traffic doubled in 4 months and our new customer platform integration has reduced operational latency by over 60%. The combined engineering and SEO expertise is unmatched."
          </blockquote>
          <div className="flex flex-col gap-1">
            <cite className="not-italic font-bold text-sm text-slate-900 dark:text-white">
              Sarah Jenkins
            </cite>
            <span className="text-xs text-slate-450 uppercase tracking-widest font-semibold">
              Director of Operations, Velo E-commerce
            </span>
          </div>
        </Card>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="px-6 max-w-5xl mx-auto w-full text-center py-16">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="cyan">Start Growing</Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
            Ready to Build and Scale?
          </h2>
          <p className="text-slate-550 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Get in touch for a technical review of your current systems, search rankings, or project concepts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button href="/contact" variant="primary" size="lg" icon={<MessageSquare className="w-4.5 h-4.5" />}>
              Get a Free Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
