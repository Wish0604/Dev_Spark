import React, { useState } from 'react';
import { X, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState('Event Operations & Logistics');
  const [collegeOrWork, setCollegeOrWork] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 block">
                  Get Involved
                </span>
                <h3 className="text-xl font-bold text-white">
                  Volunteer with &lt;/Dev_Spark&gt;
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
              Help orchestrate Pune's high-octane hackathons, workshops, and builder meetups. 
              Get backstage access, meet founders, and lead community initiatives.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Karan Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="karan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  College / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. COEP / PICT / VIT / Startup"
                  value={collegeOrWork}
                  onChange={(e) => setCollegeOrWork(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1">
                  Preferred Volunteer Area
                </label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-white/40 font-mono-code"
                >
                  <option value="Event Operations & Logistics">Event Operations &amp; Logistics</option>
                  <option value="Photography & Video Content">Photography &amp; Video Content</option>
                  <option value="Technical Mentorship & Code Review">Technical Mentorship &amp; Code Review</option>
                  <option value="Stage Anchoring & Speaker Support">Stage Anchoring &amp; Speaker Support</option>
                  <option value="Social Media & Community Outreach">Social Media &amp; Community Outreach</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Volunteer Crew</span>
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
              Application Received!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Thanks <strong>{name}</strong>! We'll invite you to the private Dev_Spark Ops WhatsApp channel prior to our upcoming Pune event.
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
