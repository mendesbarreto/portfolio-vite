import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function LoadingSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:px-0">
        <div className="md:w-1/2 w-full">
          <Skeleton height={32} className="mb-8" />
          <Skeleton count={6} className="mb-2" />
          <Skeleton count={2} className="mt-8 mb-2" />
        </div>
        <div className="w-full md:w-117 max-w-117">
          <Skeleton height={288} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
