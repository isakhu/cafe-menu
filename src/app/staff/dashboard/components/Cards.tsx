import React from 'react';

// Simplified Order item component for Staff Dashboards
export const OrderCard = ({ order }: { order: any }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center justify-between">
    <div>
      <h4 className="font-bold text-sm text-stone-800">{order.items.join(', ')}</h4>
      <p className="text-[10px] uppercase text-stone-500 font-bold">{order.guestName} • Room {order.room}</p>
    </div>
    <select className="bg-stone-50 text-[10px] font-bold uppercase p-2 rounded-lg border-none outline-none" defaultValue={order.status}>
      <option>Pending</option>
      <option>In Progress</option>
      <option>Done</option>
    </select>
  </div>
);

// Simplified Booking card for Staff Dashboards
export const BookingCard = ({ booking }: { booking: any }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center justify-between">
    <div>
      <h4 className="font-bold text-sm text-stone-800">{booking.activity}</h4>
      <p className="text-[10px] uppercase text-stone-500 font-bold">{booking.date} • {booking.time}</p>
    </div>
    <select className="bg-stone-50 text-[10px] font-bold uppercase p-2 rounded-lg border-none outline-none" defaultValue={booking.status}>
      <option>Pending</option>
      <option>Confirmed</option>
      <option>Done</option>
    </select>
  </div>
);
