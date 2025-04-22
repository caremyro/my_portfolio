'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import FloatingElements from './FloatingElements';

const projects = [
  {
    title: 'Logiciel SaaS',
    description: 'Développé en alternance, gestion de données, UI/UX, API, et base de données.',
    techs: ['Laravel', 'FilamentPHP', 'Multi-tenancy', 'Mollie'],
    link: '/projects/saas-fidelisation',
  },
  {
    title: 'xxx',
    description: 'xxx',
    techs: ['xx', 'xx', 'x'],
    link: '#',
  },
  {
    title: 'xxx',
    description: 'xxx',
    techs: ['xx', 'xx', 'x'],
    link: '#',
  },
];

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

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

const ProjectDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: #ccc;
  line-height: 1.5;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #ccc;
`;

const ProjectLink = styled(Link)`
  font-size: 0.875rem;
  display: inline-block;
  color: white;
  position: relative;
  padding-bottom: 2px;
  text-decoration: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export default function Projects() {
  return (
    <Section>
      <FloatingElements variant="circles" />
      <FloatingElements variant="squares" />
      
      <ContentWrapper>
        <Heading
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projets
        </Heading>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.techs.map((tech, i) => (
                  <TechItem key={i}>
                    {tech}
                  </TechItem>
                ))}
              </TechList>
              <ProjectLink href={project.link}>
                Voir le projet →
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </Section>
  );
}
