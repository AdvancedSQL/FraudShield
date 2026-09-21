import React from 'react';
import Timeline from '../../components/Timeline';
import StatusBadge from '../../components/StatusBadge';
import { User, FileText, Lock } from 'lucide-react';

const InvestigationDetail = () => {
  const events = [
    { id: '1', title: 'Investigation Opened', description: 'System auto-generated investigation from ALT-1001.', time: '10:30 AM' },
    { id: '2', title: 'Analyst Assigned', description: 'Sarah Jenkins assigned to investigation.', time: '10:45 AM' },
    { id: '3', title: 'Customer Contacted', description: 'Attempted to reach customer via phone. No response.', time: '11:15 AM' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center glass-card p-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            INV-001 <StatusBadge status="INVESTIGATING" />
          </h2>
          <p className="text-slate-400 mt-1">High Priority • Assigned to Sarah Jenkins</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">Add Note</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"><Lock className="w-4 h-4"/> Freeze Account</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Close Investigation</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Event Timeline</h3>
            <Timeline events={events} />
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Analyst Notes</h3>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4 text-sm text-slate-300">
              <p className="font-semibold text-white mb-1">Sarah Jenkins - Today at 11:20 AM</p>
              Reviewed transaction history. The login originated from an IP in Russia, but the customer's registered address is in Mumbai. High likelihood of account takeover.
            </div>
            <textarea placeholder="Add a new note..." className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500 h-24"></textarea>
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Profile</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center"><User className="text-slate-300" /></div>
              <div>
                <p className="text-white font-medium">Rahul Sharma</p>
                <p className="text-xs text-slate-400">ID: CUST-001</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between"><span className="text-slate-400">City</span> <span className="text-white">Mumbai, IN</span></p>
              <p className="flex justify-between"><span className="text-slate-400">KYC</span> <span className="text-green-400">Verified</span></p>
              <p className="flex justify-between"><span className="text-slate-400">Risk Profile</span> <span className="text-red-400">High</span></p>
            </div>
            <button className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" /> View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvestigationDetail;
