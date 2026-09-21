import React, { useState } from 'react';
import { DISCOVER_ITEMS } from '../data/mockData';
import { DiscoverItem, NavigationSection, OpportunityItem, EventItem, ProjectItem } from '../types';
import { Search, Compass, Users, Sparkles, Box, Zap, ArrowUpRight, ArrowLeft, Filter, CheckCircle2, MessageSquare, Handshake } from 'lucide-react';

interface DiscoverViewProps {
  onBackToHome: () => void;
  onNavigate: (section: NavigationSection) => void;
  onOpenJoin: () => void;
  onOpenPartner: () => void;
  onOpenSubmitProject: () => void;
  onOpenVolunteer: () => void;
}

export const DiscoverView: React.FC<DiscoverViewProps> = ({
  onBackToHome,
  onNavigate,
  onOpenJoin,
  onOpenPartner,
  onOpenSubmitProject,
  onOpenVolunteer,
}) => {
  const [activePillar, setActivePillar] = useState<'all' | 'people' | 'things' | 'participate'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubTag, setSelectedSubTag] = useState<string>('all');

  const peopleTags = ['all', 'Student', 'Developer', 'Designer', 'Founder', 'Mentor'];
  const thingsTags = ['all', 'Events', 'Projects', 'Opportunities', 'Communities', 'Startups'];
  const participateTags = ['all', 'Join', 'Build', 'Volunteer', 'Mentor', 'Partner', 'Sponsor'];

  const filteredItems = DISCOVER_ITEMS.filter((item) => {
    if (activePillar !== 'all' && item.category !== activePillar) return false;

    if (selectedSubTag !== 'all') {
      const matchTag = item.tag.toLowerCase() === selectedSubTag.toLowerCase() ||
        (item.roleOrType && item.roleOrType.toLowerCase().includes(selectedSubTag.toLowerCase()));
      if (!matchTag) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSub = item.subtitle.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTag = item.tag.toLowerCase().includes(q);
      if (!matchTitle && !matchSub && !matchDesc && !matchTag) return false;
    }

    return true;
  });

  const handleAction = (item: DiscoverItem) => {
    if (item.actionUrl?.startsWith('#')) {
      const target = item.actionUrl.replace('#', '');
      if (target === 'join') onOpenJoin();
      else if (target === 'partner') onOpenPartner();
      else if (target === 'submit-project') onOpenSubmitProject();
      else if (target === 'volunteer') onOpenVolunteer();
      else if (target === 'events') onNavigate('events');
      else if (target === 'opportunities') onNavigate('opportunities');
      else if (target === 'mentor' || target === 'mentor-request') onOpenPartner();
    } else if (item.actionUrl) {
      window.open(item.actionUrl, '_blank');
    }
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top back button */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Page</span>
        </button>

        <div className="text-xs font-mono-code text-zinc-400">
          PATH: <span className="text-white font-bold">/discover</span>
        </div>
      </div>

      {/* Discover Portal Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs text-zinc-300 mb-4 font-mono-code">
          <Compass className="w-3.5 h-3.5 text-zinc-200" />
          <span>DEV_SPARK BUILDER ECOSYSTEM DIRECTORY</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
          Discover the <br />
          <span className="chrome-silver-text">Ecosystem.</span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
          Dev_Spark is more than a chat group. Explore the people who build, the products 
          and opportunities coming out of Pune, and high-impact ways to participate.
        </p>
      </div>

      {/* Main 3 Pillar Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          {
            id: 'people',
            title: '01. People',
            desc: 'Students, Developers, Designers, Founders, Mentors',
            icon: Users
          },
          {
            id: 'things',
            title: '02. Things',
            desc: 'Events, Projects, Opportunities, Communities, Startups',
            icon: Box
          },
          {
            id: 'participate',
            title: '03. Ways to Participate',
            desc: 'Join, Build, Volunteer, Mentor, Partner, Sponsor',
            icon: Zap
          },
        ].map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activePillar === pillar.id;

          return (
            <button
              key={pillar.id}
              onClick={() => {
                setActivePillar(pillar.id as any);
                setSelectedSubTag('all');
              }}
              className={`p-5 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-zinc-900 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]'
                  : 'bg-zinc-950/70 border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-code text-xs uppercase tracking-wider font-bold">
                  {pillar.title}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
              </div>
              <p className="text-xs font-mono-code leading-relaxed text-zinc-400">
                {pillar.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Search and Sub-filters */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search people, projects, opportunities or roles..."
              className="w-full bg-zinc-900/90 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono-code"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActivePillar('all');
                setSelectedSubTag('all');
                setSearchQuery('');
              }}
              className="text-xs font-mono-code text-zinc-400 hover:text-white px-3 py-1.5 rounded bg-zinc-900 border border-white/5 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Sub-tag chips based on active pillar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
          <span className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider mr-2">
            Filter:
          </span>

          {(activePillar === 'people'
            ? peopleTags
            : activePillar === 'things'
            ? thingsTags
            : activePillar === 'participate'
            ? participateTags
            : ['all', 'Student', 'Developer', 'Designer', 'Founder', 'Mentor', 'Events', 'Projects', 'Opportunities', 'Join', 'Build', 'Volunteer', 'Partner']
          ).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedSubTag(tag)}
              className={`text-[11px] font-mono-code px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                selectedSubTag === tag
                  ? 'bg-white text-black font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Category & Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300 uppercase font-medium">
                  {item.category} // {item.tag}
                </span>

                {item.secondaryTag && (
                  <span className="text-[10px] font-mono-code text-zinc-400">
                    {item.secondaryTag}
                  </span>
                )}
              </div>

              {/* Title & Role */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono-code text-zinc-400 mb-3">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                {item.description}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-mono-code text-zinc-400">
                {item.roleOrType}
              </span>

              <button
                onClick={() => handleAction(item)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-white text-zinc-200 hover:text-black border border-white/15 text-xs font-mono-code font-bold transition-all cursor-pointer"
              >
                <span>{item.actionText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="p-16 text-center rounded-2xl bg-zinc-950 border border-white/10">
          <p className="text-sm font-mono-code text-zinc-400 mb-4">
            No ecosystem items match your current search query.
          </p>
          <button
            onClick={() => {
              setActivePillar('all');
              setSelectedSubTag('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-zinc-800 text-white font-mono-code text-xs hover:bg-zinc-700 cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
