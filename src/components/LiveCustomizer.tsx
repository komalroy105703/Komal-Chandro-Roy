import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  X,
  SlidersHorizontal,
  Upload,
  RotateCcw,
  Check,
  Phone,
  Mail,
  User,
  Sparkles,
  Link2,
  Camera,
  Layers,
  Type,
} from 'lucide-react';
import { FontPreset } from '../types';

export const LiveCustomizer: React.FC = () => {
  const {
    isCustomizerOpen,
    setIsCustomizerOpen,
    personalInfo,
    updatePersonalInfo,
    resetToDefaults,
    fontPreset,
    setFontPreset,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'profile' | 'contact' | 'socials' | 'typography'>('typography');
  const [saveToast, setSaveToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isCustomizerOpen) return null;

  const fontOptions: {
    id: FontPreset;
    name: string;
    headingFont: string;
    bodyFont: string;
    badge: string;
    description: string;
  }[] = [
    {
      id: 'executive',
      name: 'Executive Tech (Recommended)',
      headingFont: 'Outfit',
      bodyFont: 'Plus Jakarta Sans',
      badge: 'SEO & AI Specialist Pick',
      description: 'Ultra-crisp geometric headings with refined executive body typography for modern search leadership.',
    },
    {
      id: 'enterprise',
      name: 'SaaS Enterprise',
      headingFont: 'Plus Jakarta Sans',
      bodyFont: 'Inter',
      badge: 'Corporate Standard',
      description: 'Polished Silicon Valley standard typography balancing high authority with effortless readability.',
    },
    {
      id: 'manrope',
      name: 'Modern Precision',
      headingFont: 'Manrope',
      bodyFont: 'Inter',
      badge: 'European Minimalist',
      description: 'Open-counter neo-grotesque design tailored for clean data presentation and tech consulting.',
    },
    {
      id: 'inter',
      name: 'Pure Tech UI',
      headingFont: 'Inter',
      bodyFont: 'Inter',
      badge: 'High Density',
      description: 'Neutral, universally trusted typography engineered for technical dashboards and audits.',
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updatePersonalInfo({ profileImage: reader.result });
          showToast();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const showToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  return (
    <div
      id="customizer-drawer-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
    >
      <div
        id="customizer-drawer-panel"
        className="w-full max-w-md bg-slate-900 border-l border-white/10 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl custom-scrollbar"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Portfolio Customizer
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  Typography, Profile, Contact & Real-time Edits
                </p>
              </div>
            </div>

            <button
              id="close-customizer-btn"
              onClick={() => setIsCustomizerOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="grid grid-cols-4 rounded-xl bg-slate-950 p-1 mb-6 border border-white/5 gap-0.5">
            <button
              onClick={() => setActiveTab('typography')}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                activeTab === 'typography'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Type className="w-3 h-3" />
              <span>Font</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'profile'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'contact'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Phone
            </button>
            <button
              onClick={() => setActiveTab('socials')}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'socials'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Socials
            </button>
          </div>

          {/* TAB: TYPOGRAPHY PRESETS */}
          {activeTab === 'typography' && (
            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Professional Font Set
                </label>
                <p className="text-slate-400 text-[11px] mb-3">
                  Select a refined, high-authority typography system crafted for SEO & AI specialists.
                </p>
              </div>

              <div className="space-y-2.5">
                {fontOptions.map((opt) => {
                  const isSelected = fontPreset === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFontPreset(opt.id);
                        showToast();
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30'
                          : 'bg-slate-950/70 border-white/10 hover:border-white/20 hover:bg-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-bold text-sm text-white"
                            style={{
                              fontFamily:
                                opt.id === 'executive'
                                  ? 'Outfit, sans-serif'
                                  : opt.id === 'enterprise'
                                  ? 'Plus Jakarta Sans, sans-serif'
                                  : opt.id === 'manrope'
                                  ? 'Manrope, sans-serif'
                                  : 'Inter, sans-serif',
                            }}
                          >
                            {opt.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-emerald-400 border border-white/5">
                          Headings: {opt.headingFont}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-300 border border-white/5">
                          Body: {opt.bodyFont}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 1: PROFILE & PHOTO */}
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs">
              {/* Photo Upload Box */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-2 font-bold">
                  Profile Photo
                </label>
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-950 border border-white/5">
                  <img
                    src={personalInfo.profileImage}
                    alt="Preview"
                    className="w-14 h-14 rounded-xl object-cover border border-white/10"
                  />
                  <div className="flex-1">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Upload My Image</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  value={personalInfo.name}
                  onChange={(e) => {
                    updatePersonalInfo({ name: e.target.value });
                    showToast();
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              {/* Professional Title */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Professional Title / Role
                </label>
                <input
                  type="text"
                  value={personalInfo.role}
                  onChange={(e) => {
                    updatePersonalInfo({ role: e.target.value });
                    showToast();
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              {/* Short Intro */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Short Hero Introduction
                </label>
                <textarea
                  rows={3}
                  value={personalInfo.shortIntro}
                  onChange={(e) => {
                    updatePersonalInfo({ shortIntro: e.target.value });
                    showToast();
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500 resize-none"
                ></textarea>
              </div>

              {/* Stats values */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Years Exp
                  </label>
                  <input
                    type="number"
                    value={personalInfo.yearsOfExperience}
                    onChange={(e) => {
                      updatePersonalInfo({ yearsOfExperience: parseInt(e.target.value) || 0 });
                      showToast();
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Growth Rate
                  </label>
                  <input
                    type="text"
                    value={personalInfo.seoGrowthRate}
                    onChange={(e) => {
                      updatePersonalInfo({ seoGrowthRate: e.target.value });
                      showToast();
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTACT DETAILS */}
          {activeTab === 'contact' && (
            <div className="space-y-4 text-xs">
              {/* Phone Number Display */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Phone Number (Formatted for Display)
                </label>
                <input
                  type="text"
                  value={personalInfo.phoneNumber}
                  onChange={(e) => {
                    updatePersonalInfo({
                      phoneNumber: e.target.value,
                      phoneRaw: e.target.value.replace(/[^0-9+]/g, ''),
                    });
                    showToast();
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => {
                    updatePersonalInfo({ email: e.target.value });
                    showToast();
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold">
                  Location
                </label>
                <input
                  type="text"
                  value={personalInfo.location}
                  onChange={(e) => {
                    updatePersonalInfo({ location: e.target.value });
                    showToast();
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          )}

          {/* TAB 3: SOCIAL LINKS */}
          {activeTab === 'socials' && (
            <div className="space-y-3 text-xs">
              {Object.entries(personalInfo.socialLinks).map(([key, val]) => (
                <div key={key}>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1 font-bold capitalize">
                    {key} URL
                  </label>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      updatePersonalInfo({
                        socialLinks: {
                          ...personalInfo.socialLinks,
                          [key]: e.target.value,
                        },
                      });
                      showToast();
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-emerald-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-2.5">
          {saveToast && (
            <div className="py-2 px-3 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs flex items-center justify-center gap-1.5 font-medium animate-in fade-in">
              <Check className="w-3.5 h-3.5" />
              <span>Saved in real-time</span>
            </div>
          )}

          <button
            onClick={() => {
              resetToDefaults();
              showToast();
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Komal Chandro Roy Defaults</span>
          </button>

          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md"
          >
            Done Customizing
          </button>
        </div>
      </div>
    </div>
  );
};
