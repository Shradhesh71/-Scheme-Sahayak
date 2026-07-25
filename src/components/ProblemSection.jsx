import React from 'react';
import { SearchX, Languages, FileText, AlertTriangle, ArrowRight, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: SearchX,
      color: "text-amber-700 bg-amber-50 border-amber-200",
      tag: "Fragmented Access",
      title: "Scheme Discovery Gap",
      description: "Over 300+ Rajasthan state welfare schemes are scattered across separate departmental portals (Jan Soochna, SJED, Agriculture, Health). Citizens rarely know where or how to check their combined eligibility.",
      impact: "Millions in unclaimed subsidies & welfare funds every fiscal year."
    },
    {
      icon: Languages,
      color: "text-blue-700 bg-blue-50 border-blue-200",
      tag: "Barriers to Entry",
      title: "Language & Literacy Barrier",
      description: "Existing portals rely on heavy formal Hindi or English text. Rural, tribal, and low-literacy citizens who communicate naturally in regional dialects (Mewari, Vagadi, Marwari) are systematically excluded.",
      impact: "High drop-off rates in grassroots & tribal districts like Banswara."
    },
    {
      icon: FileText,
      color: "text-rose-700 bg-rose-50 border-rose-200",
      tag: "Process Friction",
      title: "Document & Application Friction",
      description: "Even when citizens identify a scheme, they often lack a clear, actionable checklist of required documents (Jan Aadhar, Income Certificate, Jamabandi) or step-by-step guidance before visiting e-Mitra kiosks.",
      impact: "Multiple wasted kiosk visits and delayed benefit distribution."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Citizen Challenges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Why eligible citizens miss out on government welfare
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Despite visionary government programs, information asymmetry and channel friction prevent welfare from reaching the last mile efficiently.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${prob.color} mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    0{idx + 1} • {prob.tag}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50/80 -mx-8 -mb-8 p-6 rounded-b-2xl">
                  <span className="text-xs font-bold text-slate-700 block mb-1">Impact:</span>
                  <p className="text-xs text-slate-600 font-medium">
                    {prob.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
