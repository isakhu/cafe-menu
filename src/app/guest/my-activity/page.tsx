import React, { useMemo } from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Info, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Mock data for status: In a real app, this would be fetched from the DB
const MY_ITEMS = [
  { id: '1', name: 'Special Shekla Tibs', type: 'order', status: 'pending', time: '10 mins ago' },
  { id: '2', name: 'Deep Tissue Massage', type: 'booking', status: 'confirmed', time: 'For 02:00 PM' },
  { id: '3', name: 'Daily Gym Pass', type: 'request', status: 'pending', time: 'Submitted 1hr ago' },
];

export default function MyActivityPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] pb-24 font-sans text-stone-900">
      <header className="sticky top-0 z-50 bg-[#fcfaf7]/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 border-b border-stone-200/50">
        <Link href="/guest"><ArrowLeft className="w-5 h-5 text-stone-600" /></Link>
        <h1 className="text-lg font-serif font-bold text-stone-800">My Activity</h1>
      </header>

      <main className="p-6 space-y-6">
        {MY_ITEMS.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-5 shadow-sm border border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.status === 'confirmed' ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                {item.status === 'confirmed' ? <CheckCircle className="w-6 h-6 text-emerald-600" /> : <Clock className="w-6 h-6 text-amber-600" />}
              </div>
              <div>
                <h4 className="font-bold text-sm text-stone-800">{item.name}</h4>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wide">{item.type} • {item.status}</p>
                <p className="text-[10px] text-stone-500">{item.time}</p>
              </div>
            </div>
            
            {item.status === 'pending' && (
              <button className="text-[10px] font-bold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full">
                Cancel
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
