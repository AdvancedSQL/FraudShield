export interface User {
  id: string;
  username: string;
  role: 'ADMIN' | 'CUSTOMER';
  fullName: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  city: string;
  kycStatus: 'VERIFIED' | 'PENDING' | 'REJECTED';
  riskCategory: 'LOW' | 'MEDIUM' | 'HIGH';
  accounts: Account[];
}

export interface Account {
  id: string;
  type: string;
  balance: number;
}

export interface Transaction {
  id: string;
  ref: string;
  customerId: string;
  customerName?: string;
  type: string;
  amount: number;
  location: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED' | 'BLOCKED';
  date: string;
}

export interface FraudAlert {
  id: string;
  transactionId: string;
  customerId: string;
  amount: number;
  riskScore: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'INVESTIGATING' | 'RESOLVED' | 'DISMISSED';
  date: string;
}

export interface DashboardData {
  totalTransactions: number;
  fraudAlerts: number;
  highRisk: number;
  critical: number;
  openInvestigations: number;
  blocked: number;
}
