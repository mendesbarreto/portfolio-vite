import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function HighlightsSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => {
          const id = `skeleton-card-${index}`;
          return (
            <div key={id} className="bg-background-light p-3 rounded-lg border border-m-gray/20">
              <div className="m-3">
                <Skeleton width={48} height={48} />
              </div>
              <Skeleton width="60%" className="mb-2" />
              <Skeleton width="40%" height={36} className="mb-3" />
              <Skeleton width="70%" className="mb-2" />
              <Skeleton count={2} />
            </div>
          );
        })}
      </div>
    </SkeletonTheme>
  );
}
