import React from 'react';
import { Truck, ShieldCheck, CreditCard, RotateCcw, Headphones } from 'lucide-react';

export const TrustFeatures: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-5 h-5 text-[#EC078A]" />,
      title: 'Free & Fast Delivery',
      desc: 'Across Nigeria'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#EC078A]" />,
      title: 'Genuine Products',
      desc: 'With Warranty'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-[#EC078A]" />,
      title: 'Secure Payment',
      desc: 'Multiple Options'
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-[#EC078A]" />,
      title: 'Easy Returns',
      desc: 'Hassle Free'
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#EC078A]" />,
      title: '24/7 Support',
      desc: "We're Always Here"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white rounded-2xl border border-[#EAE7F1] p-5 sm:p-6 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 sm:gap-3 p-1.5 sm:p-0 ${
                index === 4 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : ''
              }`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF0F8] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-[#17152D]">{item.title}</h4>
                <p className="text-[10px] sm:text-[11px] text-[#68677A] font-medium mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
