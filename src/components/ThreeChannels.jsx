import React from 'react';
import { MessageSquare, Globe, PhoneCall, Layers, ShieldCheck, Sparkles } from 'lucide-react';
export default function ThreeChannels() {
  const channels = [
    {
      icon: MessageSquare,
      title: "1. WhatsApp Native Bot",
      subtitle: "Linked to e-Mitra Number",
      iconBg: "bg-emerald-900 text-white",
      badge: "Zero-Install App",
      badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-300",
      copy: "Message the assistant directly on WhatsApp, linked to e-Mitra's existing number. No new app, no new registration."
    },
    {
      icon: Globe,
      title: "2. Website Embedded Widget",
      subtitle: "Portal Scheme Pages",
      iconBg: "bg-blue-950 text-amber-400",
      badge: "Portal Integration",
      badgeStyle: "bg-blue-100 text-blue-800 border-blue-300",
      copy: "An embedded voice/chat widget on every government scheme page, for citizens already browsing a portal."
    },
    {
      icon: PhoneCall,
      title: "3. Toll-Free / Missed Call",
      subtitle: "Feature-Phone Voice Line",
      iconBg: "bg-amber-600 text-white",
      badge: "Most Inclusive Option • No Internet Required",
      badgeStyle: "bg-amber-100 text-amber-900 border-amber-400 font-extrabold ring-2 ring-amber-500/40",
      isNew: true,
      copy: "Call a toll-free number, or give a missed call and get a callback. Citizens talk to the same voice assistant — no smartphone, no internet, no data plan needed. Built for feature-phone users in low-connectivity areas."
    }
  ];
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="three-channels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Multi-Channel Access Strategy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Three Ways to Reach the Assistant
          </h2>
           <p className="text-base text-slate-600 leading-relaxed">
            Meeting every citizen on the device they already own — from high-end smartphones to basic feature phones.
          </p>
        </div>
        {/* 3 Equal Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div 
                key={idx}
                          className={`rounded-2xl p-8 bg-white border-2 shadow-xs transition-all relative flex flex-col justify-between ${
                  ch.isNew ? 'border-amber-500 ring-4 ring-amber-500/10 shadow-md' : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs ${ch.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${ch.badgeStyle}`}>
                      {ch.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
                    {ch.title}
                  </h3>
                  
                  <span className="text-xs font-semibold text-slate-500 block mb-4">
                    {ch.subtitle}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ch.copy}
                  </p>
                </div>
                {ch.isNew && (
                  <div className="mt-6 pt-4 border-t border-amber-200 bg-amber-50/80 -mx-8 -mb-8 p-6 rounded-b-2xl flex items-center gap-2 text-xs font-bold text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Zero digital divide — 100% coverage for non-smartphone users</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Tie-together banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 text-center border border-slate-800">
          <p className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-center gap-2 flex-wrap">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>All three channels run on the same eligibility engine and conversation logic — one backend, three ways in.</span>
          </p>
        </div>
      </div>
    </section>
  );
}