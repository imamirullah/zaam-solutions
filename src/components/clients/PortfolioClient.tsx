'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle, Database, Sparkles, Filter, ExternalLink, Star } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { portfolioData, Project } from '@/data/portfolio';

export default function PortfolioClient() {
  const [filter, setFilter] = useState<'all' | 'software' | 'ai' | 'marketing'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = portfolioData.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-12">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <Badge variant="blue">Our Work</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          Case Studies & Results
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          See how we've helped businesses build custom software and grow their digital presence — real projects, real results.
        </p>
      </div>

      {/* --- FILTER NAVIGATION --- */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto w-full p-1 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
        {(['all', 'software', 'ai', 'marketing'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setExpandedId(null);
            }}
            className={`flex-grow sm:flex-none py-2 px-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              filter === cat
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-4">
        {filteredProjects.map((project: Project) => {
          const isExpanded = expandedId === project.id;
          return (
            <Card key={project.id} className="flex flex-col justify-between gap-6" borderGlow={true}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider">
                    {project.industry}
                  </span>
                  <Badge variant={project.category === 'software' ? 'cyan' : 'purple'}>
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {project.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  <strong>Challenge:</strong> {project.problem}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Outcome Metric:</span>
                <span className="text-sm font-black text-cyan-brand">{project.stat}</span>
              </div>

              {/* Expansion block */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden flex flex-col gap-4 border-t border-slate-200/50 dark:border-white/5 pt-4"
                  >
                    <div className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-450 leading-relaxed">
                      <strong className="text-slate-700 dark:text-slate-350">Solution:</strong>
                      <p>{project.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech: string) => (
                        <span key={tech} className="text-[10px] bg-slate-200/60 dark:bg-white/5 px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Read More button */}
              <button
                onClick={() => toggleExpand(project.id)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-brand transition-colors cursor-pointer"
              >
                <span>{isExpanded ? 'Show Less Details' : 'Read Full Case Study'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </Card>
          );
        })}
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="max-w-3xl mx-auto w-full text-center mt-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Ready to Achieve Similar Results?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl mx-auto mt-2">
          Let's review your product specifications and marketing targets to construct an actionable execution plan.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/contact" variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
            Start Your Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
