import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Building2,
  CheckCircle2,
  Package,
  Truck,
  ShieldCheck,
  FileSpreadsheet,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

export const WholesalePage: React.FC = () => {
  const { showToast, navigate } = useShop();

  const [formData, setFormData] = useState({
    contactName: '',
    businessName: '',
    phone: '',
    email: '',
    brandInterest: 'All Brands',
    quantityRange: '10 - 25 units',
    state: 'Lagos State',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.phone || !formData.businessName) {
      showToast('Please fill in required contact and business details', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Wholesale quote request submitted! Our wholesale desk will contact you within 2 hours.', 'success');
  };

  const steps = [
    {
      num: '01',
      title: 'Submit Inquiry or Product List',
      desc: 'Fill out our quote form or send your weekly order sheet via WhatsApp.'
    },
    {
      num: '02',
      title: 'Receive Daily Dealer Invoice',
      desc: 'Get volume tiered rates based on daily Computer Village wholesale stock prices.'
    },
    {
      num: '03',
      title: 'Secure Settlement & Verification',
      desc: 'Verify IMEI serials and pay securely via corporate transfer or upon verified inspection.'
    },
    {
      num: '04',
      title: 'Waybill & Doorstep Dispatch',
      desc: 'Cartons are bubble-wrapped, sealed, and dispatched via insured inter-state logistics.'
    }
  ];

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#120738] via-[#1D0C54] to-[#2B0E68] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC078A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#EC078A]">
              <Building2 className="w-4 h-4" />
              <span>Official B2B &amp; Dealer Procurement</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Nigeria's Leading Wholesale Phone Partner
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
              We supply retail phone stores, sub-distributors, and corporate organizations across Nigeria with 100% genuine sealed iPhones, Samsung, Tecno, Infinix, and itel devices at carton-rate prices.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Factory Sealed Cartons
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Daily Price Transparency
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Insured Inter-state Waybill
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EC078A]" />
                <span>Direct Dealer Hotline</span>
              </h3>
              <p className="text-xs text-white/75">
                Need urgent carton pricing or stock status right now?
              </p>
              <div className="p-3 bg-white/10 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/60">Wholesale Desk</p>
                  <p className="text-base font-extrabold text-[#EC078A]">+234 801 234 5678</p>
                </div>
                <a
                  href="tel:+2348012345678"
                  className="px-3 py-1.5 bg-[#EC078A] text-white text-xs font-bold rounded-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* 4-Step Process */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-[#17152D]">
              How Wholesale Sourcing Works
            </h2>
            <p className="text-xs text-[#68677A]">
              Fast, transparent, and dependable delivery from our central Computer Village inventory to your store.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-3 relative group hover:border-[#EC078A]/40 transition-all"
              >
                <span className="text-2xl font-black text-[#EC078A]/30 group-hover:text-[#EC078A] transition-colors">
                  {st.num}
                </span>
                <h3 className="text-sm font-bold text-[#17152D]">{st.title}</h3>
                <p className="text-xs text-[#68677A] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Request a Quote Form */}
        <section className="bg-white rounded-3xl border border-[#EAE7F1] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Info (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold text-[#EC078A] uppercase tracking-wider">
                Get Bulk Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17152D] leading-tight">
                Request a Dealer Price Quote
              </h2>
              <p className="text-xs text-[#68677A] leading-relaxed">
                Fill in your company details and expected order size. Our dedicated B2B account managers respond within 2 hours with our current wholesale rate sheet.
              </p>

              <div className="space-y-3 pt-3">
                <div className="flex items-start gap-3 text-xs text-[#17152D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EC078A] shrink-0 mt-0.5" />
                  <span>Transparent carton discount structures</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#17152D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EC078A] shrink-0 mt-0.5" />
                  <span>Support for mixed-model and mixed-brand shipments</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#17152D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EC078A] shrink-0 mt-0.5" />
                  <span>Full VAT invoice and serial documentation included</span>
                </div>
              </div>
            </div>

            {/* The Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8F7FA] p-6 sm:p-8 rounded-2xl border border-[#EAE7F1]">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#17152D]">
                    Wholesale Quote Request Received!
                  </h3>
                  <p className="text-xs text-[#68677A] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.contactName}. Our wholesale desk will review your {formData.quantityRange} request and contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#211078] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="e.g. Chukwuma Obi"
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Business / Store Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Mobile Hub"
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0802 345 6789"
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Business Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sales@apexmobile.ng"
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Brand Interest
                      </label>
                      <select
                        value={formData.brandInterest}
                        onChange={(e) => setFormData({ ...formData, brandInterest: e.target.value })}
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none"
                      >
                        <option value="All Brands">All Brands / Mixed Cartons</option>
                        <option value="Apple">Apple iPhones &amp; iPads</option>
                        <option value="Samsung">Samsung Galaxy Series</option>
                        <option value="Tecno">Tecno Camon &amp; Spark</option>
                        <option value="Infinix">Infinix Zero &amp; Note</option>
                        <option value="itel">itel Budget Phones</option>
                        <option value="Accessories">Phone Accessories &amp; Chargers</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Estimated Order Quantity
                      </label>
                      <select
                        value={formData.quantityRange}
                        onChange={(e) => setFormData({ ...formData, quantityRange: e.target.value })}
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none"
                      >
                        <option value="10 - 25 units">10 - 25 units (Starter Tier)</option>
                        <option value="26 - 50 units">26 - 50 units (Dealer Tier)</option>
                        <option value="51 - 100 units">51 - 100 units (Volume Partner)</option>
                        <option value="100+ cartons">100+ Cartons (Mega Distributor)</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Delivery State / City
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Lagos, Onitsha, Kano, Port Harcourt, Ibadan"
                        className="w-full text-xs bg-white border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#17152D] mb-1">
                        Specific Models or Inquiries
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="List specific models you need (e.g. 5x iPhone 16 Pro Max 256GB, 10x Tecno Camon 30 Pro)..."
                        rows={3}
                        className="w-full text-xs bg-white border border-[#EAE7F1] p-3 rounded-xl outline-none focus:border-[#EC078A]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#EC078A] hover:bg-[#D6067C] active:scale-98 text-white text-xs font-extrabold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Wholesale Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
