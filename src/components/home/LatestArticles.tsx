import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BLOG_POSTS } from '../../data/products';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';

export const LatestArticles: React.FC = () => {
  const { navigate } = useShop();

  const tagColors: Record<string, string> = {
    'Buying Guide': 'bg-[#211078] text-white',
    Tips: 'bg-emerald-600 text-white',
    News: 'bg-[#EC078A] text-white'
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#EC078A] rounded-full" />
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
              Latest Updates
            </h2>
            <p className="text-xs text-[#68677A] font-medium hidden sm:block">
              Buying guides, tech tips, and product insights from our gadget technicians.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('/blog')}
          className="text-xs font-bold text-[#EC078A] hover:text-[#D6067C] flex items-center gap-1 cursor-pointer"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of 3 articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => navigate('/blog')}
            className="group bg-white rounded-2xl border border-[#EAE7F1] hover:border-[#EC078A]/40 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Image banner with category badge */}
              <div className="relative aspect-16/9 bg-[#F5F1FF] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider shadow-sm ${
                    tagColors[post.category] || 'bg-[#211078] text-white'
                  }`}
                >
                  {post.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-[#68677A] font-medium mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#17152D] group-hover:text-[#EC078A] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-[#68677A] mt-2 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read More link */}
            <div className="px-5 pb-5 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EC078A] group-hover:translate-x-1 transition-transform">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
