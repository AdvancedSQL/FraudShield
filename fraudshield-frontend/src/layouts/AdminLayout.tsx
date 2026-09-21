import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#0a0f1e] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-[#0a0f1e] to-[#0a0f1e] pointer-events-none" />
        <TopNav title="FraudShield Admin Console" />
        <main className="flex-1 overflow-y-auto p-8 relative z-10 animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
