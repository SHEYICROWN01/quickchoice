import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Users, Building, Truck, Award, CheckCircle2, Tv, Smartphone } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useShop();

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061124] via-[#0052FF] to-[#0A192F] text-white py-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-extrabold text-[#38BDF8] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
            About MARKDRE Wholesale &amp; Retail
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Nigeria's Premier Hub for Original Phones, Smart TVs &amp; Electronics
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            Founded with a commitment to authenticity and transparency, MARKDRE has grown into a premier national distributor of original smartphones, Smart TVs, inverter refrigerators, deep freezers, air conditioners, and accessories.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#0A192F]">
              Built on Trust and Verified Quality
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              In a marketplace where counterfeit devices, substandard appliances, and unverified warranties cause heartbreak, MARKDRE was established with one unwavering rule: <strong>every item we stock must be 100% original, brand new, and backed by official manufacturer warranty.</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Today, whether an individual in Lekki orders a flagship smartphone or a 65" 4K Smart TV, or a commercial dealer in Onitsha orders wholesale cartons of electronics and home appliances, we treat each order with the highest standard of speed, security, and integrity.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#DCE6F5] shadow-md aspect-4/3 bg-white">
            <img
              src="/images/electronics_showcase_banner_1792068578161.jpg"
              alt="MARKDRE Flagship Store Showcase"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/images/hero_smartphones_lineup_1791959963891.jpg';
              }}
            />
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <ShieldCheck className="w-6 h-6 text-[#0052FF]" />,
              title: '100% Originality',
              desc: 'Direct factory & authorized brand distributor sourcing ensures zero counterfeits.'
            },
            {
              icon: <Building className="w-6 h-6 text-[#0052FF]" />,
              title: 'Retail & Wholesale',
              desc: 'Supplying individual consumers as well as retailers and corporate buyers nationwide.'
            },
            {
              icon: <Truck className="w-6 h-6 text-[#0052FF]" />,
              title: 'Swift Waybill & Courier',
              desc: 'Insured same-day dispatch across Lagos and swift delivery to all 36 states.'
            },
            {
              icon: <Users className="w-6 h-6 text-[#0052FF]" />,
              title: 'Dedicated Support',
              desc: 'Knowledgeable product advisors available via WhatsApp and phone before & after sales.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-[#DCE6F5] space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#E8F2FF] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xs font-bold text-[#0A192F]">{item.title}</h3>
              <p className="text-[11px] text-[#64748B] leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xl border border-[#0052FF]/30">
          <h2 className="text-2xl font-black">Experience the MARKDRE Standard</h2>
          <p className="text-xs text-white/80 max-w-lg mx-auto">
            Discover our curated lineup of original iPhones, Samsung Galaxy, 4K Smart TVs, inverter fridges, and split air conditioners today.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('/phones')}
              className="px-6 py-3 bg-[#0052FF] hover:bg-[#003ECC] text-white text-xs font-bold rounded-xl cursor-pointer transition-colors shadow-md"
            >
              Shop Smartphones
            </button>
            <button
              onClick={() => navigate('/categories/electronics')}
              className="px-6 py-3 bg-[#00A3FF] hover:bg-[#008AE6] text-white text-xs font-bold rounded-xl cursor-pointer transition-colors shadow-md"
            >
              Shop Electronics &amp; TVs
            </button>
            <button
              onClick={() => navigate('/wholesale')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 cursor-pointer transition-colors"
            >
              Wholesale Sourcing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
