import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, ChevronRight, MessageSquare, ExternalLink } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Live Demo', href: '#interactive-demo' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'About & Credentials', href: '#credibility' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Lockup */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Sarthi home">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 shadow-md ring-1 ring-slate-800 transition-transform group-hover:scale-105">
              <img 
                src="https://www.gradifytech.com/gradify-mark-light.svg" 
                alt="Gradify Labs Logo" 
                className="w-6 h-6 object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans-header text-lg font-bold text-slate-900 tracking-tight">Sarthi</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wider">
                  DoIT&C Preview
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                by Gradify Labs LLP <span className="text-slate-300">•</span> DPIIT Recognised
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#interactive-demo"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-lg shadow-sm hover:shadow transition-all border border-blue-900"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Try Live Demo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#interactive-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-4 py-2.5 text-xs font-bold text-white bg-blue-950 rounded-lg shadow"
            >
              Try Live Demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
