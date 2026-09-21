import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/mockData';
import { 
  GraduationCap, 
  Code2, 
  Hammer, 
  Rocket, 
  ChevronRight, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // default on "Builder"

  const stepIcons = [GraduationCap, Code2, Hammer, Rocket];

  const pillars = [
    {
      num: '01',
      title: 'LEARN',
      tag: '01 — LEARN',
      description: 'Discover. Experiment. Level up.',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'BUILD',
      tag: '02 — BUILD',
      description: 'Turn ideas into real projects.',
      icon: Hammer,
    },
    {
      num: '03',
      title: 'CONNECT',
      tag: '03 — CONNECT',
      description: 'Meet people who are building what’s next.',
      icon: Users,
    },
    {
      num: '04',
      title: 'GROW',
      tag: '04 — GROW',
      description: 'Find opportunities to take the next step.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-[#000000]/75 backdrop-blur-md border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Badge: ⬡ INTRODUCTION */}
          <div className="cora-badge mb-4">
            <span className="text-zinc-500">⬡</span>
            <span>INTRODUCTION</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-[0.95] mb-5 select-text">
            WHERE BUILDERS FIND THEIR SPARK.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <span className="font-mono text-white font-semibold">&lt;/Dev_Spark&gt;</span> is a community and ecosystem connecting{' '}
            <span className="text-white font-medium">students → developers → builders → founders</span> through learning, projects, opportunities, and collaboration.
          </p>
        </div>

        {/* 4 Core Pillars: 01 LEARN, 02 BUILD, 03 CONNECT, 04 GROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="cora-card p-5 sm:p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-200 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-zinc-400 tracking-wider">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-white/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <Sparkles className="w-3 h-3 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                  <span>Dev_Spark Pillar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The 4-Stage Builder Progression */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="cora-badge mb-2">
                <span className="text-zinc-500">⬡</span>
                <span>TRAJECTORY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                From Students to Founders.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              We purposefully expand beyond campus limits. Whether you are writing your first API route 
              or scaling seed-round infrastructure, there is a dedicated space for you here.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={step.stage}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-900/90 border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.08)]'
                      : 'bg-zinc-950/60 border border-white/10 hover:border-white/20 hover:bg-zinc-900/40'
                  }`}
                >
                  {/* Stage number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-code text-[11px] text-zinc-400 tracking-wider">
                      STAGE {step.badge}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-400 border border-white/10'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & info */}
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1 flex items-center gap-1.5">
                      <span>{step.stage}</span>
                    </h4>
                    <p className="text-xs font-mono-code text-zinc-400 mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code">
                    <span className={isSelected ? 'text-white font-medium' : 'text-zinc-400'}>
                      {isSelected ? 'CURRENT FOCUS' : 'CLICK TO VIEW'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-white' : 'text-zinc-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Highlight Banner */}
          <div className="mt-5 p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-zinc-300">
                Active in Dev_Spark: <strong>{JOURNEY_STEPS[activeStepIndex].stage}s</strong> collaborate directly with mentors and industry founders across Pune.
              </span>
            </div>
            <span className="font-mono-code text-zinc-400 text-[11px] whitespace-nowrap">
              Learn • Build • Connect • Grow
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
