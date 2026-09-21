export type NavigationSection = 
  | 'home' 
  | 'about' 
  | 'events' 
  | 'opportunities' 
  | 'projects' 
  | 'partners' 
  | 'discover' 
  | 'join';

export interface EventItem {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  type: 'workshop' | 'hackathon' | 'meetup' | 'session' | 'collaboration';
  status: 'upcoming' | 'past';
  location: string;
  date: string;
  time?: string;
  description: string;
  highlights: string[];
  attendeesCount?: string;
  rsvpOpen: boolean;
  registrationLink?: string;
  badge?: string;
  hosts?: string[];
  speakers?: {
    name: string;
    role: string;
    avatar?: string;
  }[];
  imageUrl?: string;
}

export type OpportunityType = 
  | 'Internship' 
  | 'Job' 
  | 'Hackathon' 
  | 'Scholarship' 
  | 'Fellowship' 
  | 'Grant' 
  | 'Workshop' 
  | 'Speaking' 
  | 'Open-Source';

export interface OpportunityItem {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  deadline: string;
  eligibility: string;
  location: string; // e.g. "Remote", "Pune / Hybrid", "Bangalore"
  compensationOrPrize?: string;
  tags: string[];
  summary: string;
  applyUrl: string;
  featured?: boolean;
  postedDate?: string;
  verified?: boolean;
}

export interface ProjectItem {
  id: string;
  projectNumber: string; // e.g. "PROJECT 01"
  title: string;
  tagline: string;
  description: string;
  builderName: string;
  builderHandle: string;
  builderRole: string;
  tags: string[]; // e.g. ["AI", "React", "Gemini"]
  demoUrl?: string;
  githubUrl?: string;
  upvotes?: number;
  featured?: boolean;
  metrics?: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: 'Communities' | 'Startups' | 'Companies' | 'Colleges' | 'Developer Tools';
  description: string;
  collabType: string;
  logoText: string;
  website?: string;
}

export interface CommunityStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  journey: string; // e.g. "Student → AI Builder"
  avatarInitials: string;
  highlight: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Meetups' | 'Workshops' | 'Hackathons' | 'Team';
  location: string;
  date: string;
  aspect: string;
  description: string;
  badge: string;
}

export interface DiscoverItem {
  id: string;
  category: 'people' | 'things' | 'participate';
  title: string;
  subtitle: string;
  tag: string;
  roleOrType?: string;
  description: string;
  actionText: string;
  actionUrl?: string;
  secondaryTag?: string;
}
