import React, { useState } from 'react';
import { X, Check, Copy, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/mockData';

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinCommunityModal: React.FC<JoinCommunityModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.whatsapp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md bg-[#0e0e0e] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex p-3.5 rounded-2xl bg-zinc-900 border border-white/15 mb-3 shadow-[0_0_30px_rgba(255,255,255,0.08)] text-white">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <div className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-1">
            &lt;/Dev_Spark&gt;
          </div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
            Join the Syndicate ⚡
          </h3>
          <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
            Direct access to 200+ builders, hackathon teams, and curated opportunity feeds.
          </p>
        </div>

        {/* Primary WhatsApp Channel per prompt */}
        <div className="space-y-3 mb-6">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <span>Join WhatsApp Community</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Join Discord Server</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Copy Invite Link */}
        <div className="p-3 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-between text-xs font-mono-code text-zinc-400 mb-6">
          <span className="truncate pr-2">{SOCIAL_LINKS.whatsapp}</span>
          <button
            onClick={handleCopyLink}
            className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Other Channels Row */}
        <div className="pt-4 border-t border-white/10 text-center">
          <span className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider block mb-3">
            Follow Dev_Spark:
          </span>

          <div className="flex items-center justify-center gap-4 text-xs font-mono-code text-zinc-300">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-white underline">
              Instagram
            </a>
            <span>•</span>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white underline">
              LinkedIn
            </a>
            <span>•</span>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noreferrer" className="hover:text-white underline">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
