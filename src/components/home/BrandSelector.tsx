import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BRANDS } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export const BrandSelector: React.FC = () => {
  const { navigate } = useShop();

  // Custom visual brand badges inside the circular container
  const renderBrandIcon = (name: string) => {
    switch (name) {
      case 'Apple':
        return (
          <div className="flex flex-col items-center justify-center text-slate-900">
            <span className="text-xl sm:text-2xl font-black leading-none"></span>
            <span className="text-[9px] sm:text-[10px] font-black tracking-tight mt-0.5">Apple</span>
          </div>
        );
      case 'Samsung':
        return (
          <div className="flex flex-col items-center justify-center text-[#0052FF]">
            <span className="text-[11px] sm:text-xs font-black tracking-tighter leading-tight uppercase font-sans">
              SAMSUNG
            </span>
          </div>
        );
      case 'Hisense':
        return (
          <div className="flex flex-col items-center justify-center text-[#0284C7]">
            <span className="text-[11px] sm:text-xs font-black tracking-tight leading-tight">
              Hisense
            </span>
          </div>
        );
      case 'LG':
        return (
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A50034] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              LG
            </div>
          </div>
        );
      case 'Haier Thermocool':
        return (
          <div className="flex flex-col items-center justify-center text-[#0284C7] leading-tight">
            <span className="text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase text-slate-500">Haier</span>
            <span className="text-[10px] sm:text-[11px] font-black text-[#0052FF]">Thermocool</span>
          </div>
        );
      case 'Scanfrost':
        return (
          <div className="flex flex-col items-center justify-center text-slate-800">
            <span className="text-[10px] sm:text-[11px] font-black tracking-tight uppercase text-blue-900">
              Scanfrost
            </span>
          </div>
        );
      case 'Tecno':
        return (
          <div className="flex flex-col items-center justify-center text-[#0052FF]">
            <span className="text-xs sm:text-sm font-black tracking-tight uppercase">
              TECNO
            </span>
          </div>
        );
      case 'Infinix':
        return (
          <div className="flex flex-col items-center justify-center text-emerald-600">
            <span className="text-[11px] sm:text-xs font-black tracking-tight">
              Infinix
            </span>
          </div>
        );
      case 'itel':
        return (
          <div className="flex flex-col items-center justify-center text-rose-600">
            <span className="text-xs sm:text-sm font-black tracking-tight italic">
              itel
            </span>
          </div>
        );
      case 'Xiaomi':
        return (
          <div className="flex items-center justify-center gap-1">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#FF6900] text-white flex items-center justify-center text-[10px] font-extrabold shadow-xs">
              mi
            </div>
          </div>
        );
      default:
        return (
          <span className="text-xs font-black text-slate-700 uppercase">
            {name}
          </span>
        );
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 sm:pb-5">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-1.5 h-5 bg-[#0052FF] rounded-full" />
          <h2 className="text-sm sm:text-base font-extrabold text-[#0A192F] tracking-tight">
            Shop by Brand
          </h2>
        </div>
        <button
          onClick={() => navigate('/brands')}
          className="text-xs font-bold text-[#0052FF] hover:text-[#003ECC] flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>View All Brands</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Circular, Mobile-Responsive Brand Grid: 5 columns on mobile (2 balanced rows of 5) & 10 columns on desktop */}
      <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-10 gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-5 justify-items-center">
        {BRANDS.map((brand) => (
          <button
            key={brand.id}
            onClick={() => navigate(`/brands/${brand.id}`)}
            className="flex flex-col items-center justify-start text-center cursor-pointer group w-full max-w-[76px] sm:max-w-[90px]"
          >
            {/* Circular Brand Avatar Badge */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-white to-[#F8FAFC] border-2 border-[#DCE6F5] group-hover:border-[#0052FF] shadow-xs group-hover:shadow-md group-hover:scale-108 transition-all duration-300 flex items-center justify-center p-2 overflow-hidden">
              {renderBrandIcon(brand.name)}
            </div>
            {/* Brand Name */}
            <span className="text-[11px] sm:text-xs font-bold text-[#0A192F] group-hover:text-[#0052FF] transition-colors mt-1.5 leading-tight truncate w-full">
              {brand.name}
            </span>
            {/* Device Count */}
            <span className="text-[9px] sm:text-[10px] text-[#64748B] font-medium truncate w-full">
              {brand.count} devices
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
