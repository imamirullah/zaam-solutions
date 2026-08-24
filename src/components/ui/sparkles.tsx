'use client';

import React, { useId } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface ParticlesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string | string[];
  particleDensity?: number;
}

const particlesInit = async (engine: any) => {
  await loadSlim(engine);
};

export function SparklesCore(props: ParticlesProps) {
  const {
    id,
    className,
    background = 'transparent',
    minSize = 0.6,
    maxSize = 1.2,
    speed = 4,
    particleColor = '#ffffff',
    particleDensity = 120,
  } = props;

  const generatedId = useId();

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id={id || generatedId}
        className={className}
        options={{
          background: {
            color: {
              value: background,
            },
          },
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColor,
            },
            move: {
              enable: true,
              speed: {
                min: 0.1,
                max: speed / 10,
              },
              direction: 'none',
              random: false,
              straight: false,
              outModes: {
                default: 'out',
              },
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: particleDensity,
            },
            opacity: {
              value: {
                min: 0.1,
                max: 1,
              },
              animation: {
                enable: true,
                speed: speed,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: {
                min: minSize,
                max: maxSize,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
