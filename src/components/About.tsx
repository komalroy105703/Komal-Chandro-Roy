import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  TrendingUp,
  Users,
  CheckCircle2,
  Award,
  Sparkles,
  MapPin,
  BotMessageSquare,
  Search,
  Zap,
  Target,
  ArrowRight,
} from 'lucide-react';

export const About: React.FC = () => {
  const { personalInfo, setIsCvModalOpen } = usePortfolio();

  const stats = [
    {
      id: 'stat-experience',
      label: 'Years of Experience',
      value: `${personalInfo.yearsOfExperience}+`,
      subtext: 'Proven Track Record',
      icon: Award,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
    },
    {
      id: 'stat-projects',
      label: 'Completed Projects',
      value: `${personalInfo.completedProjects}+`,
      subtext: 'Global & Local Brands',
      icon: CheckCircle2,
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
    },
    {
      id: 'stat-clients',
      label: 'Satisfied Clients',
      value: `${personalInfo.satisfiedClients}+`,
      subtext: '99% Retention Rate',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
    },
    {
      id: 'stat-growth',
      label: 'SEO Growth Rate',
      value: personalInfo.seoGrowthRate,
      subtext: 'Average Traffic Jump',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-400',
    },
  ];

  const pillars = [
    {
      title: 'Technical & Entity SEO',
      desc: 'Architecting zero-crawl-waste site frameworks, Schema.org JSON-LD microdata, and Core Web Vitals speed benchmarks.',
      icon: Search,
    },
    {
      title: 'Local 3-Pack Google Maps',
      desc: 'Dominating localized search grids, consistent NAP citation syndication, and high-converting phone call funnels.',
      icon: MapPin,
    },
    {
      title: 'AEO (Answer Engine Optimization)',
      desc: 'Formatting conversational direct answers for voice search, Google Featured Snippets, and knowledge graph ingestion.',
      icon: BotMessageSquare,
    },
    {
      title: 'GEO (Generative Engine Optimization)',
      desc: 'Engineering brand citations and topical consensus to capture primary sources in ChatGPT, Perplexity AI, and Google AI Overviews.',
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Badge & Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>

          <h2
            id="about-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl leading-tight mb-3"
          >
            {personalInfo.aboutSectionHeading}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-mono max-w-xl">
            {personalInfo.aboutSubheading}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Bio Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <h3
                id="about-heading"
                className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2"
              >
                {personalInfo.aboutHeading}
              </h3>

              <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider font-mono mb-6">
                {personalInfo.aboutSubheading}
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {personalInfo.aboutBio.map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Action Links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  id="about-preview-cv-btn"
                  onClick={() => setIsCvModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Professional CV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  id="about-contact-anchor"
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-all"
                >
                  <span>Discuss a Project</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Pillars & Expertise Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  id={`pillar-card-${idx}`}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group hover:bg-slate-900/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-white group-hover:text-emerald-300 transition-colors mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.id}
                id={stat.id}
                className="group relative p-6 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>

                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10 text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className={`font-heading font-extrabold text-3xl sm:text-4xl ${stat.textColor} tracking-tight mb-1`}>
                  {stat.value}
                </div>

                <div className="font-semibold text-sm text-slate-200 mb-0.5">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
