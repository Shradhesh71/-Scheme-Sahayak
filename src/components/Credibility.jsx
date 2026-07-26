import React from 'react';
import { ShieldCheck, Award, Building2, MapPin, CheckCircle, ExternalLink, Cpu, Lock } from 'lucide-react';

export default function Credibility() {
  const certifications = [
    { title: "DPIIT Recognised Startup", detail: "Government of India Deep-Tech Startup recognition" },
    { title: "ISO 9001:2015", detail: "Quality Management System Certified" },
    { title: "ISO 27001:2022", detail: "Information Security Management System" },
    { title: "ISO 20000-1:2018", detail: "IT Service Management Standard" },
    { title: "CMMI Level 5", detail: "Highest Software Process Quality Benchmark" }
  ];

  const deployments = [
    {
      entity: "Indian Institute of Information Technology Surat",
      type: "Academic Credential Infrastructure",
      details: "Verifiable academic credentials anchored and live on-chain.",
      status: "Production Live"
    },
    {
      entity: "Municipal Corporation",
      type: "Civic Document Verification",
      details: "Production deployment for automated municipal credential verification.",
      status: "Production Live"
    },
    {
      entity: "Banswara Police Station, Rajasthan",
      type: "AI Complaint Desk System",
      details: "Currently building automated AI-driven complaint desk for regional public intake.",
      status: "Active Deployment"
    }
  ];

  const supporters = [
    "iStart Rajasthan", "SSIP Gujarat", "Y Combinator" ,"Solana Foundation", "CoinDCX Innovation Grant", "AWS Activate", "Microsoft for Startups", "Google for Startups",
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="credibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Institutional Track Record
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Gradify Labs LLP: Built for Government Rigor
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered in Rajasthan with deep public sector deployment experience, audited process excellence, and Tier-1 ecosystem backing.
          </p>
        </div>

        {/* Certifications Badge Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Government Audit & Quality Compliance
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {certifications.map((c, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <Award className="w-5 h-5 text-amber-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-xs">{c.title}</h4>
                <p className="text-[10px] text-slate-500">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Deployments Grid */}
        <div className="mb-12">
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-900" />
            Proven Public Sector & Institutional Deployments
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {deployments.map((d, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                      {d.status}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-900 mb-1">{d.entity}</h4>
                  <p className="text-xs font-semibold text-blue-900 mb-3">{d.type}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backing & Ecosystem Grants */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Global Technical Backing & Grants
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-1">
                Supported by World-Class Tech Infrastructure Programs
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {supporters.map((sup, idx) => (
                <span 
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                >
                  {sup}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
