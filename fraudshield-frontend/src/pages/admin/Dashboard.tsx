import React from 'react';
import KPICard from '../../components/KPICard';
import { mockDashboardData, mockAlerts } from '../../data/mockData';
import { Activity, AlertOctagon, ShieldAlert, AlertTriangle, Search, Ban } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';

const chartData = [
  { name: 'Mon', alerts: 40 },
  { name: 'Tue', alerts: 30 },
  { name: 'Wed', alerts: 55 },
  { name: 'Thu', alerts: 45 },
  { name: 'Fri', alerts: 70 },
  { name: 'Sat', alerts: 65 },
  { name: 'Sun', alerts: 85 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard title="Total Transactions" value={mockDashboardData.totalTransactions.toLocaleString()} icon={Activity} trend="up" trendValue="12.5%" colorClass="text-blue-500" />
        <KPICard title="Fraud Alerts" value={mockDashboardData.fraudAlerts} icon={AlertTriangle} trend="up" trendValue="5.2%" colorClass="text-orange-500" />
        <KPICard title="Critical Alerts" value={mockDashboardData.critical} icon={AlertOctagon} trend="down" trendValue="2.1%" colorClass="text-red-500" />
        <KPICard title="High Risk" value={mockDashboardData.highRisk} icon={ShieldAlert} trend="up" trendValue="1.8%" colorClass="text-amber-500" />
        <KPICard title="Open Investigations" value={mockDashboardData.openInvestigations} icon={Search} trend="down" trendValue="4.3%" colorClass="text-indigo-500" />
        <KPICard title="Blocked Transactions" value={mockDashboardData.blocked} icon={Ban} trend="up" trendValue="8.9%" colorClass="text-rose-500" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 h-96">
          <h3 className="text-lg font-semibold text-white mb-6">Fraud Alerts Over Time</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorAlerts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
              <Area type="monotone" dataKey="alerts" stroke="#ef4444" fillOpacity={1} fill="url(#colorAlerts)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6 h-96">
          <h3 className="text-lg font-semibold text-white mb-6">Transaction Volume (₹ Lakhs)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} cursor={{fill: '#334155', opacity: 0.4}} />
              <Bar dataKey="alerts" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Alerts Table Preview */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Critical Alerts</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 text-sm">
                <th className="py-3 px-4 font-medium">Alert ID</th>
                <th className="py-3 px-4 font-medium">Customer</th>
                <th className="py-3 px-4 font-medium">Amount</th>
                <th className="py-3 px-4 font-medium">Risk Score</th>
                <th className="py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAlerts.map(alert => (
                <tr key={alert.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 text-white">{alert.id}</td>
                  <td className="py-3 px-4 text-slate-300">{alert.customerId}</td>
                  <td className="py-3 px-4 text-white font-medium">₹{alert.amount.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-4">
                    <span className="text-red-400 font-bold">{alert.riskScore}/100</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                      {alert.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
