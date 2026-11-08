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
      <div className="flex items-center justify-between pb-4 sm:pb-5">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-1.5 h-5 bg-[#0052FF] rounded-full" />
          <h2 className="text-sm sm:text-base font-extrabold text-[#0A192F] tracking-tight">
            Shop by Category
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-[#64748B]">
          {CATEGORIES.length} Categories
        </span>
      </div>

      {/* Circular, Mobile-Responsive Grid: 5 columns on mobile (2 balanced rows of 5) & 10 columns on desktop */}
      <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-10 gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-5 justify-items-center">
        {CATEGORIES.map((cat) => {
          if (cat.isSpecial) {
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex flex-col items-center justify-start text-center cursor-pointer group w-full max-w-[76px] sm:max-w-[90px]"
              >
                {/* Circular Deals Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#0052FF] to-[#003ECC] text-white shadow-sm flex items-center justify-center p-2 group-hover:scale-108 group-hover:shadow-md transition-all duration-300 border-2 border-[#0052FF]">
                  <Percent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                {/* Label */}
                <span className="text-[11px] sm:text-xs font-bold text-[#0A192F] group-hover:text-[#0052FF] transition-colors mt-1.5 leading-tight truncate w-full">
                  Deals
                </span>
                {/* Count / Discount */}
                <span className="text-[9px] sm:text-[10px] text-[#0052FF] font-extrabold truncate w-full">
                  Up to 25% Off
                </span>
              </button>
            );
          }

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="flex flex-col items-center justify-start text-center cursor-pointer group w-full max-w-[76px] sm:max-w-[90px]"
            >
              {/* Circular Avatar Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-white to-[#F0F6FF] border-2 border-[#DCE6F5] group-hover:border-[#0052FF] shadow-xs group-hover:shadow-md group-hover:scale-108 transition-all duration-300 flex items-center justify-center p-2 sm:p-2.5 overflow-hidden">
                <img
                  src={cat.image || '/images/hero_smartphones_lineup_1791959963891.jpg'}
                  alt={cat.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-115 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('hero_smartphones_lineup_1791959963891.jpg')) {
                      target.src = '/images/hero_smartphones_lineup_1791959963891.jpg';
                    }
                  }}
                />
              </div>
              {/* Label */}
              <span className="text-[11px] sm:text-xs font-bold text-[#0A192F] group-hover:text-[#0052FF] transition-colors mt-1.5 leading-tight truncate w-full">
                {cat.name}
              </span>
              {/* Count */}
              <span className="text-[9px] sm:text-[10px] text-[#64748B] font-medium truncate w-full">
                {cat.count} items
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
