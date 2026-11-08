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
    `Looking for an original, high-quality ${productName} at the best price in Nigeria? You're in the right place! At MARKDRE, we offer 100% original ${brand} products with full manufacturer warranty, competitive prices, and nationwide delivery.`;

  const bullets = customData?.bullets || [
    'Brand new and factory sealed unit',
    `Comes with official ${brand} manufacturer warranty`,
    'Best prices for both retail and wholesale buyers',
    'Insured nationwide delivery directly to your doorstep',
    'Secure and multiple payment options (Paystack, Transfer, Cards)',
    'Dedicated support before, during and after purchase'
  ];

  const guarantee =
    customData?.guarantee ||
    "Buy with confidence from Nigeria's trusted dealer. Genuine products, verified warranties, and excellent customer service — that's the MARKDRE promise!";

  return (
    <div className="bg-[#E8F2FF] rounded-2xl border border-[#C7DCFC] p-5 sm:p-6 space-y-4 shadow-xs">
      {/* Title */}
      <div className="flex items-center gap-2 pb-1 border-b border-[#C7DCFC]">
        <div className="w-8 h-8 rounded-lg bg-[#0052FF] text-white flex items-center justify-center shrink-0">
          <MessageSquareText className="w-4 h-4" />
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#0052FF]">
          {title}
        </h3>
      </div>

      {/* Intro */}
      <p className="text-xs text-[#0A192F] leading-relaxed font-medium">
        {intro}
      </p>

      {/* Bullet list */}
      <ul className="space-y-2.5">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0A192F]">
            <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
            <span className="font-semibold">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Guarantee box */}
      <div className="bg-white rounded-xl p-3.5 border border-[#C7DCFC] flex items-start gap-3 shadow-xs">
        <Star className="w-4 h-4 fill-[#0052FF] text-[#0052FF] shrink-0 mt-0.5" />
        <p className="text-[11px] text-[#64748B] leading-relaxed">
          {guarantee}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-1 flex flex-col gap-2">
        <button
          onClick={() => navigate('/contact')}
          className="w-full py-2.5 bg-[#0052FF] hover:bg-[#003ECC] active:scale-98 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Speak With Our Sales Specialist</span>
        </button>

        <button
          onClick={() => navigate('/wholesale')}
          className="w-full py-2 bg-white hover:bg-[#F0F6FF] text-[#0052FF] text-xs font-bold rounded-xl border border-[#0052FF]/30 transition-colors cursor-pointer text-center"
        >
          Request Bulk / Dealer Price
        </button>
      </div>
    </div>
  );
};
