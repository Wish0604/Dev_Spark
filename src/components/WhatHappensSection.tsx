import React, { useState } from 'react';
import { NavigationSection } from '../types';
import { 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  Send, 
  Sparkles, 
  GitBranch, 
  Cpu, 
  Check, 
  ChevronRight,
  Globe,
  Database,
  Code2
} from 'lucide-react';
import silkWavesImg from '../assets/images/dark_silk_waves_1789551300693.jpg';

interface WhatHappensProps {
  onNavigate: (section: NavigationSection) => void;
}

export const WhatHappensSection: React.FC<WhatHappensProps> = ({ onNavigate }) => {
  const [commandInput, setCommandInput] = useState('');
  const [isCommandSent, setIsCommandSent] = useState(false);

  const handleSendCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    setIsCommandSent(true);
    setTimeout(() => {
      setIsCommandSent(false);
      setCommandInput('');
    }, 2200);
  };

  return (
    <div className="bg-[#000000]/70 backdrop-blur-md border-b border-white/10">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: "How it Works" (Matching the 4 cards in screenshot)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="cora-badge mb-4">
              <span className="text-zinc-500">⬡</span>
              <span>CHOOSE • DEPLOY • COMMAND • ITERATE</span>
            </div>

            <h2 className="font-display font-medium sm:font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              How it Works
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Select from tracks, deploy open projects, or launch directly with community partners:
            </p>
          </div>

          {/* 4 Sleek Vertical Cards in 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* CARD 1: Choose Track / Node */}
            <div className="cora-card p-5 flex flex-col justify-between h-[390px] group">
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                  Choose Track
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Select a builder track from the Dev_Spark directory or bring your own idea.
                </p>
              </div>

              {/* Graphic: Concentric rings with glowing token */}
              <div className="my-auto py-4 flex items-center justify-center relative">
                {/* Concentric rings */}
                <div className="w-40 h-40 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
                  <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
                <span>01 // EXPLORE</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* CARD 2: Deploy to Dev_Spark */}
            <div className="cora-card p-5 flex flex-col justify-between h-[390px] group">
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                  Deploy &amp; Build
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Build your project on modern AI, Web3, and full-stack infrastructure.
                </p>
              </div>

              {/* Graphic: Server / Node stack list matching screenshot */}
              <div className="my-auto py-2 space-y-2 w-full">
                <div className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-mono-code text-[11px]">Alchemy Node</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono-code">Live</span>
                </div>

                <div className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-mono-code text-[11px]">Base Network</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono-code">Synced</span>
                </div>

                <div className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="font-mono-code text-[11px]">GitHub Action</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono-code">Ready</span>
                </div>

                <div className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="font-mono-code text-[11px]">Redis Cluster</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono-code">4ms</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
                <span>02 // COMPOSE</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* CARD 3: Collaborate & Ship */}
            <div className="cora-card p-5 flex flex-col justify-between h-[390px] group">
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                  Collaborate &amp; Ship
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Link repositories, join peer code reviews, and publish to showcase.
                </p>
              </div>

              {/* Graphic: 3D Faceted isometric node + command bar at bottom */}
              <div className="my-auto py-2 w-full flex flex-col items-center">
                {/* 3D Wireframe Cube/Diamond */}
                <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 border border-white/20 rotate-45 rounded-lg scale-90 group-hover:rotate-90 transition-transform duration-700" />
                  <div className="absolute inset-0 border border-white/10 rotate-12 rounded-lg scale-75" />
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4 text-zinc-200" />
                  </div>
                  {/* Floating particle dots */}
                  <span className="absolute top-1 left-2 w-1 h-1 rounded-full bg-white/60 animate-ping" />
                  <span className="absolute bottom-2 right-3 w-1 h-1 rounded-full bg-white/40" />
                </div>

                {/* Command Bar matching screenshot */}
                <form onSubmit={handleSendCommand} className="w-full relative">
                  <div className="flex items-center rounded-xl bg-zinc-900 border border-white/15 px-3 py-1.5 focus-within:border-white/40 transition-colors">
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder={isCommandSent ? "Command dispatched! ✓" : "Give any command...!"}
                      className="w-full bg-transparent text-[11px] text-white placeholder-zinc-500 focus:outline-none font-mono-code"
                    />
                    <button
                      type="submit"
                      className="p-1 rounded-md bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer shrink-0 ml-1"
                      aria-label="Send command"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
                <span>03 // COMMAND</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* CARD 4: Launch & Scale */}
            <div className="cora-card p-5 flex flex-col justify-between h-[390px] group">
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                  Launch &amp; Scale
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Simulate, refine, and launch projects with investors and partners.
                </p>
              </div>

              {/* Graphic: Terminal bezel with code snippet matching screenshot */}
              <div className="my-auto py-2 w-full">
                <div className="rounded-xl bg-zinc-950 border border-white/15 overflow-hidden text-left shadow-lg">
                  <div className="px-3 py-1.5 bg-zinc-900/80 border-b border-white/10 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                    <span className="text-[9px] font-mono-code text-zinc-400 ml-1">spark.config.json</span>
                  </div>
                  <pre className="p-2.5 text-[10px] font-mono-code text-zinc-300 overflow-x-auto leading-relaxed">
                    <span className="text-zinc-500">&#123;</span><br />
                    &nbsp;&nbsp;<span className="text-emerald-400">"devspark"</span>: &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"command"</span>: <span className="text-zinc-100">"deploy"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"args"</span>: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-400">"run"</span>, <span className="text-zinc-400">"--prod"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-400">"-e"</span>, <span className="text-cyan-300">"SPARK_TOKEN"</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;]<br />
                    &nbsp;&nbsp;&#125;<br />
                    <span className="text-zinc-500">&#125;</span>
                  </pre>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
                <span>04 // LAUNCH</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: "What we provide?" (Bento Grid matching screenshot)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="cora-badge mb-4">
              <span className="text-zinc-500">⬡</span>
              <span>ECOSYSTEM PILLARS &amp; INFRASTRUCTURE</span>
            </div>

            <h2 className="font-display font-medium sm:font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              What we provide?
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Dev_Spark brings together high-signal hackathons, peer review, and venture opportunities.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Bento Card 1: Dev_Spark Kernel */}
            <div className="cora-card p-6 flex flex-col justify-between min-h-[340px]">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                  Dev_Spark Kernel
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Agent-native runtime for persistent memory, async coordination, and layered task logic.
                </p>
              </div>

              {/* Graphic: Mechanical Keypad / Chip layout */}
              <div className="my-6 flex items-center justify-center">
                <div className="relative p-5 rounded-2xl bg-zinc-950 border border-white/15 shadow-inner">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-mono-code text-zinc-400">
                      CMD
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-mono-code text-zinc-400">
                      ALT
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-mono-code text-zinc-400">
                      DEL
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-mono-code text-zinc-400">
                      DEV
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                      ⚡
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-mono-code text-zinc-400">
                      API
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">v2.4 Kernel Core</span>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Masterclasses</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 2: Edge-Synced Execution */}
            <div className="cora-card p-6 flex flex-col justify-between min-h-[340px]">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                  Edge-Synced Execution
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  Nodes that operate across colleges, hackathons, and partner labs in seamless sync.
                </p>
              </div>

              {/* Graphic: Active node list */}
              <div className="my-6 space-y-2.5">
                <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono-code text-zinc-300">COEP Tech Lab</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono-code border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono-code text-zinc-300">MIT-WPU Syndicate</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono-code border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono-code text-zinc-300">PICT Dev Squad</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono-code border border-emerald-500/20">
                    Active
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">Distributed Mesh</span>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Campus Partners</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 3: PlugStack Dev Tools */}
            <div className="cora-card p-6 flex flex-col justify-between min-h-[340px]">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                  PlugStack Dev Tools
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  CLI kits, schema engines, and starter kits for fast, scalable hackathon deployment.
                </p>
              </div>

              {/* Graphic: App tile array */}
              <div className="my-6 grid grid-cols-4 gap-2.5 max-w-[200px] mx-auto">
                {['Git', 'Node', 'Py', 'AWS', 'Go', 'Rust', 'Docker', 'Vite'].map((tool) => (
                  <div
                    key={tool}
                    className="aspect-square rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-center text-[10px] font-mono-code font-bold text-zinc-300 hover:border-white/30 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">8+ Ready Toolchains</span>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 4: Wide Left Card with Dark Silk Waves Graphic */}
            <div className="md:col-span-2 cora-card overflow-hidden flex flex-col justify-between min-h-[320px] relative group">
              {/* Background dark silk waves image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={silkWavesImg}
                  alt="Metallic waves"
                  className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="cora-badge mb-3">
                  <span className="text-zinc-500">⬡</span>
                  <span>IRL NETWORK</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
                  Deep Peer Network
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-md">
                  High-density IRL meetups, hackathons, and intimate builder houses in Pune. 
                  Connect directly with students, engineers, and early founders shipping production products.
                </p>
              </div>

              <div className="relative z-10 p-6 sm:p-8 pt-0 flex items-center justify-between text-xs">
                <span className="font-mono-code text-[11px] text-zinc-400">
                  Pune • Bangalore • Mumbai
                </span>
                <button
                  onClick={() => onNavigate('events')}
                  className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Join Next Meetup</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Bento Card 5: Right Wide Card with Code Terminal */}
            <div className="cora-card p-6 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                  Fast-Track Pipelines
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-4">
                  Direct referrals into top startup teams, VC intros, and seed funding pipelines.
                </p>

                {/* Dark IDE window preview */}
                <div className="rounded-xl bg-zinc-950 border border-white/10 p-3 font-mono-code text-[10px] text-zinc-300 overflow-x-auto">
                  <div className="text-zinc-500 mb-1">// Dispatch project to Dev_Spark API</div>
                  <div>
                    <span className="text-purple-400">const</span> res = <span className="text-blue-400">await</span> SparkAPI.<span className="text-amber-300">submit</span>(&#123;
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-400">team:</span> <span className="text-emerald-400">"dev_spark_fellows"</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-400">target:</span> <span className="text-emerald-400">"YC_Summer_Venture"</span>
                  </div>
                  <div>&#125;);</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono-code text-[11px]">Zero friction</span>
                <button
                  onClick={() => onNavigate('opportunities')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Opportunities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
