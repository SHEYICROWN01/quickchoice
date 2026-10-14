import React from 'react';
import { ShieldCheck, CircleDollarSign, Truck, Users, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#EC078A]" />,
      title: 'Authentic Products',
      subtitle: '100% Original & Sealed'
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-[#EC078A]" />,
      title: 'Competitive Prices',
      subtitle: 'Best Deals Always'
    },
    {
      icon: <Truck className="w-6 h-6 text-[#EC078A]" />,
      title: 'Nationwide Delivery',
      subtitle: 'Fast & Reliable Transit'
    },
    {
      icon: <Users className="w-6 h-6 text-[#EC078A]" />,
      title: 'Trusted by Thousands',
      subtitle: '50,000+ Happy Customers'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#EC078A]" />,
      title: 'Expert Support',
      subtitle: '24/7 Real Assistance'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title */}
      <div className="flex items-center gap-3 pb-6">
        <div className="w-1.5 h-6 bg-[#EC078A] rounded-full" />
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152D] tracking-tight">
          Why Choose Quick Choice?
        </h2>
      </div>

      {/* Grid of 5 reasons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {points.map((pt, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 border border-[#EAE7F1] hover:border-[#EC078A]/40 hover:shadow-md transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#FFF0F8] border border-[#F9D6EA] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              {pt.icon}
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#17152D]">
              {pt.title}
            </h3>
            <p className="text-[11px] text-[#68677A] mt-1 font-medium">
              {pt.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
