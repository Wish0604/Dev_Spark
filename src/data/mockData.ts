import { EventItem, OpportunityItem, ProjectItem, PartnerItem, CommunityStory, GalleryPhoto, DiscoverItem } from '../types';

export const COMMUNITY_STATS = {
  members: "200+",
  membersLabel: "Community Members",
  events: "10+",
  eventsLabel: "Events & Activities",
  ideas: "∞",
  ideasLabel: "Ideas",
  ecosystem: "1",
  ecosystemLabel: "Growing Ecosystem"
};

export const WHAT_HAPPENS_CARDS = [
  {
    id: "learn",
    icon: "Zap",
    title: "⚡ Learn",
    subtitle: "Workshops, tech sessions, talks and practical learning.",
    description: "Hands-on masterclasses in full-stack, distributed systems, GenAI architectures, Web3 protocols, and modern developer tooling. No lecture slides—straight to terminal.",
    tags: ["Workshops", "Tech Talks", "Code Labs"]
  },
  {
    id: "build",
    icon: "Hammer",
    title: "🛠 Build",
    subtitle: "Projects, hackathons, challenges and collaborative builds.",
    description: "Form agile squads, enter competitive hackathons, ship open-source repos, and build prototypes that evolve into real-world software products.",
    tags: ["Hackathons", "Sprint Builds", "Open Source"]
  },
  {
    id: "connect",
    icon: "Users",
    title: "🤝 Connect",
    subtitle: "Meet developers, founders, creators, mentors and like-minded people.",
    description: "Direct access to high-agency builders in Pune and across India. Peer reviews, founder AMAs, and coffee chats that lead to lifelong partnerships.",
    tags: ["Peer Network", "Founder AMAs", "IRL Meetups"]
  },
  {
    id: "grow",
    icon: "Rocket",
    title: "🚀 Grow",
    subtitle: "Opportunities, internships, jobs, mentorship and startup connections.",
    description: "Curated pipelines for funded internships, seed VC intros, senior engineering mentorship, and early startup hire referrals.",
    tags: ["Internships", "VC Intros", "Mentorship"]
  },
  {
    id: "collaborate",
    icon: "Lightbulb",
    title: "💡 Collaborate",
    subtitle: "Work with communities, startups, companies and colleges.",
    description: "Cross-pollinate with student tech clubs, developer relations teams, tech incubators, and enterprise dev communities across campuses.",
    tags: ["Campus Hubs", "DevRel", "Incubators"]
  },
  {
    id: "explore",
    icon: "Compass",
    title: "🌱 Explore",
    subtitle: "Discover new technologies, tools, ideas and ecosystems.",
    description: "Unpack frontier tech stacks before they go mainstream—local LLMs, spatial computing, smart contracts, dev-first micro-frameworks.",
    tags: ["Emerging Tech", "New Tooling", "Research"]
  }
];

export const JOURNEY_STEPS = [
  {
    stage: "Student",
    subtitle: "Curiosity & Technical Foundations",
    description: "Transition from textbook syntax to practical real-world architecture. Join introductory tech sessions and find your peer group.",
    badge: "01"
  },
  {
    stage: "Developer",
    subtitle: "Shipping Code & Mastering Tools",
    description: "Deep dive into APIs, state management, modern frameworks, and Git workflows through collaborative coding sprints.",
    badge: "02"
  },
  {
    stage: "Builder",
    subtitle: "Product Mindset & Hackathon Pods",
    description: "Translate problem statements into live, deployed products. Form high-output hackathon teams and launch community showcases.",
    badge: "03"
  },
  {
    stage: "Founder",
    subtitle: "Venture Velocity & Ecosystem Scale",
    description: "Validate market traction, pitch to angel networks and accelerator programs, hire your earliest core engineers directly from Dev_Spark.",
    badge: "04"
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "event-01",
    title: "AI × Web3 Workshop",
    subtitle: "READY FOR THE RUN × </Dev_Spark>",
    tagline: "Bridging autonomous agents, on-chain verification, and real-time execution pipelines.",
    type: "workshop",
    status: "upcoming",
    location: "Pune, India",
    date: "Coming Soon (Q3 2026)",
    time: "10:30 AM - 4:30 PM IST",
    description: "A comprehensive in-person sprint exploring the intersection of modern agentic LLMs and decentralized infrastructure. Includes live code demonstrations, architecture teardowns, and a build-in-public sandbox.",
    highlights: [
      "Hands-on building: Deploying an agent with Gemini 2.5 + web3 signer",
      "Live teardown: Token gated APIs & decentralized memory states",
      "Network session with Pune's top engineering talent & builders",
      "Exclusive swag & project grant credits for top attendees"
    ],
    attendeesCount: "Limited to 60 Builders",
    rsvpOpen: true,
    badge: "FEATURED UPCOMING",
    hosts: ["Dev_Spark Core", "Ready For The Run"],
    speakers: [
      { name: "Dev_Spark Lead", role: "Ecosystem Builder & Systems Engineer" },
      { name: "Guest Architect", role: "AI Infrastructure Specialist" }
    ]
  },
  {
    id: "event-02",
    title: "Pune Builders Weekend Meetup",
    subtitle: "IRL Networking & Demo Day",
    tagline: "Show your raw repo, get immediate feedback, and grab coffee with fellow makers.",
    type: "meetup",
    status: "upcoming",
    location: "Koregaon Park, Pune",
    date: "Saturday, Next Month",
    time: "3:00 PM - 6:30 PM IST",
    description: "Casual high-bandwidth IRL meetup for builders, founders, and students in Pune. 5-minute lightning project demos followed by curated founder roundtables.",
    highlights: [
      "6 Lightning Demos from active community repositories",
      "Open microphone for co-founder & teammate matching",
      "Coffee, high-signal conversations, and workspace passes"
    ],
    attendeesCount: "45 RSVPed",
    rsvpOpen: true,
    badge: "COMMUNITY MEETUP",
    hosts: ["Dev_Spark Pune"]
  },
  {
    id: "event-03",
    title: "48-Hour SparkBuild Sprint",
    subtitle: "Virtual + Physical Hackathon",
    tagline: "Build a product with real users in under 48 hours. Zero fluff.",
    type: "hackathon",
    status: "past",
    location: "Hybrid (Pune Hub + Discord)",
    date: "Recent Session",
    description: "Over 80 developers competed in teams to build functional utilities across AI tools, campus life apps, and open developer toolkits. 14 live projects deployed to production.",
    highlights: [
      "14 production apps shipped over the weekend",
      "Mentored by senior engineers from top tech companies",
      "Winner featured in Dev_Spark Showcase"
    ],
    attendeesCount: "85+ Participants",
    rsvpOpen: false,
    badge: "HACKATHON RECAP"
  },
  {
    id: "event-04",
    title: "Foundations of Modern GenAI & Embeddings",
    subtitle: "Interactive Tech Session",
    tagline: "Moving beyond basic chatbot prompts into vector pipelines.",
    type: "session",
    status: "past",
    location: "Dev_Spark Virtual Stage",
    date: "Previous Session",
    description: "An intensive 2.5-hour workshop dissecting vector databases, semantic search mechanics, and prompt orchestration with TypeScript and Python.",
    highlights: [
      "100+ live attendees on stream",
      "Full open-source companion starter repo published",
      "Interactive Q&A on production latency and cost optimization"
    ],
    attendeesCount: "110+ Builders",
    rsvpOpen: false,
    badge: "TECH TALK"
  },
  {
    id: "event-05",
    title: "Campus Innovators Collaboration",
    subtitle: "Inter-College Tech Syndicate",
    tagline: "Uniting campus developers across engineering colleges in Maharashtra.",
    type: "collaboration",
    status: "past",
    location: "COEP Tech Ground, Pune",
    date: "Earlier This Year",
    description: "Cross-college gathering connecting computer science societies, open-source leads, and student founders to share resources and organize joint hackathons.",
    highlights: [
      "Representatives from 8 major regional colleges",
      "Formation of cross-campus project teams",
      "Launch of the Dev_Spark Campus Ambassador program"
    ],
    attendeesCount: "130+ Attendees",
    rsvpOpen: false,
    badge: "ECOSYSTEM COLLAB"
  }
];

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: "opp-01",
    title: "Full-Stack AI Engineering Intern",
    organization: "CogniFlow Labs",
    type: "Internship",
    deadline: "Oct 15, 2026",
    eligibility: "Pre-final / Final Year students or self-taught builders",
    location: "Pune / Hybrid",
    compensationOrPrize: "₹35,000 - ₹50,000 / mo",
    tags: ["React", "TypeScript", "Python", "FastAPI", "Vector DB"],
    summary: "Work directly alongside founding engineers building enterprise workflow automation. You'll own features from schema design to frontend telemetry.",
    applyUrl: "#apply-cogniflow",
    featured: true,
    verified: true,
    postedDate: "2 days ago"
  },
  {
    id: "opp-02",
    title: "SparkHack 2026: Genesis Edition",
    organization: "Dev_Spark × Ecosystem Partners",
    type: "Hackathon",
    deadline: "Nov 02, 2026",
    eligibility: "Open to all students, builders, and early founders",
    location: "Pune (In-person) + Remote",
    compensationOrPrize: "₹2,50,000 Pool + Cloud Credits",
    tags: ["AI", "Web3", "Developer Tooling", "Civic Tech"],
    summary: "A weekend of high-intensity product development. Top 3 teams receive fast-track interviews with incubator partners and mentorship grants.",
    applyUrl: "#apply-sparkhack",
    featured: true,
    verified: true,
    postedDate: "Active Now"
  },
  {
    id: "opp-03",
    title: "Junior Systems & Cloud Developer",
    organization: "AeroStack Cloud",
    type: "Job",
    deadline: "Rolling Admissions",
    eligibility: "0-2 years experience, strong Linux & container fundamentals",
    location: "Remote (India)",
    compensationOrPrize: "₹8 - ₹12 LPA + ESOPs",
    tags: ["Docker", "Kubernetes", "Go", "AWS / GCP"],
    summary: "Help scale resilient microservices handling millions of API calls daily. Ideal for competitive programmers and DevOps builders.",
    applyUrl: "#apply-aerostack",
    featured: false,
    verified: true,
    postedDate: "This week"
  },
  {
    id: "opp-04",
    title: "Open-Source Builder Fellowship",
    organization: "Global Open Source Guild",
    type: "Fellowship",
    deadline: "Oct 30, 2026",
    eligibility: "Passionate OSS contributors with at least 1 merged PR",
    location: "Remote",
    compensationOrPrize: "$2,000 USD Stipend + Global Mentor",
    tags: ["Rust", "TypeScript", "OSS", "Documentation"],
    summary: "A 10-week stipend fellowship to contribute full-time to tier-one developer infrastructure libraries with direct maintainer coaching.",
    applyUrl: "#apply-fellowship",
    featured: true,
    verified: true,
    postedDate: "3 days ago"
  },
  {
    id: "opp-05",
    title: "Early Builder Grant Program",
    organization: "Dev_Spark Micro-Fund",
    type: "Grant",
    deadline: "Rolling Monthly",
    eligibility: "Any member building an active prototype with a public repo",
    location: "Pune & Pan-India",
    compensationOrPrize: "₹25,000 - ₹1,00,000 No-Equity Grant",
    tags: ["No-Equity", "Micro-Grant", "Cloud Credits", "Server Subsidies"],
    summary: "No pitch decks required. Submit a Loom walkthrough or GitHub repository. We fund server costs, API credits, and domain fees for promising builders.",
    applyUrl: "#apply-grant",
    featured: true,
    verified: true,
    postedDate: "Always Open"
  },
  {
    id: "opp-06",
    title: "Community Keynote Speaker Call",
    organization: "NextGen Tech Pune",
    type: "Speaking",
    deadline: "Oct 20, 2026",
    eligibility: "Any builder who has shipped an interesting tool or post-mortem",
    location: "Pune Auditorium",
    compensationOrPrize: "Stage honorarium + travel coverage",
    tags: ["Keynote", "Tech Talk", "System Design"],
    summary: "Present your technical learnings to 300+ tech leaders, CTOs, and student engineers. First-time speakers welcome with talk rehearsal assistance.",
    applyUrl: "#apply-speaker",
    featured: false,
    verified: true,
    postedDate: "1 week ago"
  },
  {
    id: "opp-07",
    title: "Summer of Code Student Fellowship",
    organization: "Cloud Native Foundation",
    type: "Scholarship",
    deadline: "Nov 15, 2026",
    eligibility: "Enrolled undergraduate / diploma students",
    location: "Remote",
    compensationOrPrize: "₹1,20,000 Total Stipend",
    tags: ["Kubernetes", "Linux", "Open Source", "C++ / Go"],
    summary: "Mentored summer coding experience contributing to core networking and container runtime projects.",
    applyUrl: "#apply-scholarship",
    featured: false,
    verified: true,
    postedDate: "New"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-01",
    projectNumber: "PROJECT 01",
    title: "AI Diagnostic Engine",
    tagline: "Multi-modal medical imaging screening and triage assistant.",
    description: "An automated pre-screening engine evaluating radiology scans and clinical symptom logs with verifiable confidence scores and instant patient report generation.",
    builderName: "Arjun Sharma",
    builderHandle: "@arjun_builds",
    builderRole: "Student Developer @ COEP",
    tags: ["AI", "React", "Gemini", "TailwindCSS"],
    demoUrl: "https://example.com/ai-diagnostic",
    githubUrl: "https://github.com/devspark-community/ai-diagnostic-engine",
    upvotes: 48,
    featured: true,
    metrics: "Tested across 1,200+ anonymized open datasets"
  },
  {
    id: "proj-02",
    projectNumber: "PROJECT 02",
    title: "PromptPulse Telemetry",
    tagline: "Real-time token cost, latency & hallucination monitor for LLM apps.",
    description: "Lightweight middleware that instruments API calls to frontier model endpoints, providing sub-millisecond trace waterfalls, prompt drift detection, and budget circuit breakers.",
    builderName: "Rohan Patil",
    builderHandle: "@rohan_p",
    builderRole: "Founder & Full-stack Engineer",
    tags: ["TypeScript", "Next.js", "WebSockets", "ClickHouse"],
    demoUrl: "https://example.com/promptpulse",
    githubUrl: "https://github.com/devspark-community/prompt-pulse",
    upvotes: 62,
    featured: true,
    metrics: "20+ active community developers integrated"
  },
  {
    id: "proj-03",
    projectNumber: "PROJECT 03",
    title: "CampusSync Ledger",
    tagline: "Decentralized event attendance & verifiable micro-credentialing.",
    description: "Eliminates paper certificates and forged attendance records. Students tap an NFC badge or sign via mobile wallet to receive cryptographic attendance badges on-chain.",
    builderName: "Sneha Kulkarni",
    builderHandle: "@sneha_codes",
    builderRole: "Web3 Builder & Student",
    tags: ["Solana", "Rust", "React Native", "Anchor"],
    demoUrl: "https://example.com/campussync",
    githubUrl: "https://github.com/devspark-community/campussync-ledger",
    upvotes: 39,
    featured: true,
    metrics: "Used across 3 Pune college tech fests"
  },
  {
    id: "proj-04",
    projectNumber: "PROJECT 04",
    title: "KiteDiff CLI",
    tagline: "High-speed semantic Git diffs directly inside your terminal.",
    description: "A terminal tool that interprets AST structural changes rather than raw character lines, summarizing code PRs in plain English using lightweight local models.",
    builderName: "Tanmay Deshmukh",
    builderHandle: "@tanmay_d",
    builderRole: "Systems Engineer",
    tags: ["Rust", "CLI", "Git Hooks", "Local LLM"],
    demoUrl: "https://example.com/kitediff",
    githubUrl: "https://github.com/devspark-community/kitediff",
    upvotes: 55,
    featured: false,
    metrics: "500+ GitHub downloads"
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "part-01",
    name: "Ready For The Run",
    category: "Communities",
    description: "Premier running, wellness, and high-performance lifestyle collective in Pune co-hosting energetic builder sprints.",
    collabType: "Event Co-Host",
    logoText: "READY FOR THE RUN"
  },
  {
    id: "part-02",
    name: "Pune Tech Founders Network",
    category: "Startups",
    description: "Syndicate of 60+ early-stage venture founders providing mentorship, angel reviews, and technical advisory.",
    collabType: "Founder Mentorship",
    logoText: "PTFN"
  },
  {
    id: "part-03",
    name: "Vektor Labs",
    category: "Companies",
    description: "AI software consultancy sponsoring cloud computation budgets and hosting engineering deep-dive talks.",
    collabType: "Sponsorship & Hiring",
    logoText: "VEKTOR LABS"
  },
  {
    id: "part-04",
    name: "Maharashtra Engineering Consortium",
    category: "Colleges",
    description: "Partner student chapters across premier Pune and Maharashtra technology colleges.",
    collabType: "Campus Outreach",
    logoText: "CAMPUS HUBS"
  },
  {
    id: "part-05",
    name: "Supabase & Postgres Usergroup",
    category: "Developer Tools",
    description: "Co-organizing hands-on database scaling workshops and hackathon backend bounties.",
    collabType: "Developer Tooling",
    logoText: "SUPABASE PUG"
  },
  {
    id: "part-06",
    name: "Solana Superteam India",
    category: "Communities",
    description: "Ecosystem grant support, web3 hackathon tracks, and developer incubation.",
    collabType: "Grants & Bounties",
    logoText: "SUPERTEAM"
  }
];

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: "story-01",
    quote: "I joined for a workshop. Ended up finding my hackathon teammates and we placed top 3 in our first national build sprint.",
    author: "Aditya Joshi",
    role: "Core Contributor",
    journey: "Student → Full-Stack Builder",
    avatarInitials: "AJ",
    highlight: "Found 3 Co-Builders"
  },
  {
    id: "story-02",
    quote: "Dev_Spark stripped away the intimidation factor. You don't need a fancy résumé here; you just need to open a terminal, pick an issue, and start shipping.",
    author: "Pooja Mehta",
    role: "AI Engineer Intern",
    journey: "Curious Learner → AI Engineer",
    avatarInitials: "PM",
    highlight: "Hired via Opportunities Board"
  },
  {
    id: "story-03",
    quote: "When we needed beta testers for our developer tool, the community provided 40 detailed feedback videos within 24 hours. The builder culture here is unmatched.",
    author: "Vikram Nambiar",
    role: "Startup Founder",
    journey: "Builder → Seeded Founder",
    avatarInitials: "VN",
    highlight: "Launched MVP to 200+ Builders"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-01",
    title: "Late Night Code Sprint",
    category: "Hackathons",
    location: "Pune Coworking Studio",
    date: "Aug 2026",
    aspect: "aspect-video",
    description: "Teams whiteboarding distributed microservices architecture at 2 AM during the SparkBuild hackathon.",
    badge: "HACKATHON"
  },
  {
    id: "gal-02",
    title: "Hands-on Model Fine-tuning",
    category: "Workshops",
    location: "Tech Lab Pune",
    date: "July 2026",
    aspect: "aspect-square",
    description: "Live debugging session where members tuned custom embedding spaces on their local machines.",
    badge: "WORKSHOP"
  },
  {
    id: "gal-03",
    title: "Founder & Builder Coffee Circle",
    category: "Meetups",
    location: "Koregaon Park, Pune",
    date: "July 2026",
    aspect: "aspect-video",
    description: "Unfiltered conversations between seed-stage founders and college builders breaking into tech.",
    badge: "MEETUP"
  },
  {
    id: "gal-04",
    title: "Dev_Spark Core Team Debrief",
    category: "Team",
    location: "Pune HQ",
    date: "June 2026",
    aspect: "aspect-square",
    description: "Planning upcoming event seasons, review of community grant applications, and new builder tracks.",
    badge: "BEHIND THE SCENES"
  }
];

export const DISCOVER_ITEMS: DiscoverItem[] = [
  // People
  {
    id: "disc-p1",
    category: "people",
    title: "Karan Verma",
    subtitle: "AI Infrastructure & Agentic Systems",
    tag: "Developer",
    roleOrType: "Student / Developer",
    description: "Building autonomous research agents and fine-tuning small language models. Looking for frontend collaborators.",
    actionText: "Connect on LinkedIn",
    actionUrl: "https://linkedin.com",
    secondaryTag: "Pune, India"
  },
  {
    id: "disc-p2",
    category: "people",
    title: "Neha Rathore",
    subtitle: "Product Designer & Frontend Dev",
    tag: "Designer",
    roleOrType: "Designer & Builder",
    description: "Specializes in dark-mode design systems, accessibility, and micro-interactions with Tailwind and Figma.",
    actionText: "View Portfolio",
    actionUrl: "https://github.com",
    secondaryTag: "Design Systems"
  },
  {
    id: "disc-p3",
    category: "people",
    title: "Siddharth Rao",
    subtitle: "Founder @ DevPulse",
    tag: "Founder",
    roleOrType: "Founder / Mentor",
    description: "Serial builder. Built 3 SaaS tools, scaled to $10k MRR. Open to mentoring early-stage student founders.",
    actionText: "Book Office Hours",
    actionUrl: "#mentor-request",
    secondaryTag: "Office Hours Open"
  },
  {
    id: "disc-p4",
    category: "people",
    title: "Ananya Iyer",
    subtitle: "Open Source Advocate & Rustacean",
    tag: "Mentor",
    roleOrType: "Systems Engineer",
    description: "Maintaining developer tooling. Passionate about helping beginners make their first substantial open source PR.",
    actionText: "Get Mentorship",
    actionUrl: "#mentor-request",
    secondaryTag: "OSS Maintainer"
  },

  // Things
  {
    id: "disc-t1",
    category: "things",
    title: "AI × Web3 Workshop",
    subtitle: "Flagship In-Person Intensive",
    tag: "Events",
    roleOrType: "Upcoming Event",
    description: "Live coding with Gemini, LLM agents, smart contract signers, and modern developer infrastructure in Pune.",
    actionText: "RSVP Spot",
    actionUrl: "#events",
    secondaryTag: "Pune • Limited Seats"
  },
  {
    id: "disc-t2",
    category: "things",
    title: "AI Diagnostic Engine",
    subtitle: "Community Built Project",
    tag: "Projects",
    roleOrType: "Featured Project",
    description: "Open-source healthcare radiology triage tool built by member Arjun Sharma with React and Gemini API.",
    actionText: "View Repository",
    actionUrl: "https://github.com",
    secondaryTag: "Open Source"
  },
  {
    id: "disc-t3",
    category: "things",
    title: "Full-Stack AI Engineering Intern",
    subtitle: "Opportunity Board",
    tag: "Opportunities",
    roleOrType: "Internship",
    description: "Paid engineering role with CogniFlow Labs for pre-final or final year builders in Pune/Hybrid.",
    actionText: "View Requirements",
    actionUrl: "#opportunities",
    secondaryTag: "₹35k - ₹50k / mo"
  },
  {
    id: "disc-t4",
    category: "things",
    title: "Dev_Spark Pune Core Chapter",
    subtitle: "Local City Hub",
    tag: "Communities",
    roleOrType: "Ecosystem Hub",
    description: "The primary regional ecosystem organizing weekly co-working Saturdays, hackathons, and tech talks in Pune.",
    actionText: "Join City Chapter",
    actionUrl: "#join",
    secondaryTag: "200+ Members"
  },

  // Ways to participate
  {
    id: "disc-w1",
    category: "participate",
    title: "Join as a Community Member",
    subtitle: "Step into the conversation",
    tag: "Join",
    roleOrType: "General Access",
    description: "Get immediate entry to our WhatsApp community, curated opportunities announcements, and event early access.",
    actionText: "Join WhatsApp ⚡",
    actionUrl: "#join",
    secondaryTag: "Free • Instant Access"
  },
  {
    id: "disc-w2",
    category: "participate",
    title: "Build & Showcase Your Project",
    subtitle: "Put your work in front of founders",
    tag: "Build",
    roleOrType: "Showcase & Feedback",
    description: "Submit your live repo or project. Get featured in the Dev_Spark Showcase and receive direct feedback from senior developers.",
    actionText: "Submit Project",
    actionUrl: "#submit-project",
    secondaryTag: "Showcase Feature"
  },
  {
    id: "disc-w3",
    category: "participate",
    title: "Volunteer at Dev_Spark Events",
    subtitle: "Help orchestrate IRL experiences",
    tag: "Volunteer",
    roleOrType: "Event Ops & Media",
    description: "Join the organizing crew for hackathons, stage operations, photography, sound, and builder registration desks.",
    actionText: "Apply as Volunteer",
    actionUrl: "#volunteer",
    secondaryTag: "Backstage Access"
  },
  {
    id: "disc-w4",
    category: "participate",
    title: "Mentor the Next Generation",
    subtitle: "Share engineering wisdom",
    tag: "Mentor",
    roleOrType: "Advisory & Reviews",
    description: "For experienced software engineers, tech leads, and founders willing to host an AMA or review community code.",
    actionText: "Become a Mentor",
    actionUrl: "#mentor",
    secondaryTag: "1hr / month"
  },
  {
    id: "disc-w5",
    category: "participate",
    title: "Partner or Sponsor an Event",
    subtitle: "Connect with authentic builders",
    tag: "Partner",
    roleOrType: "Ecosystem Sponsor",
    description: "Access high-caliber student talent, co-host technical workshops, and put your developer API directly into builders' hands.",
    actionText: "Partner With Us",
    actionUrl: "#partner",
    secondaryTag: "Ecosystem Collab"
  }
];

export const SOCIAL_LINKS = {
  whatsapp: "https://chat.whatsapp.com/devspark-community",
  instagram: "https://instagram.com/devspark.community",
  linkedin: "https://linkedin.com/company/devspark-community",
  x: "https://x.com/devspark_org",
  discord: "https://discord.gg/devspark",
  github: "https://github.com/devspark-community"
};
