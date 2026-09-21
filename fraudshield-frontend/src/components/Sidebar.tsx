import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, AlertTriangle, ArrowLeftRight, Search, Users, BarChart3, Database, Brain, Bot, FileText, Settings, Shield } from 'lucide-react';

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Fraud Alerts', path: '/admin/alerts', icon: AlertTriangle },
    { name: 'Transactions', path: '/admin/transactions', icon: ArrowLeftRight },
    { name: 'Investigations', path: '/admin/investigations', icon: Search },
    { name: 'Customers', path: '/admin/customers', icon: Users },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
    { name: 'SQL Engine', path: '/admin/sql', icon: Database },
    { name: 'ML Detection', path: '/admin/ml', icon: Brain },
    { name: 'AI Assistant', path: '/admin/ai', icon: Bot },
    { name: 'Reports', path: '/admin/reports', icon: FileText },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen glass-card rounded-none border-y-0 border-l-0 flex flex-col transition-all duration-300">
      <div className="p-6 flex items-center gap-3 border-b border-slate-700/50">
        <Shield className="w-8 h-8 text-blue-500" />
        <h1 className="text-xl font-bold tracking-tight">FraudShield</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
