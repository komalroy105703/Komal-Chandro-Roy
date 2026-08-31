import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  X,
  FileDown,
  ExternalLink,
  Award,
  Calendar,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Mail,
  Phone,
  BookOpen,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const Modals: React.FC = () => {
  const {
    isCvModalOpen,
    setIsCvModalOpen,
    activeProject,
    setActiveProject,
    activeCertificate,
    setActiveCertificate,
    activeBlogPost,
    setActiveBlogPost,
    personalInfo,
    experiences,
    skills,
    certifications,
  } = usePortfolio();

  return (
    <>
      {/* 1. CV PREVIEW MODAL */}
      {isCvModalOpen && (
        <div
          id="cv-preview-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            id="cv-modal-content"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-10 shadow-2xl custom-scrollbar"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 sticky top-0 bg-slate-900/90 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Curriculum Vitae — {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    Verified SEO, Local SEO, AEO, GEO & AI Specialist Profile
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  id="cv-modal-download-file-btn"
                  href={personalInfo.cvDownloadUrl}
                  download={`${personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <button
                  id="cv-modal-close-btn"
                  onClick={() => setIsCvModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CV Document Body */}
            <div className="space-y-8 text-slate-200">
              {/* Header Info */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="font-heading font-extrabold text-3xl text-white">
                    {personalInfo.name}
                  </h1>
                  <h2 className="text-sm font-semibold text-emerald-400 font-mono mt-1">
                    {personalInfo.role}
                  </h2>
                  <p className="text-xs text-slate-400 mt-2 max-w-xl">
                    {personalInfo.shortIntro}
                  </p>
                </div>
                <div className="text-xs font-mono space-y-1.5 text-slate-300 border-l border-white/10 pl-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{personalInfo.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="font-heading font-bold text-lg text-emerald-400 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Work Experience & Leadership
                </h4>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-5 rounded-2xl bg-slate-950/60 border border-white/5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="font-bold text-white text-base">
                          {exp.jobTitle}
                        </span>
                        <span className="text-xs font-mono text-emerald-400">
                          {exp.companyName} • {exp.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mb-3">{exp.shortDescription}</p>
                      <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                        {exp.keyResponsibilities.map((resp, rIdx) => (
                          <li key={rIdx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Skills */}
              <div>
                <h4 className="font-heading font-bold text-lg text-sky-400 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Technical & Search Competencies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs"
                    >
                      <div className="font-semibold text-white">{skill.name}</div>
                      <div className="text-[11px] font-mono text-emerald-400">
                        {skill.level}% Proficiency
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-heading font-bold text-lg text-amber-400 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Verified Credentials
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs"
                    >
                      <div className="font-bold text-white">{cert.name}</div>
                      <div className="text-emerald-400 font-mono text-[11px]">
                        {cert.issuingOrganization}
                      </div>
                      <div className="text-slate-500 font-mono text-[10px]">
                        ID: {cert.certificateId}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. PROJECT CASE STUDY MODAL */}
      {activeProject && (
        <div
          id="project-details-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl custom-scrollbar">
            {/* Close Button */}
            <button
              id="project-modal-close-btn"
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-white/10">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs font-mono text-emerald-400">
                CASE {activeProject.number} • {activeProject.category}
              </div>
            </div>

            {/* Project Content */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              {activeProject.title}
            </h3>
            <p className="text-emerald-400 font-mono text-sm mb-6">
              {activeProject.tagline}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {activeProject.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/20 text-center"
                >
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-emerald-400">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Project Overview & Execution
              </h4>
              <p>{activeProject.detailedDescription}</p>
            </div>

            {/* Deliverables */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                Key Optimizations Implemented:
              </h4>
              <div className="space-y-2">
                {activeProject.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags & Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-white/10 text-xs font-mono text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all"
                >
                  <span>Visit Live Case Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. CERTIFICATE DETAILS MODAL */}
      {activeCertificate && (
        <div
          id="cert-details-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl custom-scrollbar">
            <button
              id="cert-modal-close-btn"
              onClick={() => setActiveCertificate(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cert Image */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-white/10">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
              <Award className="w-4 h-4" />
              <span>{activeCertificate.issuingOrganization}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{activeCertificate.issueDate}</span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
              {activeCertificate.name}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeCertificate.description}
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                Credential Verification ID:
              </div>
              <div className="text-sm font-mono font-bold text-white">
                {activeCertificate.certificateId}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                Skills Evaluated & Mastered:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCertificate.skillsCovered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {activeCertificate.verificationUrl && (
              <a
                href={activeCertificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all w-full justify-center"
              >
                <span>Verify Credential on Official Registry</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* 4. BLOG ARTICLE READER MODAL */}
      {activeBlogPost && (
        <div
          id="blog-reader-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-10 shadow-2xl custom-scrollbar">
            <button
              id="blog-modal-close-btn"
              onClick={() => setActiveBlogPost(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-white/10">
              <img
                src={activeBlogPost.image}
                alt={activeBlogPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs font-mono text-emerald-400">
                {activeBlogPost.category}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                {activeBlogPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                {activeBlogPost.readTime}
              </span>
              <span className="text-slate-300">By {personalInfo.name}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-6 leading-tight">
              {activeBlogPost.title}
            </h2>

            {/* Full Content */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {activeBlogPost.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {activeBlogPost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
