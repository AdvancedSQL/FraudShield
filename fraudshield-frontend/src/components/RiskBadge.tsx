import React from 'react';

const colors = {
  LOW: 'bg-green-500/20 text-green-400 border-green-500/30',
  MEDIUM: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  HIGH: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  CRITICAL: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const RiskBadge: React.FC<{ level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' }> = ({ level }) => {
  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${colors[level]}`}>
      {level}
    </span>
  );
};
export default RiskBadge;
