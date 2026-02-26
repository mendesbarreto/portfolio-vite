import { TerminalWindowControl } from './terminal-window-controll';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function TerminalBlock({ children, title, className }: TerminalProps) {
  return (
    <div className={`bg-black text-left border border-mTeal rounded-lg p-4 font-mono ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <TerminalWindowControl />
        <span className="ml-2 text-mTeal text-sm">{title || 'Terminal'}</span>
      </div>
      <div className="border-b border-mTeal my-2"></div>
      <span className="text-mTeal text-right">$</span>
      {children}
    </div>
  );
}
