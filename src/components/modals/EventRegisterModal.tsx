import React, { useState } from 'react';
import { EventItem } from '../../types';
import { X, CheckCircle2, Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface EventRegisterModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventRegisterModal: React.FC<EventRegisterModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [handle, setHandle] = useState('');
  const [goal, setGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8">
        {/* Close Button */}
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
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 block">
                  RSVP Registration
                </span>
                <h3 className="text-xl font-bold text-white">
                  {event.title}
                </h3>
              </div>
            </div>

            {event.subtitle && (
              <p className="text-xs font-mono-code text-zinc-300 mb-3 bg-zinc-900/60 p-2 rounded border border-white/5">
                {event.subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-xs font-mono-code text-zinc-400 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{event.date}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-mono-code text-zinc-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Arjun Sharma"
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. arjun@example.com"
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1.5">
                    Your Stage / Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-white/40 font-mono-code"
                  >
                    <option value="Student">Student</option>
                    <option value="Developer">Developer</option>
                    <option value="Builder">Builder</option>
                    <option value="Founder">Founder</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-code text-zinc-300 mb-1.5">
                    GitHub / X Handle
                  </label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@username"
                    className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono-code"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-zinc-300 mb-1.5">
                  What are you excited to build or learn?
                </label>
                <textarea
                  rows={2}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Exploring Gemini agent architectures and meeting Pune builders"
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-bold text-xs tracking-wider uppercase transition-all hover:bg-zinc-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Confirm RSVP Spot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-zinc-400 font-mono-code text-center mt-2">
                  No ticket charges • Venue details sent to your email 48h prior
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              You're on the list!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              We've reserved a provisional builder seat for <strong>{fullName || 'you'}</strong> for{' '}
              <span className="text-white font-mono-code">{event.title}</span> in Pune.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/15 font-mono-code text-xs text-left space-y-1.5 max-w-xs mx-auto">
              <div className="text-zinc-400 text-[10px] uppercase">Pass Code:</div>
              <div className="text-white font-bold text-sm tracking-wider">
                DEVSPARK-{Math.floor(1000 + Math.random() * 9000)}-PUNE
              </div>
              <div className="text-zinc-400 text-[10px] pt-1">
                Bring your laptop + charger. High-speed WiFi &amp; power provided.
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2 max-w-xs mx-auto">
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase hover:bg-zinc-200 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
