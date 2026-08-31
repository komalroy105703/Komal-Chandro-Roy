import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  FileDown,
  Eye,
  CheckCircle,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  Search,
  MapPin,
  TrendingUp,
  BotMessageSquare,
} from 'lucide-react';

export const Resume: React.FC = () => {
  const { personalInfo, setIsCvModalOpen, experiences, certifications } = usePortfolio();

  return (
    <section
      id="resume"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2
            id="resume-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Professional Resume & Career Summary
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of qualifications, organic growth leadership, multi-location Local SEO campaigns, and industry credentials.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Highlights & Summary Overview */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Executive Profile Summary
              </h3>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6">
                {personalInfo.name} — {personalInfo.role}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Over 8 years of specialized excellence driving multi-million search impression expansions, dominating Google Local 3-Packs, and engineering generative AI citations for enterprise clients.
              </p>

              {/* Core Competency Bullets */}
              <div className="space-y-3 mb-8">
                {[
                  'Generative Engine Optimization (GEO) & AI Overviews Citations',
                  'Local SEO & Multi-Location Google Business Profile 3-Pack Authority',
                  'Answer Engine Optimization (AEO) for Voice & Knowledge Graph Snippets',
                  'Entity-First Topical Authority & Schema.org JSON-LD Architectures',
                  'Core Web Vitals Performance & Crawl Efficiency Overhauls',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="resume-preview-cv-btn"
                  onClick={() => setIsCvModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview CV Online</span>
                </button>

                <button
                  id="resume-download-cv-btn"
                  onClick={() => setIsCvModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-emerald-400 border border-white/10 text-xs font-semibold transition-all hover:scale-[1.02]"
                >
                  <FileDown className="w-4 h-4 text-emerald-400" />
                  <span>Download CV (.PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: CV Preview Card Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              id="cv-preview-mockup-card"
              onClick={() => setIsCvModalOpen(true)}
              className="group cursor-pointer relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-white/15 hover:border-emerald-500/50 shadow-2xl transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Document Header simulation */}
              <div className="border-b border-white/10 pb-6 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-emerald-300 transition-colors">
                      {personalInfo.name}
                    </h4>
                    <p className="text-xs font-mono text-emerald-400 mt-1">
                      {personalInfo.role}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 font-mono">
                      {personalInfo.email} • {personalInfo.phoneNumber} • {personalInfo.location}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <FileDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Section Previews */}
              <div className="space-y-5 text-xs text-slate-300">
                <div>
                  <div className="font-bold uppercase tracking-wider text-emerald-400 font-mono mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Core Experience
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <div className="font-semibold text-white">
                      Lead SEO, Local SEO & AI Search Specialist
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Apex Digital Growth Agency • 2022 — Present
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-bold uppercase tracking-wider text-sky-400 font-mono mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Key Certifications
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-slate-300">
                    Google Search Central Technical SEO • SEMrush GEO Master • Ahrefs Authority
                  </div>
                </div>
              </div>

              {/* Hover Overlay Banner */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                  Click to inspect full verified CV
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 group-hover:underline">
                  Preview Interactive CV →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
