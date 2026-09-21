import React from 'react';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: 'success' | 'warning' | 'error' | 'info';
}

export const Timeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, i) => (
        <div key={event.id} className="flex gap-4 relative">
          {i !== events.length - 1 && <div className="absolute top-8 left-[11px] w-0.5 h-full bg-slate-700"></div>}
          <div className="relative z-10 w-6 h-6 rounded-full bg-slate-800 border-2 border-blue-500 mt-1 shrink-0"></div>
          <div className="flex-1 glass-card p-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-white font-medium">{event.title}</h4>
              <span className="text-xs text-slate-400">{event.time}</span>
            </div>
            <p className="text-sm text-slate-400">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Timeline;
