import React from 'react';
import { NavigationSection } from '../types';
import { SOCIAL_LINKS } from '../data/mockData';

interface FooterProps {
  onNavigate: (section: NavigationSection) => void;
  onOpenJoin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenJoin }) => {
  return (
    <footer className="py-16 md:py-20 bg-transparent backdrop-blur-sm text-zinc-400 font-mono-code text-xs border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/ChatGPT_Image_Sep_19__2026__01_16_35_AM-removebg-preview.png"
                alt="Dev_Spark Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-zinc-300 text-sm font-sans font-medium">
              Learn. Build. Connect. Grow.
            </p>

            <p className="text-zinc-400 text-xs font-sans leading-relaxed max-w-sm">
              From students to founders. A community and builder ecosystem where people actually ship code and launch projects together.
            </p>

            <div className="text-[11px] text-zinc-400 pt-2">
              Based in Pune, Maharashtra • Connecting builders across India.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-zinc-400 hover:text-white transition-colors"
              >
                Community
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="text-left text-zinc-400 hover:text-white transition-colors"
              >
                Events
              </button>
              <button
                onClick={() => onNavigate('opportunities')}
                className="text-left text-zinc-400 hover:text-white transition-colors"
              >
                Opportunities
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="text-left text-zinc-400 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => onNavigate('partners')}
                className="text-left text-zinc-400 hover:text-white transition-colors"
              >
                Partners
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-zinc-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('discover')}
                className="text-left text-white font-bold hover:underline transition-colors col-span-2 mt-1"
              >
                /discover Ecosystem →
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
              Channels
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © 2026 &lt;/Dev_Spark&gt;. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenJoin} className="hover:text-white transition-colors">
              Join WhatsApp ⚡
            </button>
            <span>•</span>
            <span className="text-zinc-400">Where Ideas Meet Action</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
