import profileImage from '/img-profile.png';
import { useProfileStore } from '@/stores/profileStore';
import { LoadingSkeleton } from '@/components/common/loading-skeleton';
import ReactMarkdown from 'react-markdown';

export function HomeSummary() {
  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);

  const { profile } = userData?.user ?? {};

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:px-0">
      <div className="md:w-1/2 text-left  w-full">
        {' '}
        {isLoading && <LoadingSkeleton />}
        {userData && (
          <div className="w-full md:text-2xl mb-6 font-bold text-white">
            <span>I'm a </span>
            <span className="text-mTeal">{profile?.currentRole}</span>
          </div>
        )}
        {userData && (
          <ReactMarkdown
            components={{
              strong: ({ children }) => <span className="text-mTeal font-bold">{children}</span>,
              p: ({ children }) => <p className="text-mGray leading-relaxed">{children}</p>,
            }}
          >
            {profile?.bio}
          </ReactMarkdown>
        )}
        {userData && (
          <div className="text-mGray pt-8 leading-relaxed">
            <span className="text-mTeal font-bold">My goal is simple: </span>
            {profile?.goal}
          </div>
        )}
      </div>
      <div>
        <div className="w-full md:w-117 max-w-117 mb-12">
          <img src={profileImage} alt="Douglas" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
