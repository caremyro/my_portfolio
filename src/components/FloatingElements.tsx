'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  z-index: 0;
  pointer-events: none;
`;

const FloatingSquare = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  z-index: 0;
  pointer-events: none;
  transform: rotate(45deg);
`;

const FloatingDots = styled(motion.div)`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  z-index: 0;
  pointer-events: none;
`;

const Dot = styled(motion.div)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;

interface FloatingElementsProps {
  variant?: 'circles' | 'squares' | 'dots';
}

export default function FloatingElements({ variant = 'circles' }: FloatingElementsProps) {
  if (variant === 'circles') {
    return (
      <>
        <FloatingShape
          style={{ top: '10%', left: '10%', width: '300px', height: '300px' }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingShape
          style={{ bottom: '10%', right: '10%', width: '200px', height: '200px' }}
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </>
    );
  }

  if (variant === 'squares') {
    return (
      <>
        <FloatingSquare
          style={{ top: '15%', right: '15%', width: '150px', height: '150px' }}
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingSquare
          style={{ bottom: '20%', left: '20%', width: '100px', height: '100px' }}
          animate={{
            rotate: [45, 0, 45],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </>
    );
  }

  return (
    <FloatingDots
      style={{ top: '30%', right: '30%' }}
      animate={{
        y: [0, 20, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Dot
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Dot
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Dot
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </FloatingDots>
  );
} 