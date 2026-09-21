import React from 'react';

const Settings = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
      
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">Profile Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Full Name</label>
            <input type="text" defaultValue="System Admin" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Email Address</label>
            <input type="email" defaultValue="admin@fraudshield.com" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white" />
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">Notifications</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-600" />
            <span className="text-slate-300">Email on CRITICAL alerts</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-600" />
            <span className="text-slate-300">Daily summary report</span>
          </label>
        </div>
      </div>
      
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Save Changes</button>
    </div>
  );
};
export default Settings;
