import React from 'react';
import { NavigationSection } from '../types';
import { 
  ArrowUpRight, 
  ChevronRight,
  Terminal,
  Zap,
  Users,
  Rocket,
  Globe,
  Flame,
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import silkWavesImg from '../assets/images/dark_silk_waves_1789551300693.jpg';

interface WhatHappensProps {
  onNavigate: (section: NavigationSection) => void;
}

export const WhatHappensSection: React.FC<WhatHappensProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#000000]/70 backdrop-blur-md border-b border-white/10">
      {/* ─────────────────────────────────────────────────────────────
          SECTION: "What we provide?" (Bento Grid)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="cora-badge mb-4">
              <span className="text-zinc-500">⬡</span>
              <span>ECOSYSTEM PILLARS &amp; VALUE</span>
            </div>

            <h2 className="font-display font-medium sm:font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              What we provide?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              More than a community. A place to learn, build, connect, and find what’s next.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Bento Card 1: ⚡ Build Together */}
            <div className="cora-card p-6 sm:p-7 flex flex-col justify-between min-h-[360px] group hover:border-white/25 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-mono-code text-[11px] text-zinc-400">01 // BUILD</span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                  <span>⚡ Build Together</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-5">
                  Hackathons, workshops, project collaborations, open-source initiatives, and hands-on challenges to turn ideas into real builds.
                </p>

                {/* Pills matching prompt: Hackathons · Workshops · Projects · Open Source */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Hackathons', 'Workshops', 'Projects', 'Open Source'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-[11px] font-mono-code text-zinc-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visual Graphic: Active Sprint Mini-Terminal */}
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/10 text-xs font-mono-code">
                  <div className="flex items-center justify-between text-zinc-400 pb-1.5 border-b border-white/5 text-[11px]">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Terminal className="w-3.5 h-3.5 text-amber-400" />
                      sprint:collab
                    </span>
                    <span className="text-emerald-400 text-[10px]">● Live</span>
                  </div>
                  <div className="pt-2 text-[11px] text-zinc-300 space-y-1">
                    <div className="text-zinc-400">$ spark start-project --team=open</div>
                    <div className="text-emerald-400">✓ Team assembled · shipping build</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">Project Sprints</span>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 2: 🤝 Meet Your People */}
            <div className="cora-card p-6 sm:p-7 flex flex-col justify-between min-h-[360px] group hover:border-white/25 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-mono-code text-[11px] text-zinc-400">02 // CONNECT</span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                  <span>🤝 Meet Your People</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-5">
                  Connect with students, developers, designers, founders, mentors, and creators through meetups and community activities.
                </p>

                {/* Pills matching prompt: Meetups · Networking · Mentorship · Collaborations */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Meetups', 'Networking', 'Mentorship', 'Collaborations'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-[11px] font-mono-code text-zinc-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visual Graphic: Roles Node Matrix */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="px-2.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-zinc-200 text-[11px] font-mono-code">Developers &amp; Designers</span>
                  </div>
                  <div className="px-2.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-zinc-200 text-[11px] font-mono-code">Founders &amp; Mentors</span>
                  </div>
                  <div className="px-2.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-zinc-200 text-[11px] font-mono-code">College Leaders</span>
                  </div>
                  <div className="px-2.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-zinc-200 text-[11px] font-mono-code">Creators &amp; Builders</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">IRL &amp; Online</span>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Join Community</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 3: 🚀 Discover Opportunities */}
            <div className="cora-card p-6 sm:p-7 flex flex-col justify-between min-h-[360px] group hover:border-white/25 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="font-mono-code text-[11px] text-zinc-400">03 // DISCOVER</span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                  <span>🚀 Discover Opportunities</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-5">
                  Find hackathons, internships, jobs, fellowships, startup opportunities, events, and ways to get involved.
                </p>

                {/* Pills matching prompt: Jobs · Internships · Startups · Hackathons */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Jobs', 'Internships', 'Startups', 'Hackathons'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-[11px] font-mono-code text-zinc-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visual Graphic: Active pipeline item */}
                <div className="space-y-2">
                  <div className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-mono-code text-[11px] text-zinc-200">Startup Fellowships</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono-code border border-emerald-500/20">
                      Open
                    </span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="font-mono-code text-[11px] text-zinc-200">Engineering Internships</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono-code border border-cyan-500/20">
                      High Signal
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">Curated Board</span>
                <button
                  onClick={() => onNavigate('opportunities')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Opportunities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 4: 🌐 Grow Your Network */}
            <div className="cora-card p-6 sm:p-7 flex flex-col justify-between min-h-[340px] group hover:border-white/25 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="font-mono-code text-[11px] text-zinc-400">04 // NETWORK</span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                  <span>🌐 Grow Your Network</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-5">
                  Connect with communities, startups, companies, colleges, and ecosystem partners to collaborate beyond the community.
                </p>

                {/* Pills matching prompt: Communities · Startups · Companies · Colleges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Communities', 'Startups', 'Companies', 'Colleges'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-[11px] font-mono-code text-zinc-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visual Graphic: Network hub tags */}
                <div className="space-y-2">
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono-code text-zinc-300 text-[11px]">Campus Chapters &amp; Clubs</span>
                    <span className="text-[10px] text-emerald-400 font-mono-code">Connected</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono-code text-zinc-300 text-[11px]">Incubators &amp; Founders</span>
                    <span className="text-[10px] text-purple-400 font-mono-code">Partnered</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">Ecosystem Scale</span>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Ecosystem</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 5: 🔥 Turn Ideas Into Action (Wide Feature Card) */}
            <div className="md:col-span-2 cora-card overflow-hidden flex flex-col justify-between min-h-[340px] relative group hover:border-white/30 transition-all">
              {/* Background dark silk waves image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={silkWavesImg}
                  alt="Metallic waves"
                  className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="cora-badge">
                    <span className="text-zinc-500">⬡</span>
                    <span>ACTION &amp; MOMENTUM</span>
                  </div>
                  <span className="font-mono-code text-[11px] text-zinc-400">05 // ACTION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                  <span>🔥 Turn Ideas Into Action</span>
                </h3>

                {/* The 3 punchy prompt lines in sleek cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
                    <div className="text-amber-400 text-[11px] font-mono-code font-semibold tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>GOT AN IDEA?</span>
                    </div>
                    <p className="text-sm text-zinc-200 font-medium leading-snug">
                      Find people to build it with.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
                    <div className="text-emerald-400 text-[11px] font-mono-code font-semibold tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>BUILDING SOMETHING?</span>
                    </div>
                    <p className="text-sm text-zinc-200 font-medium leading-snug">
                      Find people who can help.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
                    <div className="text-cyan-400 text-[11px] font-mono-code font-semibold tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Rocket className="w-3.5 h-3.5" />
                      <span>NEXT OPPORTUNITY?</span>
                    </div>
                    <p className="text-sm text-zinc-200 font-medium leading-snug">
                      Start right here.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono-code text-xs text-zinc-400">
                  Ready to ship? The spark starts with your first build.
                </span>
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-zinc-200 transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-95"
                >
                  <span>Explore Projects &amp; Start</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
