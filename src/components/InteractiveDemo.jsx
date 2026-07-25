import React, { useState, useRef, useEffect } from 'react';
import { DEMO_QUESTIONS, RAJASTHAN_SCHEMES } from '../data/schemes';
import { 
  MessageSquare, Mic, MicOff, RefreshCw, CheckCircle2, Copy, 
  Printer, ArrowRight, Sparkles, AlertCircle, FileCheck, ExternalLink,
  ChevronRight, Volume2, ShieldCheck
} from 'lucide-react';

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [chatHistory, setChatHistory] = useState([]);
  const [matchedSchemes, setMatchedSchemes] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const chatEndRef = useRef(null);

  // Initialize chat on load
  useEffect(() => {
    resetDemo();
  }, []);

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, currentStep, isFinished]);

  const resetDemo = () => {
    setCurrentStep(0);
    setAnswers({});
    setMatchedSchemes([]);
    setIsFinished(false);
    
    const initialQuestion = DEMO_QUESTIONS[0];
    setChatHistory([
      {
        sender: 'bot',
        textHindi: initialQuestion.questionHindi,
        textEnglish: initialQuestion.questionEnglish,
        stepId: initialQuestion.id
      }
    ]);
  };

  const handleOptionSelect = (option) => {
    const q = DEMO_QUESTIONS[currentStep];
    const newAnswers = { ...answers, [q.id]: option.value };
    setAnswers(newAnswers);

    // Append user selection to chat
    const updatedHistory = [
      ...chatHistory,
      {
        sender: 'user',
        text: option.label,
        isVoiceSimulated: isVoiceActive
      }
    ];

    const nextStep = currentStep + 1;

    if (nextStep < DEMO_QUESTIONS.length) {
      setCurrentStep(nextStep);
      const nextQ = DEMO_QUESTIONS[nextStep];
      setChatHistory([
        ...updatedHistory,
        {
          sender: 'bot',
          textHindi: nextQ.questionHindi,
          textEnglish: nextQ.questionEnglish,
          stepId: nextQ.id
        }
      ]);
    } else {
      // Calculate scheme eligibility
      setCurrentStep(nextStep);
      setIsFinished(true);

      const matched = calculateEligibility(newAnswers);
      setMatchedSchemes(matched);

      setChatHistory([
        ...updatedHistory,
        {
          sender: 'bot',
          isResult: true,
          matchedCount: matched.length
        }
      ]);
    }
  };

  const calculateEligibility = (userAns) => {
    const age = parseInt(userAns.age || "25", 10);
    const income = parseInt(userAns.income || "150000", 10);
    const occ = userAns.occupation || "Daily Wager";
    const cat = userAns.category || "General";

    return RAJASTHAN_SCHEMES.filter(scheme => {
      const c = scheme.eligibilityCriteria;
      const ageMatch = age >= c.minAge && age <= c.maxAge;
      const incomeMatch = income <= c.maxIncome;
      const catMatch = c.categories.includes("All") || c.categories.includes(cat);
      const occMatch = c.occupations.includes(occ) || (occ === "Daily Wager" && c.occupations.includes("Unemployed"));

      return ageMatch && incomeMatch && (catMatch || occMatch);
    });
  };

  const handleCopyChecklist = (schemeId, docs) => {
    const text = `Document Checklist for ${docs.length} item(s):\n` + docs.map((d, i) => `${i + 1}. ${d}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedId(schemeId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative border-b border-slate-800" id="interactive-demo">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Platform Preview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Test Sarthi Live
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Select sample citizen attributes below to test our deterministic eligibility engine and view instant document checklists.
          </p>
        </div>

        {/* Interactive Workspace Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: WhatsApp Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Simulator Header */}
            <div className="bg-emerald-900 text-white p-4 flex items-center justify-between border-b border-emerald-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-800 border border-emerald-600 flex items-center justify-center font-bold text-amber-300 text-sm">
                  SS
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-2">
                    Sarthi AI (योजना सहायक)
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Voice + WhatsApp Engine • Rajasthan DoIT&C Demo
                  </p>
                </div>
              </div>

              {/* Demo Control Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsVoiceActive(!isVoiceActive)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                    isVoiceActive 
                      ? 'bg-amber-500 text-slate-950 border-amber-400' 
                      : 'bg-emerald-800/80 text-emerald-100 hover:bg-emerald-800 border-emerald-700'
                  }`}
                  title="Simulate Voice Input"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>{isVoiceActive ? 'Voice ON' : 'Simulate Voice'}</span>
                </button>

                <button
                  onClick={resetDemo}
                  className="p-1.5 rounded-lg bg-emerald-800/80 text-emerald-100 hover:bg-emerald-800 border border-emerald-700 transition-colors"
                  title="Reset Demo"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Voice Active Indicator Banner */}
            {isVoiceActive && (
              <div className="bg-amber-950/80 border-b border-amber-700/50 px-4 py-2 flex items-center justify-between text-xs text-amber-200">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 h-4">
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                  </div>
                  <span className="font-semibold">Speech Recognition Active:</span>
                  <span className="text-amber-100 italic">Listening for Hindi / Dialect response...</span>
                </div>
                <button 
                  onClick={() => setIsVoiceActive(false)}
                  className="text-amber-300 hover:underline text-[11px]"
                >
                  Switch to Text
                </button>
              </div>
            )}

            {/* Chat Body */}
            <div className="whatsapp-chat-bg p-4 sm:p-6 space-y-4 min-h-[440px] max-h-[500px] overflow-y-auto">
              
              <div className="text-center">
                <span className="bg-slate-800/90 text-slate-300 px-3 py-1 rounded-full text-[11px] font-medium">
                  Interactive Preview • Sample Citizen Flow
                </span>
              </div>

              {chatHistory.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  {item.sender === 'bot' && !item.isResult && (
                    <div className="flex flex-col items-start max-w-[90%]">
                      <div className="whatsapp-bubble-bot p-4 text-slate-900 space-y-2 border-l-4 border-blue-900">
                        <p className="font-semibold text-sm leading-snug">
                          {item.textHindi}
                        </p>
                        <p className="text-xs text-slate-600 border-t border-slate-100 pt-1.5 italic">
                          {item.textEnglish}
                        </p>
                        <span className="text-[9px] text-slate-400 block text-right">Just now</span>
                      </div>
                    </div>
                  )}

                  {item.sender === 'user' && (
                    <div className="flex flex-col items-end w-full">
                      <div className="whatsapp-bubble-user p-3 text-slate-900 max-w-[80%] font-medium text-xs sm:text-sm">
                        {item.isVoiceSimulated && (
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 mb-1">
                            <Mic className="w-3 h-3 text-emerald-700" />
                            <span>Voice Input Recognized</span>
                          </div>
                        )}
                        <p>{item.text}</p>
                        <span className="text-[9px] text-emerald-800 block text-right mt-1">✓✓ Delivered</span>
                      </div>
                    </div>
                  )}

                  {item.isResult && (
                    <div className="flex flex-col items-start w-full">
                      <div className="whatsapp-bubble-bot p-4 text-slate-900 space-y-3 border-l-4 border-emerald-600 w-full">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <span className="font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            पात्र योजनाएं (Matched Schemes Found: {item.matchedCount})
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                            Verified Engine Match
                          </span>
                        </div>
                        
                        <p className="text-xs text-slate-700">
                          आपके द्वारा दिए गए विवरण (आयु, आय, व्यवसाय, श्रेणी) के आधार पर आप निम्नलिखित योजनाओं के लिए पात्र हैं:
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Quick Reply Buttons for Current Question */}
              {!isFinished && currentStep < DEMO_QUESTIONS.length && (
                <div className="pt-3 border-t border-slate-300/40">
                  <span className="text-xs font-bold text-slate-700 block mb-2">
                    👉 Choose an answer option (or simulate voice):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {DEMO_QUESTIONS[currentStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(opt)}
                        className="text-left px-3.5 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 text-xs font-semibold border border-slate-300 hover:border-emerald-600 shadow-xs transition-all flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Note & Reset Footer */}
            <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                This preview uses sample Rajasthan scheme rule parameters.
              </span>
              <button
                onClick={resetDemo}
                className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Restart Quiz
              </button>
            </div>

          </div>

          {/* Right Side: Matched Schemes & Document Checklist (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-850 rounded-2xl p-6 border border-slate-800 bg-slate-950/80">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-amber-400" />
                  Matched Welfare Schemes
                </h3>
                {isFinished && (
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Print
                  </button>
                )}
              </div>

              {!isFinished ? (
                <div className="text-center py-12 text-slate-400 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-amber-400">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    Complete the 5 questions on the left to unlock eligible scheme matches and document checklists.
                  </p>
                  <span className="text-xs text-slate-500 block">
                    Step {currentStep + 1} of {DEMO_QUESTIONS.length}
                  </span>
                </div>
              ) : (
                <div id="printable-scheme-checklist" className="space-y-6">
                  {matchedSchemes.length === 0 ? (
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center text-slate-300">
                      <p className="text-sm font-semibold">No direct match for this specific combination.</p>
                      <p className="text-xs text-slate-400 mt-1">Try restarting and selecting General or Low Income criteria.</p>
                    </div>
                  ) : (
                    matchedSchemes.map((sch) => (
                      <div 
                        key={sch.id} 
                        className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                              {sch.category}
                            </span>
                            <h4 className="font-bold text-white text-base mt-1.5 leading-snug">
                              {sch.name}
                            </h4>
                            <p className="text-[11px] text-slate-400">{sch.department}</p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-2">
                          {sch.summary}
                        </p>

                        {/* Document Checklist */}
                        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              Required Documents Checklist:
                            </span>
                            <button
                              onClick={() => handleCopyChecklist(sch.id, sch.documentsNeeded)}
                              className="text-[10px] font-bold text-slate-300 hover:text-white flex items-center gap-1"
                            >
                              <Copy className="w-3 h-3" />
                              {copiedId === sch.id ? 'Copied!' : 'Copy List'}
                            </button>
                          </div>

                          <ul className="space-y-1 text-xs text-slate-300">
                            {sch.documentsNeeded.map((doc, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <span className="text-amber-500 font-bold">•</span>
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* e-Mitra Handoff */}
                        <div className="pt-2 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-slate-400">
                            Code: <strong className="text-slate-200">{sch.eMitraServiceCode}</strong>
                          </span>
                          <a
                            href={sch.officialPortal}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:underline"
                          >
                            <span>e-Mitra Portal</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
