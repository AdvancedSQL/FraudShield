import React from 'react';
import { User, CreditCard, Activity } from 'lucide-react';
import RiskBadge from '../../components/RiskBadge';

const CustomerDetail = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
            <User className="w-8 h-8 text-slate-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">Rahul Sharma <RiskBadge level="HIGH" /></h2>
            <p className="text-slate-400">ID: CUST-001 • rahul.s@example.com • +91 98765 43210</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="text-slate-300">Location: Mumbai, IN</span>
              <span className="text-green-400">KYC Verified</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white rounded-lg transition-colors">Edit Profile</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5"/> Accounts</h3>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex justify-between items-center mb-3">
            <div>
              <p className="text-white font-medium">Savings Account</p>
              <p className="text-xs text-slate-400">XXXX-XXXX-9021</p>
            </div>
            <p className="text-lg font-bold text-white">₹14,50,000</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Credit Card</p>
              <p className="text-xs text-slate-400">XXXX-XXXX-4421</p>
            </div>
            <p className="text-lg font-bold text-white">₹45,000 / 2,00,000</p>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Activity className="w-5 h-5"/> Recent Activity</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <p className="text-sm font-medium text-white">IMPS Transfer to Unknown</p>
                <p className="text-xs text-slate-400">Today at 10:20 AM</p>
              </div>
              <span className="text-red-400 font-medium">-₹2,50,000</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <p className="text-sm font-medium text-white">POS Payment - Amazon</p>
                <p className="text-xs text-slate-400">Yesterday</p>
              </div>
              <span className="text-white font-medium">-₹12,400</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CustomerDetail;
