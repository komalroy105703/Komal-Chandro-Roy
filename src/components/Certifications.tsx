import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Sparkles,
  CheckCircle,
  Eye,
} from 'lucide-react';
import { CertificateItem } from '../types';

export const Certifications: React.FC = () => {
  const { certifications, setActiveCertificate } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<'All' | 'SEO' | 'Development' | 'Marketing'>('All');

  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'All') return true;
    return cert.category === activeCategory;
  });

  return (
    <section
      id="certifications"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>

          <h2
            id="certifications-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Verified Industry Certifications
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Officially accredited certifications from Google Search Central, SEMrush Academy, Ahrefs, HubSpot, and W3C.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {(['All', 'SEO', 'Development', 'Marketing'] as const).map((cat) => (
              <button
                key={cat}
                id={`cert-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'Development' ? 'Technical & Schemas' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="group relative p-6 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5 mb-5 group-hover:border-emerald-500/20 transition-all">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400">
                    {cert.category}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-emerald-300 transition-colors mb-2 line-clamp-2">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{cert.issuingOrganization}</span>
                </div>

                {/* Skills covered */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-400">
                  ID: <span className="text-slate-300 font-semibold">{cert.certificateId}</span>
                </div>

                <button
                  id={`view-cert-details-${cert.id}`}
                  onClick={() => setActiveCertificate(cert)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
