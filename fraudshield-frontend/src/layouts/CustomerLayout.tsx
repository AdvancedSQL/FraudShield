import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { LayoutDashboard, ArrowLeftRight, Bell, MessageSquare } from 'lucide-react';

const CustomerLayout = () => {
  const links = [
    { name: 'Overview', path: '/customer', icon: LayoutDashboard },
    { name: 'Transactions', path: '/customer/transactions', icon: ArrowLeftRight },
    { name: 'Security Alerts', path: '/customer/alerts', icon: Bell },
    { name: 'Support Bot', path: '/customer/chat', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col">
      <TopNav title="Customer Portal" />
      <div className="flex-1 flex overflow-hidden">
        {/* Simple Side Nav */}
        <div className="w-64 glass-card rounded-none border-y-0 border-l-0 p-4 space-y-2 hidden md:block">
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/customer'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`
              }
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.name}</span>
            </NavLink>
          ))}
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-[#0a0f1e] to-indigo-900/5 pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerLayout;
