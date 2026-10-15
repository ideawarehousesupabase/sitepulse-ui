import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { faqs } from "@/data/mockData";

interface FaqSectionProps {
  onRequestPilot: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onRequestPilot }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#071A33] border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/15 text-sky-300 border border-blue-400/25 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Factual Answers & Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Direct, factual answers regarding the platform design, operational workflow, commercial tiers and technology readiness.
          </p>
        </div>

        {/* 12 Accordion Questions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0B2545] border-sky-400/40 shadow-lg shadow-sky-950/40"
                    : "bg-[#092240]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#0B2545]/70"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-700/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pilot CTA banner within FAQ area */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-8 sm:p-10 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Join the London Pilot Programme?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
              We are actively consulting with UK groundworks, fit-out and MEP subcontractors running active sites across Greater London.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={onRequestPilot}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 text-blue-900 shadow-xl transition-all cursor-pointer group"
              >
                <span>Request a Pilot Enquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-3 text-xs text-blue-200/80">
              Technology Readiness Level 4 · Pre-registered London pilot protocol
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
