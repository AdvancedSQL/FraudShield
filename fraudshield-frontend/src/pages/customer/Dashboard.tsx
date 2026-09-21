import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-blue-600/10 border border-blue-500/20 p-6 rounded-xl">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Welcome back, {user?.fullName}!</h2>
          <p className="text-slate-400">Your accounts are currently protected by FraudShield.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full font-medium">
          <ShieldCheck className="w-5 h-5" /> All Systems Secure
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 text-slate-400 mb-4">
            <CreditCard className="w-5 h-5" /> Savings Account
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">₹14,50,000.00</h3>
          <p className="text-sm text-slate-500">Account ending in 9021</p>
        </div>
        <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-lg font-medium text-white mb-2">Have a question?</h3>
          <p className="text-sm text-slate-400 mb-4">Our AI support bot is available 24/7 to assist you.</p>
          <button onClick={() => navigate('/customer/chat')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg transition-colors flex items-center gap-2">
            Chat with Support <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
          <button onClick={() => navigate('/customer/transactions')} className="text-blue-400 text-sm hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { id: 1, name: 'Amazon India', date: 'Today, 10:20 AM', amount: -12400 },
            { id: 2, name: 'Salary Credit', date: 'Yesterday', amount: 150000 },
          ].map(tx => (
            <div key={tx.id} className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-white">{tx.name}</p>
                <p className="text-xs text-slate-400">{tx.date}</p>
              </div>
              <span className={`font-medium ${tx.amount > 0 ? 'text-green-400' : 'text-white'}`}>
                {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CustomerDashboard;
