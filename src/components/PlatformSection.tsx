import React, { useState } from "react";
import {
  Network,
  Gauge,
  Truck,
  Building2,
  Calculator,
  Lightbulb,
  Check,
  UserCheck,
  Briefcase,
  FileSpreadsheet,
  AlertCircle,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";
import { platformModules, operationalViewsData } from "@/data/mockData";

export const PlatformSection: React.FC = () => {
  const [selectedPerspective, setSelectedPerspective] = useState<"siteManager" | "quantitySurveyor" | "procurement">("siteManager");

  const icons = [Network, Gauge, Truck, Building2, Calculator, Lightbulb];

  return (
    <section id="platform" className="py-24 bg-[#071A33] border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/15 text-sky-300 border border-blue-400/25 mb-4">
            <span>Six Core Architecture Components</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            One Connected Platform. Six Intelligent Components.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            SitePulse AI combines material dependencies, delivery readiness, supplier performance, site constraints, downtime cost analysis and corrective recommendations to support smarter construction logistics decisions.
          </p>
        </div>

        {/* 6 Feature Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {platformModules.map((mod, index) => {
            const Icon = icons[index];
            return (
              <div
                key={mod.title}
                className="rounded-2xl bg-[#0B2545]/80 border border-sky-500/20 p-6 sm:p-7 backdrop-blur-md glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 text-sky-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {mod.number}
                    </span>
                  </div>

                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-950/80 border border-sky-500/30 text-sky-300 mb-2">
                    {mod.badge}
                  </div>

                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {mod.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-700/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Capabilities & Inputs:
                    </span>
                    {mod.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric Strip / Data Preview Footer */}
                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{mod.metricLabel}:</span>
                  <span className="font-mono font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/20">
                    {mod.metricValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* THREE OPERATIONAL PERSPECTIVES PREVIEW */}
        <div className="mt-24 rounded-2xl bg-[#092240] border border-sky-500/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              Multi-Role Operational Visibility
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              One Unified Data Model. Three Tailored Operational Perspectives.
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Site managers, quantity surveyors and procurement coordinators access the exact same live dependency graph tailored to their daily responsibilities.
            </p>
          </div>

          {/* Perspective Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 p-1.5 rounded-xl bg-[#071A33] border border-slate-700/80 max-w-xl mb-8">
            <button
              onClick={() => setSelectedPerspective("siteManager")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedPerspective === "siteManager"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Site Manager</span>
            </button>
            <button
              onClick={() => setSelectedPerspective("quantitySurveyor")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedPerspective === "quantitySurveyor"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Quantity Surveyor</span>
            </button>
            <button
              onClick={() => setSelectedPerspective("procurement")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedPerspective === "procurement"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Procurement</span>
            </button>
          </div>

          {/* Active Perspective Content Card */}
          {(() => {
            const data = operationalViewsData[selectedPerspective];
            return (
              <div className="bg-[#071A33]/90 rounded-xl border border-sky-500/20 p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/60 pb-4 mb-6">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                      {data.title}
                    </h4>
                    <p className="text-xs font-mono text-sky-400 mt-0.5">Role Focus: {data.role}</p>
                  </div>
                  <span className="text-xs text-slate-400 max-w-md sm:text-right">
                    {data.focus}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl bg-[#0B2545]/70 border border-slate-800"
                    >
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-white mt-1.5 block leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-300/90 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Illustrative preview of planned platform perspectives. These are three views of the same planned platform, not separate commercial products.
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
