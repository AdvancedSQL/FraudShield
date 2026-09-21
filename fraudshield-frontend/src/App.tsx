import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './pages/LoginPage';

// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import FraudAlerts from './pages/admin/FraudAlerts';
import AlertDetail from './pages/admin/AlertDetail';
import Transactions from './pages/admin/Transactions';
import Investigations from './pages/admin/Investigations';
import InvestigationDetail from './pages/admin/InvestigationDetail';
import Customers from './pages/admin/Customers';
import CustomerDetail from './pages/admin/CustomerDetail';
import Analytics from './pages/admin/Analytics';
import SqlFraudEngine from './pages/admin/SqlFraudEngine';
import MlDetection from './pages/admin/MlDetection';
import AiAssistant from './pages/admin/AiAssistant';
import Reports from './pages/admin/Reports';
import Settings from './pages/admin/Settings';

// Customer Pages
import CustomerLayout from './layouts/CustomerLayout';
import CustomerDashboard from './pages/customer/Dashboard';
import CustomerTransactions from './pages/customer/Transactions';
import CustomerAlerts from './pages/customer/Alerts';
import CustomerAlertDetail from './pages/customer/AlertDetail';
import CustomerChatbot from './pages/customer/Chatbot';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route element={<ProtectedRoute allowedRole="ADMIN" />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="alerts" element={<FraudAlerts />} />
              <Route path="alerts/:id" element={<AlertDetail />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="investigations" element={<Investigations />} />
              <Route path="investigations/:id" element={<InvestigationDetail />} />
              <Route path="customers" element={<Customers />} />
              <Route path="customers/:id" element={<CustomerDetail />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="sql" element={<SqlFraudEngine />} />
              <Route path="ml" element={<MlDetection />} />
              <Route path="ai" element={<AiAssistant />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRole="CUSTOMER" />}>
            <Route path="/customer" element={<CustomerLayout />}>
              <Route index element={<CustomerDashboard />} />
              <Route path="transactions" element={<CustomerTransactions />} />
              <Route path="alerts" element={<CustomerAlerts />} />
              <Route path="alerts/:id" element={<CustomerAlertDetail />} />
              <Route path="chat" element={<CustomerChatbot />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
