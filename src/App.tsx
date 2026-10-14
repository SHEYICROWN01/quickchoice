import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CatalogPage } from './pages/CatalogPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { WholesalePage } from './pages/WholesalePage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';

const AppContent: React.FC = () => {
  const { activeRoute } = useShop();

  const renderCurrentPage = () => {
    // 1. Individual Phone Detail Route: /phones/:slug
    if (activeRoute.startsWith('/phones/') && activeRoute.length > 8) {
      const slug = activeRoute.replace('/phones/', '').split('?')[0];
      return <ProductDetailPage slug={slug} />;
    }

    // 2. Category Route: /categories/:slug
    if (activeRoute.startsWith('/categories/')) {
      const slug = activeRoute.replace('/categories/', '').split('?')[0];
      return <CatalogPage initialCategory={slug} />;
    }

    // 3. Brand Route: /brands/:slug
    if (activeRoute.startsWith('/brands/')) {
      const slug = activeRoute.replace('/brands/', '').split('?')[0];
      return <CatalogPage initialBrand={slug} />;
    }

    // 4. Exact standard routes
    switch (activeRoute.split('?')[0]) {
      case '/phones':
        return <CatalogPage />;
      case '/accessories':
        return <CatalogPage isAccessories />;
      case '/deals':
        return <CatalogPage isDeals />;
      case '/new-arrivals':
        return <CatalogPage isNewArrivals />;
      case '/brands':
        return <CatalogPage />;
      case '/search':
        return <CatalogPage />;
      case '/cart':
        return <CartPage />;
      case '/checkout':
        return <CheckoutPage />;
      case '/wishlist':
        return <WishlistPage />;
      case '/wholesale':
        return <WholesalePage />;
      case '/track-order':
        return <TrackOrderPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PolicyPage type="privacy" />;
      case '/terms':
        return <PolicyPage type="terms" />;
      case '/shipping-returns':
        return <PolicyPage type="shipping" />;
      case '/help':
        return <PolicyPage type="help" />;
      case '/trade-in':
        return <PolicyPage type="tradein" />;
      case '/account':
        return (
          <div className="bg-[#FAF9FC] min-h-[60vh] py-16 px-4 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-[#EAE7F1] text-center space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center mx-auto text-xl font-bold">
                👤
              </div>
              <h2 className="text-xl font-bold text-[#17152D]">Quick Choice Account Portal</h2>
              <p className="text-xs text-[#68677A]">
                Customer accounts and wholesale buyer login portal. (Demonstration Mode)
              </p>
              <div className="space-y-3 pt-2 text-left text-xs">
                <div>
                  <label className="block font-bold text-[#17152D] mb-1">Email or Phone</label>
                  <input
                    type="text"
                    placeholder="e.g. adeshile@gmail.com or 08012345678"
                    className="w-full p-2.5 bg-[#F8F7FA] border border-[#EAE7F1] rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#17152D] mb-1">Password / OTP</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-2.5 bg-[#F8F7FA] border border-[#EAE7F1] rounded-lg outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-2.5 bg-[#211078] hover:bg-[#14094B] text-white font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        );
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-[#17152D]">
      <Header />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
