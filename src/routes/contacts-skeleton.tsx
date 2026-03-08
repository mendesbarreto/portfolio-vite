import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function ContactSummarySkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className} mt-4`}>
      <div className="border border-mTeal/10 rounded-xl bg-background p-4">
        <Skeleton count={3} />
      </div>
    </div>
  );
}

export function ContactsSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 5 }).map((_, index) => {
          const id = `skeleton-contact-${index}`;
          return (
            <div key={id} className="bg-background-light rounded-lg border border-m-teal/20 p-2">
              <div className="flex p-2 items-center">
                <Skeleton circle width={40} height={40} className="mr-4" />
                <div className="flex flex-col">
                  <Skeleton width={100} className="mb-2" />
                  <Skeleton width={180} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function WebSiteHandCraftedSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex w-100 p-4">
        <Skeleton width={400} height={120} />
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex flex-col gap-4 w-full">
        <Skeleton width={180} height={32} className="mt-8" />
        <ContactSummarySkeleton className="mb-4" />
        <ContactsSkeleton />
        <Skeleton width={100} height={32} className="mt-8" />
        <ContactSummarySkeleton />
        <WebSiteHandCraftedSkeleton />
      </div>
    </SkeletonTheme>
  );
}
