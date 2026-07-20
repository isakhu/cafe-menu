import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Phone, BedDouble } from 'lucide-react';
import Link from 'next/link';

// Services that are strictly "Request" type
const REQUEST_SERVICES: Record<string, { name: string }> = {
  'pool-passes': { name: 'Pool Access' },
  'gym-membership': { name: 'Gym Membership' },
};

export default function RequestPage({ params }: { params: { serviceId: string } }) {
  const service = REQUEST_SERVICES[params.serviceId];

  // For this v1, let's treat request types that don't match the booking or orderable
  // as the request flow.
  if (!service && !['pool-passes', 'gym-membership'].includes(params.serviceId)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fcfaf7] pb-24 font-sans text-stone-900">
      <header className="sticky top-0 z-50 bg-[#fcfaf7]/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 border-b border-stone-200/50">
        <Link href="/guest"><ArrowLeft className="w-5 h-5 text-stone-600" /></Link>
        <h1 className="text-lg font-serif font-bold text-stone-800">Submit Request</h1>
      </header>

      <main className="p-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 space-y-6">
          <h2 className="font-serif text-xl font-bold text-stone-800">
            {service?.name || 'Service Request'}
          </h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                <input type="text" className="w-full bg-stone-50 border-none rounded-2xl p-3 pl-10 text-sm focus:ring-2 focus:ring-rose-200" placeholder="John Doe" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Room # (Opt.)</label>
                <div className="relative">
                  <BedDouble className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                  <input type="text" className="w-full bg-stone-50 border-none rounded-2xl p-3 pl-10 text-sm focus:ring-2 focus:ring-rose-200" placeholder="000" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Phone (Req.)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                  <input type="tel" className="w-full bg-stone-50 border-none rounded-2xl p-3 pl-10 text-sm focus:ring-2 focus:ring-rose-200" placeholder="+251..." />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-rose-500 text-white p-4 rounded-full shadow-lg shadow-rose-500/30 font-bold text-sm mt-4">
              Submit Request
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
