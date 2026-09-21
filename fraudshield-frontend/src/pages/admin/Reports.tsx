import React from 'react';
import { Download, FileText } from 'lucide-react';

const reports = [
  { id: 1, name: 'Daily Fraud Summary', desc: 'Aggregated view of all fraud alerts and system actions over the last 24 hours.' },
  { id: 2, name: 'Weekly Risk Analytics', desc: 'Trends in risk scoring and model performance across the past week.' },
  { id: 3, name: 'Monthly Compliance Report', desc: 'Regulatory compliance data covering blocked txns and KYC actions.' },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Generated Reports</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reports.map(r => (
          <div key={r.id} className="glass-card p-6 flex flex-col h-full">
            <div className="mb-4">
              <FileText className="w-8 h-8 text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold text-white">{r.name}</h3>
              <p className="text-sm text-slate-400 mt-2">{r.desc}</p>
            </div>
            <div className="mt-auto">
              <button className="w-full flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-lg transition-colors">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reports;
