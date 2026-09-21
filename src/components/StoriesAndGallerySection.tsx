import React, { useState } from 'react';
import { COMMUNITY_STORIES, GALLERY_PHOTOS } from '../data/mockData';
import { Quote, Sparkles, MapPin, Calendar, Camera, ArrowRight, User } from 'lucide-react';

export const StoriesAndGallerySection: React.FC = () => {
  const [galleryFilter, setGalleryFilter] = useState<'All' | 'Meetups' | 'Workshops' | 'Hackathons' | 'Team'>('All');

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (galleryFilter !== 'All' && photo.category !== galleryFilter) return false;
    return true;
  });

  return (
    <section className="py-20 md:py-28 border-b border-white/10 relative bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 10: Community Stories */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <div className="cora-badge mb-3">
              <span className="text-zinc-500">⬡</span>
              <span>COMMUNITY STORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium sm:font-semibold text-white tracking-tight leading-tight">
              Human Voices. From Idea to Launch.
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-normal leading-relaxed">
              Real journeys from members who attended an event and left with teammates, products, or job offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_STORIES.map((story) => (
              <div
                key={story.id}
                className="p-7 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-6 h-6 text-zinc-600" />
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-emerald-400">
                      {story.highlight}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-200 leading-relaxed font-normal mb-8 italic">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center font-mono-code text-xs font-bold text-white">
                    {story.avatarInitials}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{story.author}</h5>
                    <p className="text-[11px] font-mono-code text-zinc-400">{story.journey}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 11: Community Gallery */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="cora-badge mb-3">
                <span className="text-zinc-500">⬡</span>
                <span>COMMUNITY GALLERY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium sm:font-semibold text-white tracking-tight leading-tight">
                People. Ideas. Builds.
              </h2>
              <p className="text-sm text-zinc-400 mt-2 font-normal leading-relaxed">
                Captured moments from Pune meetups, late night hackathons, and classroom takeovers.
              </p>
            </div>

            {/* Gallery Category Filter */}
            <div className="flex flex-wrap gap-1.5 bg-zinc-950 p-1.5 rounded-full border border-white/10">
              {(['All', 'Meetups', 'Workshops', 'Hackathons', 'Team'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`text-xs font-mono-code px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    galleryFilter === cat
                      ? 'bg-white text-black font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredPhotos.map((photo, i) => (
              <div
                key={photo.id}
                className="group relative rounded-xl bg-zinc-950 border border-white/10 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Representation Graphic / Card Top */}
                <div className="h-48 w-full bg-zinc-900/90 relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5">
                  {/* Atmospheric grid & lightning */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  
                  {/* Graphic focal point */}
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="p-3 rounded-full bg-zinc-950/80 border border-white/20 mb-2 group-hover:scale-110 transition-transform">
                      <Camera className="w-5 h-5 text-zinc-300" />
                    </div>
                    <span className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-widest">
                      {photo.category} // {photo.date}
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono-code px-2 py-0.5 rounded bg-black/80 text-white border border-white/15 uppercase">
                      {photo.badge}
                    </span>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-zinc-200">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-600" />
                      <span>{photo.location}</span>
                    </span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-mono-code text-zinc-500">
            Attending our next event? Tag <span className="text-zinc-300">#DevSparkPune</span> or <span className="text-zinc-300">@devspark_org</span> to get your build photos featured.
          </div>
        </div>
      </div>
    </section>
  );
};
