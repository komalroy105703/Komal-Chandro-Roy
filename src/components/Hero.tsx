import React, { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  FileDown,
  ArrowRight,
  Phone,
  Camera,
  MapPin,
  TrendingUp,
  Award,
  Sparkles,
  BotMessageSquare,
  Search,
  Zap,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personalInfo, updatePersonalInfo, setIsCvModalOpen, setIsCustomizerOpen } = usePortfolio();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updatePersonalInfo({ profileImage: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950"
    >
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* SEO & AI Specialist Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm shadow-emerald-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>SEO, Local SEO, AEO, GEO & AI Specialist</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-main-heading"
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1] mb-4"
          >
            Hi, I am{' '}
            <span className="text-gradient-primary">
              {personalInfo.heroHeadingName || personalInfo.name}
            </span>
          </h1>

          {/* Professional Title Subheading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-emerald-500 rounded-full"></div>
            <h2
              id="hero-professional-title"
              className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-wide font-heading flex flex-wrap items-center gap-2"
            >
              <span>{personalInfo.role}</span>
            </h2>
          </div>

          {/* Short Introduction Paragraph */}
          <p
            id="hero-short-intro"
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
          >
            {personalInfo.shortIntro}
          </p>

          {/* Key Specialization Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-9">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
              <Search className="w-3 h-3 text-emerald-400" /> Technical SEO
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
              <MapPin className="w-3 h-3 text-sky-400" /> Local 3-Pack
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
              <BotMessageSquare className="w-3 h-3 text-amber-400" /> AEO (Voice Answers)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
              <Sparkles className="w-3 h-3 text-purple-400" /> GEO (AI Citations)
            </span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* Download CV CTA */}
            <button
              id="hero-download-cv-cta"
              onClick={() => setIsCvModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            {/* Get In Touch CTA */}
            <a
              id="hero-get-in-touch-cta"
              href="#contact"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-emerald-400 border border-white/15 hover:border-emerald-500/40 font-semibold text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>

            {/* Quick Call Button */}
            <a
              id="hero-call-now-cta"
              href={`tel:${personalInfo.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition-all"
              title={`Call ${personalInfo.phoneNumber}`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>{personalInfo.phoneNumber}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Card & Floating Stat Cards */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
          {/* Glowing Aura Ring */}
          <div className="absolute inset-0 max-w-[420px] max-h-[480px] m-auto bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-sky-500/30 rounded-3xl blur-2xl -z-10"></div>

          {/* Profile Card Container */}
          <div
            id="hero-profile-card"
            className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl bg-slate-900/70 p-3 sm:p-4 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-950 border border-white/5 group">
              <img
                id="hero-profile-image"
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

              {/* Dynamic Image Upload Overlay Button */}
              <div className="absolute top-3 right-3 z-20">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  id="hero-change-photo-btn"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 border border-white/20 text-xs font-medium backdrop-blur-md transition-all shadow-lg"
                  title="Click to replace profile picture with your own image file"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Change Photo</span>
                </button>
              </div>

              {/* Bottom Card Identity Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400">
                      SEO, AEO & Local Specialist
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-semibold text-emerald-300">
                    Available for Projects
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Badge 1 (Top Left) */}
            <div
              id="hero-floating-stat-growth"
              className="absolute -top-5 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-emerald-500/30 shadow-2xl backdrop-blur-md flex items-center gap-3 animate-pulse"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-extrabold font-heading text-emerald-400">
                  {personalInfo.seoGrowthRate}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  Avg SEO Growth
                </div>
              </div>
            </div>

            {/* Floating Metric Badge 2 (Bottom Right) */}
            <div
              id="hero-floating-stat-local"
              className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-sky-500/30 shadow-2xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-extrabold font-heading text-sky-300">
                  #1 Local 3-Pack
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  Google Maps Dominance
                </div>
              </div>
            </div>

            {/* Floating Metric Badge 3 (Middle Right) */}
            <div
              id="hero-floating-stat-experience"
              className="hidden sm:flex absolute top-1/2 -right-10 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-amber-500/30 shadow-2xl backdrop-blur-md items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">
                {personalInfo.yearsOfExperience}+ Yrs Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
