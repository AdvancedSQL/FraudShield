import React from 'react';

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStyle = () => {
    switch (status.toUpperCase()) {
      case 'OPEN':
      case 'PENDING':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'INVESTIGATING':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
      case 'RESOLVED':
      case 'COMPLETED':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'BLOCKED':
      case 'FAILED':
      case 'DISMISSED':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getStyle()}`}>
      {status}
    </span>
  );
};
export default StatusBadge;
