import React from 'react';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
export function HomePage() {
  return <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>;
}