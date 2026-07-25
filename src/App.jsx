import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import KeyFeatures from './components/KeyFeatures';
import Architecture from './components/Architecture';
import Differentiation from './components/Differentiation';
import Credibility from './components/Credibility';
import Roadmap from './components/Roadmap';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <InteractiveDemo />
        <KeyFeatures />
        <Architecture />
        <Differentiation />
        <Credibility />
        <Roadmap />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
