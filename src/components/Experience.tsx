import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ExperienceItem } from '../types';

export const Experience: React.FC = () => {
  const { experiences } = usePortfolio();

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>

          <h2
            id="experience-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Professional Experience Timeline
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A progression of leadership in organic search marketing, enterprise technical SEO, and AI search engine optimization.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          {/* Vertical Glowing Line */}
          <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500 via-sky-500 to-indigo-500/40 rounded-full"></div>

          {experiences.map((exp: ExperienceItem, idx: number) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  exp.current
                    ? 'bg-emerald-500 border-white text-slate-950 shadow-lg shadow-emerald-500/50'
                    : 'bg-slate-950 border-emerald-500/50 text-emerald-400 group-hover:border-emerald-400'
                }`}
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-current"></div>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 group-hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300 shadow-xl group-hover:-translate-y-0.5">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-emerald-300 transition-colors">
                        {exp.jobTitle}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-emerald-400 font-semibold text-sm mt-0.5">
                      {exp.companyName}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-white/5">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      {exp.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-white/5">
                      <MapPin className="w-3 h-3 text-sky-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.shortDescription}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Key Accomplishments & Responsibilities:
                  </div>
                  {exp.keyResponsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-1 shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech & SEO Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
