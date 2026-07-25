import React from 'react';
import { MessageSquare, Mic, ArrowRight, ShieldCheck, CheckCircle2, Award, Sparkles, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gov-grid bg-white overflow-hidden border-b border-slate-200">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Governance Context */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Government Innovation Challenge Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-300 shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Rajasthan DoIT&C Innovation Challenge Proposal
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              A voice-first AI assistant that tells citizens <span className="text-blue-900 underline decoration-amber-500/60 decoration-4 underline-offset-4">exactly which welfare schemes</span> they qualify for.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Eliminating Rajasthan's scheme discovery gap. Citizens speak naturally in <strong className="text-slate-800 font-semibold">Hindi or regional Rajasthani dialects</strong> on WhatsApp or web portals — receiving instant, auditable eligibility matches and document checklists.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#interactive-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-900 w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Try the Live Interactive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 transition-all w-full sm:w-auto"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Credibility Line & Badges */}
            <div className="pt-6 border-t border-slate-200 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-900" />
                <span>Gradify Labs LLP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>DPIIT Recognised</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>ISO 9001 / 27001 / CMMI Level 5</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic WhatsApp UI Simulation Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Soft backdrop shadow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-900/10 to-amber-600/10 rounded-3xl blur-xl" />

            {/* Phone Container */}
            <div className="relative bg-white rounded-2xl border-2 border-slate-300 shadow-xl overflow-hidden max-w-md mx-auto">
              
              {/* WhatsApp Header Bar */}
              <div className="bg-emerald-800 text-white px-4 py-3 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-amber-300 font-bold text-sm border border-white/30">
                    SS
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                      Scheme Sahayak (योजना सहायक)
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" title="Online" />
                    </h3>
                    <p className="text-[11px] text-emerald-100">Rajasthan Gov Verified Bot • Active</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 rounded bg-emerald-900/60 text-[10px] text-emerald-200 border border-emerald-700">
                    WhatsApp AI
                  </div>
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="whatsapp-chat-bg p-4 space-y-3.5 text-xs min-h-[380px] max-h-[420px] overflow-y-auto">
                
                {/* Time Stamp Divider */}
                <div className="text-center">
                  <span className="bg-slate-200/90 text-slate-600 px-2.5 py-0.5 rounded text-[10px] font-medium shadow-2xs">
                    Today • Direct Voice/WhatsApp Channel
                  </span>
                </div>

                {/* Assistant Welcome Message */}
                <div className="flex flex-col items-start max-w-[88%]">
                  <div className="whatsapp-bubble-bot p-3 text-slate-800 space-y-1.5">
                    <p className="font-semibold text-slate-900">
                      राम राम सा! 🙏 मैं योजना सहायक हूँ।
                    </p>
                    <p>
                      बताइए, आप क्या काम करते हैं और आपकी आयु कितनी है? (आप बोलकर भी बता सकते हैं)
                    </p>
                    <span className="text-[9px] text-slate-400 block text-right mt-1">10:42 AM</span>
                  </div>
                </div>

                {/* User Voice Input Simulation Bubble */}
                <div className="flex flex-col items-end w-full">
                  <div className="whatsapp-bubble-user p-2.5 text-slate-800 max-w-[85%]">
                    <div className="flex items-center gap-2.5 bg-emerald-100/60 p-2 rounded-lg border border-emerald-200">
                      <div className="w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center text-white shrink-0">
                        <Mic className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-3 bg-emerald-600 rounded-full animate-pulse" />
                          <div className="w-1.5 h-5 bg-emerald-700 rounded-full" />
                          <div className="w-1.5 h-2 bg-emerald-500 rounded-full" />
                          <div className="w-1.5 h-4 bg-emerald-600 rounded-full" />
                          <div className="w-1.5 h-6 bg-emerald-800 rounded-full" />
                          <div className="w-1.5 h-2 bg-emerald-500 rounded-full" />
                        </div>
                        <p className="text-[10px] text-slate-600 mt-1 italic font-medium">
                          "मैं खेती करता हूँ बांसवाड़ा में, उम्र 45 साल है..."
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800">0:08</span>
                    </div>
                    <span className="text-[9px] text-emerald-700 block text-right mt-1">10:43 AM ✓✓</span>
                  </div>
                </div>

                {/* Assistant Eligibility Matched Result */}
                <div className="flex flex-col items-start max-w-[92%]">
                  <div className="whatsapp-bubble-bot p-3 text-slate-800 space-y-2 border-l-4 border-amber-500">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-xs text-amber-900">
                        🎯 2 योजनाएँ मिलीं (Eligible Schemes Found)
                      </span>
                    </div>
                    
                    <div className="bg-slate-50 p-2 rounded border border-slate-200 space-y-1">
                      <p className="font-bold text-blue-950">1. राजस्थान किसान साथी योजना</p>
                      <p className="text-[11px] text-slate-600">ड्रिप सिंचाई व सोलर पंप पर 75% तक अनुदान।</p>
                    </div>

                    <div className="bg-slate-50 p-2 rounded border border-slate-200 space-y-1">
                      <p className="font-bold text-blue-950">2. मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा</p>
                      <p className="text-[11px] text-slate-600">₹25 लाख तक का कैशलेस इलाज।</p>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[10px] font-bold text-blue-900">
                      <span>✓ जन आधार व जमाबंदी आवश्यक</span>
                      <span className="text-emerald-700">e-Mitra Ready →</span>
                    </div>
                    <span className="text-[9px] text-slate-400 block text-right mt-1">10:43 AM</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Action Note */}
              <div className="bg-slate-100 px-3 py-2 border-t border-slate-200 text-center">
                <p className="text-[11px] font-semibold text-slate-600">
                  ⚡ Pre-scripted preview flow available in full interactive demo below
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
