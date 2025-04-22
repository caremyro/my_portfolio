'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import styled from 'styled-components';

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

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
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

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialLinkItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  
  a {
    position: relative;
    transition: color 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: white;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const FormLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 0.875rem;
  color: #999;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    transform: translateY(-1.5rem) scale(0.8);
    color: white;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    transform: translateY(-1.5rem) scale(0.8);
    color: white;
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #fff, #ccc);
  color: black;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 0.5rem;
  color: #00ff00;
  margin-top: 1rem;
`;

const ErrorMessage = styled(motion.div)`
  padding: 1rem;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 0.5rem;
  color: #ff0000;
  margin-top: 1rem;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Erreur l&apos;envoi du message');
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <ContentContainer>
        <Heading
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Me Contacter
        </Heading>

        <ContentWrapper>
          {/* Réseaux sociaux */}
          <SocialLinks
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              Un projet, une question, une opportunité ? N&apos;hésite pas à m&apos;envoyer un message ou me contacter sur les réseaux !
            </p>
            <SocialLinkList>
              <SocialLinkItem
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail size={20} />
                <a href="mailto:remy.gouhier.pro@gmail.com">remy.gouhier.pro@gmail.com</a>
              </SocialLinkItem>
              <SocialLinkItem
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Github size={20} />
                <a href="https://github.com/caremyro" target="_blank" rel="noopener noreferrer">github.com/caremyro</a>
              </SocialLinkItem>
              <SocialLinkItem
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/rémy-gouhier-523a792b1" target="_blank" rel="noopener noreferrer">linkedin.com/in/rémy-gouhier-523a792b1</a>
              </SocialLinkItem>
            </SocialLinkList>
          </SocialLinks>

          {/* Formulaire */}
          <Form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FormGroup>
              <FormInput
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormLabel>Nom</FormLabel>
            </FormGroup>
            
            <FormGroup>
              <FormInput
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormLabel>Email</FormLabel>
            </FormGroup>
            
            <FormGroup>
              <FormTextarea
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
              />
              <FormLabel>Message</FormLabel>
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'} <Send size={18} />
            </SubmitButton>
            
            {submitStatus === 'success' && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Message envoyé avec succès !
              </SuccessMessage>
            )}
            
            {submitStatus === 'error' && (
              <ErrorMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Une erreur est survenue. Veuillez réessayer.
              </ErrorMessage>
            )}
          </Form>
        </ContentWrapper>
      </ContentContainer>
    </Section>
  );
}
