import React from 'react';
import { Mic, HelpCircle, Cpu, CheckSquare, FileText, ExternalLink, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Mic,
      title: "Citizen Initiates Interaction",
      desc: "Citizen reaches the assistant three ways — WhatsApp, a widget on the scheme page, or a toll-free number they call or give a missed call to for a callback. Same conversation, same eligibility engine, regardless of channel."
    },
    {
      num: "02",
      icon: HelpCircle,
      title: "Guided Simple Questions",
      desc: "Assistant asks 4–5 basic questions (age, household income, occupation, district, category) in conversational, empathetic language."
    },
    {
      num: "03",
      icon: Cpu,
      title: "Auditable Rule Matching",
      desc: "Deterministic rule engine evaluates citizen parameters against Rajasthan scheme database across health, agriculture, education & pensions."
    },
    {
      num: "04",
      icon: CheckSquare,
      title: "Targeted Scheme Matches",
      desc: "Delivers a curated list of 1–3 high-relevance schemes with clear benefit summaries, instead of an overwhelming 200-scheme portal list."
    },
    {
      num: "05",
      icon: FileText,
      title: "Document Checklist",
      desc: "Generates an exact checklist of documents needed (Jan Aadhar, Income Certificate, Jamabandi) so the citizen is fully prepared."
    },
    {
      num: "06",
      icon: ExternalLink,
      title: "e-Mitra / SSO Handoff",
      desc: "Directs citizen to nearest e-Mitra kiosk or pre-fills SSO application forms with unique reference codes for seamless submission."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            End-to-End Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            How Sarthi Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From initial voice query to e-Mitra submission — structured for high accuracy, zero jargon, and complete transparency.
          </p>
        </div>

        {/* Grid Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-slate-50/90 transition-all group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 bg-white px-2.5 py-1 rounded border border-slate-200">
                      Step {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Phase {Math.ceil((idx + 1) / 2)}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
