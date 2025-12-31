import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SocialLinks from '../components/SocialLinks';

export default function Homepage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <SocialLinks />
    </>
  );
}
