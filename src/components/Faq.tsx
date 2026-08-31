import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Search,
  CheckCircle,
} from 'lucide-react';
import { FaqItem } from '../types';

export const Faq: React.FC = () => {
  const { faqs } = usePortfolio();
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'SEO & Search FAQs' | 'Web Development FAQs'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq: FaqItem) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="faq"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-b border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2
            id="faq-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Clear Answers to Common Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Everything you need to know about SEO rankings, AI answer engine citations (GEO/AEO), local map packs, and working together.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {(['All', 'SEO & Search FAQs', 'Web Development FAQs'] as const).map((cat) => (
              <button
                key={cat}
                id={`faq-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'Web Development FAQs' ? 'Technical & Setup FAQs' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-emerald-500/50 shadow-xl shadow-emerald-500/5'
                    : 'bg-slate-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      ?
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-slate-800 text-slate-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Expanded Content */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                  >
                    <p className="text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
