import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import ThreeChannels from "./components/ThreeChannels";
import InteractiveDemo from "./components/InteractiveDemo";
import KeyFeatures from "./components/KeyFeatures";
import Architecture from "./components/Architecture";
import Differentiation from "./components/Differentiation";
import Credibility from "./components/Credibility";
import Roadmap from "./components/Roadmap";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const resetPosition = () => {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    window.history.scrollRestoration = "manual";
    resetPosition();

    const frame = window.requestAnimationFrame(() => {
      resetPosition();
      window.setTimeout(resetPosition, 0);
      window.setTimeout(resetPosition, 100);
      window.setTimeout(resetPosition, 300);
    });

    window.addEventListener("load", resetPosition);
    window.addEventListener("pageshow", resetPosition);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("load", resetPosition);
      window.removeEventListener("pageshow", resetPosition);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <ThreeChannels />
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
