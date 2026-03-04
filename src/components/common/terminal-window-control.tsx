interface TerminalWindowControlProps {
  className?: string;
}

export function TerminalWindowControl({ className = '' }: TerminalWindowControlProps) {
  return (
    <div className={`md:flex hidden items-center gap-2 ${className}`}>
      <span className="w-3 h-3 rounded-full   bg-mRed"></span>
      <span className="w-3 h-3 rounded-full  bg-mYellow"></span>
      <span className="w-3 h-3 rounded-full bg-mTeal"></span>
    </div>
  );
}
