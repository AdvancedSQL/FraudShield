import { DashboardData, FraudAlert, Transaction } from '../types';

export const mockDashboardData: DashboardData = {
  totalTransactions: 125430,
  fraudAlerts: 342,
  highRisk: 89,
  critical: 24,
  openInvestigations: 15,
  blocked: 67
};

export const mockAlerts: FraudAlert[] = [
  {
    id: 'ALT-1001',
    transactionId: 'TXN-9021',
    customerId: 'CUST-001',
    amount: 250000,
    riskScore: 92,
    riskLevel: 'CRITICAL',
    status: 'OPEN',
    date: new Date().toISOString()
  },
  {
    id: 'ALT-1002',
    transactionId: 'TXN-9022',
    customerId: 'CUST-002',
    amount: 75000,
    riskScore: 78,
    riskLevel: 'HIGH',
    status: 'INVESTIGATING',
    date: new Date(Date.now() - 3600000).toISOString()
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: 'TXN-9021',
    ref: 'REF-83921',
    customerId: 'CUST-001',
    customerName: 'Rahul Sharma',
    type: 'IMPS',
    amount: 250000,
    location: 'Mumbai, IN',
    status: 'BLOCKED',
    date: new Date().toISOString()
  }
];
