import React from 'react';
import DataTable from '../../components/DataTable';

const mockCustomerTxns = [
  { id: 1, ref: 'REF-921', name: 'Amazon India', type: 'POS', amount: 12400, date: 'Today, 10:20 AM', status: 'Completed' },
  { id: 2, ref: 'REF-922', name: 'Salary Credit', type: 'NEFT', amount: 150000, date: 'Yesterday', status: 'Completed' },
];

const CustomerTransactions = () => {
  const columns = [
    { header: 'Reference', accessor: 'ref' as const },
    { header: 'Description', accessor: 'name' as const },
    { header: 'Type', accessor: 'type' as const },
    { header: 'Date', accessor: 'date' as const },
    { header: 'Amount', accessor: (row: any) => `₹${row.amount.toLocaleString('en-IN')}` },
    { header: 'Status', accessor: 'status' as const },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Transaction History</h2>
      <div className="glass-card">
        <DataTable data={mockCustomerTxns} columns={columns} />
      </div>
    </div>
  );
};
export default CustomerTransactions;
