import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend: 'up' | 'down';
  trendValue: string;
  colorClass?: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon: Icon, trend, trendValue, colorClass = 'text-blue-500' }) => {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-slate-800 border border-slate-700/50 ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className={`flex items-center gap-1 font-medium ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {trendValue}
        </span>
        <span className="text-slate-500">vs last week</span>
      </div>
    </div>
  );
};

export default KPICard;
