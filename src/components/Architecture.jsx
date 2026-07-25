import React from 'react';
import { Mic, Cpu, Smartphone, Globe, ArrowDown, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Architecture() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            System Blueprint
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            3-Layer System Architecture
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Designed for modularity, low-latency execution, and seamless integration into Rajasthan state IT infrastructure.
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Layer 1: Language & Voice */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm relative hover:border-blue-300 transition-colors">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-blue-900">Layer 1</span>
                  <h3 className="font-serif text-xl font-bold text-slate-900">Language & Voice Processing Layer</h3>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Speech-to-Text & Text-to-Speech
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Hindi Speech STT</span>
                <p className="text-slate-600">Converts standard spoken Hindi audio into clean text tokens.</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Rajasthani Dialect Engine</span>
                <p className="text-slate-600">Acoustic models tuned for Mewari, Vagadi, Marwari & Dhundhari accents.</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Audio Feedback TTS</span>
                <p className="text-slate-600">Generates clear, natural voice guidance responses back to citizens.</p>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center border border-blue-200">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Layer 2: Eligibility Engine */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-900 shadow-md relative bg-blue-950/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-blue-900">Layer 2 • Core Logic</span>
                  <h3 className="font-serif text-xl font-bold text-slate-900">Auditable Eligibility Engine</h3>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
                Deterministic Decision Trees
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-300 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">Department Rule DB</span>
                <p className="text-slate-600">Rule repository for Medical, SJED, Agriculture, Labour & LSG schemes.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-300 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">Explainable Matcher</span>
                <p className="text-slate-600">Maps citizen attributes to exact policy criteria with zero hallucination.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-300 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">Doc Requirement Matrix</span>
                <p className="text-slate-600">Outputs mandatory document lists (Jan Aadhar, Income Cert, Jamabandi).</p>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center border border-blue-200">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Layer 3: Delivery Layer */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm relative hover:border-blue-300 transition-colors">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-blue-900">Layer 3</span>
                  <h3 className="font-serif text-xl font-bold text-slate-900">Multi-Channel Delivery Layer</h3>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                WhatsApp + Web Widget
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-1">WhatsApp Official Bot</span>
                  <p className="text-slate-600">Zero-install channel with voice note recognition and immediate document PDF delivery.</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Embeddable Portal Widget</span>
                  <p className="text-slate-600">Lightweight JS snippet for Jan Soochna Portal, RajKisan, and e-Mitra kiosk displays.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
