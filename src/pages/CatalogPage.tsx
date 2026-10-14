import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, BRANDS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Product, FilterOptions } from '../types';
import { Filter, SlidersHorizontal, X, RotateCcw, ArrowUpDown, ChevronDown } from 'lucide-react';

interface CatalogPageProps {
  initialCategory?: string;
  initialBrand?: string;
  isDeals?: boolean;
  isNewArrivals?: boolean;
  isAccessories?: boolean;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  initialCategory,
  initialBrand,
  isDeals,
  isNewArrivals,
  isAccessories
}) => {
  const { searchQuery, setSearchQuery, navigate, formatNaira } = useShop();

  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand || 'All');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || (isAccessories ? 'accessories' : 'All')
  );
  const [maxPrice, setMaxPrice] = useState<number>(2500000);
  const [selectedStorage, setSelectedStorage] = useState<string>('All');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Compute page heading
  const pageTitle = useMemo(() => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (isDeals) return 'Exclusive Deals & Discounts';
    if (isNewArrivals) return 'New Smartphone Arrivals';
    if (isAccessories) return 'Original Phone Accessories';
    if (selectedBrand !== 'All') return `${selectedBrand} Smartphones & Devices`;
    if (selectedCategory !== 'All') {
      const cat = CATEGORIES.find((c) => c.id === selectedCategory);
      return cat ? `${cat.name} Collection` : 'Phone Catalog';
    }
    return 'All Smartphones & Devices';
  }, [searchQuery, isDeals, isNewArrivals, isAccessories, selectedBrand, selectedCategory]);

  const storageOptionsList = ['All', '128GB', '256GB', '512GB', '1TB'];

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Deals flag
      if (isDeals && !product.discountPercentage) {
        return false;
      }

      // New arrivals flag
      if (isNewArrivals && !product.isNewArrival) {
        return false;
      }

      // Category filter
      if (isAccessories && product.category !== 'accessories') {
        return false;
      }
      if (selectedCategory !== 'All' && !isAccessories) {
        if (selectedCategory === 'smartphones' && product.category !== 'smartphones') return false;
        if (selectedCategory === 'tablets' && product.category !== 'tablets') return false;
        if (selectedCategory === 'accessories' && product.category !== 'accessories') return false;
        if (selectedCategory === 'iphones' && product.brand !== 'Apple') return false;
        if (selectedCategory === 'samsung' && product.brand !== 'Samsung') return false;
        if (selectedCategory === 'tecno' && product.brand !== 'Tecno') return false;
        if (selectedCategory === 'infinix' && product.brand !== 'Infinix') return false;
        if (selectedCategory === 'itel' && product.brand !== 'itel') return false;
      }

      // Brand filter
      if (selectedBrand !== 'All') {
        if (selectedBrand === 'Others') {
          if (['Apple', 'Samsung', 'Tecno', 'Infinix', 'itel'].includes(product.brand)) return false;
        } else if (product.brand !== selectedBrand) {
          return false;
        }
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      // Storage filter
      if (selectedStorage !== 'All') {
        if (!product.storageOptions?.includes(selectedStorage)) {
          return false;
        }
      }

      // In stock
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0; // default featured order
    });
  }, [
    searchQuery,
    isDeals,
    isNewArrivals,
    isAccessories,
    selectedCategory,
    selectedBrand,
    maxPrice,
    selectedStorage,
    inStockOnly,
    sortBy
  ]);

  const resetFilters = () => {
    setSelectedBrand('All');
    setSelectedCategory('All');
    setMaxPrice(2500000);
    setSelectedStorage('All');
    setInStockOnly(false);
    setSortBy('featured');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedBrand !== 'All' ||
    selectedCategory !== 'All' ||
    maxPrice < 2500000 ||
    selectedStorage !== 'All' ||
    inStockOnly ||
    searchQuery !== '';

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Header & Breadcrumbs */}
      <div className="bg-white border-b border-[#EAE7F1] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-1">
          <div className="flex items-center gap-2 text-xs text-[#68677A]">
            <button onClick={() => navigate('/')} className="hover:text-[#EC078A] cursor-pointer">
              Home
            </button>
            <span>&gt;</span>
            <span className="font-bold text-[#17152D]">{pageTitle}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
                {pageTitle}
              </h1>
              <p className="text-xs text-[#68677A] font-medium">
                Showing {filteredProducts.length} devices available for retail and wholesale
              </p>
            </div>

            {/* Mobile Filter Trigger & Sort Dropdown */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden px-3.5 py-2 bg-white border border-[#EAE7F1] rounded-lg text-xs font-bold text-[#17152D] flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Filter className="w-3.5 h-3.5 text-[#EC078A]" />
                <span>Filters {hasActiveFilters ? '•' : ''}</span>
              </button>

              <div className="flex items-center gap-2 bg-white border border-[#EAE7F1] px-3 py-1.5 rounded-lg shadow-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#68677A]" />
                <span className="text-[11px] font-bold text-[#68677A]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs font-bold text-[#17152D] bg-transparent outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-5 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-6 sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE7F1]">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#17152D] uppercase tracking-wider">
                <SlidersHorizontal className="w-4 h-4 text-[#EC078A]" />
                <span>Filter Products</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] font-bold text-[#EC078A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Brand Filter */}
            <div>
              <h4 className="text-xs font-bold text-[#17152D] mb-2.5">Brand</h4>
              <div className="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
                <button
                  onClick={() => setSelectedBrand('All')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    selectedBrand === 'All'
                      ? 'bg-[#FFF0F8] text-[#EC078A]'
                      : 'text-[#68677A] hover:bg-[#F5F1FF]'
                  }`}
                >
                  <span>All Brands</span>
                  <span>{PRODUCTS.length}</span>
                </button>
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBrand(b.name)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      selectedBrand === b.name
                        ? 'bg-[#FFF0F8] text-[#EC078A]'
                        : 'text-[#68677A] hover:bg-[#F5F1FF]'
                    }`}
                  >
                    <span>{b.name}</span>
                    <span>{b.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="border-t border-[#EAE7F1] pt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-[#17152D]">Max Price</h4>
                <span className="text-xs font-bold text-[#211078] tabular-nums">
                  {formatNaira(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="2500000"
                step="50000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#EC078A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#68677A] font-medium mt-1">
                <span>₦50k</span>
                <span>₦2.5M+</span>
              </div>
            </div>

            {/* Storage Filter */}
            <div className="border-t border-[#EAE7F1] pt-4">
              <h4 className="text-xs font-bold text-[#17152D] mb-2">Storage Capacity</h4>
              <div className="flex flex-wrap gap-1.5">
                {storageOptionsList.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStorage(st)}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      selectedStorage === st
                        ? 'bg-[#EC078A] text-white'
                        : 'bg-[#F8F7FA] text-[#68677A] hover:bg-[#EAE7F1]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* In Stock Toggle */}
            <div className="border-t border-[#EAE7F1] pt-4 flex items-center justify-between">
              <label htmlFor="instock" className="text-xs font-bold text-[#17152D] cursor-pointer">
                In Stock Only
              </label>
              <input
                id="instock"
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-[#EC078A] rounded cursor-pointer"
              />
            </div>
          </aside>

          {/* Product Grid Area (9 cols) */}
          <main className="lg:col-span-9 space-y-6">
            {/* Active Filter Badges */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 flex-wrap pb-2">
                <span className="text-xs font-bold text-[#68677A]">Active Filters:</span>
                {selectedBrand !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-[#FFF0F8] text-[#EC078A] px-2.5 py-0.5 rounded-full font-semibold border border-[#F9D6EA]">
                    Brand: {selectedBrand}
                    <button onClick={() => setSelectedBrand('All')} className="cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedStorage !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-[#FFF0F8] text-[#EC078A] px-2.5 py-0.5 rounded-full font-semibold border border-[#F9D6EA]">
                    Storage: {selectedStorage}
                    <button onClick={() => setSelectedStorage('All')} className="cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {maxPrice < 2500000 && (
                  <span className="inline-flex items-center gap-1 text-xs bg-[#FFF0F8] text-[#EC078A] px-2.5 py-0.5 rounded-full font-semibold border border-[#F9D6EA]">
                    Up to {formatNaira(maxPrice)}
                    <button onClick={() => setMaxPrice(2500000)} className="cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 text-xs bg-[#FFF0F8] text-[#EC078A] px-2.5 py-0.5 rounded-full font-semibold border border-[#F9D6EA]">
                    Query: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#211078] font-bold hover:underline ml-2 cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                {filteredProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl border border-[#EAE7F1] p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center mx-auto text-2xl font-black">
                  🔍
                </div>
                <h3 className="text-lg font-extrabold text-[#17152D]">
                  No Matching Phones or Products Found
                </h3>
                <p className="text-xs text-[#68677A] max-w-sm mx-auto leading-relaxed">
                  Try adjusting your search terms, changing the maximum price filter, or clearing selected brands.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl cursor-pointer transition-colors inline-block"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Slide-over Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE7F1]">
                <h3 className="text-sm font-extrabold text-[#17152D]">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                  <X className="w-5 h-5 text-[#68677A]" />
                </button>
              </div>

              {/* Brand */}
              <div>
                <h4 className="text-xs font-bold text-[#17152D] mb-2">Brand</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedBrand('All')}
                    className={`p-2 rounded text-xs font-bold ${
                      selectedBrand === 'All' ? 'bg-[#EC078A] text-white' : 'bg-[#F5F1FF]'
                    }`}
                  >
                    All
                  </button>
                  {BRANDS.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(b.name)}
                      className={`p-2 rounded text-xs font-bold ${
                        selectedBrand === b.name ? 'bg-[#EC078A] text-white' : 'bg-[#F5F1FF]'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs font-bold text-[#17152D] mb-1">
                  Max Price: {formatNaira(maxPrice)}
                </h4>
                <input
                  type="range"
                  min="50000"
                  max="2500000"
                  step="50000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#EC078A]"
                />
              </div>

              {/* Storage */}
              <div>
                <h4 className="text-xs font-bold text-[#17152D] mb-2">Storage</h4>
                <div className="flex flex-wrap gap-2">
                  {storageOptionsList.map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStorage(st)}
                      className={`px-3 py-1.5 rounded text-xs font-bold ${
                        selectedStorage === st ? 'bg-[#EC078A] text-white' : 'bg-[#F5F1FF]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7F1] flex gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 py-2.5 bg-[#F5F1FF] text-xs font-bold text-[#17152D] rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-[#EC078A] text-xs font-bold text-white rounded-xl"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
