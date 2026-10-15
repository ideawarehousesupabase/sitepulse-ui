import React, { useState } from "react";
import {
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  Clock,
  Truck,
  Layers,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
} from "lucide-react";
import { demoSiteContext, sampleRisks, surveyStatistics } from "@/data/mockData";

interface HeroSectionProps {
  onRequestPilot: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isSimulated, setIsSimulated] = useState(false);

  const selectedRisk = sampleRisks[activeTab];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#071A33]">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-construction.jpg"
          alt="UK commercial construction site twilight illuminated cranes"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:transition-transform duration-1000"
        />
        {/* Navy dark gradients to ensure perfect text contrast & SaaS mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A33]/90 via-[#071A33]/85 to-[#071A33]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-transparent to-[#071A33]/80" />
        <div className="absolute inset-0 construction-grid-bg opacity-30" />
      </div>

      {/* Decorative ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline & Pill */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B2545]/90 border border-sky-400/30 shadow-lg shadow-sky-950/40 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              UK Construction Technology · Prototype Stage
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-mono font-medium text-amber-300">
              Predict. Coordinate. Execute.
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Predict Construction Delays{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Before They Cost You.
            </span>
          </h1>

          {/* Hero Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
            SitePulse AI connects material deliveries, construction activities, supplier reliability and site constraints to anticipate disruption, estimate downtime costs and recommend smarter logistics decisions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onRequestPilot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all cursor-pointer group"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-[#0B2545]/80 hover:bg-[#0F2F57] border border-sky-500/25 hover:border-sky-400/50 shadow-md transition-all"
            >
              <span>Explore the Platform</span>
              <ChevronRight className="w-4 h-4 text-sky-400" />
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400 font-mono">
            Designed for UK Groundworks, Fit-Out & MEP Subcontractors
          </p>
        </div>

        {/* HERO VISUAL: Detailed Illustrative Construction Intelligence Dashboard */}
        <div className="mt-14 relative mx-auto max-w-6xl">
          {/* Subtle Outer Frame Glowing Edge */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-sky-400/35 via-blue-600/20 to-transparent shadow-2xl shadow-[#071A33]">
            <div className="rounded-[15px] bg-[#0A213D]/95 backdrop-blur-xl border border-sky-500/20 overflow-hidden">
              {/* Dashboard Top Header Bar */}
              <div className="bg-[#071A33]/90 px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-b border-sky-500/15">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-4 w-[1px] bg-slate-700 mx-1 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold text-sm text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {demoSiteContext.name}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-950/60 border border-blue-400/20 text-sky-300 font-mono hidden md:inline-block">
                      {demoSiteContext.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    Planning window: <strong className="text-slate-200">Next 14 Days</strong>
                  </span>
                  <div className="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{demoSiteContext.needingAttention} Attention Flags</span>
                  </div>
                </div>
              </div>

              {/* 4 KPI Frames Row */}
              <div className="p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3.5 border-b border-sky-500/15 bg-[#081E38]/50">
                {/* Frame 1: Need Attention */}
                <div className="rounded-xl bg-[#0B2545]/80 border border-slate-700/60 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    <span>Need Attention</span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                    {demoSiteContext.needingAttention}
                  </div>
                  <p className="mt-1 text-xs text-amber-300/90 font-medium">Critical or at risk</p>
                </div>

                {/* Frame 2: Critical */}
                <div className="rounded-xl bg-[#0B2545]/80 border border-slate-700/60 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    <span>Critical</span>
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                  </div>
                  <div className="mt-2 font-display text-2xl sm:text-3xl font-bold text-red-400">
                    {isSimulated ? 0 : demoSiteContext.criticalCount}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {isSimulated ? "Resolved via resequencing" : "Delivery will miss activity"}
                  </p>
                </div>

                {/* Frame 3: Cost Exposure */}
                <div className="rounded-xl bg-[#0B2545]/80 border border-slate-700/60 p-3.5 sm:p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    <span>Cost Exposure</span>
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-2">
                    <span>£{isSimulated ? "2,550" : demoSiteContext.mitigatedExposure.toLocaleString()}</span>
                    <span className="text-xs text-emerald-400 font-semibold font-sans">
                      (£{isSimulated ? "3,270 saved" : `${demoSiteContext.potentialSavings} saved`})
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">Idle labour & standing plant</p>
                </div>

                {/* Frame 4: Actions Planned */}
                <div className="rounded-xl bg-[#0B2545]/80 border border-slate-700/60 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    <span>Actions Planned</span>
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl sm:text-3xl font-bold text-sky-400">
                    {isSimulated ? "3" : "2"}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">Least-cost interventions</p>
                </div>
              </div>

              {/* Main Interactive Preview: Material Risk Deep Dive */}
              <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Ranked At-Risk Materials Selector (5 cols) */}
                <div className="lg:col-span-5 space-y-2.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Ranked Risk Register (14-Day Lookahead)
                    </span>
                    <span className="text-xs font-mono text-sky-400">Click to inspect</span>
                  </div>

                  {sampleRisks.slice(0, 3).map((item, idx) => {
                    const isSelected = activeTab === idx;
                    const statusColor =
                      item.status === "Critical"
                        ? "bg-red-500/15 border-red-500/30 text-red-400"
                        : item.status === "At Risk"
                        ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                        : "bg-blue-500/15 border-blue-500/30 text-blue-400";

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveTab(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                          isSelected
                            ? "bg-[#0F2F57] border-sky-400/60 shadow-lg shadow-sky-950/50"
                            : "bg-[#0B2545]/60 border-slate-800 hover:border-slate-700 hover:bg-[#0B2545]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-semibold text-sm text-white">
                            {item.material}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${statusColor}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-slate-300 flex items-center gap-2">
                          <span>{item.activity}</span>
                          <span className="text-slate-600">·</span>
                          <span className="font-mono text-slate-400">{item.poReference}</span>
                        </div>
                        <div className="mt-2.5 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/40 pt-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-400">Readiness:</span>
                            <span className={`font-mono font-bold ${item.readiness < 50 ? "text-red-400" : item.readiness < 80 ? "text-amber-400" : "text-emerald-400"}`}>
                              {item.readiness}%
                            </span>
                          </div>
                          <span className="font-mono text-slate-300 font-semibold">
                            Exposure: £{item.costExposure.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Detailed Inspection & Recommendation Card (7 cols) */}
                <div className="lg:col-span-7 bg-[#071A33]/80 rounded-xl border border-sky-500/20 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    {/* Header of selected card */}
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-700/60 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-base sm:text-lg font-bold text-white">
                            {selectedRisk.material}
                          </span>
                          <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800 text-sky-300 border border-sky-400/20">
                            {selectedRisk.poReference}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Assigned to: <strong className="text-slate-200">{selectedRisk.subcontractor}</strong> ({selectedRisk.crew})
                        </p>
                      </div>

                      {/* Circular Readiness Gauge */}
                      <div className="flex items-center gap-2 bg-[#0B2545] px-3 py-1.5 rounded-lg border border-slate-700">
                        <div className="text-right">
                          <div className="text-[10px] uppercase font-semibold text-slate-400">Readiness Score</div>
                          <div className="text-sm font-bold font-mono text-sky-400">
                            {isSimulated && activeTab === 0 ? "88% (Usable)" : `${selectedRisk.readiness}% (Calculated)`}
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-sky-400/40 flex items-center justify-center font-bold text-xs text-white bg-blue-600/30">
                          {isSimulated && activeTab === 0 ? "88" : selectedRisk.readiness}
                        </div>
                      </div>
                    </div>

                    {/* Contributing Factor Matrix */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-[#0B2545]/70 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 font-semibold block text-[11px] uppercase">
                          Supplier Reliability
                        </span>
                        <span className="text-slate-200 mt-1 block">
                          {selectedRisk.factors.supplierReliability}
                        </span>
                      </div>
                      <div className="bg-[#0B2545]/70 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 font-semibold block text-[11px] uppercase">
                          Gate Booking Window
                        </span>
                        <span className="text-amber-300 mt-1 block font-medium">
                          {selectedRisk.factors.gateAvailability}
                        </span>
                      </div>
                      <div className="bg-[#0B2545]/70 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 font-semibold block text-[11px] uppercase">
                          Crane / Lifting Schedule
                        </span>
                        <span className="text-red-300 mt-1 block font-medium">
                          {selectedRisk.factors.craneAvailability}
                        </span>
                      </div>
                      <div className="bg-[#0B2545]/70 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 font-semibold block text-[11px] uppercase">
                          Laydown & Storage Capacity
                        </span>
                        <span className="text-slate-200 mt-1 block">
                          {selectedRisk.factors.storageCapacity}
                        </span>
                      </div>
                    </div>

                    {/* Labour Downtime Breakdown */}
                    <div className="mt-4 p-3 bg-red-950/20 border border-red-500/20 rounded-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-red-300 flex items-center gap-1.5">
                          <TrendingDown className="w-3.5 h-3.5" />
                          Labour Downtime Exposure Calculation ({selectedRisk.costCode})
                        </span>
                        <span className="font-mono font-bold text-red-400 text-sm">
                          £{selectedRisk.costExposure.toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-1.5 grid grid-cols-3 gap-2 text-[11px] text-slate-300 font-mono">
                        <div>Idle Labour: £{selectedRisk.downtime.idleLabour}</div>
                        <div>Standing Plant: £{selectedRisk.downtime.standingPlant}</div>
                        <div>Prelims Knock-on: £{selectedRisk.downtime.programmeKnockOn}</div>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Action & Interactive Simulation Button */}
                  <div className="mt-4 pt-3 border-t border-slate-700/60">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] uppercase font-bold text-amber-400 flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" />
                          Recommended Corrective Action
                        </div>
                        <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                          {selectedRisk.recommendedAction}
                        </p>
                      </div>

                      {activeTab === 0 && (
                        <button
                          onClick={() => setIsSimulated(!isSimulated)}
                          className="shrink-0 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-xs font-semibold text-sky-300 flex items-center gap-1.5 transition-all cursor-pointer self-start sm:self-auto"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          <span>{isSimulated ? "Reset Action" : "Simulate Action"}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Illustrative Data Notice Bar */}
              <div className="bg-[#071A33] px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-2 border-t border-sky-500/15 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Illustrative Sample Interface · Mock demonstration data based on Riverside Commercial Development
                </span>
                <span className="font-mono text-slate-400">Platform Readiness Level: TRL 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING EVIDENCE STRIP: Survey of 161 UK Construction Professionals */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              UK Market Evidence & Demand
            </span>
            <h2 className="font-display text-2xl font-bold text-white mt-1">
              Findings from a survey of 161 UK construction professionals
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Field evidence establishing widespread material delivery delay and unpriced idle crew exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {surveyStatistics.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-[#0B2545]/70 border border-sky-500/20 p-5 backdrop-blur-sm relative overflow-hidden group hover:border-sky-400/40 transition-all"
              >
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                    {stat.figure}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-slate-100 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
