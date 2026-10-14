import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Truck,
  Tag
} from 'lucide-react';

interface SlideData {
  id: string;
  badge: {
    icon?: string;
    text: string;
  };
  titlePrefix: string;
  titleHighlight: string;
  subhead: string;
  primaryCta: {
    label: string;
    route: string;
  };
  secondaryCta: {
    label: string;
    route: string;
  };
  image: string;
  bgGradient: string;
}

export const HeroBanner: React.FC = () => {
  const { navigate } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides: SlideData[] = [
    // Slide 1: Apple iPhone 16 Pro Max
    {
      id: 'slide-apple',
      badge: {
        icon: '',
        text: 'APPLE FLAGSHIP'
      },
      titlePrefix: 'iPhone 16 ',
      titleHighlight: 'Pro Max',
      subhead: 'Titanium design with A18 Pro chip, 48MP Fusion camera system, and industry-leading battery life. Built for Apple Intelligence.',
      primaryCta: {
        label: 'Shop iPhone 16 Pro Max',
        route: '/phones/iphone-16-pro-max'
      },
      secondaryCta: {
        label: 'Explore All iPhones',
        route: '/brands/Apple'
      },
      image: '/images/carousel_iphone_neon_rocks_1791962713305.jpg',
      bgGradient: 'radial-gradient(ellipse at 75% 50%, #2A0952 0%, #150534 45%, #0B021B 100%)'
    },

    // Slide 2: Samsung Galaxy S25 Ultra
    {
      id: 'slide-samsung',
      badge: {
        text: 'GALAXY AI • FLAGSHIP'
      },
      titlePrefix: 'Samsung Galaxy ',
      titleHighlight: 'S25 Ultra',
      subhead: 'Epic 200MP camera resolution, titanium durability, embedded S Pen, and Snapdragon 8 Elite intelligence for unmatched productivity.',
      primaryCta: {
        label: 'Shop Samsung S25 Ultra',
        route: '/phones/samsung-galaxy-s25-ultra'
      },
      secondaryCta: {
        label: 'Explore Samsung',
        route: '/brands/Samsung'
      },
      image: '/images/carousel_samsung_s25_lineup_1791962713522.jpg',
      bgGradient: 'radial-gradient(ellipse at 75% 50%, #23084C 0%, #12032E 45%, #090218 100%)'
    },

    // Slide 3: Wholesale & Bulk Orders
    {
      id: 'slide-wholesale',
      badge: {
        icon: '📦',
        text: 'WHOLESALE & BULK ORDERS'
      },
      titlePrefix: 'Special Wholesale ',
      titleHighlight: 'Rates for Dealers',
      subhead: 'Original brand-new sealed cartons with full manufacturer warranty. Best wholesale rates for retail store owners, phone dealers, and corporate fleets.',
      primaryCta: {
        label: 'Request Wholesale Quote',
        route: '/wholesale'
      },
      secondaryCta: {
        label: 'Browse Catalogue',
        route: '/phones'
      },
      image: '/images/carousel_wholesale_boxes_1791962714200.jpg',
      bgGradient: 'radial-gradient(ellipse at 75% 50%, #260A50 0%, #130432 45%, #0A021C 100%)'
    }
  ];

  // Auto advance slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const active = slides[currentSlide];

  return (
    <div className="w-full bg-[#FAF9FC] py-3 sm:py-5">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Main Carousel Banner Frame */}
        <section
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none transition-all duration-700"
          style={{ background: active.bgGradient }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Ambient Glow Effect */}
          <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#EC078A]/15 rounded-full blur-3xl pointer-events-none" />

          {/* DESKTOP/TABLET UNBOXED ARTWORK (Seamlessly flowing into the background) */}
          <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[52%] lg:w-[55%] items-center justify-center pointer-events-none overflow-hidden">
            <div
              className="w-full h-full relative"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)'
              }}
            >
              <img
                src={active.image}
                alt={active.titlePrefix + active.titleHighlight}
                className="w-full h-full object-cover object-center transition-opacity duration-500 scale-102"
              />
            </div>
          </div>

          {/* CONTENT CONTAINER (Responsive layout for both desktop and mobile) */}
          <div className="relative z-10 p-5 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between">
            {/* Top / Left Content */}
            <div className="max-w-full md:max-w-[55%] lg:max-w-[50%] space-y-3 sm:space-y-4 text-left">
              {/* Category / Brand Pill Badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-white/10 text-[#EC078A] border border-[#EC078A]/30 backdrop-blur-xs">
                  {active.badge.icon && <span>{active.badge.icon}</span>}
                  <span>{active.badge.text}</span>
                </span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                <span>{active.titlePrefix}</span>
                <span className="text-[#EC078A] drop-shadow-md">
                  {active.titleHighlight}
                </span>
              </h1>

              {/* Subhead / Value Prop */}
              <p className="text-xs sm:text-sm font-normal text-white/85 leading-relaxed max-w-lg">
                {active.subhead}
              </p>

              {/* MOBILE UNBOXED ARTWORK (Directly within mobile flow, NO card, NO box, seamlessly alongside background) */}
              <div className="md:hidden py-2 flex items-center justify-center">
                <div
                  className="w-full max-w-[280px] sm:max-w-[340px] aspect-16/10 relative overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 95%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 95%)'
                  }}
                >
                  <img
                    src={active.image}
                    alt={active.titlePrefix + active.titleHighlight}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 sm:pt-4">
                <button
                  onClick={() => navigate(active.primaryCta.route)}
                  className="px-6 py-3.5 bg-[#EC078A] hover:bg-[#D6067C] active:scale-[0.98] text-white text-xs sm:text-sm font-extrabold rounded-xl shadow-lg shadow-[#EC078A]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{active.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate(active.secondaryCta.route)}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 backdrop-blur-xs transition-all cursor-pointer text-center"
                >
                  {active.secondaryCta.label}
                </button>
              </div>
            </div>

            {/* Bottom Pagination Indicators */}
            <div className="pt-6 sm:pt-8 flex items-center justify-between sm:justify-start gap-4">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all cursor-pointer ${
                      currentSlide === idx
                        ? 'w-7 h-2 rounded-full bg-[#EC078A]'
                        : 'w-2 h-2 rounded-full bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter on Mobile */}
              <span className="text-[11px] font-semibold text-white/50 tracking-wider">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white items-center justify-center border border-white/20 backdrop-blur-xs transition-all z-20 cursor-pointer shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white items-center justify-center border border-white/20 backdrop-blur-xs transition-all z-20 cursor-pointer shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </section>

        {/* Trust Badges Strip Under Carousel (Hidden on mobile view as requested) */}
        <div className="hidden md:block bg-[#14094B] text-white rounded-xl py-3 px-4 sm:px-6 mt-3 shadow-sm border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#EC078A] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-white">100% Original Products</p>
                <p className="text-[10px] text-white/70">With Full Manufacturer Warranty</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#EC078A] shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-white">Nationwide Delivery</p>
                <p className="text-[10px] text-white/70">Fast dispatch to all 36 states</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#EC078A] shrink-0">
                <Tag className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-white">Wholesale &amp; Retail Rates</p>
                <p className="text-[10px] text-white/70">Best prices for dealers &amp; users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
