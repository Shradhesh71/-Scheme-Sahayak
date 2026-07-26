import React from 'react';
import { Mic, ShieldCheck, FileCheck2, Share2, Layers, PhoneCall, Lock } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      icon: Mic,
      title: "Voice-First & Dialect Aware",
      desc: "Supports spoken audio queries in standard Hindi and regional Rajasthani dialects (Mewari, Vagadi, Marwari). Citizens can speak naturally without typing complex queries."
    },
    {
      icon: PhoneCall,
      title: "Toll-free IVR / Missed-Call Access",
      desc: "A toll-free number citizens can call, or give a missed call to receive a callback, reaching the same assistant with zero internet dependency — critical for the lowest-connectivity, most under-served citizens."
    },
    {
      icon: ShieldCheck,
      title: "Auditable Eligibility Engine",
      desc: "Built on deterministic, explainable decision-tree logic — not a hallucinating black-box LLM. Every match cites exact department rule criteria."
    },
    {
      icon: FileCheck2,
      title: "Guided Document Checklists",
      desc: "Delivers a personalized document preparation checklist (Jan Aadhar, Income Certificates, Jamabandi copies) before the citizen steps into an e-Mitra center."
    },
    {
      icon: Share2,
      title: "e-Mitra & SSO Gateway Ready",
      desc: "Seamlessly integrates with Rajasthan's e-Mitra service codes and Single Sign-On (SSO) workflows, generating pre-filled reference payloads."
    },
    {
      icon: Layers,
      title: "Multi-Channel, One Shared Backend",
      desc: "Deploys across WhatsApp, embeddable portal widgets, and IVR telephony gateways — all powered by a single centralized eligibility engine."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Enterprise Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Engineered for State-Scale Governance
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Combining deep speech recognition, auditable decision engines, and seamless e-Mitra integration for Rajasthan state portals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-blue-900 flex items-center gap-1">
                  <span>Learn technical details →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
