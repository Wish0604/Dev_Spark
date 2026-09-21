import React, { useState } from 'react';
import { OPPORTUNITIES_DATA } from '../data/mockData';
import { OpportunityItem, OpportunityType } from '../types';
import { Search, Flame, MapPin, Calendar, CheckCircle2, ArrowUpRight, Plus, ExternalLink, Briefcase } from 'lucide-react';

interface OpportunitiesSectionProps {
  onSelectOpportunity: (opp: OpportunityItem) => void;
  onPostOpportunity: () => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  onSelectOpportunity,
  onPostOpportunity,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const typesList: (string | OpportunityType)[] = [
    'All',
    'Internship',
    'Job',
    'Hackathon',
    'Fellowship',
    'Grant',
    'Speaking',
    'Scholarship'
  ];

  const filtered = OPPORTUNITIES_DATA.filter((item) => {
    if (selectedType !== 'All' && item.type !== selectedType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchOrg = item.organization.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      const matchLoc = item.location.toLowerCase().includes(q);
      if (!matchTitle && !matchOrg && !matchTags && !matchLoc) return false;
    }
    return true;
  });

  return (
    <section id="opportunities" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="cora-badge mb-3">
              <span className="text-zinc-500">⬡</span>
              <span>CURATED OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium sm:font-semibold text-white tracking-tight leading-tight">
              High-Signal Opportunities
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mt-2 font-normal leading-relaxed">
              Vetted internships, seed grants, competitive hackathons, speaking slots, and paid fellowships. 
              Updated weekly for the Dev_Spark community.
            </p>
          </div>

          <button
            onClick={onPostOpportunity}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Post an Opportunity</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, company, or stack (e.g. AI, React)..."
                className="w-full bg-zinc-950 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono-code"
              />
            </div>

            <div className="text-xs font-mono-code text-zinc-400 self-center">
              Showing <strong className="text-white">{filtered.length}</strong> opportunities
            </div>
          </div>

          {/* Type Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {typesList.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`text-xs font-mono-code px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedType === type
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-zinc-950 text-zinc-400 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Structured List / Table */}
        <div className="space-y-3">
          {/* Table Header row on larger screens */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-zinc-950 rounded-lg border border-white/5 text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider">
            <div className="col-span-4">Role &amp; Organization</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Deadline</div>
            <div className="col-span-2">Eligibility &amp; Location</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {filtered.length === 0 ? (
            <div className="p-12 text-center rounded-xl bg-zinc-950/60 border border-white/10 text-zinc-400 font-mono-code text-xs">
              No matching opportunities found for this filter.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-white/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-4 items-center group cursor-pointer"
                onClick={() => onSelectOpportunity(item)}
              >
                {/* 1. Title & Organization */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {item.title}
                    </h4>
                    {item.featured && (
                      <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="text-zinc-200 font-medium">{item.organization}</span>
                    {item.compensationOrPrize && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="text-emerald-400 font-mono-code font-medium">
                          {item.compensationOrPrize}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono-code px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Type */}
                <div className="lg:col-span-2">
                  <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-300">
                    {item.type}
                  </span>
                </div>

                {/* 3. Deadline */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.deadline}</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono-code block mt-0.5">
                    {item.postedDate}
                  </span>
                </div>

                {/* 4. Eligibility & Location */}
                <div className="lg:col-span-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono-code">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 line-clamp-1 block">
                    {item.eligibility}
                  </span>
                </div>

                {/* 5. Apply Button */}
                <div className="lg:col-span-2 flex items-center justify-start lg:justify-end pt-2 lg:pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectOpportunity(item);
                    }}
                    className="px-4 py-2 rounded-lg bg-zinc-900 group-hover:bg-white text-zinc-200 group-hover:text-black border border-white/15 text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply / View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
