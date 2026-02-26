interface TerminalWindowControlProps {
  className?: string;
}

export function TerminalWindowControl({ className = '' }: TerminalWindowControlProps) {
  return (
    <div className={`md:flex hidden items-center gap-2 ${className}`}>
      <span className="w-3 h-3 rounded-full  bg-red-500"></span>
      <span className="w-3 h-3 rounded-full  bg-yellow-500"></span>
      <span className="w-3 h-3 rounded-full bg-green-500"></span>
    </div>
  );
}
