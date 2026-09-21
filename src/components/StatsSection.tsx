import React from 'react';
import { COMMUNITY_STATS } from '../data/mockData';

export const StatsSection: React.FC = () => {
  const statsList = [
    {
      value: COMMUNITY_STATS.members,
      label: COMMUNITY_STATS.membersLabel,
      sub: "Vetted students, developers & founders"
    },
    {
      value: COMMUNITY_STATS.events,
      label: COMMUNITY_STATS.eventsLabel,
      sub: "IRL workshops, sprints & meetups"
    },
    {
      value: COMMUNITY_STATS.ideas,
      label: COMMUNITY_STATS.ideasLabel,
      sub: "From late-night code spikes to MVPs"
    },
    {
      value: COMMUNITY_STATS.ecosystem,
      label: COMMUNITY_STATS.ecosystemLabel,
      sub: "Connecting Pune builders to the world"
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/10 relative bg-[#000000]/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="cora-badge mb-3">
            <span className="text-zinc-500">⬡</span>
            <span>ECOSYSTEM METRICS</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-medium sm:font-semibold text-white tracking-tight">
            Real momentum. Zero vanity metrics.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-normal">
            Substantiated metrics reflecting active local engagement across Pune &amp; beyond.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="cora-card p-6 sm:p-7 text-center flex flex-col justify-center items-center"
            >
              <div className="font-display font-semibold text-4xl sm:text-5xl text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 uppercase tracking-wide mb-1 font-mono-code">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 font-normal leading-relaxed max-w-[190px]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
