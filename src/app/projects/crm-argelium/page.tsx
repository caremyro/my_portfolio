'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import FloatingElements from '@/components/FloatingElements';
import { useState } from 'react';

// Styled components
const ProjectContainer = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6rem 1.5rem 2rem;

  @media (min-width: 768px) {
    padding: 8rem 6rem 4rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #ccc;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const ProjectSubtitle = styled(motion.h2)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #ccc;
`;

const ProjectDescription = styled(motion.div)`
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 3rem;
  color: #ddd;
`;

const TechSection = styled(motion.section)`
  margin-bottom: 3rem;
`;

const TechTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const TechName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

const TechDescription = styled.p`
  font-size: 0.875rem;
  color: #ccc;
  line-height: 1.5;
`;

const FeaturesSection = styled(motion.section)`
  margin-bottom: 3rem;
`;

const FeaturesTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled(motion.li)`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ccc;
  }
`;

const ImageSection = styled(motion.section)`
  margin-bottom: 3rem;
`;

const ImageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 0.5rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
`;

const ImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  color: #ccc;
  text-align: center;
  padding: 1rem;
`;

const PlaceholderIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #666;
`;

const PlaceholderText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const techVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function CrmProject() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({...prev, [imageName]: true}));
  };

  return (
    <ProjectContainer>
      <FloatingElements variant="circles" />
      <FloatingElements variant="dots" />
      
      <ContentWrapper>
        <BackLink href="/#projects">
          ← Retour aux projets
        </BackLink>
        
        <ProjectTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CRM de Prospection Commerciale
        </ProjectTitle>
        
        <ProjectSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Développé pour Argelium - 2024
        </ProjectSubtitle>
        
        <ProjectDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Ce CRM (Customer Relationship Management) a été conçu pour optimiser la prospection 
            commerciale d&apos;Argelium. Il permet de gérer efficacement les contacts, suivre les 
            opportunités commerciales et automatiser les tâches répétitives pour maximiser 
            l&apos;efficacité de l&apos;équipe commerciale.
          </p>
          <p>
            L&apos;application facilite la prise de contact avec les prospects, le suivi des 
            interactions et la gestion du pipeline commercial, offrant ainsi une solution 
            complète pour améliorer les performances commerciales.
          </p>
        </ProjectDescription>
        
        <TechSection
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TechTitle>Technologies utilisées</TechTitle>
          <TechGrid>
            <TechCard
              custom={0}
              variants={techVariants}
              initial="hidden"
              animate="visible"
            >
              <TechName>Laravel</TechName>
              <TechDescription>
                Framework PHP robuste utilisé pour le backend, offrant une architecture MVC, 
                un ORM puissant (Eloquent) et un système de routage avancé.
              </TechDescription>
            </TechCard>
            
            <TechCard
              custom={1}
              variants={techVariants}
              initial="hidden"
              animate="visible"
            >
              <TechName>FilamentPHP</TechName>
              <TechDescription>
              Plugin Laravel permettant de créer rapidement des interfaces d&apos;administration 
              avec des fonctionnalités CRUD avancées et une personnalisation poussée.
              </TechDescription>
            </TechCard>
            
            <TechCard
              custom={2}
              variants={techVariants}
              initial="hidden"
              animate="visible"
            >
              <TechName>MySQL</TechName>
              <TechDescription>
                Système de gestion de base de données relationnelle pour stocker et 
                gérer efficacement les données des contacts et des opportunités.
              </TechDescription>
            </TechCard>
            
            <TechCard
              custom={3}
              variants={techVariants}
              initial="hidden"
              animate="visible"
            >
              <TechName>Bootstrap</TechName>
              <TechDescription>
                Framework CSS populaire pour créer des interfaces utilisateur responsives et modernes, 
                offrant un large éventail de composants prêts à l&apos;emploi et un système de grille flexible.
              </TechDescription>
            </TechCard>
          </TechGrid>
        </TechSection>
        
        <FeaturesSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeaturesTitle>Fonctionnalités principales</FeaturesTitle>
          <FeaturesList>
            <FeatureItem variants={itemVariants}>
              Gestion complète des contacts et des entreprises
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              Suivi des opportunités commerciales et du pipeline
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              Automatisation des tâches répétitives
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              Intégration avec les outils de communication (email, téléphone)
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              Gestion des rendez-vous et des rappels
            </FeatureItem>
          </FeaturesList>
        </FeaturesSection>
        
        <ImageSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ImageTitle>Captures d&apos;écran</ImageTitle>
          <ImageGrid>
            <ImageContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {!imageErrors['dashboard'] ? (
                <Image 
                  src="/images/crm-dashboard.jpg" 
                  alt="Tableau de bord du CRM" 
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={() => handleImageError('dashboard')}
                />
              ) : (
                <ImagePlaceholder>
                  <PlaceholderIcon>🖼️</PlaceholderIcon>
                  <PlaceholderText>
                    Image en cours d&apos;intégration<br />
                    Tableau de bord du CRM
                  </PlaceholderText>
                </ImagePlaceholder>
              )}
            </ImageContainer>
            <ImageContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {!imageErrors['contacts'] ? (
                <Image 
                  src="/images/crm-contacts.jpg" 
                  alt="Gestion des contacts" 
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={() => handleImageError('contacts')}
                />
              ) : (
                <ImagePlaceholder>
                  <PlaceholderIcon>🖼️</PlaceholderIcon>
                  <PlaceholderText>
                    Image en cours d&apos;intégration<br />
                    Gestion des contacts
                  </PlaceholderText>
                </ImagePlaceholder>
              )}
            </ImageContainer>
          </ImageGrid>
        </ImageSection>
      </ContentWrapper>
    </ProjectContainer>
  );
} 