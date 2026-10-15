import React from "react";
import { ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";

interface FooterProps {
  onRequestPilot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Platform", href: "#platform" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Market & Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#051427] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Footer Banner */}
      <div className="border-b border-slate-800/80 bg-[#071A33]/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Explore Smarter Construction Logistics
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Anticipate material delivery disruption, protect trade gangs from idle standing, and price logistics risks.
            </p>
          </div>
          <button
            onClick={onRequestPilot}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all cursor-pointer group shrink-0"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 p-[1px]">
                <div className="w-full h-full bg-[#071A33] rounded-[7px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-sky-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-xl font-bold text-white">
                SitePulse <span className="text-sky-400">AI</span>
              </span>
            </div>

            <p className="font-mono text-xs text-amber-300 uppercase tracking-widest font-semibold">
              Predict. Coordinate. Execute.
            </p>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Predictive construction logistics intelligence for UK contractors, connecting material readiness, site constraints, supplier performance and labour downtime costs.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Technology Readiness Level 4 · UK Innovation Focus</span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Information Col */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Business Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p>
                <strong className="text-slate-100">Company:</strong> SitePulse AI Ltd
              </p>
              <p>
                <strong className="text-slate-100">Location:</strong> United Kingdom
              </p>
              <p>
                <strong className="text-slate-100">Website:</strong>{" "}
                <span className="text-sky-400 font-mono">sitepulseai.co.uk</span>
              </p>
              <p className="text-slate-400 pt-2 text-[11px] leading-relaxed">
                UK-hosted architecture on AWS managed services with logical tenant segregation.
              </p>
            </div>
          </div>
        </div>

        {/* Development Stage Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
            <strong>Development Disclosure:</strong> This website presents a platform under development (Technology Readiness Level 4) preparing for live site validation. Illustrative interface graphics, mock datasets, and sample metrics do not represent validated operational results or independently audited performance. Integration availability with Procore, Sage and Xero is planned as part of the Predictive Architect rollout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
            <p>© 2026 SitePulse AI Ltd. All rights reserved.</p>
            <p className="font-mono text-[11px] text-slate-400">
              Commercial in Confidence · SitePulse AI Business Plan v2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
