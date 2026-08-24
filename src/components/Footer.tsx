import React from 'react';
import Link from 'next/link';
import { GitBranch, Globe, Link as LinkIcon, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'AI Automation', path: '/services' },
    { name: 'SaaS Platforms', path: '/services' },
    { name: 'Web & Mobile Apps', path: '/services' },
    { name: 'SEO & Growth', path: '/services' },
    { name: 'Google Ads (PPC)', path: '/services' },
  ];

  const companyLinks = [
    { name: 'About Labs', path: '/about' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Engagement Process', path: '/' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Globe, url: '#' },
    { name: 'LinkedIn', icon: LinkIcon, url: '#' },
    { name: 'GitHub', icon: GitBranch, url: '#' },
  ];

  return (
    <footer className="bg-[#020205] border-t border-white/5 pt-16 pb-[calc(88px+env(safe-area-inset-bottom))] md:pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <img 
              src="/icon.png" 
              alt="Zaam Solutions Logo" 
              className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex items-baseline gap-0.5">
              <span className="font-extrabold text-2xl tracking-tight text-white">
                zaam
              </span>
              <span className="font-normal text-2xl tracking-tight text-[#f5a285]">
                solutions
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed max-w-xs mt-2">
            Engineering futuristic software, autonomous AI agent pipelines, and high-ROI digital marketing frameworks to scale enterprise growth.
          </p>
          <div className="flex items-center gap-3.5 mt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-brand/35 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-5">Services</h4>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="text-slate-400 hover:text-cyan-brand text-xs transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="text-slate-400 hover:text-cyan-brand text-xs transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-1">Join the Labs</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Get technical insights on custom AI agents and enterprise growth directly in your inbox.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-brand/50 flex-1 min-w-0"
            />
            <button className="bg-gradient-to-r from-cyan-brand to-blue-brand text-white text-xs font-semibold px-4 py-2 rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-slate-500 text-[10px] tracking-wider uppercase">
          &copy; {currentYear} Zaam Solutions. All Rights Reserved.
        </span>
        <div className="flex items-center gap-6 text-[10px] tracking-wider uppercase text-slate-500">
          <a href="#" className="hover:text-slate-350">Privacy Policy</a>
          <a href="#" className="hover:text-slate-350">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
