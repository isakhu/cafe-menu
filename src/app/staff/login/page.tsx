import React from 'react';

export default function StaffLoginPage() {
  const roles = ['Manager', 'Cafeteria', 'Restaurant', 'Pool', 'Sauna', 'Spa', 'Gym'];

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
        <h1 className="text-2xl font-serif font-bold text-stone-800 mb-6">Staff Access</h1>
        <form className="space-y-4">
          <div>
            <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Select Role</label>
            <select className="w-full bg-stone-50 rounded-2xl p-3 text-sm border-none mt-1">
              {roles.map(role => <option key={role}>{role}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Password</label>
            <input type="password" className="w-full bg-stone-50 rounded-2xl p-3 text-sm border-none mt-1" />
          </div>
          <button className="w-full bg-stone-900 text-white p-4 rounded-full font-bold text-sm hover:bg-stone-800 transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
