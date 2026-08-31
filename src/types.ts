export interface PersonalInfo {
  name: string;
  heroHeadingName: string;
  role: string;
  badge: string;
  shortIntro: string;
  aboutSectionHeading: string;
  aboutHeading: string;
  aboutSubheading: string;
  aboutBio: string[];
  phoneNumber: string;
  phoneRaw: string;
  email: string;
  location: string;
  profileImage: string;
  cvDownloadUrl: string;
  cvFileName: string;
  yearsOfExperience: number;
  completedProjects: number;
  satisfiedClients: number;
  seoGrowthRate: string;
  socialLinks: {
    linkedin: string;
    facebook: string;
    github: string;
    instagram: string;
    whatsapp?: string;
    twitter?: string;
  };
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'SEO' | 'Development' | 'Tools & Platforms';
  subcategory?: string;
  iconName: string;
  level: number; // percentage 0-100
  experienceYears?: string;
  description: string;
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full Stack' | 'SEO & Growth' | 'E-Commerce' | 'Web Application';
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  client?: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  employmentType: string;
  date: string;
  shortDescription: string;
  keyResponsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface CertificateItem {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate?: string;
  certificateId: string;
  category: 'All' | 'SEO' | 'Development' | 'Marketing';
  image: string;
  verificationUrl: string;
  skillsCovered: string[];
  scoreOrHonor?: string;
}

export interface WorkProcessStep {
  stepNumber: string; // e.g. "01"
  name: string; // e.g. "DISCOVER"
  title: string; // e.g. "Understand the Business & Goals"
  description: string;
  deliverables: string[];
  icon: string;
  estimatedDuration: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  shortDescription: string;
  content: string[];
  image: string;
  author: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  category: 'Web Development FAQs' | 'SEO & Search FAQs';
  question: string;
  answer: string;
}

export type FontPreset = 'executive' | 'enterprise' | 'manrope' | 'inter';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
