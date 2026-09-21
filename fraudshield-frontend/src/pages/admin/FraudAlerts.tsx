import React from 'react';
import DataTable from '../../components/DataTable';
import RiskBadge from '../../components/RiskBadge';
import StatusBadge from '../../components/StatusBadge';
import { mockAlerts } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const FraudAlerts = () => {
  const navigate = useNavigate();

  const columns = [
    { header: 'Alert ID', accessor: 'id' as const },
    { header: 'Customer ID', accessor: 'customerId' as const },
    { header: 'Amount', accessor: (row: any) => `₹${row.amount.toLocaleString('en-IN')}` },
    { header: 'Risk Level', accessor: (row: any) => <RiskBadge level={row.riskLevel} /> },
    { header: 'Status', accessor: (row: any) => <StatusBadge status={row.status} /> },
    { header: 'Date', accessor: (row: any) => new Date(row.date).toLocaleDateString() },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Fraud Alerts</h2>
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" placeholder="Search alerts..." className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-1 focus:ring-blue-500 outline-none" />
        </div>
      </div>
      <div className="glass-card">
        <DataTable data={mockAlerts} columns={columns} onRowClick={(row) => navigate(`/admin/alerts/${row.id}`)} />
      </div>
    </div>
  );
};
export default FraudAlerts;
