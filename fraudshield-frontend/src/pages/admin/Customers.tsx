import React from 'react';
import DataTable from '../../components/DataTable';
import RiskBadge from '../../components/RiskBadge';
import { useNavigate } from 'react-router-dom';

const mockCustomers = [
  { id: 'CUST-001', name: 'Rahul Sharma', email: 'rahul.s@example.com', city: 'Mumbai', kyc: 'VERIFIED', risk: 'HIGH' },
  { id: 'CUST-002', name: 'Priya Patel', email: 'priya.p@example.com', city: 'Delhi', kyc: 'VERIFIED', risk: 'LOW' },
];

const Customers = () => {
  const navigate = useNavigate();

  const columns = [
    { header: 'ID', accessor: 'id' as const },
    { header: 'Name', accessor: 'name' as const },
    { header: 'Email', accessor: 'email' as const },
    { header: 'City', accessor: 'city' as const },
    { header: 'KYC', accessor: (row: any) => <span className={row.kyc === 'VERIFIED' ? 'text-green-400' : 'text-yellow-400'}>{row.kyc}</span> },
    { header: 'Risk Category', accessor: (row: any) => <RiskBadge level={row.risk} /> },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Customers Directory</h2>
      <div className="glass-card">
        <DataTable data={mockCustomers} columns={columns} onRowClick={(row) => navigate(`/admin/customers/${row.id}`)} />
      </div>
    </div>
  );
};
export default Customers;
