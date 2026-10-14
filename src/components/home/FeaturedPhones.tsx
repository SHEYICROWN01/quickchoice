import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { ArrowRight } from 'lucide-react';

export const FeaturedPhones: React.FC = () => {
  const { navigate } = useShop();
  const [activeBrandFilter, setActiveBrandFilter] = useState<string>('All');

  const filterTabs = ['All', 'iPhones', 'Samsung', 'Tecno', 'Infinix', 'itel', 'Others'];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeBrandFilter === 'All') return true;
    if (activeBrandFilter === 'iPhones') return product.brand === 'Apple';
    if (activeBrandFilter === 'Samsung') return product.brand === 'Samsung';
    if (activeBrandFilter === 'Tecno') return product.brand === 'Tecno';
    if (activeBrandFilter === 'Infinix') return product.brand === 'Infinix';
    if (activeBrandFilter === 'itel') return product.brand === 'itel';
    if (activeBrandFilter === 'Others') {
      return !['Apple', 'Samsung', 'Tecno', 'Infinix', 'itel'].includes(product.brand);
    }
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#EC078A] rounded-full" />
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
              Featured Phones
            </h2>
            <p className="text-xs text-[#68677A] font-medium hidden sm:block">
              Find the right phone for the way you live, work, and connect.
            </p>
          </div>
        </div>

        {/* Filter Tabs & View All */}
        <div className="flex items-center justify-between md:justify-end gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {filterTabs.map((tab) => {
              const isActive = activeBrandFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveBrandFilter(tab)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#EC078A] text-white shadow-xs'
                      : 'bg-[#F5F1FF] text-[#17152D] hover:bg-[#EAE7F1]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => navigate('/phones')}
            className="text-xs font-bold text-[#EC078A] hover:text-[#D6067C] flex items-center gap-1 shrink-0 ml-auto md:ml-0 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
        {filteredProducts.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
