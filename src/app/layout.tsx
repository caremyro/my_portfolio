'use client';

import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #666666;
    --background-color: #000000;
    --text-color: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: ${inter.style.fontFamily}, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection {
    background-color: var(--accent-color);
    color: var(--text-color);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  @media (min-width: 769px) {
    * {
      cursor: none !important;
    }
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <CustomCursor />
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
