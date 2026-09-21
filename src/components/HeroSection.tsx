import React from 'react';
import { motion } from 'motion/react';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { NavigationSection } from '../types';

interface HeroSectionProps {
  onNavigate: (section: NavigationSection) => void;
  onOpenJoin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate: _onNavigate,
  onOpenJoin,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-transparent border-b border-white/10">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl text-left">
          {/* Official Ecosystem Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-zinc-300 text-xs font-mono mb-3 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>OFFICIAL // DEV_SPARK ECOSYSTEM</span>
          </div>

          {/* Main Headline with HeroHighlight effect and animated motion highlight on </DEV_SPARK> */}
          <HeroHighlight containerClassName="items-start justify-start mb-4 py-2">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-white tracking-tight leading-[0.92] uppercase select-text max-w-4xl"
            >
              BUILD WHAT’S NEXT. <br />
              WITH{" "}
              <Highlight loop={true}>
                &lt;/DEV_SPARK&gt;
              </Highlight>
            </motion.h1>
          </HeroHighlight>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mb-6 tracking-normal leading-relaxed">
            A community for people who learn, build, connect &amp; grow.
          </p>

          {/* Journey Progression: Student → Developer → Builder → Founder */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-zinc-400 mb-8 sm:mb-10">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-200 font-medium">
              Student
            </span>
            <span className="text-zinc-600 font-bold select-none">→</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-200 font-medium">
              Developer
            </span>
            <span className="text-zinc-600 font-bold select-none">→</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-200 font-medium">
              Builder
            </span>
            <span className="text-zinc-600 font-bold select-none">→</span>
            <span className="px-3.5 py-1 rounded-md bg-white/10 border border-white/25 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.12)]">
              Founder
            </span>
          </div>

          {/* Primary Action Button */}
          <div className="flex items-center gap-4 mb-14 sm:mb-16">
            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-normal hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.45)] active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Join the Community</span>
            </button>
          </div>
        </div>

        {/* Ecosystem Logos Row */}
        <div className="pt-8 border-t border-white/10 max-w-4xl">
          <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-14 text-zinc-400 text-xs sm:text-sm font-medium tracking-wider">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              Google
            </span>

            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.315-.14.472l-4.043 3.655 4.043 3.655c.176.157.156.379.14.472a.506.506 0 0 1-.171.325c-.144.117-.365.142-.465.14a.458.458 0 0 1-.295-.102l-4.524-4.092a.552.552 0 0 1 0-.796l4.524-4.092a.458.458 0 0 1 .295-.104z"/>
              </svg>
              Brave
            </span>

            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <span className="text-blue-400 font-bold">▲</span>
              Alchemy
            </span>

            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <span className="font-mono text-xs font-bold text-emerald-400">≡</span>
              Solana
            </span>

            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </span>

            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <span className="text-emerald-400 font-bold">⚡</span>
              Supabase
            </span>

            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <span className="text-zinc-300 font-mono text-xs">READY FOR THE RUN</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
