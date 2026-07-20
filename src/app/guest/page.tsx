import React from 'react';
import { notFound } from 'next/navigation';
import { menuItems } from '@/data/menu-items';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const SERVICES: Record<string, { name: string; type: 'orderable' | 'bookable' | 'request' }> = {
  'cafeteria': { name: 'Cafeteria', type: 'orderable' },
  'restaurant': { name: 'Restaurant/Bar', type: 'orderable' },
};

export default async function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params;
  const service = SERVICES[serviceId];
  if (!service) notFound();

  const items = menuItems.filter(item => service.type === 'orderable').slice(0, 10);

  return (
    <div className="min-h-screen bg-[#F7EFE0] pb-28">
      {/* Header */}
      <header className="bg-[#2B1B12] px-6 pt-6 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:16px_16px]" />
        <Link href="/guest" className="relative z-10 inline-flex items-center gap-2 text-[#D99A3D] text-sm font-semibold mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1
          className="relative z-10 text-[#F7EFE0] leading-[0.85] tracking-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 12vw, 5.5rem)' }}
        >
          {service.name}
        </h1>
        <p className="relative z-10 text-[#D99A3D] text-sm mt-2 font-medium">Handpicked dishes, made fresh</p>
      </header>

      {/* Items */}
      <main className="px-4 -mt-6 relative z-10 space-y-5">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="bg-[#FFFCF6] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(43,27,18,0.12)] border border-[#EAD9BC]"
          >
            <div className="relative h-44 w-full">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              {/* Angled ticket-stub price tag */}
              <div className="absolute top-3 right-3 bg-[#B03A2E] text-[#F7EFE0] px-3 py-1.5 rounded-md shadow-lg -rotate-3">
                <span className="font-bold text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.5px' }}>
                  {item.price} Br
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3
                className="text-[#2B1B12] leading-none mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.3px' }}
              >
                {item.name}
              </h3>
              <p className="text-[#6B5B4D] text-sm mb-4 leading-snug">{item.description}</p>
              <button className="bg-[#2B1B12] text-[#F7EFE0] text-xs font-bold px-5 py-2.5 rounded-full">
                Add to order
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Floating cart */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-[#B03A2E] text-[#F7EFE0] p-4 rounded-full shadow-lg shadow-[#B03A2E]/40 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-xs font-bold">Review Order</span>
        </button>
      </div>
    </div>
  );
}