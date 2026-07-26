import React from 'react';
import { MapPin, Milestone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      timeline: "Months 1 - 3",
      title: "Build + Banswara Pilot",
      focus: "Ground deployment in Banswara(OR any district in Rajasthan) district with WhatsApp bot + website widget. Fine-tuning Vagadi/Mewari dialect speech models and mapping core health & agriculture schemes.",
      milestones: [
        "WhatsApp bot + website widget initial deployment",
        "Deterministic eligibility engine core setup",
        "50,000+ rural citizen pilot in Banswara district"
      ],
      current: true
    },
    {
      phase: "Phase 2",
      timeline: "Months 4 - 6",
      title: "District Expansion + IVR Launch",
      focus: "Toll-free IVR / missed-call service launch following telecom gateway procurement. Expanding to 5 more Division and scaling rule database to all schemes.",
      milestones: [
        "Toll-free IVR & missed-call voice line live",
        "Jan Soochna portal widget integration",
       "Dialect coverage expansion based on pilot learnings"
      ],
      current: false
    },
    {
      phase: "Phase 3",
      timeline: "Months 7 - 12",
      title: "Statewide Rajasthan Rollout",
      focus: "Full statewide availability across all 50 districts with all three channels (WhatsApp, Web, IVR) connected to automated e-Mitra SSO pre-fill.",
      milestones: [
        "All three access channels live across all districts",
        "Full SSO & Jan Aadhar automated payload generation",
        "All Rajasthan welfare scheme rule coverage",
      ],
      current: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Implementation Strategy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            3-Phase Phased Rollout Plan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            De-risked execution starting with local district validation before scaling across all 50 districts of Rajasthan.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {phases.map((p, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                p.current 
                  ? 'bg-blue-950 text-white border-blue-900 shadow-lg ring-2 ring-amber-500/50' 
                  : 'bg-slate-50 text-slate-900 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                    p.current ? 'bg-amber-500 text-slate-950 font-extrabold' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {p.phase} • {p.timeline}
                  </span>
                  {p.current && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Stage
                    </span>
                  )}
                </div>

                <h3 className={`font-serif text-xl font-bold mb-3 ${p.current ? 'text-white' : 'text-slate-900'}`}>
                  {p.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${p.current ? 'text-slate-300' : 'text-slate-600'}`}>
                  {p.focus}
                </p>
              </div>

              <div className={`pt-4 border-t ${p.current ? 'border-slate-800' : 'border-slate-200'} space-y-2 text-xs`}>
                <span className={`font-bold block text-[11px] uppercase tracking-wider ${p.current ? 'text-amber-400' : 'text-slate-500'}`}>
                  Key Milestones:
                </span>
                {p.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${p.current ? 'text-amber-400' : 'text-emerald-600'}`} />
                    <span className={p.current ? 'text-slate-200' : 'text-slate-700'}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
