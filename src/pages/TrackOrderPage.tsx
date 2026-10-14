import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PackageCheck, Search, Truck, CheckCircle2, Clock, MapPin } from 'lucide-react';

export const TrackOrderPage: React.FC = () => {
  const { showToast } = useShop();
  const [orderQuery, setOrderQuery] = useState('');
  const [phoneQuery, setPhoneQuery] = useState('');
  const [trackedOrder, setTrackedOrder] = useState<any | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) {
      showToast('Please enter an Order ID', 'error');
      return;
    }

    // Realistic demonstration tracking timeline
    setTrackedOrder({
      orderId: orderQuery.toUpperCase(),
      date: 'Today, 10:14 AM',
      status: 'In Transit',
      courier: 'GIG Logistics / Quick Choice Direct Fleet',
      estimatedArrival: 'Tomorrow by 4:00 PM',
      steps: [
        { title: 'Order Verified & Packaged', desc: 'Computer Village Main Warehouse, Ikeja', time: '10:15 AM', done: true },
        { title: 'Quality Assurance & IMEI Verified', desc: 'Full manufacturer warranty registered', time: '11:45 AM', done: true },
        { title: 'Dispatched with Courier', desc: 'Handed over for outbound transit', time: '01:30 PM', done: true },
        { title: 'Out for Doorstep Delivery', desc: 'Driver en route to your provided address', time: 'Pending', done: false }
      ]
    });
  };

  return (
    <div className="bg-[#FAF9FC] min-h-screen pb-20">
      <div className="bg-white border-b border-[#EAE7F1] py-8 px-4 sm:px-6 text-center">
        <div className="max-w-xl mx-auto space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F8] text-[#EC078A] flex items-center justify-center mx-auto mb-2">
            <PackageCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17152D] tracking-tight">
            Track Your Order
          </h1>
          <p className="text-xs text-[#68677A] leading-relaxed">
            Enter your Quick Choice Order ID (e.g. QC-729482) and phone number to monitor live shipment status across Nigeria.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {/* Track Form */}
        <form onSubmit={handleTrack} className="bg-white p-6 rounded-2xl border border-[#EAE7F1] shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#17152D] mb-1">
                Order ID *
              </label>
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="e.g. QC-582910"
                className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#17152D] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneQuery}
                onChange={(e) => setPhoneQuery(e.target.value)}
                placeholder="e.g. 0801 234 5678"
                className="w-full text-xs bg-[#F8F7FA] border border-[#EAE7F1] px-3.5 py-2.5 rounded-xl outline-none focus:border-[#EC078A]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#211078] hover:bg-[#14094B] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
          >
            <Search className="w-4 h-4 text-[#EC078A]" />
            <span>Track Order Now</span>
          </button>
        </form>

        {/* Tracking Results Timeline */}
        {trackedOrder && (
          <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE7F1] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE7F1] gap-2">
              <div>
                <span className="text-[11px] font-bold text-[#EC078A] uppercase">
                  Order Status
                </span>
                <h3 className="text-lg font-black text-[#17152D]">
                  {trackedOrder.orderId} — {trackedOrder.status}
                </h3>
              </div>
              <div className="text-right text-xs">
                <span className="text-[#68677A] block">Estimated Delivery</span>
                <span className="font-extrabold text-emerald-600">{trackedOrder.estimatedArrival}</span>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EAE7F1]">
              {trackedOrder.steps.map((st: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4 relative">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    st.done
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#F5F1FF] text-[#68677A] border border-[#EAE7F1]'
                  }`}>
                    {st.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-bold ${st.done ? 'text-[#17152D]' : 'text-[#68677A]'}`}>
                        {st.title}
                      </h4>
                      <span className="text-[10px] text-[#68677A] font-medium">{st.time}</span>
                    </div>
                    <p className="text-[11px] text-[#68677A] mt-0.5">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#F8F7FA] rounded-xl text-xs text-[#68677A] space-y-1 border border-[#EAE7F1]">
              <p className="font-bold text-[#17152D]">Need Help with This Delivery?</p>
              <p>Our dispatch team is available at <a href="tel:+2348012345678" className="text-[#EC078A] font-bold">+234 801 234 5678</a>.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
