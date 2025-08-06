import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { BrandsCarousel } from './components/BrandsCarousel';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
export function App() {
  return <div className="w-full min-h-screen bg-[#f9f5f0]">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <BrandsCarousel />
        <Differentials />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
}