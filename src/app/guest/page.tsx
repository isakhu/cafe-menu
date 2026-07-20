import React from 'react';
import Link from 'next/link';

// Base services based on requirements
const SERVICES = [
  { id: 'cafeteria', name: 'Cafeteria', type: 'orderable', icon: '☕' },
  { id: 'restaurant', name: 'Restaurant/Bar', type: 'orderable', icon: '🍽️' },
  { id: 'pool', name: 'Pool', type: 'mixed', icon: '🏊' },
  { id: 'sauna', name: 'Sauna', type: 'bookable', icon: '🧖' },
  { id: 'gym', name: 'Gym', type: 'mixed', icon: '💪' },
  { id: 'spa', name: 'Spa', type: 'bookable', icon: '💆' },
  { id: 'room', name: 'Room Info', type: 'info', icon: '🛏️' },
];

export default function GuestHomePage() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] pb-24 font-sans text-stone-900">
      {/* Persistent Header */}
      <header className="sticky top-0 z-50 bg-[#fcfaf7]/90 backdrop-blur-md border-b border-stone-200/50 px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-serif font-bold text-stone-800">Haile Resort Hawassa</div>
        <div className="text-xs text-stone-500 font-medium">Guest Portal</div>
      </header>

      {/* Main Grid */}
      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-stone-800 mb-1">Welcome to Bliss</h2>
          <p className="text-stone-600 text-sm">Explore our services and enhance your stay.</p>
        </section>

        <div className="grid grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <Link 
              key={service.id} 
              href={`/guest/${service.id}`}
              className="group relative bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-3xl group-hover:bg-rose-50 transition-colors">
                {service.icon}
              </div>
              <span className="font-semibold text-stone-800 text-sm">{service.name}</span>
            </Link>
          ))}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4 flex justify-around items-center">
        <Link href="/guest" className="text-rose-400 font-medium text-xs">Home</Link>
        <Link href="/guest/my-orders" className="text-stone-400 font-medium text-xs">My Activity</Link>
      </nav>
    </div>
  );
}
