import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ChevronRight } from 'lucide-react';

const CustomerAlerts = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Security Alerts</h2>
      
      <div className="glass-card p-4 hover:bg-slate-800/50 cursor-pointer transition-colors" onClick={() => navigate('/customer/alerts/1')}>
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-orange-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-medium text-lg">Unusual login attempt detected</h3>
              <p className="text-slate-400 text-sm mt-1">We noticed a login from an unfamiliar device. Please review.</p>
              <p className="text-slate-500 text-xs mt-2">Today, 10:30 AM</p>
            </div>
          </div>
          <ChevronRight className="text-slate-500" />
        </div>
      </div>
    </div>
  );
};
export default CustomerAlerts;
