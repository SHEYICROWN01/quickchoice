import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Headphones, Building2, ArrowRight } from 'lucide-react';

export const AccessoriesWholesalePanels: React.FC = () => {
  const { navigate } = useShop();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Panel 1: Original Accessories */}
        <div className="bg-[#F8F7FA] rounded-2xl p-6 sm:p-8 border border-[#EAE7F1] flex flex-col justify-between relative overflow-hidden group">
          <div className="max-w-xs space-y-2 relative z-10">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#211078] uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5 text-[#EC078A]" />
              <span>Premium Add-ons</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#17152D]">
              Original Accessories
            </h3>
            <p className="text-xs text-[#68677A] leading-relaxed">
              Chargers · Cables · AirPods · Power Banks · Shockproof Cases &amp; More
            </p>
            <div className="pt-3">
              <button
                onClick={() => navigate('/accessories')}
                className="px-5 py-2.5 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-lg flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Shop Accessories</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EC078A]" />
              </button>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:absolute sm:right-3 sm:bottom-3 sm:top-3 w-full sm:w-1/2 flex items-center justify-end">
            <img
              src="/images/banner_accessories_collection_1791959966326.jpg"
              alt="Original Accessories Collection"
              className="w-full h-40 sm:h-full object-cover rounded-xl shadow-sm group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Panel 2: Wholesale Orders */}
        <div className="bg-gradient-to-br from-[#EC078A] to-[#C90574] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-md">
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-xs space-y-2 relative z-10">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white/90 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-white" />
              <span>Bulk &amp; Dealer Procurement</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Wholesale Orders
            </h3>
            <p className="text-xs text-white/90 leading-relaxed">
              Best prices for retail shops, corporate procurement, and phone dealers across all 36 states.
            </p>
            <div className="pt-3">
              <button
                onClick={() => navigate('/wholesale')}
                className="px-5 py-2.5 bg-white hover:bg-[#F5F1FF] text-[#EC078A] text-xs font-extrabold rounded-lg flex items-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span>Get Wholesale Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:absolute sm:right-3 sm:bottom-3 sm:top-3 w-full sm:w-1/2 flex items-center justify-end">
            <img
              src="/images/hero_smartphones_lineup_1791959963891.jpg"
              alt="Wholesale Smartphone Bundles"
              className="w-full h-40 sm:h-full object-cover rounded-xl shadow-md group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
