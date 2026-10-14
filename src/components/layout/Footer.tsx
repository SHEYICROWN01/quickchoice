import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../common/Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useShop();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14094B] text-white pt-16 pb-12 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-1 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="cursor-pointer text-left focus:outline-none"
            >
              <Logo variant="white" size="md" />
            </button>
            <p className="text-xs text-white/75 leading-relaxed">
              Your trusted partner for original phones, accessories and more. Wholesale & Retail across Nigeria.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EC078A] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EC078A] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#x"
                aria-label="X / Twitter"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EC078A] text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EC078A] text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/phones')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Phones
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/accessories')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/brands')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Brands
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/deals')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/wholesale')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Wholesale
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Customer Support</h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  onClick={() => navigate('/help')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/track-order')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Track Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/shipping-returns')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/shipping-returns')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/shipping-returns')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  Warranty Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/help')}
                  className="hover:text-[#EC078A] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#EC078A] shrink-0" />
                <a href="tel:+2348012345678" className="hover:text-white transition-colors">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#EC078A] shrink-0" />
                <a href="mailto:support@quickchoice.com" className="hover:text-white transition-colors">
                  support@quickchoice.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#EC078A] shrink-0 mt-0.5" />
                <span>Computer Village & Ikeja Mega Store, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#EC078A] shrink-0 mt-0.5" />
                <div className="text-[11px] leading-tight">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-white/60">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Payment Channels */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">We Accept</h4>
            <p className="text-[11px] text-white/60">
              Multiple secure payment channels supported across Nigeria:
            </p>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {/* Payment badges */}
              <div className="bg-white rounded px-2 py-1.5 flex items-center justify-center">
                <span className="font-black text-blue-700 italic tracking-tighter text-xs">VISA</span>
              </div>
              <div className="bg-white rounded px-2 py-1.5 flex items-center justify-center">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500 opacity-80"></div>
                </div>
              </div>
              <div className="bg-white rounded px-2 py-1.5 flex items-center justify-center">
                <span className="font-bold text-emerald-700 tracking-tight text-[11px]">verve</span>
              </div>
              <div className="bg-white rounded px-2 py-1.5 flex items-center justify-center">
                <span className="font-extrabold text-cyan-600 tracking-tight text-[10px]">paystack</span>
              </div>
              <div className="bg-white rounded px-2 py-1.5 flex items-center justify-center">
                <span className="font-black text-emerald-600 tracking-tight text-[11px]">Opay</span>
              </div>
              <div className="bg-white rounded px-2 py-1.5 flex items-center justify-center">
                <span className="font-bold text-purple-700 tracking-tight text-[10px]">PalmPay</span>
              </div>
            </div>
            <p className="text-[10px] text-white/50 pt-1">
              Encrypted SSL &amp; PCI-DSS compliant payment processing.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Quick Choice Telecommunications. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button - only visible when scrolled down */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#EC078A] hover:bg-[#D6067C] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-30 cursor-pointer animate-in fade-in duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
