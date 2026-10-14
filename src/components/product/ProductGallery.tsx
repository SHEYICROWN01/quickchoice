import React, { useState } from 'react';
import { ProductImage } from '../../types';
import { ChevronLeft, ChevronRight, Maximize2, X, Check } from 'lucide-react';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
  officialBadge?: string;
  tag?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  officialBadge = 'Original Product',
  tag
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Guarantee at least 4 views
  const displayImages = images.length >= 4 ? images : [
    ...images,
    ...images,
    ...images,
    ...images
  ].slice(0, 4);

  const activeImage = displayImages[selectedIndex] || displayImages[0];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % displayImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
      {/* Thumbnails list (Desktop: vertical on left; Mobile: horizontal below) */}
      <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar shrink-0 justify-start">
        {displayImages.map((img, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#F8F7FA] p-1.5 border-2 transition-all cursor-pointer overflow-hidden shrink-0 ${
                isSelected
                  ? 'border-[#EC078A] shadow-md ring-2 ring-[#EC078A]/20'
                  : 'border-[#EAE7F1] hover:border-[#211078]/30 opacity-80 hover:opacity-100'
              }`}
              aria-label={`View ${img.label || `Angle ${idx + 1}`}`}
            >
              <img
                src={img.url}
                alt={img.alt || `${productName} angle ${idx + 1}`}
                className="w-full h-full object-contain mix-blend-multiply"
              />
              {img.label && (
                <span className="hidden lg:block absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-white text-center py-0.5 truncate px-1">
                  {img.label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Large Image Container */}
      <div className="relative flex-1 aspect-square sm:aspect-4/3 lg:aspect-square bg-[#F8F7FA] rounded-2xl border border-[#EAE7F1] p-6 sm:p-8 flex items-center justify-center overflow-hidden group">
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
          {officialBadge && (
            <span className="inline-flex items-center gap-1 bg-[#10B981] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
              <Check className="w-3 h-3 stroke-[3]" />
              {officialBadge}
            </span>
          )}
          {tag && (
            <span className="inline-flex items-center gap-1 bg-[#EC078A] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
              {tag}
            </span>
          )}
        </div>

        {/* Lightbox Trigger */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#17152D] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          aria-label="Enlarge image"
        >
          <Maximize2 className="w-4 h-4 text-[#211078]" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#17152D] shadow-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
          aria-label="Previous view"
        >
          <ChevronLeft className="w-5 h-5 text-[#211078]" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#17152D] shadow-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
          aria-label="Next view"
        >
          <ChevronRight className="w-5 h-5 text-[#211078]" />
        </button>

        {/* Main Display Image */}
        <img
          src={activeImage.url}
          alt={activeImage.alt || productName}
          className="w-full h-full object-contain mix-blend-multiply transition-all duration-300 transform group-hover:scale-103"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('hero_smartphones_lineup_1791959963891.jpg')) {
              target.src = '/images/hero_smartphones_lineup_1791959963891.jpg';
            }
          }}
        />

        {/* View Indicator Label */}
        {activeImage.label && (
          <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#211078] px-2.5 py-1 rounded-md border border-[#EAE7F1]">
            {activeImage.label}
          </span>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center cursor-pointer"
            aria-label="Close zoomed view"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] p-4 flex items-center justify-center">
            <img
              src={activeImage.url}
              alt={activeImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
