import React from 'react';
import { ShieldAlert, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerAlertDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button onClick={() => navigate('/customer/alerts')} className="text-blue-400 text-sm hover:underline mb-4">← Back to Alerts</button>
      
      <div className="glass-card p-8 text-center border-orange-500/30">
        <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldAlert className="w-8 h-8 text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Unusual Login Attempt</h2>
        <p className="text-slate-400 mb-6">We blocked an attempt to access your account from a new location (Moscow, Russia) to keep your funds safe.</p>
        
        <div className="bg-slate-900 rounded-lg p-4 text-left mb-6 border border-slate-700">
          <p className="text-sm text-slate-400 mb-1">Time: <span className="text-white font-medium">Today, 10:30 AM IST</span></p>
          <p className="text-sm text-slate-400 mb-1">Device: <span className="text-white font-medium">Windows PC / Chrome</span></p>
          <p className="text-sm text-slate-400">Status: <span className="text-green-400 font-medium">Blocked automatically</span></p>
        </div>

        <h3 className="text-white font-medium mb-3">Was this you?</h3>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-lg transition-colors">Yes, it was me</button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20">No, secure my account</button>
        </div>
      </div>
    </div>
  );
};
export default CustomerAlertDetail;
