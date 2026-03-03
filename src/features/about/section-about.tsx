export function SectionAbout({ title, className = '' }: { title: string; className?: string }) {
  return (
    <h1 className={`w-full text-2xl font-bold text-white ${className}`}>
      <span className={`text-mTeal mr-4 `}>{'##'}</span>
      <span>{title}</span>
    </h1>
  );
}
