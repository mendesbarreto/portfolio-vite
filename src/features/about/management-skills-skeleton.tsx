import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function ManagementSkillsSkeleton({ className = '' }: { className?: string }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={`flex flex-col gap-4 w-full ${className}`}>
        <Skeleton width={200} height={32} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, index) => {
            const id = `skeleton-skill-${index}`;
            return (
              <div key={id} className="bg-background-light rounded-lg border border-m-teal/20 p-2">
                <div className="flex p-2">
                  <Skeleton width={16} height={16} className="mr-3 mt-1" />
                  <Skeleton count={2} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SkeletonTheme>
  );
}
