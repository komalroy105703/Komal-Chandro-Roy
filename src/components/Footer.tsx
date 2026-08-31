import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personalInfo } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-400 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-emerald-400 font-heading">
              {personalInfo.name.charAt(0)}
            </div>
          </div>
          <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
            {personalInfo.name}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xs font-mono text-emerald-400 max-w-md mb-8">
          SEO, Local SEO, AEO, GEO & AI Search Specialist — Scaling Organic & AI Answer Visibility
        </p>

        {/* Quick Links Navigation */}
        <nav id="footer-quick-links" className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 text-xs sm:text-sm font-medium text-slate-400">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              id={`footer-link-${link.label.toLowerCase()}`}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full max-w-2xl h-[1px] bg-white/5 mb-8"></div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 <span className="text-slate-300 font-semibold">{personalInfo.name}</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Specialized in SEO, Local 3-Pack, AEO & GEO
            </span>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-white/10 transition-colors flex items-center gap-1.5"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
