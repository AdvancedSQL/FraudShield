import React from 'react';
import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';
import { mockTransactions } from '../../data/mockData';
import { Search, Filter } from 'lucide-react';

const Transactions = () => {
  const columns = [
    { header: 'Ref', accessor: 'ref' as const },
    { header: 'Customer', accessor: 'customerName' as const },
    { header: 'Type', accessor: 'type' as const },
    { header: 'Amount', accessor: (row: any) => `₹${row.amount.toLocaleString('en-IN')}` },
    { header: 'Location', accessor: 'location' as const },
    { header: 'Status', accessor: (row: any) => <StatusBadge status={row.status} /> },
    { header: 'Date', accessor: (row: any) => new Date(row.date).toLocaleString() },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">All Transactions</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search transactions..." className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-1 focus:ring-blue-500 outline-none" />
          </div>
        </div>
      </div>
      <div className="glass-card">
        <DataTable data={mockTransactions} columns={columns} />
      </div>
    </div>
  );
};
export default Transactions;
