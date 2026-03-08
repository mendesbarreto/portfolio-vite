import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function ExperienceCardSkeleton() {
  return (
    <div className="bg-background-light rounded-lg border border-m-gray/20 my-4 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Skeleton width="50%" height={32} className="mb-2" />
          <div className="py-2">
            <Skeleton width="70%" height={24} />
          </div>
          <Skeleton count={2} className="mb-2" />
          <Skeleton width={150} className="mt-2" />
        </div>
        <Skeleton width={20} height={20} />
      </div>
    </div>
  );
}

export function ExperienceSkeleton({ className = '' }: { className?: string }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <section className={`${className} w-full`}>
        <Skeleton width={180} height={32} className="mb-4" />
        {Array.from({ length: 3 }).map((_, index) => {
          const id = `experience-skeleton-${index}`;
          return <ExperienceCardSkeleton key={id} />;
        })}
      </section>
    </SkeletonTheme>
  );
}
