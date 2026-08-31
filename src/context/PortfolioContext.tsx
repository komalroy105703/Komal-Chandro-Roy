import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  PersonalInfo,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  CertificateItem,
  WorkProcessStep,
  BlogPostItem,
  FaqItem,
  FontPreset,
} from '../types';
import {
  initialPersonalInfo,
  initialSkills,
  initialProjects,
  initialExperiences,
  initialCertifications,
  workProcessSteps,
  initialBlogPosts,
  initialFaqs,
} from '../data/portfolioData';

interface PortfolioContextType {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  skills: SkillItem[];
  setSkills: React.Dispatch<React.SetStateAction<SkillItem[]>>;
  projects: ProjectItem[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectItem[]>>;
  experiences: ExperienceItem[];
  setExperiences: React.Dispatch<React.SetStateAction<ExperienceItem[]>>;
  certifications: CertificateItem[];
  setCertifications: React.Dispatch<React.SetStateAction<CertificateItem[]>>;
  workProcess: WorkProcessStep[];
  blogPosts: BlogPostItem[];
  faqs: FaqItem[];
  fontPreset: FontPreset;
  setFontPreset: (preset: FontPreset) => void;
  resetToDefaults: () => void;
  exportDataJson: () => string;
  // Modal handlers
  activeProject: ProjectItem | null;
  setActiveProject: (project: ProjectItem | null) => void;
  activeCertificate: CertificateItem | null;
  setActiveCertificate: (cert: CertificateItem | null) => void;
  activeBlogPost: BlogPostItem | null;
  setActiveBlogPost: (post: BlogPostItem | null) => void;
  isCvModalOpen: boolean;
  setIsCvModalOpen: (open: boolean) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'portfolio_custom_data_v1';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_info`);
    if (saved) {
      try {
        return { ...initialPersonalInfo, ...JSON.parse(saved) };
      } catch (e) {
        console.error('Failed to parse saved personal info', e);
      }
    }
    return initialPersonalInfo;
  });

  const [skills, setSkills] = useState<SkillItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_skills`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved skills', e);
      }
    }
    return initialSkills;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_projects`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved projects', e);
      }
    }
    return initialProjects;
  });

  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_experiences`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved experiences', e);
      }
    }
    return initialExperiences;
  });

  const [certifications, setCertifications] = useState<CertificateItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_certs`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved certifications', e);
      }
    }
    return initialCertifications;
  });

  const [workProcess] = useState<WorkProcessStep[]>(workProcessSteps);
  const [blogPosts] = useState<BlogPostItem[]>(initialBlogPosts);
  const [faqs] = useState<FaqItem[]>(initialFaqs);
  const [fontPreset, setFontPreset] = useState<FontPreset>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_font`);
    if (saved && ['executive', 'enterprise', 'manrope', 'inter'].includes(saved)) {
      return saved as FontPreset;
    }
    return 'executive';
  });

  // Apply font preset to HTML document
  useEffect(() => {
    document.documentElement.setAttribute('data-font-preset', fontPreset);
    localStorage.setItem(`${STORAGE_KEY}_font`, fontPreset);
  }, [fontPreset]);

  // Modals state
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPostItem | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_info`, JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_skills`, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_projects`, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_experiences`, JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_certs`, JSON.stringify(certifications));
  }, [certifications]);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setPersonalInfo((prev) => ({
      ...prev,
      ...info,
      socialLinks: {
        ...prev.socialLinks,
        ...(info.socialLinks || {}),
      },
    }));
  };

  const resetToDefaults = () => {
    setPersonalInfo(initialPersonalInfo);
    setSkills(initialSkills);
    setProjects(initialProjects);
    setExperiences(initialExperiences);
    setCertifications(initialCertifications);
    setFontPreset('executive');
    localStorage.removeItem(`${STORAGE_KEY}_info`);
    localStorage.removeItem(`${STORAGE_KEY}_skills`);
    localStorage.removeItem(`${STORAGE_KEY}_projects`);
    localStorage.removeItem(`${STORAGE_KEY}_experiences`);
    localStorage.removeItem(`${STORAGE_KEY}_certs`);
    localStorage.removeItem(`${STORAGE_KEY}_font`);
  };

  const exportDataJson = () => {
    return JSON.stringify(
      {
        personalInfo,
        skills,
        projects,
        experiences,
        certifications,
        fontPreset,
      },
      null,
      2
    );
  };

  return (
    <PortfolioContext.Provider
      value={{
        personalInfo,
        updatePersonalInfo,
        skills,
        setSkills,
        projects,
        setProjects,
        experiences,
        setExperiences,
        certifications,
        setCertifications,
        workProcess,
        blogPosts,
        faqs,
        fontPreset,
        setFontPreset,
        resetToDefaults,
        exportDataJson,
        activeProject,
        setActiveProject,
        activeCertificate,
        setActiveCertificate,
        activeBlogPost,
        setActiveBlogPost,
        isCvModalOpen,
        setIsCvModalOpen,
        isCustomizerOpen,
        setIsCustomizerOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
