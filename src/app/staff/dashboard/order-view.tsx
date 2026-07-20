import React from 'react';
import { OrderCard } from './components/Cards';

const MOCK_ORDERS = [
  { id: '1', items: ['Special Shekla Tibs'], guestName: 'John Doe', room: '101', status: 'Pending' },
  { id: '2', items: ['Macchiato', 'Croissant'], guestName: 'Jane Smith', room: '204', status: 'In Progress' },
];

export default function StaffOrderDashboard({ role }: { role: string }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-serif font-bold text-stone-800 mb-6">{role} Order Queue</h2>
      <div className="space-y-4">
        {MOCK_ORDERS.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}