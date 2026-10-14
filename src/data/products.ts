import { Product, Review } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'qc-iphone-16-pro-max',
    slug: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    tag: 'New',
    officialBadge: 'Official Apple Product',
    price: 2150000,
    originalPrice: 2300000,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 120,
    soldCount: 350,
    inStock: true,
    stockCount: 18,
    shortDescription: '6.9-inch Super Retina XDR OLED, A18 Pro chip, Grade 5 Titanium design, and pro camera system.',
    fullDescription: 'iPhone 16 Pro Max. A whole new era of iPhone. Featuring a stunning titanium design, the powerful A18 Pro chip, an advanced camera system with Camera Control button, and a longer-lasting battery. Built for Apple Intelligence to provide unmatched performance in everyday use and creative workflows.',
    images: [
      {
        url: '/images/iphone_16_front_1791959991199.jpg',
        alt: 'iPhone 16 Pro Max front display view with Dynamic Island',
        label: 'Front View'
      },
      {
        url: '/images/iphone_16_back_1791959991613.jpg',
        alt: 'iPhone 16 Pro Max rear triple camera and Desert Titanium glass',
        label: 'Rear View'
      },
      {
        url: '/images/iphone_16_side_1791959992486.jpg',
        alt: 'iPhone 16 Pro Max titanium edge profile and action button',
        label: 'Side Profile'
      },
      {
        url: '/images/iphone_16_angle_1791959992258.jpg',
        alt: 'iPhone 16 Pro Max three-quarter perspective dynamic angle',
        label: '3/4 Angle'
      }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Desert Titanium', hex: '#C2A792', image: '/images/iphone_16_front_1791959991199.jpg' },
      { name: 'Natural Titanium', hex: '#8B8884', image: '/images/iphone_16_back_1791959991613.jpg' },
      { name: 'White Titanium', hex: '#EBEAE8', image: '/images/iphone_16_side_1791959992486.jpg' },
      { name: 'Black Titanium', hex: '#3C3B3D', image: '/images/iphone_16_angle_1791959992258.jpg' }
    ],
    defaultColor: 'Desert Titanium',
    specialOffer: 'Special Offer: Get free premium case + tempered screen protector + 20W fast adapter 🎁',
    features: [
      {
        icon: 'Cpu',
        title: 'A18 Pro Chip',
        description: 'Superfast 6-core GPU, next-gen Neural Engine built for Apple Intelligence.'
      },
      {
        icon: 'Camera',
        title: 'Pro Camera System',
        description: '48MP Fusion Camera, 48MP Ultra Wide, 5x Telephoto with Camera Control.'
      },
      {
        icon: 'BatteryCharging',
        title: 'All-day Battery',
        description: 'Up to 33 hours video playback, 50% charge in ~30 minutes with 25W+.'
      },
      {
        icon: 'Smartphone',
        title: '6.9" Super Retina XDR',
        description: 'Always-On ProMotion 120Hz display with Ceramic Shield front glass.'
      }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Apple' },
          { label: 'Model', value: 'iPhone 16 Pro Max' },
          { label: 'Release Year', value: '2024 / 2025' },
          { label: 'Form Factor', value: 'Grade 5 Titanium with textured matte glass' },
          { label: 'SIM Configuration', value: 'Nano-SIM and eSIM (Dual active eSIM supported)' }
        ]
      },
      {
        group: 'Display',
        items: [
          { label: 'Screen Size', value: '6.9 inches diagonal' },
          { label: 'Resolution', value: '2868 x 1320 pixels at 460 ppi' },
          { label: 'Display Technology', value: 'Super Retina XDR OLED, ProMotion 1Hz–120Hz' },
          { label: 'Peak Brightness', value: '2,000 nits outdoor peak brightness' }
        ]
      },
      {
        group: 'Performance',
        items: [
          { label: 'Processor', value: 'A18 Pro chip (6-core CPU with 2 performance and 4 efficiency cores)' },
          { label: 'GPU', value: '6-core Apple-designed GPU with Hardware Ray Tracing' },
          { label: 'RAM', value: '8GB unified memory' },
          { label: 'Storage', value: '256GB / 512GB / 1TB NVMe' },
          { label: 'Operating System', value: 'iOS 18 (Upgradable)' }
        ]
      },
      {
        group: 'Camera',
        items: [
          { label: 'Rear System', value: '48MP Fusion (24mm, f/1.78) + 48MP Ultra Wide (13mm, f/2.2) + 12MP 5x Telephoto (120mm, f/2.8)' },
          { label: 'Front Camera', value: '12MP TrueDepth front camera with autofocus' },
          { label: 'Video Recording', value: '4K Dolby Vision recording at 120 fps, Spatial Video capture' }
        ]
      },
      {
        group: 'Battery & Connectivity',
        items: [
          { label: 'Battery Life', value: 'Up to 33 hours video playback' },
          { label: 'Charging', value: 'Fast USB-C charging (50% in ~30 min with 20W+), MagSafe wireless up to 25W' },
          { label: 'Cellular / Wireless', value: '5G (sub-6 GHz and mmWave), Wi-Fi 7 (802.11be), Bluetooth 5.3, Ultra Wideband 2' },
          { label: 'Port', value: 'USB-C with USB 3 support (speeds up to 10Gb/s)' }
        ]
      },
      {
        group: 'Durability & Dimensions',
        items: [
          { label: 'Water & Dust Resistance', value: 'Rated IP68 (maximum depth of 6 meters up to 30 minutes)' },
          { label: 'Dimensions', value: '163.0 mm x 77.6 mm x 8.25 mm' },
          { label: 'Weight', value: '227 grams' }
        ]
      }
    ],
    boxContents: [
      'iPhone 16 Pro Max',
      'USB-C Charge Cable (1m, Braided)',
      'Quick Start Documentation',
      'SIM Eject Tool'
    ],
    warranty: '1 Year Official Manufacturer Limited Warranty + 7 Days Store Return Window',
    deliveryEstimate: '1 to 3 business days nationwide across Nigeria (Same-day delivery available in Lagos)',
    sellersSpeech: {
      headline: "Seller's Speech",
      intro: "Looking for an original, high-quality iPhone 16 Pro Max at the best price in Nigeria? You're in the right place! At Quick Choice Telecommunications, we offer 100% original Apple products with full warranty, competitive prices, and nationwide delivery.",
      bullets: [
        'Brand new and factory sealed device',
        'Comes with official Apple warranty and verification',
        'Best prices for both retail and bulk wholesale buyers',
        'Nationwide insured delivery directly to your doorstep',
        'Secure payment options via Bank Transfer, Paystack, or Card',
        'Dedicated after-sales support before, during, and after purchase'
      ],
      guarantee: "Buy with confidence from a trusted phone store. Quality phones, genuine products, and excellent customer service — that's our promise!"
    },
    relatedProductIds: [
      'qc-iphone-16-pro',
      'qc-samsung-s25-ultra',
      'qc-iphone-16',
      'qc-google-pixel-9-pro',
      'qc-nothing-2a',
      'qc-tecno-phantom-vfold'
    ],
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: 'qc-samsung-s25-ultra',
    slug: 'samsung-galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    tag: 'Hot',
    officialBadge: 'Official Samsung Partner',
    price: 1800000,
    originalPrice: 1950000,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 95,
    soldCount: 220,
    inStock: true,
    stockCount: 14,
    shortDescription: 'Galaxy AI flagship with Snapdragon 8 Elite, 200MP camera, titanium frame, and built-in S-Pen.',
    fullDescription: 'Samsung Galaxy S25 Ultra sets the gold standard for Android performance. Equipped with the revolutionary Snapdragon 8 Elite for Galaxy, pro-grade 200MP quad camera array, titanium build, and intelligent Galaxy AI features.',
    images: [
      {
        url: '/images/phone_samsung_s25_ultra_1791960020151.jpg',
        alt: 'Samsung Galaxy S25 Ultra front and rear view with S-Pen',
        label: 'Front & Back View'
      },
      {
        url: '/images/banner_samsung_galaxy_s25_1791959964904.jpg',
        alt: 'Samsung Galaxy S25 Ultra side angle showcasing camera system',
        label: 'Flagship Showcase'
      },
      {
        url: '/images/hero_smartphones_lineup_1791959963891.jpg',
        alt: 'Samsung Galaxy S25 Ultra studio setup',
        label: 'Studio Angle'
      },
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'Samsung Galaxy S25 Ultra trade in perspective',
        label: 'Perspective'
      }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    defaultStorage: '512GB',
    colors: [
      { name: 'Titanium Gray', hex: '#6D6E71', image: '/images/phone_samsung_s25_ultra_1791960020151.jpg' },
      { name: 'Titanium Black', hex: '#2B2B2D', image: '/images/banner_samsung_galaxy_s25_1791959964904.jpg' },
      { name: 'Titanium Violet', hex: '#584E6E', image: '/images/banner_samsung_galaxy_s25_1791959964904.jpg' }
    ],
    defaultColor: 'Titanium Gray',
    specialOffer: 'Special Offer: Free Samsung 45W Super Fast Charger + Standing Clear Case 🎁',
    features: [
      {
        icon: 'Cpu',
        title: 'Snapdragon 8 Elite',
        description: 'Leading 3nm processor with custom Oryon cores and vapor chamber cooling.'
      },
      {
        icon: 'Camera',
        title: '200MP Quad Camera',
        description: '200MP wide, 50MP periscope 5x optical, 10MP 3x optical, 50MP ultrawide.'
      },
      {
        icon: 'BatteryCharging',
        title: '5,000mAh Battery',
        description: '45W wired charging, 15W wireless charging, reverse wireless charging.'
      },
      {
        icon: 'Smartphone',
        title: 'Built-in S-Pen',
        description: 'Integrated stylus with ultra-low 2.8ms latency and Bluetooth Air Actions.'
      }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Samsung' },
          { label: 'Model', value: 'Galaxy S25 Ultra' },
          { label: 'Release Year', value: '2025' },
          { label: 'Build', value: 'Armor Aluminum 2 & Grade 5 Titanium with Corning Gorilla Armor glass' }
        ]
      },
      {
        group: 'Display',
        items: [
          { label: 'Display Size', value: '6.86 inches Dynamic AMOLED 2X' },
          { label: 'Resolution', value: '3120 x 1440 pixels (QHD+)' },
          { label: 'Refresh Rate', value: '1Hz - 120Hz Adaptive ProMotion' },
          { label: 'Peak Brightness', value: '2,600 nits peak' }
        ]
      },
      {
        group: 'Performance',
        items: [
          { label: 'Processor', value: 'Qualcomm Snapdragon 8 Elite for Galaxy (3nm)' },
          { label: 'RAM', value: '12GB / 16GB LPDDR5X' },
          { label: 'Storage', value: '256GB / 512GB / 1TB UFS 4.0' },
          { label: 'OS', value: 'Android 15 with One UI 7 (7 years OS upgrades)' }
        ]
      }
    ],
    boxContents: [
      'Samsung Galaxy S25 Ultra',
      'Integrated S-Pen Stylus',
      'USB-C to USB-C Cable',
      'SIM Removal Tool',
      'Quick Start Guide'
    ],
    warranty: '24 Months Samsung West Africa Official Warranty',
    deliveryEstimate: '1-3 business days nationwide (Same-day delivery in Lagos & Abuja)',
    sellersSpeech: {
      headline: "Seller's Speech",
      intro: "Looking for peak Android productivity and camera mastery? The Samsung Galaxy S25 Ultra at Quick Choice Telecommunications comes with genuine manufacturer warranty and direct factory sourcing.",
      bullets: [
        'Brand new Nigerian-spec device with full local network band support',
        'Official 2-year Samsung West Africa warranty with free screen assurance',
        'Special wholesale discounts for phone dealers and corporate procurement',
        'Doorstep insured courier delivery to all 36 states and FCT',
        '24/7 dedicated customer care and product setup support'
      ],
      guarantee: 'Authenticity guaranteed: Every unit carries verified IMEI checkable at any authorized Samsung service center.'
    },
    relatedProductIds: [
      'qc-iphone-16-pro-max',
      'qc-iphone-16-pro',
      'qc-tecno-phantom-vfold',
      'qc-google-pixel-9-pro'
    ],
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: 'qc-tecno-camon-30-pro',
    slug: 'tecno-camon-30-pro',
    name: 'Tecno Camon 30 Pro 5G',
    brand: 'Tecno',
    category: 'smartphones',
    tag: 'Hot',
    price: 420000,
    originalPrice: 450000,
    discountPercentage: 7,
    rating: 4.6,
    reviewCount: 78,
    soldCount: 410,
    inStock: true,
    stockCount: 25,
    shortDescription: 'MediaTek Dimensity 8200 Ultimate, 50MP Sony IMX890 OIS camera, 144Hz AMOLED display.',
    fullDescription: 'The Tecno Camon 30 Pro 5G is a powerhouse photography smartphone specifically tailored for Nigerian creators. Equipped with dual 50MP Sony flagship sensors with Optical Image Stabilization and lightning-fast 70W Ultra Charge.',
    images: [
      {
        url: '/images/phone_tecno_camon30_1791960020075.jpg',
        alt: 'Tecno Camon 30 Pro 5G in Ice Silver finish',
        label: 'Front & Back View'
      },
      {
        url: '/images/phone_tecno_camon30_1791960020075.jpg',
        alt: 'Tecno Camon 30 Pro 5G camera module closeup',
        label: 'Camera Detail'
      },
      {
        url: '/images/phone_samsung_s25_ultra_1791960020151.jpg',
        alt: 'Tecno Camon 30 Pro side profile',
        label: 'Side Profile'
      },
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'Tecno Camon 30 Pro display view',
        label: 'Display View'
      }
    ],
    storageOptions: ['256GB', '512GB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Ice Silver', hex: '#D2D7DF', image: '/images/phone_tecno_camon30_1791960020075.jpg' },
      { name: 'Emerald Green', hex: '#274E45' }
    ],
    defaultColor: 'Ice Silver',
    features: [
      { icon: 'Camera', title: '50MP Sony IMX890', description: 'Flagship 1/1.56" sensor with OIS and 4K 60fps recording.' },
      { icon: 'Zap', title: '70W Ultra Charge', description: 'Charges the 5000mAh battery from 0 to 100% in 45 minutes.' },
      { icon: 'Cpu', title: 'Dimensity 8200 Ultimate', description: 'TSMC 4nm 5G chipset with high gaming frame rates.' },
      { icon: 'Smartphone', title: '144Hz AMOLED Display', description: 'Smooth 6.78" FHD+ display with Dolby Atmos stereo speakers.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Tecno' },
          { label: 'Model', value: 'Camon 30 Pro 5G' },
          { label: 'RAM', value: '12GB (+12GB Extended RAM)' },
          { label: 'Internal Storage', value: '256GB' },
          { label: 'Battery', value: '5000mAh with 70W Flash Charge' }
        ]
      }
    ],
    boxContents: [
      'Tecno Camon 30 Pro 5G',
      '70W Fast Charger Adapter',
      'USB-C Cable',
      'Protective Phone Case',
      'Screen Protector (Pre-installed)',
      'SIM Ejector Pin'
    ],
    warranty: '13 Months Carlcare Official Warranty across Nigeria',
    deliveryEstimate: '1-3 days nationwide',
    sellersSpeech: {
      headline: "Seller's Speech",
      intro: "Looking for top-tier camera and performance without paying million-naira flagship prices? The Tecno Camon 30 Pro 5G is the top-recommended choice by our technicians.",
      bullets: [
        '100% original brand new sealed phone with Carlcare warranty',
        'Factory fast charger included inside the box',
        'Available in retail and bulk wholesale quantities for dealers',
        'Same-day dispatch in Lagos with door-to-door delivery nationwide'
      ],
      guarantee: 'Genuine Carlcare warranty registration included on purchase.'
    },
    relatedProductIds: ['qc-infinix-zero-40', 'qc-itel-s24', 'qc-nothing-2a'],
    isFeatured: true
  },
  {
    id: 'qc-infinix-zero-40',
    slug: 'infinix-zero-40',
    name: 'Infinix Zero 40 5G',
    brand: 'Infinix',
    category: 'smartphones',
    tag: 'New',
    price: 380000,
    originalPrice: 410000,
    discountPercentage: 7,
    rating: 4.5,
    reviewCount: 64,
    soldCount: 310,
    inStock: true,
    stockCount: 20,
    shortDescription: '108MP OIS 4K 60fps vlogging phone, 144Hz 3D curved AMOLED, Dimensity 8200.',
    fullDescription: 'Infinix Zero 40 5G brings cinematic vlogging to the palm of your hand. Featuring GoPro integration mode, a 50MP 4K60 front camera, and a gorgeous 144Hz 3D curved AMOLED screen.',
    images: [
      {
        url: '/images/phone_infinix_zero40_1791960020743.jpg',
        alt: 'Infinix Zero 40 5G in Violet Garden finish',
        label: 'Front & Back View'
      },
      {
        url: '/images/phone_infinix_zero40_1791960020743.jpg',
        alt: 'Infinix Zero 40 5G circular camera module',
        label: 'Camera Array'
      },
      {
        url: '/images/phone_samsung_s25_ultra_1791960020151.jpg',
        alt: 'Infinix Zero 40 5G curved screen',
        label: 'Display Angle'
      },
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'Infinix Zero 40 5G profile',
        label: 'Profile View'
      }
    ],
    storageOptions: ['256GB', '512GB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Violet Garden', hex: '#63537C', image: '/images/phone_infinix_zero40_1791960020743.jpg' },
      { name: 'Moving Titanium', hex: '#444648' },
      { name: 'Rock Black', hex: '#1C1C1E' }
    ],
    defaultColor: 'Violet Garden',
    features: [
      { icon: 'Camera', title: '108MP OIS + 50MP Front', description: 'Dual 4K 60fps front and back video with Pro Vlog mode.' },
      { icon: 'Smartphone', title: '144Hz 3D Curved AMOLED', description: 'Ultra-immersive borderless screen with Corning Gorilla Glass.' },
      { icon: 'Zap', title: '45W Wired + 20W Wireless', description: 'Complete wireless and fast charging options in mid-range.' },
      { icon: 'Cpu', title: 'MediaTek Dimensity 8200', description: 'Ultra-efficient 4nm 5G platform with peak graphics.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Infinix' },
          { label: 'Model', value: 'Zero 40 5G' },
          { label: 'RAM', value: '12GB + 12GB Extended' },
          { label: 'Storage', value: '256GB' },
          { label: 'Battery', value: '5000mAh with 45W Fast Charge' }
        ]
      }
    ],
    boxContents: [
      'Infinix Zero 40 5G',
      '45W Fast Charger',
      'Type-C Data Cable',
      'Protective Case',
      'SIM Eject Tool',
      'Warranty Card'
    ],
    warranty: '13 Months Carlcare Official Warranty across Nigeria',
    deliveryEstimate: '1-3 days nationwide',
    sellersSpeech: {
      headline: "Seller's Speech",
      intro: "Content creators and mobile vloggers in Nigeria trust the Infinix Zero 40 5G for its front-and-back 4K 60fps recording and wireless charging support.",
      bullets: [
        'Genuine device with Carlcare countrywide support',
        'Includes wireless charging capability and fast charger in the box',
        'Wholesale pricing for batch orders',
        'Swift delivery across all states in Nigeria'
      ],
      guarantee: 'Insured delivery and guaranteed original product.'
    },
    relatedProductIds: ['qc-tecno-camon-30-pro', 'qc-itel-s24', 'qc-nothing-2a'],
    isFeatured: true
  },
  {
    id: 'qc-itel-s24',
    slug: 'itel-s24',
    name: 'itel S24',
    brand: 'itel',
    category: 'smartphones',
    price: 220000,
    originalPrice: 240000,
    discountPercentage: 8,
    rating: 4.6,
    reviewCount: 110,
    soldCount: 520,
    inStock: true,
    stockCount: 35,
    shortDescription: '108MP Ultra-Clear camera, MediaTek Helio G91, 120Hz display, 5000mAh battery.',
    fullDescription: 'The itel S24 redefines value in the entry smartphone segment with an astonishing 108MP ultra-clear camera, color-changing back cover, fluid 90Hz punch-hole screen, and massive battery life.',
    images: [
      {
        url: '/images/phone_itel_s24_1791960021068.jpg',
        alt: 'itel S24 in Champagne Gold finish',
        label: 'Front & Back View'
      },
      {
        url: '/images/phone_itel_s24_1791960021068.jpg',
        alt: 'itel S24 rear camera',
        label: 'Rear Detail'
      },
      {
        url: '/images/phone_samsung_s25_ultra_1791960020151.jpg',
        alt: 'itel S24 display view',
        label: 'Display View'
      },
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'itel S24 angle view',
        label: 'Angle'
      }
    ],
    storageOptions: ['128GB', '256GB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Champagne Gold', hex: '#E5D3B3', image: '/images/phone_itel_s24_1791960021068.jpg' },
      { name: 'Coastline Blue', hex: '#4C6E96' }
    ],
    defaultColor: 'Champagne Gold',
    features: [
      { icon: 'Camera', title: '108MP Ultra-Clear', description: 'Flagship-grade sensor with 3x in-sensor zoom and Super Night mode.' },
      { icon: 'Cpu', title: 'Helio G91 Ultimate', description: 'Reliable octa-core performance for smooth everyday multitasking.' },
      { icon: 'BatteryCharging', title: '5000mAh + 18W Fast Charge', description: 'Long-lasting battery with Type-C fast charging.' },
      { icon: 'Smartphone', title: '90Hz Punch-Hole Screen', description: 'Smooth fluid animations and Dynamic Bar notifications.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'itel' },
          { label: 'Model', value: 'S24' },
          { label: 'RAM', value: '8GB (+8GB Extended)' },
          { label: 'Storage', value: '256GB' },
          { label: 'Battery', value: '5000mAh with 18W Fast Charging' }
        ]
      }
    ],
    boxContents: [
      'itel S24 Smartphone',
      '18W Fast Charger',
      'USB-C Cable',
      'Transparent Case',
      'Earpiece',
      'User Manual'
    ],
    warranty: '12 Months Carlcare Warranty',
    deliveryEstimate: '1-3 days nationwide',
    sellersSpeech: {
      headline: "Seller's Speech",
      intro: "Looking for an affordable smartphone with high-end camera capabilities? The itel S24 provides unbelievable value for students, business owners, and everyday users in Nigeria.",
      bullets: [
        'Top-rated budget 108MP phone in Nigeria',
        'Carlcare warranty backing with service centers in every state',
        'Bulk cartons available at wholesale price for phone retailers',
        'Fast delivery guaranteed'
      ],
      guarantee: '100% brand new sealed product with full accessories in box.'
    },
    relatedProductIds: ['qc-tecno-camon-30-pro', 'qc-infinix-zero-40'],
    isFeatured: true
  },
  {
    id: 'qc-iphone-16-pro',
    slug: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'smartphones',
    tag: 'New',
    officialBadge: 'Official Apple Product',
    price: 1850000,
    originalPrice: 1980000,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 98,
    soldCount: 280,
    inStock: true,
    stockCount: 16,
    shortDescription: '6.3-inch Super Retina XDR, A18 Pro chip, Grade 5 Titanium, 48MP Pro camera system.',
    fullDescription: 'iPhone 16 Pro packs the incredible power of the A18 Pro chip, Camera Control, 48MP Ultra Wide camera, and 5x Telephoto into a handy 6.3-inch titanium design.',
    images: [
      {
        url: '/images/iphone_16_angle_1791959992258.jpg',
        alt: 'iPhone 16 Pro titanium view',
        label: 'Front View'
      },
      {
        url: '/images/iphone_16_back_1791959991613.jpg',
        alt: 'iPhone 16 Pro rear view',
        label: 'Rear View'
      },
      {
        url: '/images/iphone_16_side_1791959992486.jpg',
        alt: 'iPhone 16 Pro side view',
        label: 'Side View'
      },
      {
        url: '/images/iphone_16_front_1791959991199.jpg',
        alt: 'iPhone 16 Pro display view',
        label: 'Display View'
      }
    ],
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Desert Titanium', hex: '#C2A792' },
      { name: 'Natural Titanium', hex: '#8B8884' },
      { name: 'White Titanium', hex: '#EBEAE8' },
      { name: 'Black Titanium', hex: '#3C3B3D' }
    ],
    defaultColor: 'Desert Titanium',
    features: [
      { icon: 'Cpu', title: 'A18 Pro Chip', description: 'Industry-leading performance with 6-core GPU.' },
      { icon: 'Camera', title: '48MP Pro Camera', description: '48MP Fusion, 48MP Ultra Wide, 5x Telephoto.' },
      { icon: 'BatteryCharging', title: 'Longer Battery', description: 'Up to 27 hours video playback.' },
      { icon: 'Smartphone', title: '6.3" Pro Display', description: '120Hz ProMotion with thinner borders.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Apple' },
          { label: 'Model', value: 'iPhone 16 Pro' },
          { label: 'Screen', value: '6.3-inch Super Retina XDR OLED' }
        ]
      }
    ],
    boxContents: ['iPhone 16 Pro', 'USB-C Charge Cable', 'Documentation'],
    warranty: '1 Year Apple Official Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-iphone-16-pro-max', 'qc-iphone-16', 'qc-samsung-s25-ultra'],
    isFeatured: true
  },
  {
    id: 'qc-iphone-16',
    slug: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'smartphones',
    tag: 'New',
    officialBadge: 'Official Apple Product',
    price: 1200000,
    originalPrice: 1300000,
    discountPercentage: 8,
    rating: 4.6,
    reviewCount: 80,
    soldCount: 290,
    inStock: true,
    stockCount: 22,
    shortDescription: '6.1-inch Super Retina XDR, A18 chip, Camera Control, 48MP Fusion camera.',
    fullDescription: 'iPhone 16 introduces Camera Control, 48MP Fusion camera with 2x Telephoto quality, vibrant color-infused back glass, and the powerful A18 chip built for Apple Intelligence.',
    images: [
      {
        url: '/images/iphone_16_front_1791959991199.jpg',
        alt: 'iPhone 16 front view',
        label: 'Front View'
      },
      {
        url: '/images/iphone_16_back_1791959991613.jpg',
        alt: 'iPhone 16 rear view',
        label: 'Back View'
      },
      {
        url: '/images/iphone_16_side_1791959992486.jpg',
        alt: 'iPhone 16 side view',
        label: 'Side View'
      },
      {
        url: '/images/banner_iphone_16_series_1791959964767.jpg',
        alt: 'iPhone 16 showcase',
        label: 'Series View'
      }
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    defaultStorage: '128GB',
    colors: [
      { name: 'Ultramarine', hex: '#374E82' },
      { name: 'Teal', hex: '#638E8E' },
      { name: 'Pink', hex: '#E59FB6' },
      { name: 'White', hex: '#EBEAE8' },
      { name: 'Black', hex: '#2A292D' }
    ],
    defaultColor: 'Ultramarine',
    features: [
      { icon: 'Cpu', title: 'A18 Chip', description: 'Two generations ahead with high power efficiency.' },
      { icon: 'Camera', title: '48MP 2-in-1 Camera', description: 'High-res 48MP main with 2x optical-quality zoom.' },
      { icon: 'Zap', title: 'Action Button', description: 'Fast track to your favorite feature with one click.' },
      { icon: 'BatteryCharging', title: 'Extended Battery', description: 'Up to 22 hours video playback.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Apple' },
          { label: 'Model', value: 'iPhone 16' },
          { label: 'Screen', value: '6.1-inch Super Retina XDR OLED' }
        ]
      }
    ],
    boxContents: ['iPhone 16', 'USB-C Charge Cable', 'Documentation'],
    warranty: '1 Year Apple Official Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-iphone-16-pro', 'qc-iphone-16-pro-max', 'qc-google-pixel-9-pro'],
    isFeatured: true
  },
  {
    id: 'qc-google-pixel-9-pro',
    slug: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro',
    brand: 'Google',
    category: 'smartphones',
    tag: 'New',
    price: 1100000,
    originalPrice: 1200000,
    discountPercentage: 8,
    rating: 4.5,
    reviewCount: 60,
    soldCount: 150,
    inStock: true,
    stockCount: 12,
    shortDescription: 'Google Tensor G4, Super Actua display, Gemini Live AI assistant, 50MP triple camera.',
    fullDescription: 'Pixel 9 Pro has a sleek, modern look and delivers Google AI magic in the palm of your hand. Powered by Google Tensor G4 with 16GB RAM for advanced multitasking.',
    images: [
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'Google Pixel 9 Pro flagship preview',
        label: 'Front & Back View'
      },
      {
        url: '/images/phone_samsung_s25_ultra_1791960020151.jpg',
        alt: 'Google Pixel 9 Pro camera visor',
        label: 'Camera Detail'
      },
      {
        url: '/images/iphone_16_side_1791959992486.jpg',
        alt: 'Google Pixel 9 Pro side finish',
        label: 'Side Profile'
      },
      {
        url: '/images/hero_smartphones_lineup_1791959963891.jpg',
        alt: 'Google Pixel 9 Pro studio showcase',
        label: 'Studio View'
      }
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Obsidian', hex: '#26282B' },
      { name: 'Porcelain', hex: '#EBEAE5' },
      { name: 'Hazel', hex: '#585D58' }
    ],
    defaultColor: 'Obsidian',
    features: [
      { icon: 'Cpu', title: 'Tensor G4 + 16GB RAM', description: 'Engineered for cutting-edge on-device AI.' },
      { icon: 'Camera', title: 'Pro Triple Camera', description: '50MP wide, 48MP telephoto 5x optical, 48MP ultrawide.' },
      { icon: 'Smartphone', title: 'Super Actua Display', description: 'Brightest Pixel display ever, up to 3000 nits.' },
      { icon: 'Zap', title: '7 Years OS Updates', description: 'Guaranteed Android updates through 2031.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Google' },
          { label: 'Model', value: 'Pixel 9 Pro' },
          { label: 'RAM', value: '16GB' }
        ]
      }
    ],
    boxContents: ['Google Pixel 9 Pro', 'USB-C Cable', 'Quick Switch Adapter', 'SIM Tool'],
    warranty: '1 Year Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-iphone-16-pro', 'qc-samsung-s25-ultra', 'qc-nothing-2a'],
    isFeatured: true
  },
  {
    id: 'qc-nothing-2a',
    slug: 'nothing-phone-2a',
    name: 'Nothing Phone (2a)',
    brand: 'Nothing',
    category: 'smartphones',
    tag: 'Hot',
    price: 450000,
    originalPrice: 480000,
    discountPercentage: 6,
    rating: 4.4,
    reviewCount: 45,
    soldCount: 190,
    inStock: true,
    stockCount: 17,
    shortDescription: 'Custom Dimensity 7200 Pro, Glyph Interface, dual 50MP cameras, 120Hz flexible AMOLED.',
    fullDescription: 'Nothing Phone (2a) delivers an iconic transparent design with the signature Glyph lighting system, seamless Nothing OS, and exceptional battery life.',
    images: [
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'Nothing Phone 2a transparent back',
        label: 'Rear Glyph View'
      },
      {
        url: '/images/phone_tecno_camon30_1791960020075.jpg',
        alt: 'Nothing Phone 2a front screen',
        label: 'Front Screen'
      },
      {
        url: '/images/phone_infinix_zero40_1791960020743.jpg',
        alt: 'Nothing Phone 2a angle',
        label: 'Angle View'
      },
      {
        url: '/images/hero_smartphones_lineup_1791959963891.jpg',
        alt: 'Nothing Phone 2a profile',
        label: 'Side Profile'
      }
    ],
    storageOptions: ['128GB', '256GB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Milk White', hex: '#EDEDED' }
    ],
    defaultColor: 'Black',
    features: [
      { icon: 'Zap', title: 'Glyph Interface', description: 'Iconic light sequences for notifications, timer, and volume.' },
      { icon: 'Cpu', title: 'Dimensity 7200 Pro', description: 'Co-engineered with MediaTek for outstanding efficiency.' },
      { icon: 'Camera', title: 'Dual 50MP Studio Cameras', description: '50MP main with OIS + 50MP 114° Ultra-wide.' },
      { icon: 'BatteryCharging', title: '5000mAh Battery', description: 'Up to 2 days on a single charge with 45W fast charging.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Nothing' },
          { label: 'Model', value: 'Phone (2a)' },
          { label: 'RAM', value: '12GB' },
          { label: 'Storage', value: '256GB' }
        ]
      }
    ],
    boxContents: ['Nothing Phone (2a)', 'Nothing Cable (c-c)', 'Screen Protector (pre-applied)', 'SIM ejector'],
    warranty: '1 Year Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-tecno-camon-30-pro', 'qc-infinix-zero-40', 'qc-google-pixel-9-pro'],
    isFeatured: true
  },
  {
    id: 'qc-tecno-phantom-vfold',
    slug: 'tecno-phantom-v-fold',
    name: 'Tecno Phantom V Fold',
    brand: 'Tecno',
    category: 'smartphones',
    tag: 'Hot',
    price: 1100000,
    originalPrice: 1250000,
    discountPercentage: 12,
    rating: 4.6,
    reviewCount: 78,
    soldCount: 160,
    inStock: true,
    stockCount: 8,
    shortDescription: 'Foldable 7.85" 120Hz LTPO display, MediaTek Dimensity 9000+, 50MP 5-lens camera system.',
    fullDescription: 'Tecno Phantom V Fold redefines the foldable phone segment in Africa with an expansive 7.85-inch folding inner screen and a comfortable 6.42-inch sub-screen with aerospace-grade drop hinge.',
    images: [
      {
        url: '/images/banner_tradein_upgrade_1791959966069.jpg',
        alt: 'Tecno Phantom V Fold unfolded view',
        label: 'Foldable Display'
      },
      {
        url: '/images/phone_tecno_camon30_1791960020075.jpg',
        alt: 'Tecno Phantom V Fold rear camera',
        label: 'Rear View'
      },
      {
        url: '/images/phone_samsung_s25_ultra_1791960020151.jpg',
        alt: 'Tecno Phantom V Fold outer screen',
        label: 'Outer Screen'
      },
      {
        url: '/images/hero_smartphones_lineup_1791959963891.jpg',
        alt: 'Tecno Phantom V Fold hinge detail',
        label: 'Hinge Detail'
      }
    ],
    storageOptions: ['256GB', '512GB'],
    defaultStorage: '512GB',
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'White', hex: '#F0EFEA' }
    ],
    defaultColor: 'Black',
    features: [
      { icon: 'Smartphone', title: 'Dual 120Hz LTPO Displays', description: '7.85" 2K+ folding screen + 6.42" FHD+ outer screen.' },
      { icon: 'Cpu', title: 'Dimensity 9000+ Flagship', description: 'Flagship 4nm computing performance.' },
      { icon: 'Camera', title: '5-Lens Camera System', description: '50MP main + 50MP telephoto + 13MP ultrawide.' },
      { icon: 'Zap', title: 'Aerospace Grade Hinge', description: 'Virtually creaseless design tested for 200,000 folds.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Tecno' },
          { label: 'Model', value: 'Phantom V Fold' },
          { label: 'RAM', value: '12GB' },
          { label: 'Storage', value: '512GB' }
        ]
      }
    ],
    boxContents: ['Tecno Phantom V Fold', '66W Super Charger', 'Type-C Cable', 'Protective Stand Case', 'VIP Card'],
    warranty: '24 Months Carlcare Official Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-samsung-s25-ultra', 'qc-iphone-16-pro-max'],
    isFeatured: true
  },
  // Accessories
  {
    id: 'qc-apple-airpods-pro-2',
    slug: 'apple-airpods-pro-2-usbc',
    name: 'Apple AirPods Pro 2 (USB-C)',
    brand: 'Apple',
    category: 'accessories',
    tag: 'Best Seller',
    price: 340000,
    originalPrice: 380000,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 140,
    soldCount: 650,
    inStock: true,
    stockCount: 40,
    shortDescription: 'Active Noise Cancellation with Adaptive Audio, Transparency mode, and USB-C MagSafe case.',
    fullDescription: 'AirPods Pro 2 feature up to 2x more Active Noise Cancellation, Adaptive Audio that tailors noise control to your environment, and Personalized Spatial Audio with dynamic head tracking.',
    images: [
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Apple AirPods Pro 2 with MagSafe Case',
        label: 'Product Showcase'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'AirPods Pro 2 earbuds in charging case',
        label: 'Case View'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'AirPods Pro 2 silicone tips',
        label: 'Accessories'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'AirPods Pro 2 lifestyle view',
        label: 'Angle View'
      }
    ],
    colors: [{ name: 'White', hex: '#FFFFFF' }],
    defaultColor: 'White',
    features: [
      { icon: 'Zap', title: 'H2 Apple Silicon', description: 'Smarter noise cancellation and immersive 3D sound.' },
      { icon: 'BatteryCharging', title: 'Up to 30 Hours', description: '6 hours on a single charge and 30 hours with case.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Apple' },
          { label: 'Connectivity', value: 'Bluetooth 5.3' },
          { label: 'Charging', value: 'USB-C, MagSafe, Apple Watch charger, Qi' }
        ]
      }
    ],
    boxContents: ['AirPods Pro 2', 'MagSafe Charging Case (USB-C)', 'Silicone ear tips (XS, S, M, L)', 'Documentation'],
    warranty: '1 Year Apple Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-iphone-16-pro-max', 'qc-apple-20w-adapter'],
    isFeatured: true
  },
  {
    id: 'qc-apple-20w-adapter',
    slug: 'apple-20w-usb-c-power-adapter',
    name: 'Apple 20W USB-C Power Adapter',
    brand: 'Apple',
    category: 'accessories',
    tag: 'Best Seller',
    price: 35000,
    originalPrice: 42000,
    discountPercentage: 16,
    rating: 4.9,
    reviewCount: 310,
    soldCount: 1200,
    inStock: true,
    stockCount: 80,
    shortDescription: 'Original Apple 20W USB-C Fast Charger adapter for iPhone 16 / 15 / iPad.',
    fullDescription: 'The Apple 20W USB-C Power Adapter offers fast, efficient charging at home, in the office, or on the go. Pair it with iPhone 16 or 15 series for optimal fast charging (0 to 50% in 30 minutes).',
    images: [
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Apple 20W USB-C Power Adapter UK 3-pin',
        label: 'Adapter View'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Apple 20W Adapter port view',
        label: 'USB-C Port'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Apple 20W Adapter package',
        label: 'Packaging'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Apple 20W Adapter pin layout',
        label: 'Pin Layout'
      }
    ],
    colors: [{ name: 'White', hex: '#FFFFFF' }],
    defaultColor: 'White',
    features: [
      { icon: 'Zap', title: '20W PD Fast Charging', description: '50% charge in around 30 minutes for iPhone.' },
      { icon: 'Shield', title: 'Original Safety Circuits', description: 'Protects against overcharging and surges.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Apple' },
          { label: 'Power Output', value: '20W Power Delivery' },
          { label: 'Plug Type', value: 'UK 3-Pin Standard for Nigeria' }
        ]
      }
    ],
    boxContents: ['Apple 20W USB-C Power Adapter', 'Warranty Leaflet'],
    warranty: '1 Year Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-iphone-16-pro-max', 'qc-iphone-16'],
    isFeatured: true
  },
  {
    id: 'qc-anker-powerbank-20000',
    slug: 'anker-20000mah-65w-powerbank',
    name: 'Anker 20,000mAh 65W Fast Power Bank',
    brand: 'Other',
    category: 'accessories',
    tag: 'Hot',
    price: 65000,
    originalPrice: 75000,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 92,
    soldCount: 420,
    inStock: true,
    stockCount: 30,
    shortDescription: 'High-speed 65W Power Delivery, charges phones, tablets, and laptops. Digital smart display.',
    fullDescription: 'Keep all your essential devices powered in Nigeria with the ultra-reliable Anker 20,000mAh 65W Power Bank. Capable of charging an iPhone 16 up to 4.5 times or a Galaxy S25 up to 3.8 times.',
    images: [
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Anker 20000mAh Fast Power Bank',
        label: 'Power Bank View'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Digital display reading remaining battery percentage',
        label: 'Smart Display'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Dual USB-C and USB-A charging ports',
        label: 'Port Array'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'Anker Power Bank compact size in hand',
        label: 'Compact Design'
      }
    ],
    colors: [{ name: 'Matte Black', hex: '#1C1C1E' }],
    defaultColor: 'Matte Black',
    features: [
      { icon: 'BatteryCharging', title: '20,000mAh Massive Capacity', description: 'Keeps you powered through prolonged load shedding.' },
      { icon: 'Zap', title: '65W High-Speed Output', description: 'Rapidly charges smartphones, MacBooks, and tablets.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Anker' },
          { label: 'Capacity', value: '20,000mAh (74Wh)' },
          { label: 'Max Output', value: '65W USB-C PD' }
        ]
      }
    ],
    boxContents: ['Anker 20,000mAh Power Bank', 'USB-C to USB-C Cable (0.6m)', 'Travel Pouch', 'Welcome Guide'],
    warranty: '18 Months Anker Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-iphone-16-pro-max', 'qc-samsung-s25-ultra'],
    isFeatured: true
  },
  // Tablets
  {
    id: 'qc-ipad-pro-11-m4',
    slug: 'apple-ipad-pro-11-m4',
    name: 'Apple iPad Pro 11-inch M4 (2024)',
    brand: 'Apple',
    category: 'tablets',
    tag: 'New',
    officialBadge: 'Official Apple Product',
    price: 1450000,
    originalPrice: 1550000,
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 42,
    soldCount: 85,
    inStock: true,
    stockCount: 9,
    shortDescription: 'Ultra Retina XDR OLED, Apple M4 chip, ultra-thin 5.3mm design, Apple Pencil Pro support.',
    fullDescription: 'The all-new iPad Pro packs outrageous power into an unbelievably thin, light, and portable design. Powered by the breakthrough Apple M4 chip and revolutionary Ultra Retina XDR tandem OLED display.',
    images: [
      {
        url: '/images/hero_smartphones_lineup_1791959963891.jpg',
        alt: 'iPad Pro 11-inch M4 display view',
        label: 'Front View'
      },
      {
        url: '/images/banner_iphone_16_series_1791959964767.jpg',
        alt: 'iPad Pro rear view in Space Black',
        label: 'Rear View'
      },
      {
        url: '/images/iphone_16_side_1791959992486.jpg',
        alt: 'iPad Pro ultra thin 5.3mm profile',
        label: 'Slim Profile'
      },
      {
        url: '/images/banner_accessories_collection_1791959966326.jpg',
        alt: 'iPad Pro with accessories',
        label: 'Setup'
      }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    defaultStorage: '256GB',
    colors: [
      { name: 'Space Black', hex: '#242526' },
      { name: 'Silver', hex: '#E3E4E5' }
    ],
    defaultColor: 'Space Black',
    features: [
      { icon: 'Cpu', title: 'Apple M4 Chip', description: 'Phenomenal CPU and GPU with hardware ray tracing.' },
      { icon: 'Smartphone', title: 'Tandem OLED Display', description: 'Dual OLED panels for 1,600 nits peak HDR brightness.' }
    ],
    specifications: [
      {
        group: 'General',
        items: [
          { label: 'Brand', value: 'Apple' },
          { label: 'Model', value: 'iPad Pro 11-inch (M4)' },
          { label: 'Thickness', value: '5.3 mm' }
        ]
      }
    ],
    boxContents: ['iPad Pro 11-inch M4', 'USB-C Charge Cable (1m)', '20W USB-C Power Adapter'],
    warranty: '1 Year Apple Official Warranty',
    deliveryEstimate: '1-3 days nationwide',
    relatedProductIds: ['qc-apple-airpods-pro-2', 'qc-iphone-16-pro-max'],
    isFeatured: true
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    userName: 'Aisha Bello',
    rating: 5,
    date: 'Oct 10, 2026',
    comment: 'Original products and super fast delivery to Abuja! I ordered the iPhone 16 Pro Max and received it sealed with full Apple warranty. Really impressed with Quick Choice customer service.',
    verified: true
  },
  {
    id: 'rev-2',
    userName: 'Emeka Johnson',
    rating: 5,
    date: 'Oct 08, 2026',
    comment: 'Best phone store in Nigeria. I have a phone accessories store in Ikeja Computer Village and buy in wholesale cartons from Quick Choice. Their prices are the most competitive and stock is always genuine.',
    verified: true
  },
  {
    id: 'rev-3',
    userName: 'Fatima Lawal',
    rating: 5,
    date: 'Oct 05, 2026',
    comment: 'Got my Samsung S25 Ultra at a great price with genuine free 45W adapter. Payment with Paystack was seamless and delivery to Lekki took less than 24 hours. Highly recommended!',
    verified: true
  },
  {
    id: 'rev-4',
    userName: 'Tunde Adeyemi',
    rating: 5,
    date: 'Sep 28, 2026',
    comment: 'The trade-in process was smooth and straightforward. Was able to exchange my old iPhone 14 Pro toward the new 16 Pro without stress. Transparent valuation and trustworthy staff.',
    verified: true
  }
];

export const CATEGORIES = [
  { id: 'smartphones', name: 'Smartphones', count: 12, icon: 'Smartphone', image: '/images/hero_smartphones_lineup_1791959963891.jpg' },
  { id: 'iphones', name: 'iPhones', count: 5, icon: 'Apple', image: '/images/iphone_16_front_1791959991199.jpg' },
  { id: 'samsung', name: 'Samsung', count: 4, icon: 'Smartphone', image: '/images/phone_samsung_s25_ultra_1791960020151.jpg' },
  { id: 'tecno', name: 'Tecno', count: 3, icon: 'Smartphone', image: '/images/phone_tecno_camon30_1791960020075.jpg' },
  { id: 'infinix', name: 'Infinix', count: 3, icon: 'Smartphone', image: '/images/phone_infinix_zero40_1791960020743.jpg' },
  { id: 'itel', name: 'itel', count: 2, icon: 'Smartphone', image: '/images/phone_itel_s24_1791960021068.jpg' },
  { id: 'tablets', name: 'Tablets', count: 2, icon: 'Tablet', image: '/images/hero_smartphones_lineup_1791959963891.jpg' },
  { id: 'accessories', name: 'Accessories', count: 6, icon: 'Headphones', image: '/images/banner_accessories_collection_1791959966326.jpg' },
  { id: 'deals', name: 'Deals', count: 8, icon: 'Percent', isSpecial: true }
];

export const BRANDS = [
  { id: 'Apple', name: 'Apple', count: 5, badge: 'Official Lineup' },
  { id: 'Samsung', name: 'Samsung', count: 4, badge: 'Galaxy Series' },
  { id: 'Tecno', name: 'Tecno', count: 3, badge: 'Camon & Phantom' },
  { id: 'Infinix', name: 'Infinix', count: 3, badge: 'Zero & Note' },
  { id: 'itel', name: 'itel', count: 2, badge: 'Value Series' },
  { id: 'Xiaomi', name: 'Xiaomi', count: 2, badge: 'Redmi & Flagships' },
  { id: 'Google', name: 'Google', count: 1, badge: 'Pixel Series' },
  { id: 'Others', name: 'Others', count: 4, badge: 'Nothing & Anker' }
];

export const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'How to Choose the Right Smartphone for Your Needs',
    excerpt: 'Key factors to consider before upgrading in 2026: camera zoom, battery endurance during travel, and 5G network bands in Nigeria.',
    date: 'Oct 10, 2026',
    category: 'Buying Guide',
    image: '/images/hero_smartphones_lineup_1791959963891.jpg',
    readTime: '5 min read'
  },
  {
    id: 'post-2',
    title: 'Top 5 Accessories Every Phone User Needs in Nigeria',
    excerpt: 'From high-capacity 65W fast-charging power banks to certified braided cables and impact cases that prevent expensive screen damage.',
    date: 'Oct 8, 2026',
    category: 'Tips',
    image: '/images/banner_accessories_collection_1791959966326.jpg',
    readTime: '4 min read'
  },
  {
    id: 'post-3',
    title: 'Samsung Galaxy S25 Series: Everything You Need to Know',
    excerpt: 'Deep dive into the Snapdragon 8 Elite architecture, on-device AI translations, and optical 200MP sensor upgrades.',
    date: 'Oct 5, 2026',
    category: 'News',
    image: '/images/banner_samsung_galaxy_s25_1791959964904.jpg',
    readTime: '6 min read'
  }
];
