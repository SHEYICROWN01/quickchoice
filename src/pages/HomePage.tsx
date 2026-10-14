import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryStrip } from '../components/home/CategoryStrip';
import { PromoBanners } from '../components/home/PromoBanners';
import { TrustFeatures } from '../components/home/TrustFeatures';
import { FeaturedPhones } from '../components/home/FeaturedPhones';
import { TradeInBanner } from '../components/home/TradeInBanner';
import { BrandSelector } from '../components/home/BrandSelector';
import { AccessoriesWholesalePanels } from '../components/home/AccessoriesWholesalePanels';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { LatestArticles } from '../components/home/LatestArticles';
import { Newsletter } from '../components/home/Newsletter';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#FAF9FC] min-h-screen">
      {/* 1. Cinematic Hero Banner */}
      <HeroBanner />

      {/* 2. Product Category Shortcuts */}
      <CategoryStrip />

      {/* 3. Featured Promotional Banners (iPhone 16 Series & Samsung S25) */}
      <PromoBanners />

      {/* 4. Trust & Service Highlights Strip */}
      <TrustFeatures />

      {/* 5. Featured Phones Section with Live Brand Filters */}
      <FeaturedPhones />

      {/* 6. Trade-In & Upgrade Banner */}
      <TradeInBanner />

      {/* 7. Shop by Brand */}
      <BrandSelector />

      {/* 8. Accessories & Wholesale Dual Promotion Panels */}
      <AccessoriesWholesalePanels />

      {/* 9. Why Choose Quick Choice? */}
      <WhyChooseUs />

      {/* 10. Customer Reviews ("What Our Customers Say") */}
      <CustomerReviews />

      {/* 11. Latest Updates Editorial Articles */}
      <LatestArticles />

      {/* 12. Newsletter Subscription */}
      <Newsletter />
    </div>
  );
};
