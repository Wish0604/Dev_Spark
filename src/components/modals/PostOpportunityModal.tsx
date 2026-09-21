import React, { useState } from 'react';
import { X, CheckCircle2, Flame, Plus, ArrowRight } from 'lucide-react';
import { OpportunityItem, OpportunityType } from '../../types';

interface PostOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpportunityPosted: (newOpp: OpportunityItem) => void;
}

export const PostOpportunityModal: React.FC<PostOpportunityModalProps> = ({
  isOpen,
  onClose,
  onOpportunityPosted,
}) => {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [type, setType] = useState<OpportunityType>('Internship');
  const [deadline, setDeadline] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [location, setLocation] = useState('Pune / Hybrid');
  const [compensation, setCompensation] = useState('');
  const [tagsInput, setTagsInput] = useState('React, TypeScript, AI');
  const [summary, setSummary] = useState('');
  const [applyUrl, setApplyUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const newOpp: OpportunityItem = {
      id: `opp-${Date.now()}`,
      title,
      organization,
      type,
      deadline: deadline || 'Rolling',
      eligibility: eligibility || 'Open to all builders',
      location,
      compensationOrPrize: compensation,
      tags: tags.length ? tags : ['Developer'],
      summary,
      applyUrl: applyUrl || '#apply',
      featured: true,
      verified: true,
      postedDate: 'Just now'
    };

    onOpportunityPosted(newOpp);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
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

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-white">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 block">
                  Dev_Spark Opportunities Board
                </span>
                <h3 className="text-xl font-bold text-white">
                  Post an Opportunity
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
              Connect directly with vetted student developers, AI engineers, and makers in Pune and across India.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Opportunity Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Founding AI Engineer Intern"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Company / Lab Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AeroStack Labs"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Type *
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as OpportunityType)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-white/40 font-mono-code"
                  >
                    <option value="Internship">Internship</option>
                    <option value="Job">Job</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Fellowship">Fellowship</option>
                    <option value="Grant">Grant</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Speaking">Speaking</option>
                    <option value="Open-Source">Open-Source</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Deadline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oct 31, 2026 / Rolling"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune / Hybrid / Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Stipend / Comp / Prize
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹40,000 / mo or ₹1,00,000"
                    value={compensation}
                    onChange={(e) => setCompensation(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Required Tags
                  </label>
                  <input
                    type="text"
                    placeholder="React, Python, Go"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Eligibility Criteria *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pre-final year students or active open source contributors"
                  value={eligibility}
                  onChange={(e) => setEligibility(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Summary &amp; Deliverables *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="What will this builder work on?"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publish to Opportunities Board</span>
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
              Opportunity Published!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              <strong>{title}</strong> by {organization} is now live on the board and broadcasted to Dev_Spark builders.
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
