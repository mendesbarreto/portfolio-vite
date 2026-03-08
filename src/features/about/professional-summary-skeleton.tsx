import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function ProfessionalSummarySkeleton({ className = '' }: { className?: string }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={`flex flex-col gap-4 ${className}`}>
        <Skeleton width={220} height={32} />
        <div className="border border-mTeal/10 rounded-xl bg-background p-4">
          <Skeleton count={6} className="mb-2" />
          <div className="pt-8">
            <Skeleton width="30%" className="mb-2" />
            <Skeleton count={2} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
