'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ViewButton = styled.span`
  display: inline-block;
  background: linear-gradient(45deg, #fff, #ccc);
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: translateX(5px);
  }
`;

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <CardLink href={link}>
        <ImageContainer>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ViewButton>Voir le projet →</ViewButton>
        </Content>
      </CardLink>
    </Card>
  );
} 