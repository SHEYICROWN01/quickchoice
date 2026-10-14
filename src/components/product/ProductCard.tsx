import React from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, Star, ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigate, addToCart, toggleWishlist, isInWishlist, formatNaira } = useShop();
  const isWishlisted = isInWishlist(product.id);

  const handleCardClick = (e: React.MouseEvent) => {
    // don't trigger if user clicked button
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;
    navigate(`/phones/${product.slug}`);
  };

  const badgeColor = () => {
    if (product.tag === 'New') return 'bg-emerald-500 text-white';
    if (product.tag === 'Hot') return 'bg-rose-500 text-white';
    if (product.tag?.includes('OFF')) return 'bg-[#EC078A] text-white';
    return 'bg-[#211078] text-white';
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl border border-[#EAE7F1] hover:border-[#EC078A]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer relative"
    >
      {/* Top Media Container */}
      <div className="relative w-full aspect-square bg-[#F8F7FA] p-4 flex items-center justify-center overflow-hidden">
        {/* Tag Badge */}
        {product.tag && (
          <span
            className={`absolute top-2.5 left-2.5 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide z-10 ${badgeColor()}`}
          >
            {product.tag}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-[#FFF0F8] text-[#EC078A] shadow-sm'
              : 'bg-white/80 hover:bg-white text-[#68677A] hover:text-[#EC078A] shadow-xs'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'fill-[#EC078A] text-[#EC078A]' : ''
            }`}
          />
        </button>

        {/* Product Image */}
        <img
          src={product.images[0]?.url || '/images/hero_smartphones_lineup_1791959963891.jpg'}
          alt={product.images[0]?.alt || product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Information Container */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          {/* Brand & Storage Kicker */}
          <div className="flex items-center justify-between text-[11px] text-[#68677A] font-semibold mb-1">
            <span>{product.brand}</span>
            {product.defaultStorage && (
              <span className="text-[#211078] bg-[#F5F1FF] px-1.5 py-0.2 rounded font-bold">
                {product.defaultStorage}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="text-xs sm:text-sm font-bold text-[#17152D] line-clamp-1 group-hover:text-[#EC078A] transition-colors">
            {product.name}
          </h3>

          {/* Price Row */}
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-extrabold text-[#211078] tabular-nums">
              {formatNaira(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#68677A] line-through tabular-nums">
                {formatNaira(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Ratings & Review Count */}
          <div className="mt-1 flex items-center gap-1.5 text-xs text-[#68677A]">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-bold text-[#17152D] text-[11px]">{product.rating}</span>
            <span className="text-[11px]">({product.reviewCount})</span>
            {product.soldCount && (
              <span className="hidden sm:inline text-[10px] text-emerald-600 font-medium ml-auto">
                {product.soldCount}+ sold
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1);
          }}
          className="w-full mt-2 py-2 px-3 bg-[#211078] hover:bg-[#EC078A] active:scale-[0.99] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
