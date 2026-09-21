import React from 'react';
import { mockAlerts, mockTransactions } from '../../data/mockData';
import RiskBadge from '../../components/RiskBadge';
import StatusBadge from '../../components/StatusBadge';
import { ShieldAlert, Brain, CheckCircle2, XCircle } from 'lucide-react';

const AlertDetail = () => {
  const alert = mockAlerts[0];
  const tx = mockTransactions.find(t => t.id === alert.transactionId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center glass-card p-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            Alert {alert.id} <RiskBadge level={alert.riskLevel} /> <StatusBadge status={alert.status} />
          </h2>
          <p className="text-slate-400 mt-1">Generated on {new Date(alert.date).toLocaleString()}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">Investigate</button>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">Block User</button>
          <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">Dismiss</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Transaction Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Amount</p>
                <p className="text-white font-medium text-lg">₹{tx?.amount.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-slate-400">Type</p>
                <p className="text-white">{tx?.type}</p>
              </div>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white">{tx?.location}</p>
              </div>
              <div>
                <p className="text-slate-400">Status</p>
                <p className="text-white">{tx?.status}</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Detection Reasons</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-5 h-5 text-red-500" /> Multiple failed logins prior to transfer</li>
              <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-5 h-5 text-red-500" /> Unusual location (IP distance {'>'} 500km)</li>
              <li className="flex items-center gap-2 text-slate-300"><XCircle className="w-5 h-5 text-green-500" /> New payee</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Risk Assessment</h3>
            <div className="flex items-center gap-8 mb-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-700" />
                  <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="377" strokeDashoffset={377 - (377 * alert.riskScore) / 100} className="text-red-500 transition-all duration-1000" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{alert.riskScore}</span>
                  <span className="text-xs text-slate-400">Total Score</span>
                </div>
              </div>
              <div className="space-y-4 flex-1">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <p className="text-xs text-slate-400 flex items-center gap-1"><ShieldAlert className="w-4 h-4"/> SQL Rule Engine</p>
                  <p className="text-lg font-semibold text-white">Score: 85/100</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <p className="text-xs text-slate-400 flex items-center gap-1"><Brain className="w-4 h-4"/> ML Model</p>
                  <p className="text-lg font-semibold text-white">98% Fraud Probability</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Info</h3>
            <p className="text-sm text-slate-300">Name: {tx?.customerName}</p>
            <p className="text-sm text-slate-300">ID: {tx?.customerId}</p>
            <button className="mt-4 text-blue-400 text-sm hover:underline">View Full Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlertDetail;
