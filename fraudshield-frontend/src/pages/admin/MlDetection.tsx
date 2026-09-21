import React from 'react';
import { Brain, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const importanceData = [
  { feature: 'Location Dist', weight: 85 },
  { feature: 'Time of Day', weight: 65 },
  { feature: 'Amount Diff', weight: 55 },
  { feature: 'Device IP', weight: 45 },
];

const MlDetection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="w-8 h-8 text-indigo-500" />
        <h2 className="text-2xl font-bold text-white">Machine Learning Detection</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-green-500"/> Model Health</h3>
          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400">Current Model</p>
              <p className="text-lg font-bold text-white">XGBoost-V2.1</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400">Accuracy (Last 7 Days)</p>
              <p className="text-lg font-bold text-green-400">99.2%</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400">False Positive Rate</p>
              <p className="text-lg font-bold text-red-400">0.8%</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 lg:col-span-2 h-96">
          <h3 className="text-lg font-semibold text-white mb-6">Feature Importance</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={importanceData} layout="vertical">
              <XAxis type="number" stroke="#64748b" />
              <YAxis dataKey="feature" type="category" stroke="#64748b" width={100} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
              <Bar dataKey="weight" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default MlDetection;
