import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  sortable?: boolean;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

export function DataTable<T>({ columns, data, onRowClick }: DataTableProps<T>) {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(false);

  // Simplified sort logic for demo
  const sortedData = [...data];

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-700 bg-slate-800/50">
            {columns.map((col, i) => (
              <th key={i} className="py-3 px-4 text-sm font-medium text-slate-400 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer">
                  {col.header}
                  {col.sortable && <ChevronDown className="w-4 h-4" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr
              key={i}
              onClick={() => onRowClick && onRowClick(row)}
              className={`border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((col, j) => (
                <td key={j} className="py-3 px-4 text-sm text-slate-300">
                  {typeof col.accessor === 'function' ? col.accessor(row) : (row[col.accessor as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="py-8 text-center text-slate-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
