import React, { useState } from 'react';
import { X, CheckCircle2, Handshake, ArrowRight, Building2 } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [collabType, setCollabType] = useState('Workshops');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Community partnerships',
    'Workshops',
    'Hackathons',
    'Sponsorships',
    'Speakers',
    'Mentorship',
    'Hiring',
    'College collaborations',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-white">
                <Handshake className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 block">
                  Ecosystem Collaboration
                </span>
                <h3 className="text-xl font-bold text-white">
                  Partner with &lt;/Dev_Spark&gt;
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
              Connect with 200+ high-velocity students, builders, and early-stage founders in Pune and beyond.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Organization / Company / College Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vektor Labs / COEP Tech Club"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Aditi Sharma"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="aditi@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Collaboration Category *
                </label>
                <select
                  value={collabType}
                  onChange={(e) => setCollabType(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-white/40 font-mono-code"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  How would you like to build with us?
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Tell us about the workshop you'd like to host, positions to hire for, or sponsorship format..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Partnership Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Proposal Received!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{contactName}</strong>. The Dev_Spark core team will review 
              your collaboration request for <strong>{orgName}</strong> and reply via email within 24 hours.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
