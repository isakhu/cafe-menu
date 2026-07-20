import React from 'react';
import { OrderCard, BookingCard, RequestCard } from './components/Cards';

export default function ManagerDashboard() {
  return (
    <div className="p-6 bg-stone-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-stone-800">Manager God-View</h1>
        <p className="text-stone-500 text-sm">Centralized administration for all services.</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Orders', val: '24' },
          { label: 'Bookings', val: '12' },
          { label: 'Requests', val: '5' },
          { label: 'Popular', val: 'Kitfo' }
        ].map(stat => (
          <div key={stat.label} className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
            <p className="text-[10px] uppercase font-bold text-stone-400">{stat.label}</p>
            <p className="text-xl font-black text-stone-800">{stat.val}</p>
          </div>
        ))}
      </section>

      <div className="space-y-8">
        <section>
          <h3 className="font-bold text-stone-800 mb-4">All Orders</h3>
          <div className="space-y-2">{/* Mapped orders with service filter */}</div>
        </section>

        <section>
          <h3 className="font-bold text-stone-800 mb-4">All Bookings</h3>
          <div className="space-y-2">{/* Mapped bookings with service filter */}</div>
        </section>

        <section>
          <h3 className="font-bold text-stone-800 mb-4">All Requests</h3>
          <div className="space-y-2">{/* Mapped requests with service filter */}</div>
        </section>
      </div>
    </div>
  );
}