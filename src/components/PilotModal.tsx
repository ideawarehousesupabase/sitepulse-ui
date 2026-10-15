import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierContext?: string;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, tierContext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    organisationName: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone number is required.";
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = "Please provide a valid phone number.";
    }
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = "Please provide a valid email address.";
    }
    if (!formData.organisationName.trim()) {
      errs.organisationName = "Organisation name is required.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      organisationName: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#071A33]/80 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0B2545] border border-sky-500/25 shadow-2xl p-6 sm:p-8 overflow-hidden z-10 my-8">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/15 text-sky-400 border border-blue-500/30 mb-2">
                <span>London Pilot Programme</span>
                {tierContext && <span className="text-amber-400 font-bold">· {tierContext}</span>}
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Request a SitePulse AI Pilot
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Register interest for the upcoming 5–10 site London validation programme. Designed for UK groundworks, fit-out, and MEP subcontractors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Morrison"
                    className={`w-full bg-[#071A33] border rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName ? "border-red-500 focus:ring-red-500/40" : "border-slate-700 focus:border-sky-400 focus:ring-sky-400/20"
                    }`}
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.fullName}</p>}
              </div>

              {/* Organisation & Phone in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Organisation Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={formData.organisationName}
                      onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                      placeholder="e.g. Apex Civil Contractors Ltd"
                      className={`w-full bg-[#071A33] border rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.organisationName ? "border-red-500 focus:ring-red-500/40" : "border-slate-700 focus:border-sky-400 focus:ring-sky-400/20"
                      }`}
                    />
                  </div>
                  {errors.organisationName && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.organisationName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    UK Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. +44 7911 123456"
                      className={`w-full bg-[#071A33] border rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.phoneNumber ? "border-red-500 focus:ring-red-500/40" : "border-slate-700 focus:border-sky-400 focus:ring-sky-400/20"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phoneNumber}</p>}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Business Email Address <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="e.g. d.morrison@apexcivil.co.uk"
                    className={`w-full bg-[#071A33] border rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.emailAddress ? "border-red-500 focus:ring-red-500/40" : "border-slate-700 focus:border-sky-400 focus:ring-sky-400/20"
                    }`}
                  />
                </div>
                {errors.emailAddress && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.emailAddress}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Project / Site Details <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your upcoming project type (e.g. commercial groundworks, London location, active crane windows)..."
                    className="w-full bg-[#071A33] border border-slate-700 rounded-lg pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
                >
                  <span>Submit Pilot Enquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 leading-relaxed">
                Client-side demonstration form. Data entered is processed locally in this preview.
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              Enquiry Preview Submitted
            </h3>

            {/* MANDATORY EXACT TEXT REQUIRED BY INSTRUCTION */}
            <div className="bg-[#071A33] border border-amber-500/30 rounded-xl p-4 text-left">
              <p className="text-xs uppercase font-semibold text-amber-400 tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> Notice
              </p>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                "Your enquiry details have been entered in this website preview. This form is not yet connected to a live enquiry service."
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-lg p-3 text-left text-xs space-y-1 text-slate-300 font-mono">
              <p><span className="text-slate-400">Name:</span> {formData.fullName}</p>
              <p><span className="text-slate-400">Organisation:</span> {formData.organisationName}</p>
              <p><span className="text-slate-400">Contact:</span> {formData.emailAddress} · {formData.phoneNumber}</p>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
