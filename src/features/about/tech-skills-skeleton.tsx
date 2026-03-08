import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
export function TechSkillsSkeleton({ className = '' }: { className?: string }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <section className={`flex flex-col gap-4 w-full ${className}`}>
        <Skeleton width={150} height={32} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => {
            const id = `skeleton-tech-skill-${index}`;
            return (
              <div key={id} className="bg-background-light rounded-lg border border-m-teal/20 p-2">
                <div className="flex flex-col p-2">
                  <Skeleton width="60%" height={28} className="mb-4" />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {Array.from({ length: 5 }).map((_, sIndex) => {
                      const id = `skeleton-tech-skill-${index}-${sIndex}`;
                      return <Skeleton key={id} width={80 + Math.random() * 60} height={28} />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SkeletonTheme>
  );
}
