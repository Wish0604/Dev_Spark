import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhatHappensSection } from './components/WhatHappensSection';
import { EventsSection } from './components/EventsSection';
import { StatsSection } from './components/StatsSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CollaborationsSection } from './components/CollaborationsSection';
import { StoriesAndGallerySection } from './components/StoriesAndGallerySection';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';
import { DiscoverView } from './components/DiscoverView';
import { BackgroundVideo } from './components/BackgroundVideo';
import { CustomCursor } from './components/CustomCursor';

// Modals
import { EventRegisterModal } from './components/modals/EventRegisterModal';
import { OpportunityDetailModal } from './components/modals/OpportunityDetailModal';
import { SubmitProjectModal } from './components/modals/SubmitProjectModal';
import { PartnerModal } from './components/modals/PartnerModal';
import { JoinCommunityModal } from './components/modals/JoinCommunityModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { PostOpportunityModal } from './components/modals/PostOpportunityModal';
import { VolunteerModal } from './components/modals/VolunteerModal';

import { NavigationSection, EventItem, OpportunityItem, ProjectItem } from './types';
import { EVENTS_DATA, OPPORTUNITIES_DATA } from './data/mockData';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavigationSection>('home');
  const [isDiscoverMode, setIsDiscoverMode] = useState(false);

  // Modals state
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityItem | null>(null);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isProjectDetailModalOpen, setIsProjectDetailModalOpen] = useState(false);

  const [isSubmitProjectModalOpen, setIsSubmitProjectModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isPostOpportunityModalOpen, setIsPostOpportunityModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  // Listen to hash changes (e.g. #discover or #events)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'discover') {
        setIsDiscoverMode(true);
        setActiveSection('discover');
      } else if (['home', 'about', 'events', 'opportunities', 'projects', 'partners', 'join'].includes(hash)) {
        setIsDiscoverMode(false);
        setActiveSection(hash as NavigationSection);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (section: NavigationSection) => {
    if (section === 'discover') {
      setIsDiscoverMode(true);
      setActiveSection('discover');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsDiscoverMode(false);
      setActiveSection(section);
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleRegisterEvent = (event: EventItem) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const handleSelectOpportunity = (opp: OpportunityItem) => {
    setSelectedOpportunity(opp);
    setIsOpportunityModalOpen(true);
  };

  const handleViewProjectDetails = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setIsProjectDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] flex flex-col relative selection:bg-white selection:text-black">
      {/* High-Performance Custom Cursor Tracking System */}
      <CustomCursor />

      {/* Background Singularity Video in Seamless Continuous Loop */}
      <BackgroundVideo />

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Navigation */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenJoin={() => setIsJoinModalOpen(true)}
          onOpenRegisterEvent={() => {
            setSelectedEvent(EVENTS_DATA[0]);
            setIsEventModalOpen(true);
          }}
        />

        {/* Main Content Area */}
        <main className="flex-1">
        {isDiscoverMode ? (
          <DiscoverView
            onBackToHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onOpenJoin={() => setIsJoinModalOpen(true)}
            onOpenPartner={() => setIsPartnerModalOpen(true)}
            onOpenSubmitProject={() => setIsSubmitProjectModalOpen(true)}
            onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenJoin={() => setIsJoinModalOpen(true)}
            />

            {/* 2. What is Dev_Spark? Section */}
            <AboutSection />

            {/* 3. What happens here? Section */}
            <WhatHappensSection onNavigate={handleNavigate} />

            {/* 4. Events Section (Upcoming: AI × Web3 Workshop in Pune & Past recaps) */}
            <EventsSection onRegisterEvent={handleRegisterEvent} />

            {/* 5. Minimal Community Stats */}
            <StatsSection />

            {/* 6. Opportunities Board (Internships, Jobs, Hackathons, Fellowships, Grants) */}
            <OpportunitiesSection
              onSelectOpportunity={handleSelectOpportunity}
              onPostOpportunity={() => setIsPostOpportunityModalOpen(true)}
            />

            {/* 7. Projects / Builders (Dev_Spark Showcase: Built by the community) */}
            <ProjectsSection
              onSubmitProject={() => setIsSubmitProjectModalOpen(true)}
              onViewProjectDetails={handleViewProjectDetails}
            />

            {/* 8 & 9. Collaborations & For Founders / Companies */}
            <CollaborationsSection
              onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
            />

            {/* 10 & 11. Community Stories & Visual Gallery */}
            <StoriesAndGallerySection />

            {/* 12. Join Dev_Spark Section */}
            <JoinSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />
          </>
        )}
      </main>

      {/* 13. Minimal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenJoin={() => setIsJoinModalOpen(true)}
      />
      </div>

      {/* Interactive Modals */}
      <EventRegisterModal
        event={selectedEvent}
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />

      <OpportunityDetailModal
        opportunity={selectedOpportunity}
        isOpen={isOpportunityModalOpen}
        onClose={() => setIsOpportunityModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isProjectDetailModalOpen}
        onClose={() => setIsProjectDetailModalOpen(false)}
      />

      <SubmitProjectModal
        isOpen={isSubmitProjectModalOpen}
        onClose={() => setIsSubmitProjectModalOpen(false)}
        onProjectAdded={(newProj) => {
          // Handled inside component state and showcase
        }}
      />

      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      <JoinCommunityModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <PostOpportunityModal
        isOpen={isPostOpportunityModalOpen}
        onClose={() => setIsPostOpportunityModalOpen(false)}
        onOpportunityPosted={(newOpp) => {
          // Handled inside board
        }}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </div>
  );
}
