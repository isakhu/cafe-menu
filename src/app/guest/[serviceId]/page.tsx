import React from 'react';
import { notFound } from 'next/navigation';
import { menuItems } from '@/data/menu-items'; // Adjust path if needed
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react';
import Link from 'next/link';

// Mock service mapping
const SERVICES: Record<string, { name: string; type: 'orderable' | 'bookable' | 'request' }> = {
  'cafeteria': { name: 'Cafeteria', type: 'orderable' },
  'restaurant': { name: 'Restaurant/Bar', type: 'orderable' },
};

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = SERVICES[params.serviceId];

  if (!service) {
    notFound();
  }

  // Filter items for the specific service
  // In a real app, you'd filter by category or specific DB link
  const items = menuItems.filter(item => 
    service.type === 'orderable' 
  ).slice(0, 10); // Mocking for now

  return (
    <div className="min-h-screen bg-[#fcfaf7] pb-24 font-sans text-stone-900">
      <header className="sticky top-0 z-50 bg-[#fcfaf7]/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 border-b border-stone-200/50">
        <Link href="/guest"><ArrowLeft className="w-5 h-5 text-stone-600" /></Link>
        <h1 className="text-lg font-serif font-bold text-stone-800">{service.name}</h1>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-stone-100 flex gap-4 transition-transform active:scale-[0.98]">
              <div className="w-32 h-32 flex-shrink-0">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center py-2 pr-4 gap-1">
                <h3 className="font-semibold text-stone-800 text-sm">{item.name}</h3>
                <p className="text-stone-500 text-[11px] line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-rose-600 text-sm">{item.price} Br</span>
                  <button className="bg-stone-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-rose-500 text-white p-4 rounded-full shadow-lg shadow-rose-500/30 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-xs font-bold">Review Order</span>
        </button>
      </div>
    </div>
  );
}
