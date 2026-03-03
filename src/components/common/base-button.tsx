interface BaseButtonProps {
  className?: string;
  title: string;
  onClick?: () => void;
}

export function BaseButton({ title, className = '', onClick }: BaseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border border-mTeal bg-backgroundLight text-white px-4 py-2 rounded hover:bg-mTeal/80 ${className}`}
    >
      {title}
    </button>
  );
}
