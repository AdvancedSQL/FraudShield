import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Bell, LogOut, User as UserIcon } from 'lucide-react';

const TopNav = ({ title = 'Dashboard' }) => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 glass-card rounded-none border-t-0 border-x-0 border-b flex items-center justify-between px-8 z-10 sticky top-0">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white">
            3
          </span>
        </button>
        <div className="flex items-center gap-3 border-l border-slate-700/50 pl-6">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
            <UserIcon className="w-5 h-5 text-slate-300" />
          </div>
          <div className="text-sm">
            <p className="font-medium text-white">{user?.fullName}</p>
            <p className="text-xs text-slate-400">{user?.role}</p>
          </div>
          <button onClick={logout} className="ml-4 text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
