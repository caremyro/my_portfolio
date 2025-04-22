'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Construction } from 'lucide-react';

const Card = styled(motion.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  padding: 2rem;
  overflow: hidden;
  border: 2px solid #ff6b00;
  box-shadow: 0 0 20px rgba(255, 107, 0, 0.3),
              inset 0 0 20px rgba(255, 107, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 107, 0, 0.1) 10px,
      rgba(255, 107, 0, 0.1) 20px
    );
    animation: moveStripes 20s linear infinite;
  }

  @keyframes moveStripes {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b00;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 107, 0, 0.5);
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  color: #fff;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const ConstructionIcon = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #ff6b00;
  z-index: 1;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 107, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: #ff6b00;
  box-shadow: 0 0 10px #ff6b00;
`;

const Status = styled.div`
  margin-top: 1rem;
  color: #ff6b00;
  font-size: 0.875rem;
  position: relative;
  z-index: 1;
`;

export default function ConstructionCard() {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ConstructionIcon
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Construction size={24} />
      </ConstructionIcon>
      
      <Title>Nouveau Projet en Construction</Title>
      <Description>
        Un projet passionnant est en cours de développement. 
        Restez à l&apos;écoute pour découvrir cette nouvelle aventure !
      </Description>
      
      <ProgressBar>
        <Progress
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </ProgressBar>
      
      <Status>En cours de développement...</Status>
    </Card>
  );
} 