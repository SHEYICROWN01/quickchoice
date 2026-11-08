import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Thank you! You are now subscribed to MARKDRE updates.', 'success');
    setEmail('');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-gradient-to-r from-[#061124] via-[#0A192F] to-[#0052FF]/80 rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-[#0052FF]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          {/* Left Title and text */}
          <div className="lg:col-span-7 flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0052FF] flex items-center justify-center shrink-0 shadow-lg shadow-[#0052FF]/30">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Stay Updated with MARKDRE
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#38BDF8] bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
                  <Sparkles className="w-3 h-3" /> VIP Club
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Get the latest smartphone deals, Smart TV price drops, new arrivals and exclusive wholesale offers.
              </p>
            </div>
          </div>

          {/* Right Input and button */}
          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-xl text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Subscription confirmed! Welcome to MARKDRE.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white text-sm text-[#0A192F] placeholder-[#64748B] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0052FF] hover:bg-[#003ECC] active:scale-95 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
