import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    formatNaira,
    navigate,
    showToast
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const deliveryThreshold = 200000;
  const isFreeDelivery = cartTotal >= deliveryThreshold;
  const deliveryFee = cartTotal > 0 ? (isFreeDelivery ? 0 : 5000) : 0;
  const discountAmount = discountApplied ? Math.round(cartTotal * 0.05) : 0;
  const grandTotal = cartTotal - discountAmount + deliveryFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'QUICKCHOICE' || promoCode.trim().toUpperCase() === 'LAGOS') {
      setDiscountApplied(true);
      showToast('Promo code applied! 5% discount added.', 'success');
    } else {
      showToast('Invalid promo code. Try "QUICKCHOICE"', 'error');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#FAF9FC] min-h-screen py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-[#EAE7F1] p-8 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-extrabold text-[#17152D]">Your Cart is Empty</h2>
          <p className="text-xs text-[#68677A] leading-relaxed">
            Explore our wide collection of original smartphones, iPhones, Samsung, and accessories with nationwide delivery.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/phones')}
              className="px-6 py-3 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b border-[#EAE7F1] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#68677A] mb-1">
              <button onClick={() => navigate('/')} className="hover:text-[#EC078A] cursor-pointer">
                Home
              </button>
              <span>&gt;</span>
              <span className="font-bold text-[#17152D]">Shopping Cart</span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#17152D] tracking-tight">
              Your Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h1>
          </div>

          <button
            onClick={clearCart}
            className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Itemized List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Free Delivery Banner */}
            <div className={`p-3.5 rounded-xl border text-xs font-medium flex items-center gap-3 ${
              isFreeDelivery
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-[#FFF0F8] border-[#F9D6EA] text-[#EC078A]'
            }`}>
              <Truck className="w-5 h-5 shrink-0" />
              {isFreeDelivery ? (
                <span>🎉 <strong>Free Delivery Unlocked!</strong> Your order qualifies for free delivery across Nigeria.</span>
              ) : (
                <span>Add <strong>{formatNaira(deliveryThreshold - cartTotal)}</strong> more to qualify for <strong>FREE Delivery</strong>!</span>
              )}
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-2xl border border-[#EAE7F1] overflow-hidden shadow-xs divide-y divide-[#EAE7F1]">
              {cart.map((item) => (
                <div key={item.id} className="p-3.5 sm:p-5 flex flex-row gap-3 sm:gap-4 items-center">
                  {/* Thumbnail */}
                  <div
                    onClick={() => navigate(`/phones/${item.product.slug}`)}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F8F7FA] rounded-xl p-2 border border-[#EAE7F1] shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={item.product.images[0]?.url}
                      alt={item.product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 text-left">
                    <button
                      onClick={() => navigate(`/phones/${item.product.slug}`)}
                      className="text-xs sm:text-sm font-bold text-[#17152D] hover:text-[#EC078A] transition-colors cursor-pointer text-left line-clamp-1 block"
                    >
                      {item.product.name}
                    </button>
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] text-[#68677A] mt-0.5">
                      {item.selectedStorage && (
                        <span className="bg-[#F5F1FF] text-[#211078] px-1.5 py-0.2 rounded font-semibold">
                          {item.selectedStorage}
                        </span>
                      )}
                      {item.selectedColor && (
                        <span>Color: <strong>{item.selectedColor}</strong></span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-[#211078] tabular-nums mt-1 sm:hidden">
                      {formatNaira(item.unitPrice * item.quantity)}
                    </div>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center border border-[#EAE7F1] rounded-lg overflow-hidden bg-[#FAF9FC] shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 sm:p-1.5 hover:bg-[#EAE7F1] text-[#17152D] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                    <span className="px-2 sm:px-3 text-xs font-bold text-[#17152D] tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 sm:p-1.5 hover:bg-[#EAE7F1] text-[#17152D] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>

                  {/* Subtotal (Desktop) */}
                  <div className="text-right hidden sm:block min-w-28 shrink-0">
                    <span className="text-sm font-black text-[#211078] block tabular-nums">
                      {formatNaira(item.unitPrice * item.quantity)}
                    </span>
                    <span className="text-[10px] text-[#68677A]">
                      {formatNaira(item.unitPrice)} each
                    </span>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 sm:p-2 text-[#68677A] hover:text-rose-600 transition-colors cursor-pointer shrink-0"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Continue shopping link */}
            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => navigate('/phones')}
                className="text-xs font-bold text-[#211078] hover:text-[#EC078A] transition-colors cursor-pointer"
              >
                ← Continue Shopping
              </button>
            </div>
          </div>

          {/* Order Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#EAE7F1] p-6 shadow-xs space-y-5 sticky top-24">
            <h3 className="text-sm font-extrabold text-[#17152D] uppercase tracking-wider pb-3 border-b border-[#EAE7F1]">
              Order Summary
            </h3>

            {/* Calculations */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-[#68677A]">
                <span>Items Subtotal</span>
                <span className="font-bold text-[#17152D] tabular-nums">{formatNaira(cartTotal)}</span>
              </div>

              {discountApplied && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Discount (5%)</span>
                  <span className="tabular-nums">-{formatNaira(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between text-[#68677A]">
                <span>Estimated Delivery</span>
                <span className="font-bold text-[#17152D] tabular-nums">
                  {deliveryFee === 0 ? 'FREE' : formatNaira(deliveryFee)}
                </span>
              </div>

              <div className="pt-3 border-t border-[#EAE7F1] flex justify-between items-baseline">
                <span className="text-sm font-extrabold text-[#17152D]">Total</span>
                <span className="text-xl font-black text-[#211078] tabular-nums">
                  {formatNaira(grandTotal)}
                </span>
              </div>
            </div>

            {/* Coupon input */}
            <form onSubmit={handleApplyCoupon} className="pt-2 flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (e.g. QUICKCHOICE)"
                className="flex-1 text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3 py-2 rounded-lg outline-none focus:border-[#EC078A]"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Apply
              </button>
            </form>

            {/* Checkout Action */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-3.5 bg-[#EC078A] hover:bg-[#D6067C] active:scale-98 text-white text-xs font-extrabold rounded-xl shadow-md shadow-[#EC078A]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Assurance footnote */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-[#68677A] pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Guaranteed Original &amp; Sealed Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
