import React, { useState } from 'react';
import { Mail, Building2, MapPin, Phone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Contact Briefing */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-800">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Rajasthan DoIT&C Committee Handoff</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Let's bring voice-first scheme discovery to every citizen of Rajasthan.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              We welcome evaluation from Rajasthan DoIT&C, iStart Rajasthan, and departmental officers to conduct a live district pilot in Banswara or review technical documentation.
            </p>

            {/* Official Entity Details Card */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 text-xs">
              <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider">
                Gradify Labs LLP
              </h3>

              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>LLPIN:</strong> ACX-9401 (Registered LLP in India)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>Recognition:</strong> DPIIT Startup India Deep-Tech Startup</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>Headquarters:</strong> Rajasthan, India (Udaipur / Banswara)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>Official Contact:</strong> contact@gradifytech.com</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Briefing Form */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">Thank You, Officer</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Your inquiry has been logged. A founding engineer from Gradify Labs LLP will respond within 4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-blue-900 bg-blue-50 rounded-lg hover:bg-blue-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  Schedule Committee Technical Briefing
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name & Designation</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Officer / Evaluator Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Department / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. DoIT&C / iStart / SJED"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official Email</label>
                    <input
                      type="email"
                      required
                      placeholder="officer@rajasthan.gov.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Pilot Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Specify any questions, district pilot interest, or technical evaluation request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-bold text-white bg-blue-950 hover:bg-blue-900 shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Inquiry to Gradify Engineering Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
