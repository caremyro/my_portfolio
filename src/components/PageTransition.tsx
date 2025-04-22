'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const TransitionWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  pointer-events: none;
`;

const TransitionLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-color);
  transform-origin: bottom;
`;

export default function PageTransition() {
  return (
    <TransitionWrapper>
      <TransitionLayer
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </TransitionWrapper>
  );
} 