import React from 'react';
import { MessageSquare, ArrowUpRight, Share2, Users, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/mockData';

interface JoinSectionProps {
  onOpenJoinModal: () => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="join" className="py-24 md:py-32 border-b border-white/10 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Emblem */}
        <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-zinc-950 border border-white/20 mb-6 shadow-[0_0_40px_rgba(255,255,255,0.12)]">
          <Users className="w-8 h-8 text-white" />
        </div>

        <div className="cora-badge mb-4">
          <span className="text-zinc-500">⬡</span>
          <span>JOIN DEV_SPARK</span>
        </div>

        {/* Primary Quote from Prompt */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium sm:font-semibold text-white tracking-tight max-w-3xl mx-auto mb-5 leading-tight">
          Your next opportunity might be <br className="hidden sm:inline" />
          one conversation away.
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Join people who are learning, building and figuring things out together. 
          Direct access to peer builders, hackathon teams, and founders.
        </p>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-zinc-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Enter the &lt;/Dev_Spark&gt; Syndicate</span>
            <span className="font-bold group-hover:rotate-12 transition-transform">⚡</span>
          </button>
        </div>

        {/* Channel Links Row per user prompt (WhatsApp | Instagram | LinkedIn | X | Discord) */}
        <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider block mb-4">
            Connect Across Channels:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono-code text-xs">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/40 flex items-center gap-2 transition-colors"
            >
              <span className="text-emerald-400">●</span>
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/40 flex items-center gap-2 transition-colors"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/40 flex items-center gap-2 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/40 flex items-center gap-2 transition-colors"
            >
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/40 flex items-center gap-2 transition-colors"
            >
              <span>Discord</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
