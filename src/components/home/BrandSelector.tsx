import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BRANDS } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export const BrandSelector: React.FC = () => {
  const { navigate } = useShop();

  const brandLogos: Record<string, string> = {
    Apple: ' Apple',
    Samsung: 'SAMSUNG',
    Tecno: 'TECNO',
    Infinix: 'Infinix',
    itel: 'itel',
    Xiaomi: 'mi Xiaomi',
    Google: 'G Google',
    Others: '••• Others'
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#EC078A] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
            Shop by Brand
          </h2>
        </div>
        <button
          onClick={() => navigate('/brands')}
          className="text-xs font-bold text-[#EC078A] hover:text-[#D6067C] flex items-center gap-1 cursor-pointer"
        >
          <span>View All Brands</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {BRANDS.map((brand) => (
          <button
            key={brand.id}
            onClick={() => navigate(`/brands/${brand.id}`)}
            className="bg-white rounded-xl p-4 border border-[#EAE7F1] hover:border-[#EC078A]/40 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group cursor-pointer aspect-4/3"
          >
            <span className="text-sm font-extrabold text-[#17152D] group-hover:text-[#EC078A] transition-colors tracking-tight">
              {brandLogos[brand.name] || brand.name}
            </span>
            <span className="text-[10px] text-[#68677A] font-medium mt-1">
              {brand.count} devices
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
