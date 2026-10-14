import React from 'react';
import { useShop } from '../../context/ShopContext';
import { MessageSquareText, CheckCircle2, Star, Phone, ShieldCheck } from 'lucide-react';

interface SellersSpeechProps {
  productName: string;
  brand: string;
  customData?: {
    headline: string;
    intro: string;
    bullets: string[];
    guarantee: string;
  };
}

export const SellersSpeech: React.FC<SellersSpeechProps> = ({
  productName,
  brand,
  customData
}) => {
  const { navigate } = useShop();

  const title = customData?.headline || "Seller's Speech";
  const intro =
    customData?.intro ||
    `Looking for an original, high-quality ${productName} at the best price in Nigeria? You're in the right place! At Quick Choice Telecommunications, we offer 100% original ${brand} products with full warranty, competitive prices, and nationwide delivery.`;

  const bullets = customData?.bullets || [
    'Brand new and factory sealed device',
    `Comes with official ${brand} warranty`,
    'Best prices for both retail and wholesale',
    'Nationwide delivery to your location',
    'Secure and multiple payment options',
    'Dedicated support before, during and after purchase'
  ];

  const guarantee =
    customData?.guarantee ||
    "Buy with confidence from a trusted phone store. Quality phones, genuine products, and excellent customer service — that's our promise!";

  return (
    <div className="bg-[#FFF0F8] rounded-2xl border border-[#F9D6EA] p-5 sm:p-6 space-y-4 shadow-xs">
      {/* Title */}
      <div className="flex items-center gap-2 pb-1 border-b border-[#F9D6EA]">
        <div className="w-8 h-8 rounded-lg bg-[#EC078A] text-white flex items-center justify-center shrink-0">
          <MessageSquareText className="w-4 h-4" />
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#EC078A]">
          {title}
        </h3>
      </div>

      {/* Intro */}
      <p className="text-xs text-[#17152D] leading-relaxed font-medium">
        {intro}
      </p>

      {/* Bullet list */}
      <ul className="space-y-2.5">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#17152D]">
            <CheckCircle2 className="w-4 h-4 text-[#EC078A] shrink-0 mt-0.5" />
            <span className="font-semibold">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Guarantee box */}
      <div className="bg-white rounded-xl p-3.5 border border-[#F9D6EA] flex items-start gap-3 shadow-xs">
        <Star className="w-4 h-4 fill-[#EC078A] text-[#EC078A] shrink-0 mt-0.5" />
        <p className="text-[11px] text-[#68677A] leading-relaxed">
          {guarantee}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-1 flex flex-col gap-2">
        <button
          onClick={() => navigate('/contact')}
          className="w-full py-2.5 bg-[#EC078A] hover:bg-[#D6067C] active:scale-98 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Speak With Our Sales Specialist</span>
        </button>

        <button
          onClick={() => navigate('/wholesale')}
          className="w-full py-2 bg-white hover:bg-[#F5F1FF] text-[#211078] text-xs font-bold rounded-xl border border-[#211078]/20 transition-colors cursor-pointer text-center"
        >
          Request Bulk / Dealer Price
        </button>
      </div>
    </div>
  );
};
