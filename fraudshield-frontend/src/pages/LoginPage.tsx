import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [role, setRole] = useState<'ADMIN' | 'CUSTOMER'>('ADMIN');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password, role);
    navigate(role === 'ADMIN' ? '/admin' : '/customer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      
      <div className="glass-card p-10 w-full max-w-md relative z-10 animate-slide-up">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded-2xl flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">FraudShield</h2>
          <p className="text-slate-400 text-sm">Secure Banking Fraud Detection</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>
          
          <div className="flex items-center gap-4 py-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={role === 'ADMIN'} onChange={() => setRole('ADMIN')} name="role" className="text-blue-500 bg-slate-800 border-slate-600 focus:ring-blue-500" />
              <span className="text-slate-300 text-sm">Admin</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={role === 'CUSTOMER'} onChange={() => setRole('CUSTOMER')} name="role" className="text-blue-500 bg-slate-800 border-slate-600 focus:ring-blue-500" />
              <span className="text-slate-300 text-sm">Customer</span>
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25">
            Sign In to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
