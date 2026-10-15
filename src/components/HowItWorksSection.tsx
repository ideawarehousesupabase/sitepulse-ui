import React from "react";
import {
  FileText,
  GitBranch,
  Gauge,
  PoundSterling,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Clock,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { workflowSteps } from "@/data/mockData";

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [FileText, GitBranch, Gauge, PoundSterling, CheckCircle];

  return (
    <section id="how-it-works" className="py-24 bg-[#071A33] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/25 mb-4">
            <span>Operational Workflow</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Material Planning to Smarter Site Decisions.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            A continuous five-stage intelligence loop that converts procurement schedules and physical site parameters into proactive, cost-saving site coordination.
          </p>
        </div>

        {/* 5-Step Workflow: Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 relative">
          {workflowSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="rounded-2xl bg-[#0B2545]/85 border border-sky-500/20 p-5 backdrop-blur-md flex flex-col justify-between relative group hover:border-sky-400/40 hover:bg-[#0F2F57] transition-all"
              >
                {/* Step Connector Indicator on Desktop */}
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-sky-400">
                    <ArrowRight className="w-5 h-5 bg-[#071A33] rounded-full p-0.5 border border-sky-500/30" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/25 border border-blue-400/30 text-sky-300 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-950/80 border border-sky-500/20">
                      Step {step.step}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-slate-200">
                    {step.summary}
                  </p>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROCESS DEMONSTRATION CASE STUDY PANEL */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#092240] via-[#0B2545] to-[#092240] border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Operational Walkthrough · Scenario Walkthrough</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Steel Delivery & Crane Unavailability Scenario
              </h3>
            </div>
            <div className="text-xs text-amber-200/80 bg-amber-950/40 border border-amber-500/30 px-3 py-2 rounded-lg max-w-md font-mono">
              Illustrative scenario demonstrating planned platform mechanism · Not a measured customer result
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage 1: The Disconnect */}
            <div className="bg-[#071A33]/80 rounded-xl p-5 border border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-400 mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>The Unseen Disconnect</span>
              </div>
              <h4 className="text-sm font-bold text-white">Steel Arrives · Crane Booked</h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                40 tonnes of rebar is confirmed for Monday afternoon. The reinforcement fixing activity starts on Tuesday morning with a booked crew of six. However, the site gate closes at 11:00 and Tower Crane 1 is fully committed to frame erection until Wednesday.
              </p>
              <div className="mt-3 p-2 bg-red-950/30 rounded border border-red-500/20 text-[11px] text-red-300 font-mono">
                Standard Tracker: "Delivered Mon 16:00" → Reality: Unusable until Wed.
              </div>
            </div>

            {/* Stage 2: The Consequence */}
            <div className="bg-[#071A33]/80 rounded-xl p-5 border border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400 mb-2">
                <Clock className="w-4 h-4" />
                <span>Financial Impact</span>
              </div>
              <h4 className="text-sm font-bold text-white">Idle Crew & Program Slip</h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Without SitePulse AI, the disconnect is discovered on Tuesday morning. Six operatives stand idle for an entire shift (£1,500 day rate), standing plant hire charges accrue (£250), and the scheduled concrete pour slips into the following week.
              </p>
              <div className="mt-3 p-2 bg-amber-950/30 rounded border border-amber-500/20 text-[11px] text-amber-300 font-mono">
                Unpriced Delay Cost: £1,850+ unrecoverable preliminaries variance.
              </div>
            </div>

            {/* Stage 3: The SitePulse Resolution */}
            <div className="bg-[#071A33]/80 rounded-xl p-5 border border-sky-500/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-sky-400 mb-2">
                <Zap className="w-4 h-4" />
                <span>SitePulse AI Intervention</span>
              </div>
              <h4 className="text-sm font-bold text-white">Ranked Least-Cost Correction</h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                SitePulse AI detects the constraint 48 hours in advance. It evaluates options and recommends: resequence Gang A to Zone C pour prep, and move the rebar delivery window to Wednesday 08:00–10:00 when the crane and laydown zone are clear.
              </p>
              <div className="mt-3 p-2 bg-emerald-950/30 rounded border border-emerald-500/30 text-[11px] text-emerald-300 font-mono">
                Net Result: £900 in unrecoverable idle crew downtime averted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
