import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

export default function Differentiation() {
  const comparisonRows = [
    {
      feature: "Discovery Paradigm",
      traditional: "Static portals (citizens search through 300+ pdfs manually)",
      sahayak: "Active AI matching (guided 4-question conversational eligibility)",
      highlight: true
    },
    {
      feature: "Language & Audio Support",
      traditional: "Formal Hindi & English text only",
      sahayak: "Speech-first in Hindi + regional Rajasthani dialects (Mewari, Vagadi)",
      highlight: true
    },
    {
      feature: "Channel & Access",
      traditional: "Requires desktop browser or heavy native app download",
      sahayak: "WhatsApp-native + zero-install web widget",
      highlight: false
    },
    {
      feature: "Application Guidance",
      traditional: "Information-only (lists criteria without document checklist)",
      sahayak: "Actionable checklist + Jan Aadhar / e-Mitra code integration",
      highlight: true
    },
    {
      feature: "Logic Transparency",
      traditional: "Keyword search or black-box LLM guessing",
      sahayak: "100% auditable rule engine citing department policy clauses",
      highlight: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="differentiation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Strategic Differentiation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            How Sarthi Compares
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Transitioning government welfare from passive static web listings to active, dialect-aware citizen delivery.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border-2 border-slate-200 shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-6 text-sm font-bold w-1/3">Evaluation Metric</th>
                  <th className="py-4 px-6 text-sm font-bold text-slate-300 w-1/3 border-l border-slate-800">
                    Existing Static Portals
                  </th>
                  <th className="py-4 px-6 text-sm font-bold text-amber-300 w-1/3 border-l border-slate-800 bg-blue-950">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Sarthi (Gradify)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? "bg-slate-50/70" : "bg-white"}>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    
                    <td className="py-4 px-6 text-slate-600 border-l border-slate-200">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    <td className="py-4 px-6 font-semibold text-slate-900 border-l border-slate-200 bg-blue-50/50">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.sahayak}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
