import React from "react";
import {
  AlertCircle,
  Users,
  HardHat,
  PoundSterling,
  GitMerge,
  ArrowRight,
  Database,
  Building,
  Truck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { founders } from "@/data/mockData";

export const AboutSection: React.FC = () => {
  const problems = [
    {
      title: "1. Material Delivery Uncertainty",
      description:
        "Unexpected delays, incomplete deliveries and inconsistent supplier performance disrupt construction schedules.",
      icon: Truck,
      highlight: "72.7% report late deliveries",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    {
      title: "2. Labour Downtime",
      description:
        "Crews may be ready to work but cannot begin because the required materials are unavailable or unusable.",
      icon: Users,
      highlight: "60.9% report standing idle crews",
      color: "border-red-500/30 text-red-400 bg-red-500/10",
    },
    {
      title: "3. Limited Site Coordination",
      description:
        "Gate booking windows, crane availability and site storage limitations can prevent materials from being used even after delivery.",
      icon: HardHat,
      highlight: "41.0% suffer timing conflicts",
      color: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    },
    {
      title: "4. Hidden Financial Exposure",
      description:
        "Delivery issues can trigger idle labour costs, standing equipment charges and wider programme disruption.",
      icon: PoundSterling,
      highlight: "44.1% lose £2,000+ per delay",
      color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#071A33] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Blueprint Grid Accents */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/25 mb-4">
            <span>About The Platform & Need</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Smarter Construction Logistics Starts With Better Visibility.
          </h2>
          <div className="mt-6 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Construction delays are not always caused by materials failing to arrive.
            </p>
            <p>
              Sometimes materials arrive but cannot be unloaded, stored, accessed or used when work is scheduled to begin.
            </p>
            <p>
              Traditional project management and procurement systems frequently hold this information separately, leaving site teams without a complete picture.
            </p>
            <p>
              SitePulse AI is designed to connect material procurement data with construction activities, supplier performance, site constraints and labour costs. This connected approach helps contractors identify potential disruptions earlier and understand their financial consequences.
            </p>
          </div>
        </div>

        {/* 4 Problem Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.title}
                className="rounded-2xl bg-[#0B2545]/80 border border-sky-500/15 p-6 backdrop-blur-md glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${prob.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">
                    {prob.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {prob.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{prob.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Panel: Architectural Join Visual */}
        <div className="mt-20 rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#071A33] border border-sky-500/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              The Structural Solution
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Disconnected Information to Actionable Construction Intelligence.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              SitePulse AI bridges the historical gap between procurement records, physical site access constraints and trade crew costs. The platform links what was ordered to who is waiting on site and calculates the monetary impact before the delivery departs.
            </p>
          </div>

          {/* Architectural Join Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Input 1 */}
            <div className="bg-[#071A33]/90 border border-slate-700/80 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center mx-auto mb-2 border border-blue-500/30">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">Procurement & POs</h4>
              <p className="text-xs text-slate-400 mt-1">Materials, suppliers, lead-times, scheduled delivery</p>
            </div>

            {/* Input 2 */}
            <div className="bg-[#071A33]/90 border border-slate-700/80 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/30">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">Physical Site Reality</h4>
              <p className="text-xs text-slate-400 mt-1">Gate windows, crane slots, laydown holding zones</p>
            </div>

            {/* Input 3 */}
            <div className="bg-[#071A33]/90 border border-slate-700/80 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center mx-auto mb-2 border border-sky-500/30">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white">Labour & Cost Codes</h4>
              <p className="text-xs text-slate-400 mt-1">Subcontractor gangs, day rates, preliminaries costs</p>
            </div>

            {/* Platform Central Node */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-4 text-center shadow-lg shadow-blue-600/30 border border-blue-400/40 relative">
              <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center mx-auto mb-2">
                <GitMerge className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-extrabold">SitePulse AI</h4>
              <p className="text-xs text-blue-100 mt-1 font-medium">
                Construction Dependency Graph & Least-Cost Correction
              </p>
            </div>
          </div>
        </div>

        {/* Founder Information */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Leadership & Domain Depth
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              Led by Construction Engineering & Enterprise Cloud Specialists
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Combining 8 years of construction site & SAP MM materials management with 13 years of enterprise platform architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl bg-[#0B2545]/85 border border-sky-500/20 p-7 backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Neutral professional profile monogram avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-[#071A33] border border-sky-400/40 flex items-center justify-center text-sky-300 font-display font-bold text-lg shadow-md shrink-0">
                      {founder.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-white">
                        {founder.name}
                      </h4>
                      <p className="text-sm font-semibold text-sky-400 mt-0.5">
                        {founder.role}
                      </p>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {founder.qualifications}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mt-4">
                    {founder.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Direct Contribution to SitePulse AI:
                  </span>
                  <p className="text-xs text-slate-300 leading-normal">
                    {founder.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
