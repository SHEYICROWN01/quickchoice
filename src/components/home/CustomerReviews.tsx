import React from 'react';
import { useShop } from '../../context/ShopContext';
import { REVIEWS_DATA } from '../../data/products';
import { Star, CheckCircle, ArrowRight, Quote } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const { navigate } = useShop();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#EC078A] rounded-full" />
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-xs text-[#68677A] font-medium hidden sm:block">
              Real experiences from verified smartphone buyers and phone dealers across Nigeria.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('/reviews')}
          className="text-xs font-bold text-[#EC078A] hover:text-[#D6067C] flex items-center gap-1 cursor-pointer"
        >
          <span>View All Reviews</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 border border-[#EAE7F1] hover:border-[#EC078A]/40 hover:shadow-md transition-all flex flex-col justify-between relative group"
          >
            <div>
              {/* Rating stars & verified status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified Buyer
                  </span>
                )}
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-[#17152D] leading-relaxed italic mb-4">
                "{review.comment}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-[#EAE7F1]/80">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#211078] to-[#EC078A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                {review.userName.charAt(0)}
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-[#17152D]">{review.userName}</h4>
                <span className="text-[10px] text-[#68677A] font-medium">{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
