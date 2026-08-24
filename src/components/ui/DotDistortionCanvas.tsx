'use client';

import React, { useRef, useEffect } from 'react';

export default function DotDistortionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Track original dot grid coordinates
    interface Dot {
      x: number;
      y: number;
      curX: number;
      curY: number;
    }

    let dots: Dot[] = [];
    const spacing = 30; // Grid cell spacing

    const initGrid = () => {
      dots = [];
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          dots.push({
            x,
            y,
            curX: x,
            curY: y
          });
        }
      }
    };

    initGrid();

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', initGrid);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)';

      const forceRadius = 120; // Mouse push radius
      const forceFactor = 30;  // Push force strength

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Calculate vector from mouse to dot
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.x;
        let targetY = dot.y;

        if (dist < forceRadius) {
          // Push dot away from mouse
          const force = (forceRadius - dist) / forceRadius; // 0 to 1
          const angle = Math.atan2(dy, dx);
          
          targetX = dot.x + Math.cos(angle) * force * forceFactor;
          targetY = dot.y + Math.sin(angle) * force * forceFactor;
        }

        // Interpolate current position to target for smooth trailing
        dot.curX += (targetX - dot.curX) * 0.15;
        dot.curY += (targetY - dot.curY) * 0.15;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.curX, dot.curY, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', initGrid);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ display: 'block' }}
    />
  );
}
