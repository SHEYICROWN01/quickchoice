import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Users, Building, Truck, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useShop();

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#120738] via-[#211078] to-[#120738] text-white py-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-extrabold text-[#EC078A] uppercase tracking-wider">
            About Quick Choice Telecommunications
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Nigeria's Foremost Hub for Original Smartphones &amp; Tech
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Founded with a commitment to authenticity and transparency, Quick Choice Telecommunications has grown from Computer Village Ikeja into a premier national distributor of smartphones, tablets, and mobile accessories.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#17152D]">
              Built on Trust and Verified Quality
            </h2>
            <p className="text-xs sm:text-sm text-[#68677A] leading-relaxed">
              In a marketplace where counterfeit devices and fake refurbished phones cause customer heartbreak, Quick Choice was established with one unwavering rule: <strong>every device we stock must be 100% original, brand new, and backed by manufacturer warranty.</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#68677A] leading-relaxed">
              Today, whether an individual in Lekki orders a single flagship iPhone or a phone dealer in Onitsha orders 50 cartons of Android devices, we treat each order with the same standard of speed, security, and integrity.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#EAE7F1] shadow-md aspect-4/3">
            <img
              src="/images/hero_smartphones_lineup_1791959963891.jpg"
              alt="Quick Choice Flagship Devices"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <ShieldCheck className="w-6 h-6 text-[#EC078A]" />,
              title: '100% Originality',
              desc: 'Direct factory & authorized distributor sourcing ensures zero counterfeits.'
            },
            {
              icon: <Building className="w-6 h-6 text-[#EC078A]" />,
              title: 'Retail & Wholesale',
              desc: 'Catering to individual consumers as well as phone retail businesses nationwide.'
            },
            {
              icon: <Truck className="w-6 h-6 text-[#EC078A]" />,
              title: 'Swift Waybill',
              desc: 'Insured same-day dispatch to all 36 states with tracked courier partners.'
            },
            {
              icon: <Users className="w-6 h-6 text-[#EC078A]" />,
              title: 'Dedicated Support',
              desc: 'Real technicians on WhatsApp and phone to resolve questions before and after buying.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-[#EAE7F1] space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F8] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xs font-bold text-[#17152D]">{item.title}</h3>
              <p className="text-[11px] text-[#68677A] leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-[#211078] text-white rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-md">
          <h2 className="text-2xl font-black">Experience the Quick Choice Standard</h2>
          <p className="text-xs text-white/80 max-w-lg mx-auto">
            Discover our curated lineup of original iPhones, Samsung Galaxy, Tecno, and Infinix smartphones today.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => navigate('/phones')}
              className="px-6 py-3 bg-[#EC078A] hover:bg-[#D6067C] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Shop Smartphones
            </button>
            <button
              onClick={() => navigate('/wholesale')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 cursor-pointer"
            >
              Wholesale Sourcing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
