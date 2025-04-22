'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CursorDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorRing = styled(motion.div)`
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorText = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  font-size: 14px;
  font-weight: 500;
  color: white;
  mix-blend-mode: difference;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
`;

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        setIsHoveringLink(true);
        setCursorText(link.textContent || '');
      } else {
        setIsHoveringLink(false);
        setCursorText('');
      }
    };

    const handleButtonHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      
      if (button) {
        setIsHoveringButton(true);
        setCursorText(button.textContent || '');
      } else {
        setIsHoveringButton(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHover);
    document.addEventListener('mouseover', handleButtonHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHover);
      document.removeEventListener('mouseover', handleButtonHover);
    };
  }, []);

  return (
    <>
      <CursorDot
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHoveringLink || isHoveringButton ? 0 : (isHovering ? 1.5 : 1),
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "linear"
        }}
      />
      <CursorRing
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHoveringLink || isHoveringButton ? 1.5 : (isHovering ? 1.5 : 1),
        }}
        transition={{
          type: "tween",
          duration: 0.15,
          ease: "linear"
        }}
      />
      <CursorText
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isHoveringLink || isHoveringButton ? 1 : 0,
          scale: isHoveringLink || isHoveringButton ? 1 : 0.5,
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeOut"
        }}
      >
        {cursorText}
      </CursorText>
    </>
  );
} 