'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import FloatingElements from './FloatingElements';
import { Languages } from 'lucide-react';

const skills = {
  dev: ['Laravel', 'React', 'Tailwind CSS', 'Next.js', 'Symfony'],
  data: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'Firebase'],
  tools: ['Git', 'Docker', 'VS Code', 'JetBrains suite', 'Postman'],
  os: ['Windows', 'Linux', 'MacOS'],
  languages: ['Français', 'Anglais']
};

// Définition des composants Styled
const Section = styled.section`
  min-height: 100vh;
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
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillCategory = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: capitalize;
  color: white;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(45deg, #fff, #ccc);
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ccc;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export default function Skills() {
  return (
    <Section>
      <FloatingElements variant="squares" />
      <FloatingElements variant="dots" />
      
      <ContentWrapper>
        <Heading
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Stack & Compétences
        </Heading>

        <SkillsGrid>
          {Object.entries(skills).map(([category, items], index) => (
            <CategoryContainer
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <SkillCategory>{category}</SkillCategory>
              <SkillList>
                {items.map((skill, i) => (
                  <SkillItem key={i}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </CategoryContainer>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </Section>
  );
}
