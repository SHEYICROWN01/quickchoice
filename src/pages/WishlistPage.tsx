import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, navigate } = useShop();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      <div className="bg-white border-b border-[#EAE7F1] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#68677A] mb-1">
              <button onClick={() => navigate('/')} className="hover:text-[#EC078A] cursor-pointer">
                Home
              </button>
              <span>&gt;</span>
              <span className="font-bold text-[#17152D]">Saved Items</span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#17152D] tracking-tight">
              My Wishlist ({wishlistedProducts.length})
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
            {wishlistedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-[#EAE7F1] p-10 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#17152D]">Your Wishlist is Empty</h3>
            <p className="text-xs text-[#68677A] leading-relaxed">
              Save your favorite phones and accessories here so you can keep track of deals and price changes.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/phones')}
                className="px-6 py-3 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Browse Phones Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
