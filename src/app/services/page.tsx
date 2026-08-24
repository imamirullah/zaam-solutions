import { Metadata } from 'next';
import { Cpu, Globe, ChevronRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services | Software Development & Digital Marketing | Zaam Solutions',
  description: 'Explore our custom software development, SaaS engineering, technical SEO, and conversion optimization advertising services.',
};

export default function ServicesIndexPage() {
  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <Badge variant="cyan">Capabilities Portal</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          Explore Our Services
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          Select a dedicated service branch below to view deep-dives into our custom engineering workflows, technical stack frameworks, and growth marketing case studies.
        </p>
      </div>

      {/* --- SERVICES PORTAL CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-6">
        {/* Software Dev Card */}
        <Card className="flex flex-col justify-between gap-6 p-8" borderGlow={true}>
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Custom Software Engineering</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Web apps, mobile apps, SaaS platforms, and automation tools built with high-performance frameworks and clean, secure code structures.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Button href="/services/software-development" variant="primary" fullWidth icon={<ChevronRight className="w-4 h-4" />}>
              Open Software Services
            </Button>
          </div>
        </Card>

        {/* Digital Marketing Card */}
        <Card className="flex flex-col justify-between gap-6 p-8" borderGlow={true}>
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-brand/10 flex items-center justify-center text-purple-brand">
              <Globe className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Full-Funnel Digital Marketing</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                SEO indexing strategies, performance advertising campaigns, content marketing assets, and GA4 dashboards optimized for conversion ROI.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Button href="/services/digital-marketing" variant="primary" fullWidth icon={<ChevronRight className="w-4 h-4" />}>
              Open Marketing Services
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
