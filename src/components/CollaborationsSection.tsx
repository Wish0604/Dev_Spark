import React, { useState } from 'react';
import { PARTNERS_DATA } from '../data/mockData';
import { PartnerItem } from '../types';
import { Handshake, ArrowRight, Building2, GraduationCap, Briefcase, Terminal, Users, Sparkles } from 'lucide-react';

interface CollaborationsSectionProps {
  onOpenPartnerModal: () => void;
}

export const CollaborationsSection: React.FC<CollaborationsSectionProps> = ({
  onOpenPartnerModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Communities', 'Startups', 'Companies', 'Colleges', 'Developer Tools'];

  const filteredPartners = PARTNERS_DATA.filter((p) => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    return true;
  });

  const collaborationTypes = [
    'Community partnerships',
    'Workshops',
    'Hackathons',
    'Sponsorships',
    'Speakers',
    'Mentorship',
    'Hiring',
    'College collaborations'
  ];

  return (
    <section id="partners" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 8: Collaborations Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="cora-badge mb-3">
              <span className="text-zinc-500">⬡</span>
              <span>ECOSYSTEM COLLABORATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium sm:font-semibold text-white tracking-tight leading-tight">
              We've been Building With
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mt-2 font-normal leading-relaxed">
              Communities • Startups • Companies • Colleges • Developer Tools
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 cursor-pointer"
          >
            <span>Want to collaborate? →</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono-code px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-800 text-white border-white/30 font-bold'
                  : 'bg-zinc-950 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="p-6 rounded-xl bg-zinc-950/70 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300 uppercase">
                    {partner.category}
                  </span>
                  <span className="text-[11px] font-mono-code text-zinc-400">
                    {partner.collabType}
                  </span>
                </div>

                <div className="font-mono-code font-extrabold text-lg text-white tracking-wider mb-2">
                  {partner.name}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-zinc-400">
                <span>Verified Partner</span>
                <span className="text-white">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 9: For Founders & Companies per user prompt */}
        <div className="rounded-2xl bg-zinc-950 border border-white/20 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/10 via-zinc-800/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-3">
              <span className="text-white">09 //</span>
              <span>FOR FOUNDERS &amp; ENTERPRISES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
              Looking to meet the next generation of builders?
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-8">
              Dev_Spark connects you directly with high-agency software engineers, AI researchers, 
              and product makers in Pune and across India. Cut through noisy recruitment boards and 
              work alongside people who actually ship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Host workshops', desc: 'Demo your API or framework directly to developers.' },
                { title: 'Sponsor events', desc: 'Put your brand and bounties at our hackathons.' },
                { title: 'Find talent', desc: 'Hire tested builders with verified commit histories.' },
                { title: 'Mentor builders', desc: 'Guide promising student squads through office hours.' },
                { title: 'Collaborate on projects', desc: 'Co-build real-world pilot applications.' },
                { title: 'Partner with the community', desc: 'Establish long-term campus presence.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-white font-mono-code uppercase">{item.title}</h5>
                    <p className="text-[11px] text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3.5 rounded-lg bg-white text-black font-bold text-xs tracking-wider uppercase transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Partner with Dev_Spark →</span>
              </button>

              <div className="text-xs text-zinc-400 font-mono-code flex items-center gap-2">
                <span>⚡ Custom partnerships</span>
                <span>•</span>
                <span>Direct Slack/WhatsApp intro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
