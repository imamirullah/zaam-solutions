import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cyan' | 'purple' | 'blue';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold select-none border tracking-wider uppercase';
  
  const variants = {
    primary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    secondary: 'bg-slate-800 text-slate-300 border-slate-700',
    outline: 'bg-transparent text-slate-400 border-slate-800',
    cyan: 'bg-cyan-brand/10 text-cyan-brand border-cyan-brand/20',
    purple: 'bg-purple-brand/10 text-purple-brand border-purple-brand/20',
    blue: 'bg-blue-brand/10 text-blue-brand border-blue-brand/20',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
