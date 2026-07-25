import React from 'react';
import { MapPin, Milestone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      timeline: "Months 1 - 3",
      title: "Banswara District Pilot",
      focus: "Ground deployment in Banswara district. Fine-tuning Vagadi/Mewari dialect speech models and mapping 20 core health & agriculture schemes.",
      milestones: [
        "Local police & district collectorate coordination",
        "WhatsApp bot pilot with 5,000 rural citizens",
        "Feedback calibration on dialect voice STT"
      ],
      current: true
    },
    {
      phase: "Phase 2",
      timeline: "Months 4 - 6",
      title: "Divisional District Expansion",
      focus: "Expanding to Udaipur, Dungarpur, Chittorgarh & Rajsamand. Scaling rule database to 75+ department schemes.",
      milestones: [
        "Jan Soochna portal widget integration",
        "e-Mitra kiosk operator pre-check integration",
        "Multilingual voice TTS refinement"
      ],
      current: false
    },
    {
      phase: "Phase 3",
      timeline: "Months 7 - 12",
      title: "Statewide Rajasthan Rollout",
      focus: "Full 50-district statewide availability on WhatsApp & official government portals with automated SSO pre-fill.",
      milestones: [
        "Full SSO & Jan Aadhar automated payload generation",
        "300+ Rajasthan welfare scheme rule coverage",
        "DoIT&C state server infrastructure handoff"
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
