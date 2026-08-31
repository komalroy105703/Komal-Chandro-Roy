import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  CheckCircle2,
  Layers,
  MapPin,
  BotMessageSquare,
} from 'lucide-react';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const { projects, setActiveProject } = usePortfolio();

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>

          <h2
            id="projects-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Proven Organic Growth & AI Search Results
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected client case studies demonstrating top Google Local 3-Pack rankings, Perplexity & ChatGPT citations, and enterprise traffic scaling.
          </p>
        </div>

        {/* Alternating Projects List */}
        <div className="space-y-20">
          {projects.map((project: ProjectItem, index: number) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center group"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setActiveProject(project)}
                    className="cursor-pointer relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 group-hover:border-emerald-500/40 shadow-2xl transition-all duration-500 group-hover:shadow-emerald-500/15 group-hover:-translate-y-1"
                  >
                    {/* Project Number badge */}
                    <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-emerald-400 font-heading font-bold text-xs">
                      CASE {project.number}
                    </div>

                    {/* Image */}
                    <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    </div>

                    {/* Quick Metric overlay on image */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 text-xs font-mono"
                        >
                          <span className="text-slate-400">{m.label}: </span>
                          <span className="text-emerald-400 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Category & Year */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs font-mono text-slate-400">{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="cursor-pointer font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug"
                  >
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-emerald-400/90 text-xs sm:text-sm font-mono font-medium mb-4">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore Project CTA Button */}
                  <button
                    id={`explore-project-btn-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-100 hover:text-slate-950 border border-white/15 hover:border-emerald-500 font-bold text-xs tracking-wide transition-all shadow-md group-hover:border-emerald-500/40"
                  >
                    <span>Explore Project Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
