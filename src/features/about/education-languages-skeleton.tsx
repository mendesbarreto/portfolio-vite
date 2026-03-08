import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function EducationLanguagesSkeleton({ className = '' }: { className?: string }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={`flex flex-col w-full mb-4 ${className}`}>
        <Skeleton width={220} height={32} className="mb-4" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {/* Education Card Skeleton */}
          <div className="rounded-lg border border-m-gray/20 bg-background-light my-2 p-8">
            <Skeleton width="40%" height={32} className="mb-2" />
            <div className="py-2">
              <Skeleton width="70%" height={24} />
            </div>
            <Skeleton width="80%" className="mb-2" />
            <Skeleton width={60} className="mt-2" />
          </div>

          {/* Languages Card Skeleton */}
          <div className="rounded-lg border border-m-gray/20 bg-background-light my-2 p-8">
            <Skeleton width="40%" height={32} className="mb-4" />
            {Array.from({ length: 3 }).map((_, i) => {
              const id = `language-skeleton-${i}`;
              return (
                <div key={id} className="flex justify-between items-center gap-4 mt-4">
                  <Skeleton width={100} />
                  <Skeleton width={80} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
