import { TerminalHeader } from './terminal-header';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function TerminalBlock({ children, title, className }: TerminalProps) {
  return (
    <div className={`bg-black text-left border border-mTeal rounded-lg p-4 font-mono ${className}`}>
      <div className="flex justify-between items-center gap-2 mb-3">
        <div className="flex items-center gap-2 mb-3 ">
          <span className="w-3 h-3 rounded-lg  bg-red-500"></span>
          <span className="w-3 h-3 rounded-lg  bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-lg  bg-green-500"></span>
          <span className="ml-2 text-mTeal text-sm">{title || 'Terminal'}</span>
        </div>
      </div>
      <div className="border-b border-mTeal my-2"></div>
      <span className="text-mTeal text-right">$</span>
      {children}
    </div>
  );
}
