import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, FileText, Truck, RotateCcw, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface PolicyPageProps {
  type: 'privacy' | 'terms' | 'shipping' | 'help' | 'tradein';
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ type }) => {
  const { navigate } = useShop();

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-6 h-6 text-[#EC078A]" />,
      lead: 'How Quick Choice Telecommunications safeguards your personal information.',
      body: [
        {
          heading: '1. Information We Collect',
          text: 'We collect personal identification information including customer name, phone number, email address, and delivery location exclusively to process and fulfill smartphone orders, dispatch warranty documentation, and communicate shipment tracking.'
        },
        {
          heading: '2. Payment Security',
          text: 'Quick Choice Telecommunications never collects or stores your credit or debit card numbers on our servers. All online payments are handled directly by PCI-DSS certified payment processors (Paystack and Flutterwave) using SSL encryption.'
        },
        {
          heading: '3. Data Sharing & Third Parties',
          text: 'Your contact and address details are shared strictly with verified courier carriers (e.g. GIG Logistics) for the sole purpose of delivery fulfillment across Nigeria. We do not sell customer data under any circumstances.'
        }
      ]
    },
    terms: {
      title: 'Terms and Conditions',
      icon: <FileText className="w-6 h-6 text-[#EC078A]" />,
      lead: 'Guidelines governing retail and wholesale transactions with Quick Choice Telecommunications.',
      body: [
        {
          heading: '1. Genuine Device Guarantee',
          text: 'Every phone, tablet, and accessory purchased from Quick Choice is guaranteed to be 100% authentic and new, with verified IMEI numbers eligible for official manufacturer support in Nigeria.'
        },
        {
          heading: '2. Pricing and Availability',
          text: 'All prices are quoted in Nigerian Naira (NGN). Wholesale prices are subject to Computer Village market rates and stock availability at the time of invoice confirmation.'
        },
        {
          heading: '3. Order Cancellation and Dispatch',
          text: 'Orders may be modified or cancelled prior to dispatch handover. Once an item has been assigned a courier waybill number, transit terms apply.'
        }
      ]
    },
    shipping: {
      title: 'Shipping, Delivery & Returns Policy',
      icon: <Truck className="w-6 h-6 text-[#EC078A]" />,
      lead: 'Everything you need to know about doorstep delivery and 7-day exchange window.',
      body: [
        {
          heading: '1. Delivery Coverage and Timelines',
          text: 'We deliver nationwide across all 36 Nigerian states and Abuja. Same-day delivery is available for Lagos and Abuja orders placed before 1:00 PM. Interstate shipments via insured air and land logistics arrive within 1-3 business days.'
        },
        {
          heading: '2. 7-Day Store Return & Replacement',
          text: 'If your device has a verifiable manufacturer defect within 7 days of receipt, Quick Choice will replace it immediately upon verification, provided the box, accessories, and warranty cards are intact and free from liquid or physical damage.'
        },
        {
          heading: '3. Manufacturer Official Warranty',
          text: 'Beyond 7 days, your smartphone is covered under its official manufacturer warranty (Apple, Samsung West Africa, or Carlcare for Tecno/Infinix/itel) for 12 to 24 months.'
        }
      ]
    },
    help: {
      title: 'Help Center & Support',
      icon: <HelpCircle className="w-6 h-6 text-[#EC078A]" />,
      lead: 'Frequently asked questions and direct assistance for Quick Choice customers.',
      body: [
        {
          heading: 'How do I place an order online?',
          text: 'Browse our catalog, select your preferred phone model, storage capacity, and color variant. Click "Add to Cart", proceed to Checkout, enter your Nigerian delivery address, and choose your payment method.'
        },
        {
          heading: 'Can I pick up my device in person?',
          text: 'Yes! Select "Store Pickup" at checkout and collect your phone at our flagship mega store in Computer Village, Ikeja, Lagos with your order number.'
        },
        {
          heading: 'How can I verify that my iPhone or Samsung is original?',
          text: 'Upon delivery, you can check the IMEI number printed on the sealed box directly on Apple Check Coverage (checkcoverage.apple.com) or Samsung Members before opening.'
        }
      ]
    },
    tradein: {
      title: 'Quick Choice Trade-In & Upgrade Program',
      icon: <RotateCcw className="w-6 h-6 text-[#EC078A]" />,
      lead: 'Exchange your current smartphone for a brand new upgrade with transparent market valuation.',
      body: [
        {
          heading: '1. How Trade-In Works',
          text: 'Bring your current smartphone to our Ikeja store or request a doorstep evaluation in Lagos. Our technicians verify the screen condition, battery health, Face ID/fingerprint sensors, and internal motherboard.'
        },
        {
          heading: '2. Transparent Valuation Credit',
          text: 'You receive an immediate valuation credit that is applied as an instant discount toward your brand new iPhone, Samsung Galaxy, or flagship Android device.'
        },
        {
          heading: '3. Secure Data Erasure',
          text: 'Before finalizing, we assist you with transferring all your WhatsApp chats, photos, and contacts to your new phone, followed by certified factory data erasure of the old device.'
        }
      ]
    }
  }[type];

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-[#EAE7F1] py-8 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F8] flex items-center justify-center mx-auto mb-2">
            {contentMap.icon}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17152D] tracking-tight">
            {contentMap.title}
          </h1>
          <p className="text-xs text-[#68677A] leading-relaxed max-w-lg mx-auto">
            {contentMap.lead}
          </p>
        </div>
      </div>

      {/* Policy Details */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-6">
          {contentMap.body.map((section, idx) => (
            <div key={idx} className="space-y-2 pb-5 border-b border-[#EAE7F1] last:border-0 last:pb-0">
              <h3 className="text-sm font-bold text-[#211078]">
                {section.heading}
              </h3>
              <p className="text-xs text-[#68677A] leading-relaxed font-normal">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Contact Footer Strip */}
        <div className="bg-[#F5F1FF] rounded-2xl p-6 border border-[#EAE7F1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <h4 className="font-bold text-[#17152D]">Still have questions?</h4>
            <p className="text-[#68677A]">Our customer service desk is open 7 days a week.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-[#211078] hover:bg-[#14094B] text-white font-bold rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#EC078A]" />
          </button>
        </div>
      </div>
    </div>
  );
};
