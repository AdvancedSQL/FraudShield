import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from 'recharts';

const dataBar = [{ name: 'SQL', value: 450 }, { name: 'ML', value: 300 }, { name: 'Hybrid', value: 150 }];
const dataPie = [{ name: 'Low Risk', value: 400 }, { name: 'Med Risk', value: 300 }, { name: 'High Risk', value: 200 }, { name: 'Critical', value: 100 }];
const COLORS = ['#22c55e', '#f59e0b', '#f97316', '#ef4444'];
const dataLine = [{ name: 'W1', amt: 2400 }, { name: 'W2', amt: 1398 }, { name: 'W3', amt: 9800 }, { name: 'W4', amt: 3908 }];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Fraud Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 h-80">
          <h3 className="text-lg font-medium text-white mb-4">Detection Source Effectiveness</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataBar}>
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
              <Bar dataKey="value" fill="#3b82f6" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6 h-80">
          <h3 className="text-lg font-medium text-white mb-4">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataPie} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
                {dataPie.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6 h-80 lg:col-span-2">
          <h3 className="text-lg font-medium text-white mb-4">Fraud Losses Prevented (₹)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
              <Line type="monotone" dataKey="amt" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
