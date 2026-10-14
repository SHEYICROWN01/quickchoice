import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Order Inquiry',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      showToast('Please fill out all required fields', 'error');
      return;
    }
    setSent(true);
    showToast('Message sent! Our customer care team will reply shortly.', 'success');
  };

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      <div className="bg-white border-b border-[#EAE7F1] py-8 px-4 sm:px-6 text-center">
        <div className="max-w-xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#EC078A] uppercase tracking-wider">
            We're Always Here
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17152D] tracking-tight">
            Contact Quick Choice Telecommunications
          </h1>
          <p className="text-xs text-[#68677A] leading-relaxed">
            Have a question about a phone model, warranty verification, wholesale quotation, or an active order? Reach out anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-5">
              <h3 className="text-sm font-bold text-[#17152D] uppercase tracking-wider border-b border-[#EAE7F1] pb-3">
                Store &amp; Office Locations
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17152D]">Ikeja Computer Village Mega Hub</h4>
                    <p className="text-[#68677A] mt-0.5">Otigba Street / Medical Road Junction, Ikeja, Lagos State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17152D]">Phone &amp; WhatsApp Support</h4>
                    <p className="text-[#68677A] mt-0.5">
                      <a href="tel:+2348012345678" className="hover:text-[#EC078A] font-semibold">
                        +234 801 234 5678
                      </a>
                    </p>
                    <p className="text-[11px] text-[#68677A]">Wholesale Desk: +234 802 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17152D]">Email Inquiries</h4>
                    <p className="text-[#68677A] mt-0.5">
                      <a href="mailto:support@quickchoice.com" className="hover:text-[#EC078A]">
                        support@quickchoice.com
                      </a>
                    </p>
                    <p className="text-[11px] text-[#68677A]">wholesale@quickchoice.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17152D]">Business Hours</h4>
                    <p className="text-[#68677A] mt-0.5">Monday - Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-[#68677A]">Sunday: 10:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#211078] text-white p-6 rounded-2xl space-y-3">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#EC078A]" />
                <span>Instant WhatsApp Consultation</span>
              </h4>
              <p className="text-xs text-white/80">
                Prefer chatting directly with our floor technicians in Computer Village? Send a message on WhatsApp for instant photos and video clips of in-stock models.
              </p>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE7F1] shadow-xs">
            <h3 className="text-sm font-bold text-[#17152D] uppercase tracking-wider mb-4 border-b border-[#EAE7F1] pb-3">
              Send a Direct Message
            </h3>

            {sent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#17152D]">Message Received!</h4>
                <p className="text-xs text-[#68677A] max-w-sm mx-auto">
                  Thank you, {formData.name}. A customer service representative will contact you via WhatsApp or phone at {formData.phone} shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-5 py-2 bg-[#211078] text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#17152D] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Okafor"
                      className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17152D] mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0803 123 4567"
                      className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17152D] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. samuel@gmail.com"
                      className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17152D] mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none"
                    >
                      <option value="Order Inquiry">Order Status / Tracking</option>
                      <option value="Product Details">Product Specifications &amp; Stock</option>
                      <option value="Wholesale">Wholesale &amp; Bulk Purchasing</option>
                      <option value="Warranty">Warranty &amp; Service Centers</option>
                      <option value="Trade-in">Phone Trade-In &amp; Valuation</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#17152D] mb-1">
                      Message / Request *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our phone specialists assist you today?"
                      rows={4}
                      className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] p-3 rounded-xl outline-none focus:border-[#EC078A]"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#EC078A] hover:bg-[#D6067C] active:scale-98 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#EC078A]/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
