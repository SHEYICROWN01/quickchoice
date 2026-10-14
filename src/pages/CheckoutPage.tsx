import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Building,
  CheckCircle2,
  ArrowRight,
  Lock,
  Package,
  MapPin,
  Clock,
  Phone,
  User,
  Mail
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart, formatNaira, navigate, showToast } = useShop();

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Ikeja',
    state: 'Lagos State',
    notes: ''
  });

  const [deliveryOption, setDeliveryOption] = useState<'standard' | 'express' | 'pickup'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'bank_transfer' | 'delivery'>('paystack');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<any | null>(null);

  const deliveryCost = {
    standard: cartTotal >= 200000 ? 0 : 4000,
    express: 7500,
    pickup: 0
  }[deliveryOption];

  const totalAmount = cartTotal + deliveryCost;

  const nigerianStates = [
    'Lagos State',
    'Abuja (FCT)',
    'Rivers State (Port Harcourt)',
    'Oyo State (Ibadan)',
    'Kano State',
    'Ogun State',
    'Enugu State',
    'Delta State',
    'Edo State',
    'Anambra State',
    'Kaduna State',
    'Other States'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || (!formData.address && deliveryOption !== 'pickup')) {
      showToast('Please complete all required customer details', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable transaction preparation with clear demonstration status
    setTimeout(() => {
      const generatedOrderId = `QC-${Math.floor(100000 + Math.random() * 900000)}`;
      const order = {
        orderId: generatedOrderId,
        date: new Date().toLocaleDateString('en-NG', { dateStyle: 'medium' }),
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address || 'Computer Village Store Pickup',
        state: formData.state,
        city: formData.city,
        items: [...cart],
        subtotal: cartTotal,
        deliveryCost,
        total: totalAmount,
        paymentMethod: {
          paystack: 'Paystack Gateway (Cards & USSD)',
          flutterwave: 'Flutterwave Gateway',
          bank_transfer: 'Direct Bank Transfer',
          delivery: 'Payment on Delivery (Lagos)'
        }[paymentMethod],
        deliveryOption: {
          standard: 'Standard Doorstep Delivery (1-3 Days)',
          express: 'Same-Day Express Dispatch (Lagos/Abuja)',
          pickup: 'Self-Pickup at Computer Village Mega Store'
        }[deliveryOption]
      };

      setOrderConfirmed(order);
      clearCart();
      setIsSubmitting(false);
      showToast(`Order #${generatedOrderId} generated successfully!`, 'success');
    }, 1200);
  };

  if (orderConfirmed) {
    return (
      <div className="bg-[#FAF9FC] min-h-screen py-16 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-[#EAE7F1] p-8 text-center space-y-6 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-[#EC078A] uppercase tracking-wider">
              Order Confirmed (Demonstration Mode)
            </span>
            <h2 className="text-2xl font-black text-[#17152D]">
              Thank You, {orderConfirmed.customerName}!
            </h2>
            <p className="text-xs text-[#68677A]">
              Your order identifier is <strong className="text-[#211078]">{orderConfirmed.orderId}</strong>
            </p>
          </div>

          <div className="bg-[#F8F7FA] rounded-2xl p-5 text-left space-y-3 border border-[#EAE7F1] text-xs">
            <div className="flex justify-between py-1 border-b border-[#EAE7F1]">
              <span className="text-[#68677A]">Delivery Destination</span>
              <span className="font-bold text-[#17152D] text-right">{orderConfirmed.address}, {orderConfirmed.state}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#EAE7F1]">
              <span className="text-[#68677A]">Delivery Speed</span>
              <span className="font-bold text-[#17152D]">{orderConfirmed.deliveryOption}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#EAE7F1]">
              <span className="text-[#68677A]">Payment Channel</span>
              <span className="font-bold text-[#17152D]">{orderConfirmed.paymentMethod}</span>
            </div>
            <div className="flex justify-between py-1 pt-2">
              <span className="text-sm font-bold text-[#17152D]">Total Amount</span>
              <span className="text-base font-extrabold text-[#211078] tabular-nums">
                {formatNaira(orderConfirmed.total)}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#FFF0F8] border border-[#F9D6EA] rounded-xl text-left text-xs space-y-1 text-[#68677A]">
            <p className="font-bold text-[#EC078A] flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Next Steps:
            </p>
            <p>
              Our fulfillment officers at Quick Choice Ikeja will contact you on <strong>{orderConfirmed.phone}</strong> to confirm invoice particulars before dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => navigate(`/track-order?orderId=${orderConfirmed.orderId}`)}
              className="flex-1 py-3 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Track Order Status
            </button>
            <button
              onClick={() => navigate('/phones')}
              className="flex-1 py-3 bg-[#F5F1FF] hover:bg-[#EAE7F1] text-[#211078] text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-[#FAF9FC] min-h-screen py-16 px-4 text-center">
        <h2 className="text-xl font-bold">No items in cart for checkout</h2>
        <button
          onClick={() => navigate('/phones')}
          className="mt-4 px-6 py-2.5 bg-[#211078] text-white text-xs font-bold rounded-xl"
        >
          Browse Phones
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-[#EAE7F1] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#68677A] mb-1">
              <button onClick={() => navigate('/cart')} className="hover:text-[#EC078A] cursor-pointer">
                Cart
              </button>
              <span>&gt;</span>
              <span className="font-bold text-[#17152D]">Secure Checkout</span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#17152D] tracking-tight flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>Checkout &amp; Order Placement</span>
            </h1>
          </div>
          <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold">
            256-bit SSL Encrypted
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Delivery & Payment Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Customer Contact Details */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-4">
              <h3 className="text-xs font-extrabold text-[#211078] uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4 text-[#EC078A]" />
                <span>1. Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#17152D] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Babatunde Adeleke"
                    className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17152D] mb-1">
                    Phone Number (WhatsApp reachable) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 0801 234 5678"
                    className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#17152D] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. adeleke@gmail.com"
                    className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Method & Destination */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-4">
              <h3 className="text-xs font-extrabold text-[#211078] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EC078A]" />
                <span>2. Delivery Address &amp; Speed</span>
              </h3>

              {/* Delivery Speed Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryOption('standard')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    deliveryOption === 'standard'
                      ? 'border-[#EC078A] bg-[#FFF0F8] ring-1 ring-[#EC078A]'
                      : 'border-[#EAE7F1] bg-[#F8F7FA]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#17152D] block">Standard Dispatch</span>
                  <span className="text-[10px] text-[#68677A] block mt-0.5">1-3 Days Nationwide</span>
                  <span className="text-xs font-extrabold text-[#211078] mt-1 block">
                    {cartTotal >= 200000 ? 'FREE' : '₦4,000'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryOption('express')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    deliveryOption === 'express'
                      ? 'border-[#EC078A] bg-[#FFF0F8] ring-1 ring-[#EC078A]'
                      : 'border-[#EAE7F1] bg-[#F8F7FA]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#17152D] block">Express Same-Day</span>
                  <span className="text-[10px] text-[#68677A] block mt-0.5">Lagos / Abuja Priority</span>
                  <span className="text-xs font-extrabold text-[#211078] mt-1 block">₦7,500</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryOption('pickup')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    deliveryOption === 'pickup'
                      ? 'border-[#EC078A] bg-[#FFF0F8] ring-1 ring-[#EC078A]'
                      : 'border-[#EAE7F1] bg-[#F8F7FA]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#17152D] block">Store Pickup</span>
                  <span className="text-[10px] text-[#68677A] block mt-0.5">Ikeja Computer Village</span>
                  <span className="text-xs font-extrabold text-emerald-600 mt-1 block">FREE</span>
                </button>
              </div>

              {deliveryOption !== 'pickup' && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none"
                      >
                        {nigerianStates.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">City / LGA *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Ikeja, Lekki, Wuse 2"
                        className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17152D] mb-1">Street Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. 14 Otigba Street, Computer Village or Flat 4, Victoria Island"
                      rows={2}
                      className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] p-3 rounded-xl outline-none focus:border-[#EC078A]"
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-4">
              <h3 className="text-xs font-extrabold text-[#211078] uppercase tracking-wider flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#EC078A]" />
                <span>3. Payment Channel</span>
              </h3>

              <div className="space-y-2.5">
                {[
                  {
                    id: 'paystack',
                    name: 'Paystack Gateway',
                    desc: 'Pay with ATM Cards, USSD code, or Instant Bank Transfer'
                  },
                  {
                    id: 'flutterwave',
                    name: 'Flutterwave Gateway',
                    desc: 'Supports Visa, Mastercard, Verve, and Mobile Money'
                  },
                  {
                    id: 'bank_transfer',
                    name: 'Direct Corporate Bank Transfer',
                    desc: 'Transfer directly to Quick Choice Telecommunications Zenith/GTBank accounts'
                  },
                  {
                    id: 'delivery',
                    name: 'Payment on Delivery (Lagos Customers Only)',
                    desc: 'POS or cash upon receiving sealed box'
                  }
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => setPaymentMethod(item.id as any)}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      paymentMethod === item.id
                        ? 'border-[#EC078A] bg-[#FFF0F8]'
                        : 'border-[#EAE7F1] hover:bg-[#F8F7FA]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_opt"
                      checked={paymentMethod === item.id}
                      onChange={() => setPaymentMethod(item.id as any)}
                      className="accent-[#EC078A] w-4 h-4"
                    />
                    <div>
                      <span className="text-xs font-bold text-[#17152D] block">{item.name}</span>
                      <span className="text-[11px] text-[#68677A]">{item.desc}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="p-3 bg-[#F8F7FA] border border-[#EAE7F1] rounded-xl text-[11px] text-[#68677A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All transactions use PCI-compliant SSL encrypted security standards.</span>
              </div>
            </div>
          </div>

          {/* Right Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-5 sticky top-24">
            <h3 className="text-xs font-extrabold text-[#17152D] uppercase tracking-wider pb-3 border-b border-[#EAE7F1]">
              Order Summary ({cart.length} items)
            </h3>

            {/* Itemized preview */}
            <div className="space-y-3 max-h-64 overflow-y-auto no-scrollbar divide-y divide-[#EAE7F1]">
              {cart.map((item) => (
                <div key={item.id} className="pt-2 flex items-center gap-3">
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-12 h-12 object-contain bg-[#F8F7FA] p-1 rounded-lg border border-[#EAE7F1]"
                  />
                  <div className="flex-1 text-xs">
                    <p className="font-bold text-[#17152D] line-clamp-1">{item.product.name}</p>
                    <p className="text-[10px] text-[#68677A]">
                      Qty: {item.quantity} {item.selectedStorage ? `· ${item.selectedStorage}` : ''}
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#211078] tabular-nums">
                    {formatNaira(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-[#EAE7F1] pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-[#68677A]">
                <span>Subtotal</span>
                <span className="font-bold text-[#17152D] tabular-nums">{formatNaira(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-[#68677A]">
                <span>Delivery Charge</span>
                <span className="font-bold text-[#17152D] tabular-nums">
                  {deliveryCost === 0 ? 'FREE' : formatNaira(deliveryCost)}
                </span>
              </div>
              <div className="border-t border-[#EAE7F1] pt-3 flex justify-between items-baseline">
                <span className="text-sm font-extrabold text-[#17152D]">Final Total</span>
                <span className="text-2xl font-black text-[#211078] tabular-nums">
                  {formatNaira(totalAmount)}
                </span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#EC078A] hover:bg-[#D6067C] active:scale-98 disabled:opacity-50 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-[#EC078A]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <span>Generating Order Reference...</span>
              ) : (
                <>
                  <span>Place Order ({formatNaira(totalAmount)})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-[#68677A]">
              By clicking Place Order, you confirm your order with Quick Choice Telecommunications.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
