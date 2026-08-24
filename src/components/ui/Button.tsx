'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animate?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  animate = true,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-brand/50 select-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-brand via-blue-brand to-purple-brand text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border-none',
    secondary: 'bg-slate-100 dark:bg-white text-slate-900 dark:text-slate-950 hover:bg-slate-200 dark:hover:bg-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] border border-slate-200/60 dark:border-slate-200',
    outline: 'border border-slate-300 dark:border-slate-800 bg-transparent text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100/40 dark:hover:bg-slate-900/40 hover:text-slate-900 dark:hover:text-white',
    glass: 'glass-panel text-slate-700 dark:text-slate-200 hover:bg-slate-100/40 dark:hover:bg-white/10 hover:border-cyan-brand/40 hover:text-slate-900 dark:hover:text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_12px_rgba(239,68,68,0.2)]'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
          {renderContent()}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {renderContent()}
      </Link>
    );
  }

  if (animate) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClassName}
        {...(props as any)}
      >
        {renderContent()}
      </motion.button>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {renderContent()}
    </button>
  );
}
