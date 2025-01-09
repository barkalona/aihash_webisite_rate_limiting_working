import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { WaitlistSection } from '../Waitlist/WaitlistSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <WaitlistSection />
      <Features />
    </>
  );
}