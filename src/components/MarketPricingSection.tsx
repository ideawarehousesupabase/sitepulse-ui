import React from "react";
import { Check, ArrowRight, MapPin, Building2, Wrench, Layers, HelpCircle, ShieldCheck } from "lucide-react";
import { pricingPlans, additionalServices, targetSectors } from "@/data/mockData";

interface MarketPricingProps {
  onRequestPilotWithTier: (tierName: string) => void;
}

export const MarketPricingSection: React.FC<MarketPricingProps> = ({ onRequestPilotWithTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#071A33] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MARKET CONTEXT */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/25 mb-4">
            <span>UK Target Contractors & Market Scope</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed for the Contractors Who Keep Construction Moving.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            SitePulse AI targets small and medium-sized UK construction contractors dealing with material coordination, complex scheduling and limited site-logistics resources.
          </p>
        </div>

        {/* 4 Contractor Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {targetSectors.map((sec) => (
            <div
              key={sec.title}
              className="rounded-2xl bg-[#0B2545]/70 border border-sky-500/15 p-6 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-base font-bold text-white tracking-tight mb-2">
                  {sec.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {sec.pain}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                  Value Realisation:
                </span>
                <p className="text-xs text-slate-300 font-medium leading-snug">
                  {sec.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Geographic Focus Strip */}
        <div className="rounded-xl bg-[#0B2545]/60 border border-slate-700/80 p-5 mb-24 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-blue-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Geographic Footprint & Rollout Plan</h4>
              <p className="text-xs text-slate-300">
                Initial operational focus on Greater London (5–10 site validation pilot), with proposed national rollout into Manchester, Birmingham and Leeds.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-slate-400 bg-[#071A33] px-3 py-1.5 rounded-md border border-slate-700 shrink-0">
            TRL 4 Prototype · Pilot Preparation
          </span>
        </div>

        {/* COMMERCIAL PRICING HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-4">
            <span>Commercial Pricing in GBP (£)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Flexible Construction Intelligence for Every Stage of Growth.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Choose the level of construction logistics visibility and intelligence suited to your site operations.
          </p>
        </div>

        {/* 3 SUBSCRIPTION PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0C2B52] border-2 border-sky-400 shadow-2xl shadow-blue-900/40 ring-2 ring-sky-400/20"
                  : "bg-[#0B2545]/80 border border-sky-500/20 hover:border-sky-400/40"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 border border-sky-300 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                  {!plan.highlight && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {plan.frequency}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 font-medium">
                  For: <strong className="text-slate-200">{plan.target}</strong>
                </p>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed border-t border-slate-700/60 pt-3">
                  {plan.description}
                </p>

                {/* Features list */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included Capabilities:
                  </span>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-700/60">
                <button
                  onClick={() => onRequestPilotWithTier(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer group ${
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/35"
                      : "bg-[#071A33] hover:bg-slate-800 text-slate-200 border border-slate-700"
                  }`}
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-2.5 text-[11px] text-center text-slate-400">
                  {plan.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL PAID SERVICES ROW */}
        <div className="mt-16">
          <h3 className="font-display text-lg font-bold text-white mb-2 text-center sm:text-left">
            Additional Professional Onboarding Services
          </h3>
          <p className="text-xs text-slate-400 mb-6 text-center sm:text-left">
            Fixed one-off engineering services to digitise physical site parameters and calibrate accounting bridges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((serv) => (
              <div
                key={serv.name}
                className="rounded-2xl bg-[#092240] border border-sky-500/20 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-lg font-bold text-white">
                      {serv.name}
                    </h4>
                    <span className="font-display text-2xl font-bold text-sky-400">
                      {serv.price}{" "}
                      <span className="text-xs text-slate-400 font-sans font-normal">
                        {serv.frequency}
                      </span>
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {serv.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {serv.deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-700/60">
                  <button
                    onClick={() => onRequestPilotWithTier(serv.name)}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Enquire about {serv.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Clarification Notice */}
        <div className="mt-10 p-4 rounded-xl bg-[#071A33] border border-slate-800 text-xs text-slate-400 leading-relaxed text-center sm:text-left">
          <strong>Commercial Pricing Notice:</strong> All prices are in GBP (£) and exclude VAT. Subscriptions are billed per active site per month with invoice-based commercial terms. Enquiry buttons link to the client-side pilot request demonstration. No payment gateway or automated online checkout is implemented.
        </div>
      </div>
    </section>
  );
};
