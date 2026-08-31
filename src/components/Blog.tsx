import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  User,
} from 'lucide-react';
import { BlogPostItem } from '../types';

export const Blog: React.FC = () => {
  const { blogPosts, setActiveBlogPost } = usePortfolio();

  return (
    <section
      id="blog"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Search Insights & Guides</span>
          </div>

          <h2
            id="blog-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Latest Articles & Search Strategies
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            In-depth guides on Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), Google Local 3-Pack rankings, and technical entity data.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPostItem) => (
            <article
              key={post.id}
              id={`blog-post-card-${post.id}`}
              className="group relative rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div>
                {/* Article Header Image */}
                <div
                  onClick={() => setActiveBlogPost(post)}
                  className="cursor-pointer relative h-52 w-full overflow-hidden bg-slate-950"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-400 font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveBlogPost(post)}
                    className="cursor-pointer font-heading font-bold text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors mb-3 line-clamp-2 leading-snug"
                  >
                    {post.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-800 border border-white/5 text-[10px] font-mono text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 border-t border-white/5">
                <button
                  id={`read-article-btn-${post.id}`}
                  onClick={() => setActiveBlogPost(post)}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all group-hover:bg-slate-800/90"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
