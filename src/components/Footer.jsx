import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Lockup */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://www.gradifytech.com/gradify-mark-light.svg" 
                alt="Gradify Mark" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                Gradify Labs LLP
              </span>
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              Scheme Sahayak (योजना सहायक) is a voice-first, WhatsApp-native AI platform engineered by Gradify Labs LLP to match citizens with Rajasthan government welfare benefits.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-500 font-medium">
              <span>LLPIN: ACX-9401</span>
              <span>•</span>
              <span>DPIIT Recognised Startup</span>
              <span>•</span>
              <span>ISO 9001 / 27001 / 20000-1</span>
              <span>•</span>
              <span>CMMI Level 5</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Key Features</a></li>
              <li><a href="#interactive-demo" className="hover:text-amber-400 transition-colors">Interactive Demo</a></li>
              <li><a href="#architecture" className="hover:text-amber-400 transition-colors">System Architecture</a></li>
              <li><a href="#differentiation" className="hover:text-amber-400 transition-colors">Portal Comparison</a></li>
            </ul>
          </div>

          {/* Governance & Contact Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Governance</h4>
            <ul className="space-y-2">
              <li><a href="#credibility" className="hover:text-amber-400 transition-colors">Company & Deployments</a></li>
              <li><a href="#roadmap" className="hover:text-amber-400 transition-colors">Banswara Pilot Roadmap</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">DoIT&C Briefing Request</a></li>
              <li><a href="https://gradifytech.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Gradify Corporate Site ↗</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Gradify Labs LLP. All Rights Reserved. Prepared for Rajasthan DoIT&C Innovation Challenge.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
