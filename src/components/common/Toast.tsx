import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useShop();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-[#EC078A] shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-300 ease-out transform translate-y-0 opacity-100">
      <div className="bg-[#17152D] text-white p-4 rounded-xl shadow-2xl border border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {icons[toast.type]}
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      </div>
    </div>
  );
};
