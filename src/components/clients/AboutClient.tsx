'use client';

import React from 'react';
import { Shield, Cpu, Target, Award, Users, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function AboutClient() {
  const values = [
    {
      title: 'Transparency Over Jargon',
      desc: 'We do not hide behind metrics that do not matter. We explain our development workflows and campaign budgets in plain, honest terms.',
      icon: Cpu
    },
    {
      title: 'Data Over Guesswork',
      desc: 'Every marketing layout update and backend schema configuration is backed by analytical data benchmarks, not personal opinion.',
      icon: Target
    },
    {
      title: 'Long-Term Growth Over Quick Wins',
      desc: 'We focus on building indexable organic equity and stable software code bases that scale alongside your long-range business targets.',
      icon: Shield
    },
    {
      title: 'Collaboration Over Hand-offs',
      desc: 'Our developers and search strategists work side by side. Your dev team understands organic targets, and your marketers know the product inside out.',
      icon: Users
    }
  ];

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <Badge variant="cyan">Who We Are</Badge>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          We Build the Product.<br />We Build the Audience.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
          We're a team of developers, designers, strategists, and marketers who believe great software deserves great visibility — and great marketing needs a solid product behind it.
        </p>
      </div>

      {/* --- STORY SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Why We Are Different
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Most agencies pick a lane: either they build your website/app, or they run your ads. We do both, under one roof, with one team that talks to each other daily.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            That means your developers understand your growth goals, and your marketers understand your product inside out. No details get lost in hand-offs between separate teams.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" icon={<CheckCircle2 className="w-4 h-4" />}>
              Work With Us
            </Button>
          </div>
        </div>

        {/* Mission Glass Card */}
        <Card className="flex flex-col gap-6" borderGlow={true}>
          <div className="w-12 h-12 rounded-2xl bg-purple-brand/10 flex items-center justify-center text-purple-brand">
            <Target className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              To help businesses turn ideas into scalable digital products — and turn those products into visible, profitable brands.
            </p>
          </div>
        </Card>
      </div>

      {/* --- VALUES GRID --- */}
      <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Card key={i} className="flex gap-5 items-start p-6" hoverable={false}>
                <div className="w-10 h-10 rounded-xl bg-cyan-brand/10 flex-shrink-0 flex items-center justify-center text-cyan-brand">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{v.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
