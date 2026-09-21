import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/mockData';
import { EventItem } from '../types';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle, Sparkles, Filter, Users, Tag } from 'lucide-react';

interface EventsSectionProps {
  onRegisterEvent: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterEvent }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEvents = EVENTS_DATA.filter((event) => {
    if (activeTab === 'upcoming' && event.status !== 'upcoming') return false;
    if (activeTab === 'past' && event.status !== 'past') return false;
    if (selectedType !== 'all' && event.type !== selectedType) return false;
    return true;
  });

  const upcomingFeatured = EVENTS_DATA.find((e) => e.id === 'event-01') || EVENTS_DATA[0];

  return (
    <section id="events" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="cora-badge mb-3">
              <span className="text-zinc-500">⬡</span>
              <span>DEV_SPARK EXPERIENCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium sm:font-semibold text-white tracking-tight leading-tight">
              Community Events &amp; Sprints
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mt-2 font-normal leading-relaxed">
              Hands-on masterclasses, hackathons, and offline builder meetups across Pune and online.
            </p>
          </div>

          {/* Tab controls */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-950 p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-zinc-800 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Events ({EVENTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-code flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'upcoming'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Upcoming</span>
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                activeTab === 'past'
                  ? 'bg-zinc-800 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Past Recaps
            </button>
          </div>
        </div>

        {/* Featured Big Card (Specifically AI × Web3 Workshop per prompt!) */}
        <div className="mb-14 rounded-2xl bg-zinc-950 border border-white/20 p-6 sm:p-8 lg:p-10 relative overflow-hidden group shadow-[0_0_40px_rgba(255,255,255,0.04)]">
          {/* Subtle electric background lines */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 via-zinc-800/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white text-black font-mono-code text-[11px] font-bold tracking-wider uppercase">
                  ⚡ UPCOMING
                </span>
                <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 font-mono-code text-[11px]">
                  WORKSHOP × SPRINT
                </span>
                <span className="text-zinc-400 font-mono-code text-xs">
                  {upcomingFeatured.attendeesCount}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight mb-2">
                  {upcomingFeatured.title}
                </h3>
                <div className="font-mono-code text-zinc-300 text-sm tracking-wide flex items-center gap-2">
                  <span className="text-white font-bold">{upcomingFeatured.subtitle}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl font-normal">
                {upcomingFeatured.description}
              </p>

              {/* Event Metadata (Pune, Date, Location) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono-code p-2.5 rounded-lg bg-zinc-900/80 border border-white/10">
                  <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>📍 {upcomingFeatured.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono-code p-2.5 rounded-lg bg-zinc-900/80 border border-white/10">
                  <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>📅 {upcomingFeatured.date}</span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono-code uppercase text-zinc-400 block tracking-wider">
                  Session Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {upcomingFeatured.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-white">✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-sm p-6 rounded-xl bg-zinc-900/90 border border-white/15 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/20 flex items-center justify-center mb-4 text-white">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  &lt;/Dev_Spark&gt; IRL Series
                </span>
                <span className="text-white font-bold text-sm mb-4">
                  Limited In-Person Seating
                </span>

                <button
                  onClick={() => onRegisterEvent(upcomingFeatured)}
                  className="w-full py-3.5 px-6 rounded-lg bg-white text-black font-bold text-sm tracking-wide transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Register →</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="mt-3 text-[11px] text-zinc-400 font-mono-code">
                  Free entry for vetted builders • Pune venue
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter by event category */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-400">
            <Filter className="w-3.5 h-3.5" />
            <span>CATEGORIES:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['all', 'workshop', 'hackathon', 'meetup', 'session', 'collaboration'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`text-[11px] font-mono-code px-3 py-1 rounded-md transition-colors uppercase ${
                  selectedType === type
                    ? 'bg-zinc-700 text-white font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Status & Type */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono-code px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                      event.status === 'upcoming'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'UPCOMING' : 'PAST EVENT'}
                  </span>
                  <span className="text-[11px] font-mono-code text-zinc-400 uppercase">
                    {event.type}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                  {event.title}
                </h4>
                {event.subtitle && (
                  <p className="text-xs font-mono-code text-zinc-400 mb-3">
                    {event.subtitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Location & Date */}
                <div className="space-y-1.5 mb-4 text-xs font-mono-code text-zinc-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-zinc-400">
                  {event.attendeesCount || 'Community Session'}
                </span>

                {event.status === 'upcoming' ? (
                  <button
                    onClick={() => onRegisterEvent(event)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-white hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
                  >
                    <span>Register →</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onRegisterEvent(event)}
                    className="inline-flex items-center gap-1 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Recap</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
