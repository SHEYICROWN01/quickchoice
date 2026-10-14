import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, REVIEWS_DATA } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { SellersSpeech } from '../components/product/SellersSpeech';
import { SpecificationTable } from '../components/product/SpecificationTable';
import { ProductCard } from '../components/product/ProductCard';
import {
  Star,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  CreditCard,
  RotateCcw,
  Plus,
  Minus,
  ShoppingCart,
  Zap,
  CheckCircle2,
  Package,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Info
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const { navigate, addToCart, toggleWishlist, isInWishlist, formatNaira, showToast } = useShop();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedStorage, setSelectedStorage] = useState<string>(
    product.defaultStorage || product.storageOptions?.[0] || 'Standard'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.defaultColor || product.colors?.[0]?.name || 'Standard'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'box' | 'reviews' | 'delivery' | 'faqs'>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Sync state if product changes
  useEffect(() => {
    setSelectedStorage(product.defaultStorage || product.storageOptions?.[0] || 'Standard');
    setSelectedColor(product.defaultColor || product.colors?.[0]?.name || 'Standard');
    setQuantity(1);
    setActiveTab('overview');
  }, [product]);

  // Scroll listener for sticky mobile purchase bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWishlisted = isInWishlist(product.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!', 'info');
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedStorage, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedStorage, selectedColor);
    navigate('/checkout');
  };

  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedProductIds?.includes(p.id) || (p.brand === product.brand && p.id !== product.id)
  ).slice(0, 5);

  const faqs = [
    {
      q: 'Is this phone brand new and factory sealed?',
      a: 'Yes, absolutely. All phones sold by Quick Choice Telecommunications are 100% brand new, authentic, and in their original manufacturer sealed boxes with valid serial numbers and verification.'
    },
    {
      q: 'How does nationwide delivery work across Nigeria?',
      a: 'We offer express delivery across all 36 states and the FCT. Same-day delivery is available for orders placed before 1:00 PM within Lagos and Abuja. For other states, delivery typically arrives within 1-3 business days via our insured courier partners.'
    },
    {
      q: 'What warranty is included with my purchase?',
      a: `Every ${product.brand} smartphone comes with official manufacturer warranty coverage (${product.warranty}), backed by authorized service centers nationwide, plus our 7-day store replacement guarantee for any factory faults.`
    },
    {
      q: 'Do you offer bulk wholesale pricing for phone retailers?',
      a: 'Yes! Quick Choice is one of the largest wholesalers in Computer Village, Ikeja. We provide special carton rates and wholesale price lists for phone dealers, retailers, and corporate buyers. Click "Request Bulk Price" or visit our Wholesale page.'
    }
  ];

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#EAE7F1] py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#68677A] overflow-x-auto no-scrollbar">
          <button onClick={() => navigate('/')} className="hover:text-[#EC078A] transition-colors cursor-pointer">
            Home
          </button>
          <span>&gt;</span>
          <button onClick={() => navigate('/phones')} className="hover:text-[#EC078A] transition-colors cursor-pointer">
            Phones
          </button>
          <span>&gt;</span>
          <button onClick={() => navigate(`/brands/${product.brand}`)} className="hover:text-[#EC078A] transition-colors cursor-pointer">
            {product.brand}
          </button>
          <span>&gt;</span>
          <span className="font-bold text-[#17152D] truncate">{product.name}</span>
        </div>
      </div>

      {/* Main PDP Grid: 3 columns on large desktop matching mockup 4 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="lg:col-span-5">
            <ProductGallery
              images={product.images}
              productName={product.name}
              officialBadge={product.officialBadge}
              tag={product.tag}
            />
          </div>

          {/* Center Column: Product Configuration & Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Brand + Warranty badge row */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#211078] bg-[#F5F1FF] px-2.5 py-1 rounded-md">
                  {product.brand}
                </span>
                <span className="text-[11px] font-bold text-[#EC078A] bg-[#FFF0F8] border border-[#F9D6EA] px-2 py-0.5 rounded-full">
                  Official Warranty
                </span>
              </div>

              {/* Wishlist & Share actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2 rounded-full border transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#FFF0F8] border-[#EC078A] text-[#EC078A]'
                      : 'bg-white border-[#EAE7F1] text-[#68677A] hover:text-[#EC078A]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#EC078A]' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full border border-[#EAE7F1] bg-white text-[#68677A] hover:text-[#211078] transition-colors cursor-pointer"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & Storage/Color summary */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17152D] tracking-tight">
                {product.name}
              </h1>
              <p className="text-xs text-[#68677A] font-semibold mt-1">
                {selectedStorage} | {selectedColor}
              </p>

              {/* Ratings and sold count */}
              <div className="flex items-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-[#17152D]">{product.rating}</span>
                </div>
                <span className="text-[#68677A]">({product.reviewCount} reviews)</span>
                <span className="text-[#68677A]">|</span>
                <span className="text-emerald-600 font-bold">Sold: {product.soldCount || 250}+</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-white p-4 rounded-xl border border-[#EAE7F1] space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-[#211078] tabular-nums">
                  {formatNaira(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#68677A] line-through tabular-nums">
                    {formatNaira(product.originalPrice)}
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="bg-[#EC078A] text-white text-[11px] font-extrabold px-2 py-0.5 rounded">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {product.specialOffer && (
                <div className="bg-[#FFF0F8] border border-[#F9D6EA] p-2.5 rounded-lg text-xs font-semibold text-[#EC078A] flex items-center gap-2">
                  <span>{product.specialOffer}</span>
                </div>
              )}
            </div>

            {/* Storage Selection */}
            {product.storageOptions && product.storageOptions.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-[#17152D] mb-2">
                  Storage Capacity: <span className="text-[#EC078A]">{selectedStorage}</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.storageOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedStorage(opt)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        selectedStorage === opt
                          ? 'border-[#EC078A] bg-[#FFF0F8] text-[#EC078A] shadow-xs ring-1 ring-[#EC078A]'
                          : 'border-[#EAE7F1] bg-white text-[#17152D] hover:border-[#211078]/40'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-[#17152D] mb-2">
                  Color: <span className="text-[#EC078A]">{selectedColor}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'border-[#EC078A] bg-[#FFF0F8] ring-1 ring-[#EC078A]'
                            : 'border-[#EAE7F1] bg-white hover:border-[#211078]/30'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-[10px] font-bold text-[#17152D] truncate w-full">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Purchase Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#EAE7F1] bg-white rounded-xl overflow-hidden shrink-0">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2.5 hover:bg-[#F5F1FF] text-[#17152D] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-extrabold text-[#17152D] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2.5 hover:bg-[#F5F1FF] text-[#17152D] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Stock Status Indicator */}
                <div className="text-xs">
                  {product.inStock ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      In Stock ({product.stockCount} units available)
                    </span>
                  ) : (
                    <span className="text-rose-600 font-bold">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Main Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="py-3.5 px-4 bg-[#EC078A] hover:bg-[#D6067C] active:scale-98 text-white text-xs font-extrabold rounded-xl shadow-md shadow-[#EC078A]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3.5 px-4 bg-[#211078] hover:bg-[#14094B] active:scale-98 text-white text-xs font-extrabold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-[#EC078A]" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* 4 Trust Assurances */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE7F1]">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#EAE7F1] text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#EC078A] shrink-0" />
                <span className="font-semibold text-[#17152D]">100% Original</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#EAE7F1] text-[11px]">
                <Truck className="w-4 h-4 text-[#EC078A] shrink-0" />
                <span className="font-semibold text-[#17152D]">1-3 Days Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#EAE7F1] text-[11px]">
                <CreditCard className="w-4 h-4 text-[#EC078A] shrink-0" />
                <span className="font-semibold text-[#17152D]">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#EAE7F1] text-[11px]">
                <RotateCcw className="w-4 h-4 text-[#EC078A] shrink-0" />
                <span className="font-semibold text-[#17152D]">7 Days Return</span>
              </div>
            </div>
          </div>

          {/* Right Column: Seller's Speech + Box & Delivery cards (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            {/* The Seller's Speech Component */}
            <SellersSpeech
              productName={product.name}
              brand={product.brand}
              customData={product.sellersSpeech}
            />

            {/* What's in the Box Card */}
            <div className="bg-white rounded-2xl border border-[#EAE7F1] p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 pb-1 border-b border-[#EAE7F1]">
                <Package className="w-4 h-4 text-[#211078]" />
                <h4 className="text-xs font-bold text-[#17152D] uppercase tracking-wider">
                  What's in the Box?
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {product.boxContents.map((item, idx) => (
                  <div key={idx} className="bg-[#F8F7FA] p-2.5 rounded-lg text-center">
                    <span className="text-[11px] font-bold text-[#17152D] block">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery & Returns Info Card */}
            <div className="bg-white rounded-2xl border border-[#EAE7F1] p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 pb-1 border-b border-[#EAE7F1]">
                <Truck className="w-4 h-4 text-[#211078]" />
                <h4 className="text-xs font-bold text-[#17152D] uppercase tracking-wider">
                  Delivery &amp; Returns
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#68677A]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nationwide Delivery:</strong> 1-3 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Free Delivery:</strong> On orders above ₦200,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Easy Returns:</strong> 7 days warranty exchange</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs Section */}
        <section className="mt-16 bg-white rounded-2xl border border-[#EAE7F1] shadow-xs overflow-hidden">
          {/* Tabs bar */}
          <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 border-b border-[#EAE7F1] overflow-x-auto no-scrollbar bg-[#FDFBFE]">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'box', label: "What's in the Box" },
              { id: 'reviews', label: `Reviews (${product.reviewCount})` },
              { id: 'delivery', label: 'Delivery & Returns' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3.5 px-3 sm:px-4 text-xs font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#EC078A] text-[#EC078A]'
                      : 'border-transparent text-[#68677A] hover:text-[#17152D]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Areas */}
          <div className="p-6 sm:p-8">
            {/* 1. Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#17152D] mb-2">
                    Product Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68677A] leading-relaxed max-w-4xl">
                    {product.fullDescription}
                  </p>
                </div>

                {/* 4 Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8F7FA] p-5 rounded-xl border border-[#EAE7F1] space-y-1.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center font-bold">
                        ★
                      </div>
                      <h4 className="text-xs font-bold text-[#17152D]">{feat.title}</h4>
                      <p className="text-[11px] text-[#68677A] leading-relaxed font-medium">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Promotional banner inside overview */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#170B49] to-[#2B0E68] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 max-w-md">
                    <span className="text-[11px] font-bold text-[#EC078A] uppercase tracking-wider">
                      Flagship Performance
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black">
                      {product.name}
                    </h3>
                    <p className="text-xs text-white/80">
                      Bigger Possibilities. Brighter Everyday. Available now with nationwide express shipping.
                    </p>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="px-6 py-3 bg-[#EC078A] hover:bg-[#D6067C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
                  >
                    Add to Cart Now
                  </button>
                </div>
              </div>
            )}

            {/* 2. Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-black text-[#17152D]">
                  Detailed Specifications
                </h3>
                <SpecificationTable specifications={product.specifications} />
              </div>
            )}

            {/* 3. What's in the Box Tab */}
            {activeTab === 'box' && (
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-base sm:text-lg font-black text-[#17152D]">
                  Items Included in the Packaging
                </h3>
                <div className="divide-y divide-[#EAE7F1] border border-[#EAE7F1] rounded-xl overflow-hidden bg-white">
                  {product.boxContents.map((item, idx) => (
                    <div key={idx} className="p-4 flex items-center gap-3 text-xs font-bold text-[#17152D]">
                      <CheckCircle2 className="w-4 h-4 text-[#EC078A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE7F1]">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#17152D]">
                      Customer Ratings &amp; Reviews
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#17152D]">{product.rating} out of 5</span>
                      <span className="text-xs text-[#68677A]">({product.reviewCount} customer reviews)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => showToast('Review submission modal opened (Demo mode)', 'info')}
                    className="px-4 py-2 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    Write a Review
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {REVIEWS_DATA.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-xl border border-[#EAE7F1] bg-[#FDFBFE] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-[#68677A]">{rev.date}</span>
                      </div>
                      <p className="text-xs text-[#17152D] leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                      <div className="text-[11px] font-bold text-[#211078] flex items-center gap-1.5">
                        <span>{rev.userName}</span>
                        {rev.verified && (
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Delivery & Returns Tab */}
            {activeTab === 'delivery' && (
              <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-[#68677A] leading-relaxed">
                <h3 className="text-base sm:text-lg font-black text-[#17152D]">
                  Shipping Policies &amp; Return Guidelines
                </h3>
                <p>
                  At Quick Choice Telecommunications, orders are fulfilled with speed and full transit insurance. We partner with leading courier carriers to ensure safe delivery across Nigeria.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-[#EAE7F1] bg-[#F8F7FA]">
                    <h4 className="font-bold text-[#211078] mb-1">Lagos &amp; Abuja Metro</h4>
                    <p className="text-xs">Same-day delivery available for orders placed before 1:00 PM. Standard doorstep delivery in 24 hours.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#EAE7F1] bg-[#F8F7FA]">
                    <h4 className="font-bold text-[#211078] mb-1">Other States Across Nigeria</h4>
                    <p className="text-xs">Dispatched via air &amp; ground express. Estimated arrival within 1 to 3 business days with SMS tracking.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. FAQs Tab */}
            {activeTab === 'faqs' && (
              <div className="space-y-3 max-w-3xl">
                <h3 className="text-base sm:text-lg font-black text-[#17152D] mb-4">
                  Frequently Asked Questions
                </h3>
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#EAE7F1] rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left p-4 text-xs font-bold text-[#17152D] hover:bg-[#F5F1FF] flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#EC078A]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-[#68677A] leading-relaxed border-t border-[#EAE7F1]/60 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* You May Also Like Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#EC078A] rounded-full" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
                You May Also Like
              </h2>
            </div>
            <button
              onClick={() => navigate('/phones')}
              className="text-xs font-bold text-[#EC078A] hover:text-[#D6067C] flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Mobile Purchase Bar */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#EAE7F1] p-3 z-40 shadow-xl flex items-center justify-between gap-3">
          <div className="leading-tight">
            <span className="text-xs font-bold text-[#17152D] block truncate max-w-[160px]">
              {product.name}
            </span>
            <span className="text-sm font-extrabold text-[#211078] tabular-nums">
              {formatNaira(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2.5 bg-[#EC078A] hover:bg-[#D6067C] active:scale-95 text-white text-xs font-bold rounded-lg shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleBuyNow}
              className="px-4 py-2.5 bg-[#211078] text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
