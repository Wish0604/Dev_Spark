import React, { useState } from 'react';
import { OpportunityItem } from '../../types';
import { X, Calendar, MapPin, CheckCircle, ExternalLink, Briefcase, DollarSign, Send, ArrowRight } from 'lucide-react';

interface OpportunityDetailModalProps {
  opportunity: OpportunityItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({
  opportunity,
  isOpen,
  onClose,
}) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [note, setNote] = useState('');
  const [applied, setApplied] = useState(false);

  if (!isOpen || !opportunity) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  const handleReset = () => {
    setApplied(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0e0e0e] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!applied ? (
          <div>
            {/* Header info */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-[11px] font-mono-code text-zinc-300 uppercase">
                {opportunity.type}
              </span>
              {opportunity.featured && (
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono-code uppercase">
                  Featured
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
              {opportunity.title}
            </h3>
            <div className="text-zinc-400 text-xs font-mono-code mb-5">
              by <strong className="text-white">{opportunity.organization}</strong>
            </div>

            {/* Spec Matrix per prompt: Type | Deadline | Eligibility | Location | Apply */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-zinc-950 border border-white/10 font-mono-code text-xs mb-6">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block">Type</span>
                <span className="text-zinc-200 font-semibold">{opportunity.type}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block">Deadline</span>
                <span className="text-zinc-200 font-semibold">{opportunity.deadline}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block">Location</span>
                <span className="text-zinc-200 font-semibold truncate block">{opportunity.location}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block">Comp / Prize</span>
                <span className="text-emerald-400 font-semibold truncate block">{opportunity.compensationOrPrize || 'Standard'}</span>
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-4">
              <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider block mb-1">
                Eligibility &amp; Target Builders:
              </span>
              <p className="text-xs text-zinc-200 bg-zinc-900/60 p-2.5 rounded-lg border border-white/5">
                {opportunity.eligibility}
              </p>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider block mb-1">
                Overview &amp; Scope:
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {opportunity.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {opportunity.tags.map((t) => (
                <span key={t} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5">
                  #{t}
                </span>
              ))}
            </div>

            {/* Fast Apply Form */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono-code text-white uppercase tracking-wider block mb-3 font-bold">
                Fast Track Application for Dev_Spark Members:
              </span>

              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono-code"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono-code"
                  />
                </div>

                <input
                  type="url"
                  required
                  placeholder="Portfolio / GitHub / Resume Link (e.g. github.com/username)"
                  value={resumeUrl}
                  onChange={(e) => setResumeUrl(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono-code"
                />

                <textarea
                  rows={2}
                  placeholder="Short note: Relevant project or repo you've built..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Dev_Spark Fast-Track Application</span>
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-7 h-7 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Application Dispatched!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Your profile and GitHub link have been routed to the hiring team at{' '}
              <strong className="text-white">{opportunity.organization}</strong> tagged as a vetted Dev_Spark community applicant.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase hover:bg-zinc-200 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
