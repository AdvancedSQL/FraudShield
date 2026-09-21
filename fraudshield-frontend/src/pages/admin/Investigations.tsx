import React from 'react';
import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';
import { useNavigate } from 'react-router-dom';

const mockInvestigations = [
  { id: 'INV-001', alertId: 'ALT-1001', customer: 'Rahul Sharma', status: 'INVESTIGATING', priority: 'High', analyst: 'Sarah Jenkins', date: new Date().toISOString() },
  { id: 'INV-002', alertId: 'ALT-1002', customer: 'Priya Patel', status: 'OPEN', priority: 'Medium', analyst: 'Unassigned', date: new Date(Date.now() - 86400000).toISOString() },
];

const Investigations = () => {
  const navigate = useNavigate();

  const columns = [
    { header: 'ID', accessor: 'id' as const },
    { header: 'Alert ID', accessor: 'alertId' as const },
    { header: 'Customer', accessor: 'customer' as const },
    { header: 'Priority', accessor: 'priority' as const },
    { header: 'Analyst', accessor: 'analyst' as const },
    { header: 'Status', accessor: (row: any) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Investigations</h2>
      <div className="glass-card">
        <DataTable data={mockInvestigations} columns={columns} onRowClick={(row) => navigate(`/admin/investigations/${row.id}`)} />
      </div>
    </div>
  );
};
export default Investigations;
