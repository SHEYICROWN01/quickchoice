import React from 'react';
import { useShop } from '../../context/ShopContext';
import { RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export const TradeInBanner: React.FC = () => {
  const { navigate } = useShop();

  const benefits = [
    'Get Instant Value & Fair Assessment',
    'Wide Device Support (iPhone, Samsung, Tecno, etc.)',
    'Safe & Secure Data Wiping Guarantee',
    'Upgrade Seamlessly to the Latest Models'
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-gradient-to-r from-[#F5F1FF] via-[#FFF0F8] to-[#F5F1FF] rounded-2xl border border-[#EAE7F1] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm aspect-16/10 rounded-xl overflow-hidden shadow-lg border border-[#EAE7F1]">
              <img
                src="/images/banner_tradein_upgrade_1791959966069.jpg"
                alt="Trade In and Upgrade Phones"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-bold text-white bg-[#EC078A] px-2.5 py-1 rounded-md">
                  Exchange &amp; Save
                </span>
              </div>
            </div>
          </div>

          {/* Copy & Benefits */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EC078A] uppercase tracking-wider">
              <RefreshCw className="w-4 h-4 text-[#EC078A]" />
              <span>Quick Choice Upgrade Program</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152D] leading-tight">
              Trade In &amp; Upgrade
            </h3>

            <p className="text-sm text-[#68677A] leading-relaxed max-w-xl">
              Exchange your old phone for a new device at genuine market value. Bring your device to our Ikeja store or request a remote pickup anywhere in Lagos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#17152D]">
                  <CheckCircle2 className="w-4 h-4 text-[#211078] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => navigate('/trade-in')}
                className="px-6 py-3 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Learn More &amp; Value Your Phone</span>
                <ArrowRight className="w-4 h-4 text-[#EC078A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
