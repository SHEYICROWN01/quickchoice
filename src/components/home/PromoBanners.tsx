import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export const PromoBanners: React.FC = () => {
  const { navigate } = useShop();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1: iPhone 16 Series */}
        <div
          onClick={() => navigate('/brands/Apple')}
          className="group relative bg-[#FFF0F8] rounded-2xl p-6 sm:p-8 border border-[#F9D6EA] overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all duration-300"
        >
          <div className="relative z-10 max-w-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#EC078A] uppercase tracking-wider">
              <span></span>
              <span>iPhone 16 Series</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#17152D] leading-tight">
              Bigger Possibilities. <br />Brighter Everyday.
            </h3>
            <p className="text-xs text-[#68677A] leading-relaxed">
              Super Retina XDR, A18 Pro chip, Grade 5 Titanium design.
            </p>
            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#EC078A] text-[#EC078A] hover:text-white text-xs font-bold rounded-lg border border-[#EC078A]/30 shadow-xs transition-colors">
                <span>Shop iPhones</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Product Image Placement */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:right-2 sm:bottom-2 sm:top-2 w-full sm:w-1/2 flex items-center justify-end">
            <img
              src="/images/banner_iphone_16_series_1791959964767.jpg"
              alt="iPhone 16 Series"
              className="w-full h-44 sm:h-full object-cover rounded-xl group-hover:scale-103 transition-transform duration-500 shadow-md"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('hero_smartphones_lineup_1791959963891.jpg')) {
                  target.src = '/images/hero_smartphones_lineup_1791959963891.jpg';
                }
              }}
            />
          </div>
        </div>

        {/* Banner 2: Samsung Galaxy S25 Series */}
        <div
          onClick={() => navigate('/brands/Samsung')}
          className="group relative bg-gradient-to-br from-[#1C0D63] to-[#2B1078] text-white rounded-2xl p-6 sm:p-8 border border-[#211078] overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all duration-300"
        >
          {/* Subtle neon glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#EC078A]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#EC078A] uppercase tracking-wider">
              <span>SAMSUNG</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Galaxy S25 Series
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              AI for a Smarter Tomorrow. 200MP Quad Cam &amp; Snapdragon 8 Elite.
            </p>
            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EC078A] hover:bg-[#D6067C] text-white text-xs font-bold rounded-lg shadow-sm transition-colors">
                <span>Shop Samsung</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Product Image Placement */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:right-2 sm:bottom-2 sm:top-2 w-full sm:w-1/2 flex items-center justify-end">
            <img
              src="/images/banner_samsung_galaxy_s25_1791959964904.jpg"
              alt="Samsung Galaxy S25 Series"
              className="w-full h-44 sm:h-full object-cover rounded-xl group-hover:scale-103 transition-transform duration-500 shadow-md"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('hero_smartphones_lineup_1791959963891.jpg')) {
                  target.src = '/images/hero_smartphones_lineup_1791959963891.jpg';
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
