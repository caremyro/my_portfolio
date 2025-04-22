'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
  }
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const DownloadButton = styled(motion.a)`
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1001;
  padding: 2rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const MobileNavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileDownloadButton = styled(motion.a)`
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { 
        type: "tween", 
        duration: 0.3 
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        type: "tween", 
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const mobileLinkVariants = {
    closed: { 
      opacity: 0,
      x: 20
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 50) {
        document.body.style.setProperty('--nav-bg', 'rgba(0, 0, 0, 0.9)');
      } else {
        document.body.style.setProperty('--nav-bg', 'rgba(0, 0, 0, 0.8)');
      }
    };
    
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);
  
  return (
    <>
      <Nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <Logo href="/">Portfolio</Logo>
        
        <NavLinks>
          <NavLink href="/#about">À propos</NavLink>
          <NavLink href="/#projects">Projets</NavLink>
          <NavLink href="/#skills">Compétences</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
          <DownloadButton 
            href="/cv.pdf" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            CV
          </DownloadButton>
        </NavLinks>
        
        <MobileMenuButton
          onClick={() => setIsOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </MobileMenuButton>
      </Nav>
      
      {isOpen && (
        <MobileMenu
          initial="closed"
          animate="open"
          variants={mobileMenuVariants}
        >
          <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          
          <MobileNavLink 
            href="/#about" 
            variants={mobileLinkVariants}
            onClick={() => setIsOpen(false)}
          >
            À propos
          </MobileNavLink>
          
          <MobileNavLink 
            href="/#skills" 
            variants={mobileLinkVariants}
            onClick={() => setIsOpen(false)}
          >
            Compétences
          </MobileNavLink>
          
          <MobileNavLink 
            href="/#projects" 
            variants={mobileLinkVariants}
            onClick={() => setIsOpen(false)}
          >
            Projets
          </MobileNavLink>
          
          <MobileNavLink 
            href="/#contact" 
            variants={mobileLinkVariants}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </MobileNavLink>
          
          <MobileDownloadButton 
            href="/cv.pdf" 
            target="_blank"
            variants={mobileLinkVariants}
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger mon CV
          </MobileDownloadButton>
        </MobileMenu>
      )}
    </>
  );
} 