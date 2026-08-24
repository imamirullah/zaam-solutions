'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Menu, X, PhoneCall } from 'lucide-react';
import Button from './ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-[#030308]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/icon.png" 
            alt="Zaam Solutions Logo" 
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex items-baseline gap-0.5">
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
              zaam
            </span>
            <span className="font-normal text-2xl tracking-tight text-[#f5a285]">
              solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className="relative text-sm tracking-wide transition-colors duration-200 py-1.5"
              >
                <span className={isActive ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-brand to-purple-brand rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="/contact" variant="primary" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
            Start a Project
          </Button>
        </div>

        {/* Mobile Quick Action Link */}
        <div className="block md:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="w-10 h-10 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <Send className="w-4.5 h-4.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
