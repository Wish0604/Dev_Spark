import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Users } from 'lucide-react';
import { NavigationSection } from '../types';

interface NavbarProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  onOpenJoin: () => void;
  onOpenRegisterEvent: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenJoin,
  onOpenRegisterEvent,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavigationSection; label: string; isDiscover?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'projects', label: 'Projects' },
    { id: 'partners', label: 'Partners' },
    { id: 'discover', label: '/discover', isDiscover: true },
  ];

  const handleLinkClick = (id: NavigationSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      {/* Micro ticker banner for featured upcoming event */}
      <div className="bg-transparent py-1.5 px-4 text-xs border-b border-white/5 flex items-center justify-between text-zinc-300">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono-code text-[11px] text-zinc-400">UPCOMING IN PUNE:</span>
            <span className="text-zinc-200 font-medium truncate">AI × Web3 Workshop — READY FOR THE RUN × &lt;/Dev_Spark&gt;</span>
          </div>
          <button
            onClick={onOpenRegisterEvent}
            className="flex items-center gap-1 text-white hover:text-zinc-300 font-medium whitespace-nowrap group text-[11px] font-mono-code transition-colors cursor-pointer"
          >
            <span>RSVP Early Spot</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
        >
          <img
            src="/ChatGPT_Image_Sep_19__2026__01_16_35_AM-removebg-preview.png"
            alt="Dev_Spark Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                activeSection === link.id
                  ? 'bg-white/15 text-white border border-white/20 backdrop-blur-md shadow-sm'
                  : link.isDiscover
                  ? 'text-zinc-200 bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/30 font-mono-code backdrop-blur-sm'
                  : 'text-zinc-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.isDiscover && <Compass className="w-3 h-3 text-zinc-300" />}
              <span>{link.label}</span>
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenJoin}
            className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            <span>Join Syndicate</span>
            <span className="text-zinc-800 font-bold group-hover:rotate-12 transition-transform">⚡</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/85 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-zinc-800 text-white border border-white/20 font-semibold'
                  : 'text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {link.isDiscover && <Compass className="w-4 h-4 text-zinc-300" />}
                <span>{link.label}</span>
              </div>
              {link.isDiscover && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-mono-code">
                  Ecosystem
                </span>
              )}
            </button>
          ))}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="w-full py-3 px-4 rounded-lg bg-white text-black font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-black" />
              <span>Join &lt;/Dev_Spark&gt; Community ⚡</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

