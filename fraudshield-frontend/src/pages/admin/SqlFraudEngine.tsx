import React from 'react';
import { Database, Play, CheckCircle2 } from 'lucide-react';

const rules = [
  { id: 'RUL-01', name: 'High Velocity Transfers', severity: 'HIGH', status: 'ACTIVE', query: 'SELECT * FROM txns WHERE user_id = ? AND count > 5 AND window = "1hr"' },
  { id: 'RUL-02', name: 'Impossible Travel', severity: 'CRITICAL', status: 'ACTIVE', query: 'SELECT * FROM logins WHERE distance > 500 AND time_diff < "2hrs"' },
];

const SqlFraudEngine = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Database className="w-6 h-6 text-blue-500"/> SQL Rule Engine</h2>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Play className="w-4 h-4"/> Run Manual Evaluation
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {rules.map((rule) => (
          <div key={rule.id} className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{rule.name}</h3>
                <p className="text-xs text-slate-400 mt-1">Rule ID: {rule.id}</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 border border-red-500/30 rounded-md font-semibold">{rule.severity}</span>
                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-md font-semibold flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> {rule.status}</span>
              </div>
            </div>
            <div className="bg-[#0f172a] p-4 rounded-lg border border-slate-700/50 font-mono text-sm text-blue-300">
              {rule.query}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SqlFraudEngine;
