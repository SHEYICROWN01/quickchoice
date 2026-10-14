export interface ProductImage {
  url: string;
  alt: string;
  label?: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductSpecificationGroup {
  group: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Tecno' | 'Infinix' | 'itel' | 'Xiaomi' | 'Google' | 'Nothing' | 'Other';
  category: 'smartphones' | 'tablets' | 'accessories' | 'deals';
  tag?: 'New' | 'Hot' | 'Best Seller' | '7% OFF' | '10% OFF' | 'Limited Stock';
  officialBadge?: string;
  price: number; // in NGN
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  soldCount?: number;
  inStock: boolean;
  stockCount: number;
  shortDescription: string;
  fullDescription: string;
  images: ProductImage[];
  storageOptions?: string[];
  defaultStorage?: string;
  colors: ProductColor[];
  defaultColor?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  specifications: ProductSpecificationGroup[];
  boxContents: string[];
  warranty: string;
  deliveryEstimate: string;
  specialOffer?: string;
  sellersSpeech?: {
    headline: string;
    intro: string;
    bullets: string[];
    guarantee: string;
  };
  relatedProductIds: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  selectedStorage?: string;
  selectedColor?: string;
  quantity: number;
  unitPrice: number;
}

export interface FilterOptions {
  brand?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  storage?: string;
  inStockOnly?: boolean;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  searchQuery?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  storage?: string;
  color?: string;
  price: number;
}

export interface CustomerOrder {
  orderId: string;
  date: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  paymentMethod: string;
  deliveryMethod: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'Processing' | 'Confirmed' | 'Shipped' | 'Out for Delivery' | 'Delivered';
}
