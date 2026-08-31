import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Menu,
  X,
  Phone,
  SlidersHorizontal,
  FileDown,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { personalInfo, setIsCvModalOpen, setIsCustomizerOpen } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Process', href: '#process' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-brand-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-400 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-bold font-heading text-lg text-emerald-400 group-hover:scale-110 transition-transform">
                {personalInfo.name.charAt(0)}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-emerald-400/90 font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SEO, Local SEO, AEO & AI Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Edit Profile Button */}
          <button
            id="open-customizer-btn"
            onClick={() => setIsCustomizerOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-white/10 text-xs font-medium transition-all hover:border-emerald-500/30"
            title="Edit Profile Info, Images & Settings"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Customize</span>
          </button>

          {/* Quick Call Button */}
          <a
            id="nav-quick-call-btn"
            href={`tel:${personalInfo.phoneRaw}`}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm hover:shadow-emerald-500/20"
          >
            <Phone className="w-3.5 h-3.5 animate-bounce" />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* Download CV Nav Button */}
          <button
            id="nav-download-cv-btn"
            onClick={() => setIsCvModalOpen(true)}
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold text-xs transition-all hover:opacity-95 shadow-md shadow-emerald-500/20 hover:scale-[1.02]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="xl:hidden mt-3 mx-4 p-5 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-300 hover:bg-white/5 hover:text-emerald-300'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <button
              id="mobile-customize-profile-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCustomizerOpen(true);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-emerald-400 text-xs font-medium flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
              <span>Edit / Customize Portfolio Data</span>
            </button>

            <button
              id="mobile-cv-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCvModalOpen(true);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Preview & Download CV</span>
            </button>

            <a
              id="mobile-call-btn"
              href={`tel:${personalInfo.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {personalInfo.phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
