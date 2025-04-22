'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import FloatingElements from './FloatingElements';

// Définir les composants Styled
const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: black;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    z-index: 1;
  }

  @media (min-width: 768px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const SubHeading = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #999;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 45rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ccc;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled(motion.a)`
  margin-top: 2rem;
  display: inline-block;
  background: linear-gradient(45deg, #fff, #ccc);
  color: black;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255,255,255,0.2);
  }
`;

const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.1;
  background: radial-gradient(circle at center, transparent 0%, black 100%);
`;

export default function Me() {
  return (
    <Section id="top">
      <BackgroundAnimation
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <FloatingElements variant="circles" />
      <FloatingElements variant="dots" />
      
      <ContentWrapper>
        <Heading
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Salut, moi c'est Rémy
        </Heading>

        <SubHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Développeur & Data Enthusiast
        </SubHeading>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Étudiant en 3e année de BUT Informatique, passionné par le développement et la data.
          En alternance sur un logiciel SaaS, je vise un master en science des données ou IA.
        </Paragraph>

        <Button
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir mes projets
        </Button>
      </ContentWrapper>
    </Section>
  );
}
