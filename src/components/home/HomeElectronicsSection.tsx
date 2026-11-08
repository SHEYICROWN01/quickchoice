import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { Tv, Wind, Refrigerator, ArrowRight, Sparkles } from 'lucide-react';

export const HomeElectronicsSection: React.FC = () => {
  const { navigate } = useShop();
  const [activeTab, setActiveTab] = useState<'all' | 'tvs' | 'refrigerators' | 'appliances'>('all');

  const tabs = [
    { id: 'all', label: 'All Electronics' },
    { id: 'tvs', label: 'Smart TVs' },
    { id: 'refrigerators', label: 'Fridges & Freezers' },
    { id: 'appliances', label: 'Air Conditioners' }
  ];

  const electronicsProducts = PRODUCTS.filter((p) => {
    const isElec = ['electronics', 'tvs', 'refrigerators', 'appliances', 'air-conditioners'].includes(p.category);
    if (!isElec) return false;
    if (activeTab === 'all') return true;
    if (activeTab === 'tvs') return p.category === 'tvs';
    if (activeTab === 'refrigerators') return p.category === 'refrigerators';
    if (activeTab === 'appliances') return p.category === 'appliances' || p.category === 'air-conditioners';
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#0052FF] rounded-full" />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] tracking-tight">
                Electronics &amp; Home Appliances
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold text-[#0052FF] bg-[#E8F2FF] border border-[#C7DCFC] px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-[#0052FF]" /> Genuine Warranty
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-medium hidden sm:block">
              We do not only sell phones! Shop original Smart TVs, deep freezers, inverter fridges &amp; copper ACs.
            </p>
          </div>
        </div>

        {/* Filter Tabs & View All */}
        <div className="flex items-center justify-between md:justify-end gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0052FF] text-white shadow-xs'
                      : 'bg-[#F0F6FF] text-[#0A192F] hover:bg-[#DCE6F5]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => navigate('/categories/electronics')}
            className="text-xs font-bold text-[#0052FF] hover:text-[#003ECC] flex items-center gap-1 shrink-0 ml-auto md:ml-0 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
        {electronicsProducts.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
