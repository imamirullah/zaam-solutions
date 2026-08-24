'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Cpu, FolderKanban, Info, MessageSquare } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Cpu },
    { name: 'Portfolio', path: '/portfolio', icon: FolderKanban },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 dark:bg-[#030308]/90 backdrop-blur-xl border-t border-slate-200/60 dark:border-white/5 px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.path}
              href={tab.path}
              className="flex flex-col items-center gap-1 flex-1 relative py-1"
            >
              {/* Active Indicator Backdrop */}
              {isActive && (
                <motion.span
                  layoutId="activeMobileIndicator"
                  className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-2xl -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}

              {/* Icon with active color scale */}
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-cyan-brand' : 'text-slate-400 dark:text-slate-550'
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.div>

              {/* Label */}
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
