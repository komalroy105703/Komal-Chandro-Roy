import {
  PersonalInfo,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  CertificateItem,
  WorkProcessStep,
  BlogPostItem,
  FaqItem,
} from '../types';

export const initialPersonalInfo: PersonalInfo = {
  name: 'Komal Chandro Roy',
  heroHeadingName: 'Komal Chandro Roy',
  role: 'SEO, Local SEO, AEO, GEO & AI Specialist',
  badge: 'SEO & AI Specialist',
  shortIntro:
    'I am Komal Chandro Roy, a dedicated SEO, Local SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and AI Specialist focused on dominating search engine rankings, local map packs, and AI answer engines to scale business visibility and organic revenue.',
  aboutSectionHeading: 'Driving Organic Dominance, AI Search Visibility & Local Growth',
  aboutHeading: 'Hi, I am Komal Chandro Roy',
  aboutSubheading: 'SEO, Local SEO, AEO, GEO & AI Specialist',
  aboutBio: [
    'With over 8 years of specialized search engine intelligence and digital growth experience, I help ambitious brands navigate the rapidly transforming search landscape—from traditional Google algorithms to next-generation AI Search Engines (ChatGPT Search, Perplexity AI, Google AI Overviews, and Gemini).',
    'My core expertise combines deep Technical SEO, Local 3-Pack Map dominance, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) with structured entity graphs and high-intent semantic content silos.',
    'Whether optimizing local multi-location business citations, reverse-engineering LLM citation patterns, or executing enterprise backlink PR campaigns, I build search engines strategies that turn visibility into measurable revenue.',
  ],
  phoneNumber: '+880 1910-227780',
  phoneRaw: '+8801910227780',
  email: 'komalroy105703@gmail.com',
  location: 'Bangladesh',
  profileImage:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  cvDownloadUrl: '#',
  cvFileName: 'Komal_Chandro_Roy_SEO_Specialist_CV.pdf',
  yearsOfExperience: 8,
  completedProjects: 180,
  satisfiedClients: 145,
  seoGrowthRate: '+380%',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/komalchandroroy',
    facebook: 'https://facebook.com/komalchandroroy',
    github: 'https://github.com/komalchandroroy',
    instagram: 'https://instagram.com/komalchandroroy',
    whatsapp: 'https://wa.me/8801910227780',
    twitter: 'https://x.com/komalroy_seo',
  },
};

export const initialSkills: SkillItem[] = [
  // SEO & Technical SEO
  {
    id: 'skill-tech-seo',
    name: 'Technical SEO',
    category: 'SEO',
    subcategory: 'Core Organic Search',
    iconName: 'Cpu',
    level: 98,
    experienceYears: '8+ yrs',
    description: 'Robots.txt, XML sitemaps, crawl budget optimization, canonical tags, and Core Web Vitals performance.',
    tags: ['Schema.org', 'Crawl Budget', 'Core Web Vitals', 'Canonicalization'],
  },
  {
    id: 'skill-local-seo',
    name: 'Local SEO & Google Maps',
    category: 'SEO',
    subcategory: 'Local Dominance',
    iconName: 'MapPin',
    level: 99,
    experienceYears: '7+ yrs',
    description: 'Google Business Profile ranking in the Local 3-Pack, local citation consistency (NAP), and geo-grid rank tracking.',
    tags: ['Google Business Profile', 'Local 3-Pack', 'Geo-Grid Tracking', 'Citations'],
  },
  {
    id: 'skill-aeo',
    name: 'AEO (Answer Engine Optimization)',
    category: 'SEO',
    subcategory: 'AI & Next-Gen Search',
    iconName: 'BotMessageSquare',
    level: 96,
    experienceYears: '4+ yrs',
    description: 'Optimizing for direct voice search answers, Google Featured Snippets, conversational query parsing, and knowledge panels.',
    tags: ['Voice Search', 'Featured Snippets', 'Knowledge Graph', 'Conversational Search'],
  },
  {
    id: 'skill-geo',
    name: 'GEO (Generative Engine Optimization)',
    category: 'SEO',
    subcategory: 'AI & Next-Gen Search',
    iconName: 'Sparkles',
    level: 97,
    experienceYears: '3+ yrs',
    description: 'Engineering content for citations inside AI search models: ChatGPT Search, Perplexity AI, Google AI Overviews, and Claude.',
    tags: ['Perplexity AI', 'ChatGPT Search', 'AI Overviews', 'LLM Citations'],
  },
  {
    id: 'skill-ai-specialist',
    name: 'AI Search & Prompt Engineering',
    category: 'SEO',
    subcategory: 'AI & Next-Gen Search',
    iconName: 'BrainCircuit',
    level: 95,
    experienceYears: '3+ yrs',
    description: 'AI-assisted semantic content generation, entity association modeling, search intent classification, and vector indexing.',
    tags: ['Semantic Vectors', 'Entity Modeling', 'AI Workflows', 'Prompt Tuning'],
  },
  {
    id: 'skill-keyword-research',
    name: 'Keyword Research & Clustering',
    category: 'SEO',
    subcategory: 'Search Strategy',
    iconName: 'Search',
    level: 99,
    experienceYears: '8+ yrs',
    description: 'Topical authority map design, search intent categorization, long-tail transactional keyword gap discovery.',
    tags: ['Topical Maps', 'Ahrefs', 'SEMrush', 'Intent Silos'],
  },
  {
    id: 'skill-on-page-seo',
    name: 'On-Page & Entity SEO',
    category: 'SEO',
    subcategory: 'Core Organic Search',
    iconName: 'FileCode2',
    level: 98,
    experienceYears: '8+ yrs',
    description: 'Semantic HTML hierarchy, natural entity relationships, internal link equity distribution, and rich meta tags.',
    tags: ['Entity Graphs', 'Internal Linking Silos', 'Title & Meta', 'Content Structuring'],
  },
  {
    id: 'skill-off-page-seo',
    name: 'Off-Page SEO & Digital PR',
    category: 'SEO',
    subcategory: 'Authority Building',
    iconName: 'Share2',
    level: 94,
    experienceYears: '7+ yrs',
    description: 'High-authority contextual backlink acquisition, digital PR campaigns, brand mention velocity, and unlinked citation reclamation.',
    tags: ['High DA Backlinks', 'Digital PR', 'Outreach', 'Brand Mentions'],
  },
  {
    id: 'skill-schema-markup',
    name: 'Schema.org & JSON-LD',
    category: 'Development',
    subcategory: 'Structured Data',
    iconName: 'Code',
    level: 97,
    experienceYears: '7+ yrs',
    description: 'Nested JSON-LD schemas for LocalBusiness, FAQPage, Organization, Product, Article, and MedicalEntity.',
    tags: ['JSON-LD', 'Rich Results', 'Microdata', 'Knowledge Graph'],
  },
  {
    id: 'skill-wordpress-cms',
    name: 'WordPress & CMS SEO',
    category: 'Development',
    subcategory: 'CMS & Growth',
    iconName: 'Globe',
    level: 95,
    experienceYears: '8+ yrs',
    description: 'Speed caching optimization, RankMath Pro, Yoast, WooCommerce SEO, and headless WordPress architectures.',
    tags: ['RankMath', 'Speed Tuning', 'WooCommerce', 'Site Architecture'],
  },
  {
    id: 'skill-analytics-cro',
    name: 'GA4, GTM & CRO',
    category: 'Development',
    subcategory: 'Analytics & Tracking',
    iconName: 'BarChart3',
    level: 94,
    experienceYears: '6+ yrs',
    description: 'Google Analytics 4 event tracking, Google Tag Manager data layers, Google Search Console deep diagnostics, and CRO heatmaps.',
    tags: ['GA4 Events', 'Google Tag Manager', 'Search Console', 'CRO Funnels'],
  },
  {
    id: 'skill-site-speed',
    name: 'Core Web Vitals & Speed',
    category: 'Development',
    subcategory: 'Performance Optimization',
    iconName: 'Zap',
    level: 96,
    experienceYears: '7+ yrs',
    description: 'INP, LCP, CLS optimization, JavaScript deferral, image compression (WebP/AVIF), and CDN caching.',
    tags: ['LCP < 1.2s', 'Zero CLS', 'INP Optimization', 'Asset Minification'],
  },
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'AuraHealth — Local SEO & AI Answer Engine (AEO/GEO) Domination',
    tagline: '#1 Google Map 3-Pack rank across 24 cities & Top Perplexity/ChatGPT Citation',
    shortDescription:
      'Engineered a comprehensive Local SEO, AEO, and GEO strategy for a multi-location health clinic chain, achieving 380% organic call growth and top AI search citations.',
    fullDescription:
      'AuraHealth needed to dominate both traditional Google Search results and AI-first answer platforms. Komal implemented multi-location Google Business Profile optimizations, geo-targeted landing pages with localized schema microdata, and restructured clinical Q&A entities. As a result, AuraHealth became the #1 cited healthcare source in Perplexity AI and ChatGPT Search for regional medical queries.',
    category: 'SEO & Growth',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Local SEO', 'AEO / Voice Search', 'GEO AI Citations', 'Google Map Pack', 'Schema.org'],
    metrics: [
      { label: 'Local 3-Pack Positions', value: '#1 in 24 Cities' },
      { label: 'Organic Phone Calls', value: '+380% Growth' },
      { label: 'AI Citations (Perplexity)', value: 'Top #1 Cited' },
      { label: 'Monthly Search Impressions', value: '3.8M Impressions' },
    ],
    features: [
      'Complete Google Business Profile geo-grid optimization and automated review responses',
      'Advanced medical clinic Schema.org JSON-LD hierarchy with physician NPI credentials',
      'Conversational FAQ structuring tailored for ChatGPT Search and Google AI Overviews',
      'NAP consistency audit fixing 450+ high-authority citation directories',
    ],
    role: 'Lead SEO, Local SEO & AI Search Strategist',
    year: '2025',
    liveUrl: 'https://example.com/aurahealth-case-study',
  },
  {
    id: 'proj-2',
    number: '02',
    title: 'Nexus SaaS — Generative Engine Optimization (GEO) & Programmatic SEO',
    tagline: 'Scaling from 20k to 240k monthly organic visitors with AI-era Entity Architecture',
    shortDescription:
      'Implemented entity-first technical SEO and Generative Engine Optimization (GEO) for an enterprise B2B SaaS, capturing 500+ commercial keywords in Google AI Overviews.',
    fullDescription:
      'With AI Overviews taking up major SERP real estate, Nexus SaaS needed a forward-thinking GEO and Technical SEO strategy. Komal mapped out 120 topical authority clusters, injected strict semantic microdata, and optimized author E-E-A-T signals. The site witnessed a 420% surge in high-intent demo requests driven by organic and AI engine referrals.',
    category: 'Full Stack',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['GEO Strategy', 'Technical SEO', 'Entity SEO', 'AI Overviews', 'Topical Authority'],
    metrics: [
      { label: 'Organic Visitors', value: '240,000 / Mo' },
      { label: 'AI Overview Presence', value: '520+ Snippets' },
      { label: 'Top 3 Keyword Rankings', value: '410 Keywords' },
      { label: 'Demo Conversions', value: '+420%' },
    ],
    features: [
      'Topical authority map design covering all high-intent B2B search phrases',
      'LLM citation engineering targeting ChatGPT, Perplexity, and Gemini Knowledge Graph',
      'Granular crawl budget cleanup, internal link equity calculation, and 0.8s LCP speed',
      'Automated GA4 lead attribution and conversion rate optimization',
    ],
    role: 'Principal Search Architect & GEO Specialist',
    year: '2025',
    liveUrl: 'https://example.com/nexus-saas-seo',
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'Veloce Luxury Store — E-Commerce International SEO & Technical Overhaul',
    tagline: '+260% organic revenue with Product Rich Snippets & Core Web Vitals 100/100',
    shortDescription:
      'Complete technical SEO audit, international hreflang implementation, and structured product schema that secured star ratings in search engine results.',
    fullDescription:
      'Veloce Store suffered from index bloat, duplicate faceted search URLs, and slow mobile loading speeds. Komal restructured the canonicalization strategy, pruned 15,000 low-value crawl URLs, and implemented dynamic Product and Review JSON-LD schemas. Organic transaction revenue increased by +260% within 5 months.',
    category: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1556742049-0a67e5572263?auto=format&fit=crop&w=1200&q=80',
    tags: ['E-Commerce SEO', 'Technical SEO', 'Product Schema', 'Speed Optimization', 'CRO'],
    metrics: [
      { label: 'Organic Revenue', value: '+260%' },
      { label: 'Rich Results Capture', value: '100% Valid' },
      { label: 'Crawl Efficiency', value: '+85% Faster' },
      { label: 'Mobile PageSpeed', value: '100 / 100' },
    ],
    features: [
      'Comprehensive product schema with real-time stock, currency, and aggregate ratings',
      'Faceted navigation SEO handling preventing parameter crawl waste',
      'International multi-language hreflang mapping across US, UK, and EU markets',
      'Full technical site migration with zero organic traffic drop',
    ],
    role: 'E-Commerce SEO Consultant & Technical Auditor',
    year: '2024',
    liveUrl: 'https://example.com/veloce-case-study',
  },
  {
    id: 'proj-4',
    number: '04',
    title: 'LegalDirect — High-Ticket Local SEO & Digital PR Authority Campaign',
    tagline: 'Top #1 position for high-competition legal terms ($150+ CPC equivalent)',
    shortDescription:
      'Executed high-authority digital PR link building and localized content silos for a premium legal network, generating thousands of qualified client inquiries.',
    fullDescription:
      'In one of the most competitive search verticals, LegalDirect required aggressive authority building. Komal crafted data-driven legal studies that gained mentions on major news outlets (Forbes, Business Insider), while optimizing local office citations across 12 metropolitan zones.',
    category: 'SEO & Growth',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    tags: ['Digital PR', 'High-DA Link Building', 'Local SEO', 'AEO', 'Legal Silos'],
    metrics: [
      { label: 'Avg CPC Value Captured', value: '$180 / Click' },
      { label: 'High DA Backlinks', value: '140+ Editorial' },
      { label: 'Qualified Leads', value: '+310%' },
      { label: 'Domain Rating (Ahrefs)', value: 'DR 76 (+32)' },
    ],
    features: [
      'Strategic digital PR campaigns securing contextual editorial links on tier-1 publications',
      'Attorney and LegalService schema markup verifying state bar credentials',
      'Answer engine optimization for high-ticket voice search inquiries',
      'Local citation synchronization guaranteeing 100% NAP accuracy',
    ],
    role: 'Director of Search Authority & Digital PR',
    year: '2024',
    liveUrl: 'https://example.com/legaldirect-seo',
  },
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    jobTitle: 'Lead SEO, Local SEO & AI Search (AEO/GEO) Specialist',
    companyName: 'Apex Digital Growth Agency',
    location: 'Bangladesh (Global Clients)',
    employmentType: 'Full-time / Lead Consultant',
    date: '2022 — Present',
    current: true,
    shortDescription:
      'Directing international organic search campaigns, Local 3-Pack rankings, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) for tech, healthcare, and e-commerce leaders.',
    keyResponsibilities: [
      'Pioneered Generative Engine Optimization (GEO) frameworks ensuring client brands are cited inside ChatGPT Search, Perplexity AI, and Google AI Overviews.',
      'Managed 60+ Google Business Profiles, achieving consistent #1 to #3 rankings in competitive local map packs.',
      'Conducted deep technical SEO audits, core algorithm update recovery, and crawl efficiency overhauls for enterprise websites.',
      'Built custom topical authority maps and entity schema models (JSON-LD) driving over 1.5 million monthly organic visits.',
    ],
    technologies: ['Local SEO', 'AEO', 'GEO', 'Technical SEO', 'Schema.org', 'Ahrefs', 'SEMrush', 'GA4'],
  },
  {
    id: 'exp-2',
    jobTitle: 'Senior Local SEO & Search Strategist',
    companyName: 'Vanguard Media & Search Lab',
    location: 'Bangladesh',
    employmentType: 'Full-time',
    date: '2019 — 2022',
    current: false,
    shortDescription:
      'Spearheaded multi-location local SEO campaigns, on-page optimization, and high-impact digital PR backlink strategies for international businesses.',
    keyResponsibilities: [
      'Orchestrated local citation campaigns across 50+ directory ecosystems with zero NAP discrepancies.',
      'Engineered structured data schemas (FAQPage, LocalBusiness, HowTo, Product) capturing rich search snippets.',
      'Executed data-backed content marketing and competitor link gap analysis acquiring 500+ high-authority editorial links.',
      'Configured Google Tag Manager and GA4 custom funnel tracking to measure phone calls, form fills, and conversion ROI.',
    ],
    technologies: ['Local 3-Pack', 'On-Page SEO', 'Link Building', 'Google Search Console', 'RankMath Pro'],
  },
  {
    id: 'exp-3',
    jobTitle: 'Technical SEO Analyst & Keyword Specialist',
    companyName: 'Hyperion Interactive Search',
    location: 'Bangladesh',
    employmentType: 'Full-time',
    date: '2017 — 2019',
    current: false,
    shortDescription:
      'Handled technical site auditing, speed optimization, keyword clustering, and search indexation management.',
    keyResponsibilities: [
      'Diagnosed and eliminated crawl errors, redirect loops, canonical anomalies, and soft 404s for 40+ client sites.',
      'Formulated transactional keyword strategies using search intent mapping and semantic keyword grouping.',
      'Collaborated with developers to ensure 95+ Core Web Vitals scores and mobile search readiness.',
      'Delivered transparent monthly ranking and organic traffic growth reports to C-level stakeholders.',
    ],
    technologies: ['Technical SEO', 'Screaming Frog', 'Core Web Vitals', 'Keyword Silos', 'Site Architecture'],
  },
  {
    id: 'exp-4',
    jobTitle: 'Junior SEO & Digital Marketing Associate',
    companyName: 'Prime Reach Solutions',
    location: 'Bangladesh',
    employmentType: 'Full-time',
    date: '2016 — 2017',
    current: false,
    shortDescription:
      'Managed local directory submissions, meta tag copywriting, basic on-page optimization, and social citation setups.',
    keyResponsibilities: [
      'Optimized meta titles, descriptions, and header tags for 100+ local service pages.',
      'Submitted and verified local business listings across Google, Bing, and industry directories.',
      'Assisted in competitor backlink research and outreach email campaigns.',
    ],
    technologies: ['On-Page SEO', 'Local Citations', 'Google My Business', 'Keyword Research'],
  },
];

export const initialCertifications: CertificateItem[] = [
  {
    id: 'cert-1',
    name: 'Google Search Central Technical SEO & Core Web Vitals Specialist',
    issuingOrganization: 'Google Search Central / Coursera',
    issueDate: 'Jan 2025',
    certificateId: 'GGL-SEO-998241',
    category: 'SEO',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    verificationUrl: 'https://coursera.org/verify/example-google-seo',
    skillsCovered: ['Technical SEO', 'Core Web Vitals', 'JavaScript SEO', 'Schema Markup'],
    scoreOrHonor: 'Passed with 98% Distinction',
  },
  {
    id: 'cert-2',
    name: 'SEMrush Advanced Generative Engine & Local SEO Masterclass',
    issuingOrganization: 'SEMrush Academy',
    issueDate: 'Nov 2024',
    certificateId: 'SMR-GEO-773190',
    category: 'SEO',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    verificationUrl: 'https://semrush.com/academy/certificates/example-geo',
    skillsCovered: ['Local SEO 3-Pack', 'GEO (Generative SEO)', 'AEO Search Intent', 'Citations'],
    scoreOrHonor: 'Master Level Certification',
  },
  {
    id: 'cert-3',
    name: 'Ahrefs Advanced Link Building & Topical Authority Certification',
    issuingOrganization: 'Ahrefs Academy',
    issueDate: 'Aug 2024',
    certificateId: 'AHF-AUTH-441092',
    category: 'SEO',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    verificationUrl: 'https://ahrefs.com/academy/example-auth',
    skillsCovered: ['Topical Maps', 'Digital PR', 'Outreach Automation', 'Link Velocity'],
    scoreOrHonor: 'Certified Authority Strategist',
  },
  {
    id: 'cert-4',
    name: 'HubSpot Inbound Marketing & CRO Master Certification',
    issuingOrganization: 'HubSpot Academy',
    issueDate: 'May 2024',
    certificateId: 'HUB-CRO-118834',
    category: 'Marketing',
    image:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
    verificationUrl: 'https://academy.hubspot.com/certificates/example-inbound',
    skillsCovered: ['Conversion Rate Optimization', 'Funnel Tracking', 'Lead Generation', 'Content Strategy'],
    scoreOrHonor: 'Honors Certification',
  },
  {
    id: 'cert-5',
    name: 'Schema.org & Semantic Web Data Engineering',
    issuingOrganization: 'W3C / Semantic Web Institute',
    issueDate: 'Feb 2024',
    category: 'Development',
    certificateId: 'SCH-SEM-662301',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    verificationUrl: 'https://example.com/schema-cert',
    skillsCovered: ['JSON-LD', 'Entity Relationships', 'Knowledge Graph', 'Rich Snippets'],
    scoreOrHonor: 'Certified Data Engineer',
  },
  {
    id: 'cert-6',
    name: 'Google Analytics 4 (GA4) & Google Tag Manager Certification',
    issuingOrganization: 'Google Skillshop',
    issueDate: 'Oct 2023',
    certificateId: 'GGL-GA4-339184',
    category: 'Marketing',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    verificationUrl: 'https://skillshop.exceedlms.com/example-ga4',
    skillsCovered: ['GA4 Tracking', 'Data Layers', 'Custom Events', 'Attribution Modeling'],
    scoreOrHonor: 'Official Google Certified',
  },
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    stepNumber: '01',
    name: 'DISCOVER',
    title: 'Understand the Business & Goals',
    description:
      'Deep dive into your business model, target audience, local service radiuses, revenue goals, and search competitor landscape.',
    deliverables: ['Discovery Brief', 'Competitor Benchmark Report', 'Organic Revenue KPI Matrix'],
    icon: 'Compass',
    estimatedDuration: 'Day 1 — 3',
  },
  {
    stepNumber: '02',
    name: 'RESEARCH',
    title: 'Data, Keywords & Competitor Analysis',
    description:
      'Comprehensive keyword research uncovering high-intent transactional search queries, local search patterns, and competitor ranking gaps.',
    deliverables: ['Transactional Keyword Matrix', 'Competitor Gap Analysis', 'Search Intent Classification'],
    icon: 'Search',
    estimatedDuration: 'Day 4 — 7',
  },
  {
    stepNumber: '03',
    name: 'PLAN',
    title: 'SEO, AEO & GEO Strategy Architecture',
    description:
      'Architecting the comprehensive roadmap: Topical authority maps, entity relationship models, Local 3-Pack citation blueprints, and AI citation models.',
    deliverables: ['Topical Authority Blueprint', 'Local SEO Citation Roadmap', 'AEO/GEO Content Framework'],
    icon: 'Layers',
    estimatedDuration: 'Week 2',
  },
  {
    stepNumber: '04',
    name: 'STRUCTURE',
    title: 'Entity Graphs & Schema Architecture',
    description:
      'Designing precise Schema.org JSON-LD microdata hierarchies for Organization, LocalBusiness, FAQ, and Product entities to train search engines and LLMs.',
    deliverables: ['Schema.org JSON-LD Templates', 'Entity Graph Specification', 'Rich Snippet Roadmap'],
    icon: 'BrainCircuit',
    estimatedDuration: 'Week 2 — 3',
  },
  {
    stepNumber: '05',
    name: 'OPTIMIZE',
    title: 'Technical & On-Page SEO Overhaul',
    description:
      'Resolving crawl bottlenecks, robots.txt, XML sitemaps, canonical tags, internal linking silos, Core Web Vitals speed, and heading hierarchies.',
    deliverables: ['100/100 Core Web Vitals Audit', 'Internal Linking Silo Map', 'Technical Remediation Log'],
    icon: 'Zap',
    estimatedDuration: 'Week 3 — 5',
  },
  {
    stepNumber: '06',
    name: 'LOCALIZE',
    title: 'Local SEO & Google Business Profile 3-Pack',
    description:
      'Optimizing Google Business Profiles, geo-tagged photo media, category primary nesting, local review generation funnels, and NAP citation building.',
    deliverables: ['Google Business Profile Optimization', 'NAP Citation Audit (50+ Sites)', 'Geo-Grid Tracking Setup'],
    icon: 'MapPin',
    estimatedDuration: 'Week 5',
  },
  {
    stepNumber: '07',
    name: 'GROW',
    title: 'Content, AEO Voice & Authority Building',
    description:
      'Crafting authoritative pillar content, conversational question-and-answer snippets for voice assistants, and high-DA digital PR backlinks.',
    deliverables: ['Topical Pillar Content', 'AEO Q&A Voice Snippets', 'High-Authority Editorial Backlinks'],
    icon: 'TrendingUp',
    estimatedDuration: 'Week 6',
  },
  {
    stepNumber: '08',
    name: 'CONVERT',
    title: 'Analytics, CRO & Performance Tracking',
    description:
      'Deploying GA4 custom lead events, Google Tag Manager click triggers, call tracking metrics, and conversion rate optimization (CRO) split tests.',
    deliverables: ['GA4 Custom Event Dashboard', 'Call Tracking Integration', 'Conversion Heatmap Reports'],
    icon: 'Target',
    estimatedDuration: 'Week 6 — 7',
  },
  {
    stepNumber: '09',
    name: 'LAUNCH',
    title: 'Testing, Indexing & Deployment',
    description:
      'Conducting live search engine inspection, submitting sitemaps to Google Search Console and Bing Webmaster, and verifying rich snippet rendering.',
    deliverables: ['Instant Search Console Indexing', 'Rich Snippet Validation', 'Live Production QA Sign-Off'],
    icon: 'Rocket',
    estimatedDuration: 'Launch Day',
  },
  {
    stepNumber: '10',
    name: 'SCALE',
    title: 'Continuous Optimization & AI Search Dominance',
    description:
      'Ongoing keyword rank monitoring, Google algorithm defense updates, LLM answer citation tracking (Perplexity/ChatGPT), and market expansion.',
    deliverables: ['Monthly Organic Growth Reports', 'AI Engine Citation Audits', 'Continuous ROI Scaling'],
    icon: 'BarChart3',
    estimatedDuration: 'Ongoing Growth',
  },
];

export const initialBlogPosts: BlogPostItem[] = [
  {
    id: 'blog-1',
    title: 'The Rise of GEO & AEO: How to Rank in ChatGPT Search, Perplexity & Google AI Overviews',
    slug: 'the-rise-of-geo-and-aeo-ai-search-2026',
    category: 'AEO & GEO',
    date: 'February 26, 2026',
    readTime: '6 min read',
    shortDescription:
      'A deep actionable framework on optimizing your brand, content, and entity data to become the #1 cited source inside modern AI search models.',
    content: [
      'Search behavior is undergoing its biggest transformation since the invention of the Google PageRank algorithm. Users are increasingly turning to conversational AI engines like ChatGPT Search, Perplexity AI, and Google AI Overviews for instant answers.',
      'Generative Engine Optimization (GEO) requires shifting from simple keyword density to Entity Authority. AI models evaluate topical consensus, direct factual assertions, and machine-readable structured microdata.',
      'To capture AI citations: 1) Structure answers in concise 40–60 word answer boxes at the top of content sections, 2) Embed Schema.org JSON-LD microdata linking entities to Wikidata and Wikipedia, and 3) Build authoritative brand mentions across respected industry publications.',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    author: 'Komal Chandro Roy',
    tags: ['AEO', 'GEO', 'AI Search', 'ChatGPT Search', 'Perplexity AI'],
  },
  {
    id: 'blog-2',
    title: 'Local SEO Mastery: Dominating the Google Map 3-Pack in High-Competition Niches',
    slug: 'local-seo-mastery-google-map-3-pack',
    category: 'Local SEO',
    date: 'January 22, 2026',
    readTime: '5 min read',
    shortDescription:
      'Step-by-step blueprint to optimize Google Business Profile, fix NAP inconsistencies, and generate steady high-intent inbound phone calls.',
    content: [
      'Local searchers hold the highest commercial intent on the internet. More than 78% of local mobile searches result in an offline purchase or immediate phone inquiry within 24 hours.',
      'Dominating the Google Map 3-Pack requires balancing three critical pillars: Proximity, Prominence, and Relevance. To maximize prominence, establish consistent Name, Address, and Phone (NAP) citations across trusted registries and maintain active review velocity.',
      'Combine this with localized landing pages featuring embedded Google Maps, customer testimonials with localized geo-tags, and direct click-to-call conversion buttons.',
    ],
    image:
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    author: 'Komal Chandro Roy',
    tags: ['Local SEO', 'Google Business Profile', 'Map 3-Pack', 'Lead Generation'],
  },
  {
    id: 'blog-3',
    title: 'Technical SEO & Schema.org JSON-LD: Unlocking Rich Search Snippets & Knowledge Graphs',
    slug: 'technical-seo-schema-json-ld-rich-snippets',
    category: 'Technical SEO',
    date: 'December 18, 2025',
    readTime: '7 min read',
    shortDescription:
      'How nested structured data, Core Web Vitals optimization, and clean site architecture drive 40%+ higher organic click-through rates (CTR).',
    content: [
      'Search engine crawlers rely heavily on explicit semantic signals to understand the entity relationships on your pages. When you provide valid JSON-LD structured data, you unlock rich search snippets that dominate the visual SERP space.',
      'From star review ratings and FAQ dropdowns to organization knowledge graphs and software application badges, structured data bridges human design and machine understanding.',
      'Ensure every key template has dynamic JSON-LD injection matching the exact content visible on the screen to avoid search engine rendering discrepancies.',
    ],
    image:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    author: 'Komal Chandro Roy',
    tags: ['Technical SEO', 'Schema.org', 'JSON-LD', 'Rich Snippets', 'CTR Optimization'],
  },
];

export const initialFaqs: FaqItem[] = [
  // SEO & Search FAQs
  {
    id: 'faq-seo-1',
    category: 'SEO & Search FAQs',
    question: 'What is AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)?',
    answer:
      'AEO focuses on optimizing content for direct answers in voice search, Google Featured Snippets, and knowledge graphs. GEO (Generative Engine Optimization) is the practice of structuring entity data, authoritative citations, and factual content so your brand is referenced and cited inside AI search engines like ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews.',
  },
  {
    id: 'faq-seo-2',
    category: 'SEO & Search FAQs',
    question: 'How do you help businesses dominate the Google Map Local 3-Pack?',
    answer:
      'I execute a comprehensive Local SEO strategy: complete Google Business Profile optimization, primary & secondary category tuning, geo-grid coordinate mapping, 100% consistent NAP (Name, Address, Phone) citations across top directories, local schema markup, and review velocity strategies.',
  },
  {
    id: 'faq-seo-3',
    category: 'SEO & Search FAQs',
    question: 'How long does it typically take to see measurable SEO and Local ranking results?',
    answer:
      'Technical SEO fixes, indexing optimizations, and Google Business Profile enhancements often generate visible improvements within 2 to 4 weeks. High-competition organic keyword rankings and sustainable organic traffic compounding typically achieve major ROI within 3 to 6 months.',
  },
  {
    id: 'faq-seo-4',
    category: 'SEO & Search FAQs',
    question: 'How do you measure and report campaign ROI and organic growth?',
    answer:
      'Every campaign is connected to Google Search Console, GA4 custom event tracking, call tracking software, and geo-grid rank trackers. You receive transparent monthly reports detailing keyword position jumps, local map rankings, inbound phone calls, organic clicks, and conversion leads.',
  },

  // Technical & Strategy FAQs
  {
    id: 'faq-dev-1',
    category: 'Web Development FAQs',
    question: 'Do you handle technical on-page fixes and Schema.org JSON-LD microdata?',
    answer:
      'Yes, absolutely. I implement clean JSON-LD structured data (LocalBusiness, FAQPage, Organization, Product, Article), eliminate crawl waste, optimize robots.txt and sitemaps, fix 404/redirect chains, and ensure your website achieves 95+ Core Web Vitals speed scores.',
  },
  {
    id: 'faq-dev-2',
    category: 'Web Development FAQs',
    question: 'Can you work with existing WordPress, Shopify, Next.js, or custom websites?',
    answer:
      'Yes. I have extensive experience optimizing WordPress (RankMath/Yoast), Shopify, Next.js/React apps, Webflow, and custom PHP/Node.js platforms without breaking your existing site design or functionality.',
  },
  {
    id: 'faq-dev-3',
    category: 'Web Development FAQs',
    question: 'Can I easily update my profile, phone number, and content on this portfolio?',
    answer:
      'Yes! This portfolio has a built-in live Customizer panel where you can change your name, phone number, profile image URL or upload your photo, email, social media links, skills, and projects in real time with automatic local saving.',
  },
  {
    id: 'faq-dev-4',
    category: 'Web Development FAQs',
    question: 'What is your process for starting a new SEO or Local SEO project?',
    answer:
      'We start with a thorough Discovery & Technical/Local Audit to identify critical gaps and revenue opportunities. From there, I build a custom roadmap covering Technical SEO, Local 3-Pack citations, AEO/GEO entity structures, high-intent content, and ongoing ranking scaling.',
  },
];
