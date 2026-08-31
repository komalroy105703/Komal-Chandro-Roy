import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Cpu,
  MapPin,
  Search,
  FileCode2,
  Share2,
  Globe,
  Code,
  Palette,
  Braces,
  Atom,
  Layers,
  Server,
  Database,
  BotMessageSquare,
  Sparkles,
  BrainCircuit,
  BarChart3,
  Zap,
  Check,
} from 'lucide-react';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<'All' | 'SEO Core' | 'AI & Next-Gen' | 'Technical & Analytics'>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return Cpu;
      case 'MapPin':
        return MapPin;
      case 'Search':
        return Search;
      case 'FileCode2':
        return FileCode2;
      case 'Share2':
        return Share2;
      case 'Globe':
        return Globe;
      case 'Code':
        return Code;
      case 'Palette':
        return Palette;
      case 'Braces':
        return Braces;
      case 'Atom':
        return Atom;
      case 'Layers':
        return Layers;
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      case 'BotMessageSquare':
        return BotMessageSquare;
      case 'Sparkles':
        return Sparkles;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'BarChart3':
        return BarChart3;
      case 'Zap':
        return Zap;
      default:
        return Search;
    }
  };

  const filteredSkills = skills.filter((skill) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'SEO Core') {
      return (
        skill.id.includes('tech-seo') ||
        skill.id.includes('local-seo') ||
        skill.id.includes('keyword') ||
        skill.id.includes('on-page') ||
        skill.id.includes('off-page')
      );
    }
    if (activeFilter === 'AI & Next-Gen') {
      return (
        skill.id.includes('aeo') ||
        skill.id.includes('geo') ||
        skill.id.includes('ai-specialist')
      );
    }
    if (activeFilter === 'Technical & Analytics') {
      return (
        skill.id.includes('schema') ||
        skill.id.includes('wordpress') ||
        skill.id.includes('analytics') ||
        skill.id.includes('site-speed') ||
        skill.category === 'Development'
      );
    }
    return true;
  });

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skills & Core Competencies</span>
          </div>

          <h2
            id="skills-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Specialized Search & Growth Tech Arsenal
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Precision-engineered organic search methodologies, AI answer engine citations, and technical data architectures designed for dominant visibility.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {(['All', 'SEO Core', 'AI & Next-Gen', 'Technical & Analytics'] as const).map((filter) => (
              <button
                key={filter}
                id={`filter-tab-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem) => {
            const IconComponent = getIcon(skill.iconName);
            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Experience */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 flex items-center justify-center text-slate-200 group-hover:text-emerald-400 transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {skill.experienceYears && (
                      <span className="px-2.5 py-1 rounded-full bg-slate-800/80 border border-white/5 text-[11px] font-mono text-emerald-400 font-medium">
                        {skill.experienceYears}
                      </span>
                    )}
                  </div>

                  {/* Skill Title & Subcategory */}
                  <div className="mb-2">
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.subcategory && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.subcategory}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Tags */}
                  {skill.tags && skill.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {skill.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-800/60 border border-white/5 text-[10px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Progress Bar & Proficiency Level */}
                <div className="pt-3 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Mastery</span>
                    <span className="text-emerald-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
