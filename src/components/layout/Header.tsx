import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../common/Logo';
import { CATEGORIES } from '../../data/products';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  PackageCheck,
  HelpCircle,
  Percent,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    activeRoute,
    navigate,
    cartCount,
    wishlistCount,
    searchQuery,
    setSearchQuery
  } = useShop();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch.trim());
      navigate(`/search?q=${encodeURIComponent(localSearch.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Phones', path: '/phones' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Brands', path: '/brands' },
    { label: 'Wholesale', path: '/wholesale' },
    { label: 'Deals', path: '/deals' },
    { label: 'New Arrivals', path: '/new-arrivals' },
    { label: 'Trade In', path: '/trade-in' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-[#EAE7F1]">
      {/* 1. Announcement Strip - Strictly Desktop Only, completely hidden on mobile view */}
      <div className="hidden lg:block bg-[#211078] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <p className="font-medium tracking-tight text-white/95">
            Nigeria's Trusted Destination for Original Phones | Wholesale & Retail
          </p>
          <div className="flex items-center gap-4 text-xs font-medium text-white/90">
            <button
              onClick={() => navigate('/track-order')}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <PackageCheck className="w-3.5 h-3.5 text-[#EC078A]" />
              <span>Track Order</span>
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => navigate('/help')}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-white/80" />
              <span>Help Center</span>
            </button>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <span>🇳🇬</span>
              <span>NGN</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => navigate('/')}
          className="cursor-pointer text-left focus:outline-none"
          aria-label="Quick Choice Telecommunications Home"
        >
          <Logo size="md" />
        </button>

        {/* Global Search Bar (Desktop) */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-xl mx-4 relative"
        >
          <div className="relative w-full flex items-center">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search for phones, accessories, brands..."
              className="w-full bg-[#F5F1FF]/60 hover:bg-[#F5F1FF] focus:bg-white text-sm text-[#17152D] placeholder-[#68677A] pl-4 pr-12 py-2.5 rounded-lg border border-[#EAE7F1] focus:border-[#EC078A] focus:ring-2 focus:ring-[#EC078A]/20 transition-all outline-none"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3.5 bg-[#EC078A] hover:bg-[#D6067C] text-white rounded-md flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Submit Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Account Button */}
          <button
            onClick={() => navigate('/account')}
            className="hidden sm:flex items-center gap-2 text-left hover:text-[#EC078A] transition-colors p-1.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#F5F1FF] flex items-center justify-center text-[#211078]">
              <User className="w-4 h-4" />
            </div>
            <div className="hidden lg:block leading-tight">
              <span className="text-[11px] text-[#68677A] block font-medium">Account</span>
              <span className="text-xs font-bold text-[#17152D]">Sign In</span>
            </div>
          </button>

          {/* Wishlist */}
          <button
            onClick={() => navigate('/wishlist')}
            className="relative p-2 rounded-lg hover:bg-[#F5F1FF] text-[#17152D] hover:text-[#EC078A] transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Wishlist"
          >
            <div className="relative">
              <Heart className="w-5 h-5 text-[#211078]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#EC078A] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="hidden lg:inline text-xs font-semibold text-[#17152D]">Wishlist</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => navigate('/cart')}
            className="relative p-2 rounded-lg hover:bg-[#F5F1FF] text-[#17152D] hover:text-[#EC078A] transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Shopping Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-[#211078]" />
              <span className="absolute -top-1.5 -right-2 bg-[#EC078A] text-white text-[10px] font-extrabold min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            <span className="hidden lg:inline text-xs font-semibold text-[#17152D]">Cart</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#211078] hover:bg-[#F5F1FF] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="relative flex items-center">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search phones, accessories, brands..."
            className="w-full bg-[#F5F1FF] text-sm text-[#17152D] placeholder-[#68677A] pl-3.5 pr-11 py-2 rounded-lg border border-[#EAE7F1] outline-none focus:border-[#EC078A]"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 px-3 bg-[#EC078A] text-white rounded-md flex items-center justify-center"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* 3. Primary Navigation Bar (Desktop) */}
      <div className="hidden md:block bg-white border-t border-[#EAE7F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* All Categories Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="bg-[#EC078A] hover:bg-[#D6067C] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Menu className="w-4 h-4" />
                <span>All Categories</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Categories Dropdown Panel */}
              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#EAE7F1] shadow-xl py-2 rounded-b-xl z-50">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        navigate(cat.id === 'smartphones' ? '/phones' : `/categories/${cat.id}`);
                        setCategoryDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-medium text-[#17152D] hover:bg-[#F5F1FF] hover:text-[#EC078A] flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[11px] text-[#68677A] bg-[#F5F1FF] px-1.5 py-0.5 rounded">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  activeRoute === link.path ||
                  (link.path !== '/' && activeRoute.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`px-3 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors relative cursor-pointer ${
                      isActive
                        ? 'text-[#EC078A]'
                        : 'text-[#17152D] hover:text-[#EC078A]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#EC078A]" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Wholesale Helpline Pill */}
          <button
            onClick={() => navigate('/wholesale')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#211078] hover:text-[#EC078A] transition-colors py-1 px-2.5 rounded-full bg-[#F5F1FF] hover:bg-[#FFF0F8] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EC078A]" />
            <span>Wholesale Orders</span>
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[110px] bg-black/40 z-40 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto p-4 border-b border-[#EAE7F1] shadow-2xl flex flex-col gap-3">
            <div className="text-xs font-bold text-[#68677A] uppercase tracking-wider px-2 pt-2">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeRoute === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-2.5 rounded-lg text-left text-xs font-semibold flex items-center justify-between ${
                      isActive
                        ? 'bg-[#FFF0F8] text-[#EC078A] font-bold'
                        : 'bg-[#F5F1FF]/60 text-[#17152D] hover:bg-[#F5F1FF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-[#68677A]" />
                  </button>
                );
              })}
            </div>

            <div className="border-t border-[#EAE7F1] pt-3 mt-1">
              <div className="text-xs font-bold text-[#68677A] uppercase tracking-wider px-2 mb-2">
                Popular Categories
              </div>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigate(cat.id === 'smartphones' ? '/phones' : `/categories/${cat.id}`);
                      setMobileMenuOpen(false);
                    }}
                    className="p-2 text-left text-xs font-medium text-[#17152D] bg-[#F5F1FF] rounded-lg hover:text-[#EC078A]"
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[#EAE7F1] pt-3 mt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  navigate('/wholesale');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl text-center transition-colors cursor-pointer"
              >
                Request Wholesale Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
