import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/products';
import { Percent } from 'lucide-react';

export const CategoryStrip: React.FC = () => {
  const { navigate } = useShop();

  const handleCategoryClick = (id: string) => {
    if (id === 'smartphones') {
      navigate('/phones');
    } else if (id === 'deals') {
      navigate('/deals');
    } else if (id === 'accessories') {
      navigate('/accessories');
    } else {
      navigate(`/categories/${id}`);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Category Section Heading */}
      <div className="flex items-center justify-between pb-3 sm:pb-4">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-1.5 h-5 bg-[#EC078A] rounded-full" />
          <h2 className="text-sm sm:text-base font-extrabold text-[#17152D] tracking-tight">
            Shop by Category
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-[#68677A]">
          {CATEGORIES.length} Categories
        </span>
      </div>

      {/* Grid Form: 3 Columns on Mobile (3x3 = 9 balanced items), 9 Columns on Desktop */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          if (cat.isSpecial) {
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="w-full bg-gradient-to-br from-[#EC078A] to-[#D6067C] text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-lg bg-white/20 flex items-center justify-center mb-1.5 group-hover:rotate-6 transition-transform">
                  <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xs font-extrabold text-white truncate max-w-full">
                  Deals
                </span>
                <span className="text-[9px] sm:text-[10px] text-white/90 font-medium truncate max-w-full">
                  Up to 25% Off
                </span>
              </button>
            );
          }

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="w-full bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-[#EAE7F1] hover:border-[#EC078A]/50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center group cursor-pointer shadow-xs"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-lg bg-[#F8F7FA] p-1.5 flex items-center justify-center mb-1.5 group-hover:bg-[#F5F1FF] transition-colors overflow-hidden">
                <img
                  src={cat.image || '/images/hero_smartphones_lineup_1791959963891.jpg'}
                  alt={cat.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-bold text-[#17152D] group-hover:text-[#EC078A] transition-colors truncate max-w-full">
                {cat.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#68677A] font-medium truncate max-w-full">
                {cat.count} items
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
