'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import FloatingElements from './FloatingElements';

// Définir les composants Styled
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
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
    background: linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
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

const Heading = styled(motion.h2)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.125rem;
  max-width: 48rem;
  line-height: 1.75rem;
  color: #ccc;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function About() {
  return (
    <Section>
      <FloatingElements variant="squares" />
      <FloatingElements variant="dots" />
      
      <ContentWrapper>
        <Heading
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          À propos de moi
        </Heading>

        <Paragraph
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Je suis actuellement étudiant en 3e année de BUT Informatique, parcours développement
          d&apos;applications. Grâce à mon alternance, j&apos;ai pu acquérir une solide expérience dans
          la création d&apos;un logiciel SaaS, en travaillant sur toutes les couches d&apos;une application
          web moderne.
          <br /><br />
          Je m&apos;intéresse particulièrement à la data et à l&apos;intelligence artificielle, domaines dans
          lesquels je souhaite me spécialiser en master dès l&apos;année prochaine.
        </Paragraph>
      </ContentWrapper>
    </Section>
  );
}
