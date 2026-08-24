'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  borderGlow?: boolean;
  onClick?: () => void;
  animate?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  hoverable = true,
  borderGlow = true,
  onClick,
  animate = false,
  delay = 0,
}: CardProps) {
  const baseStyles = 'glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300';
  const hoverStyles = hoverable ? 'glass-panel-hover cursor-pointer' : '';
  const glowStyles = borderGlow ? 'glow-card' : '';
  
  const combinedClassName = `${baseStyles} ${hoverStyles} ${glowStyles} ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
        onClick={onClick}
        className={combinedClassName}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div onClick={onClick} className={combinedClassName}>
      {children}
    </div>
  );
}
