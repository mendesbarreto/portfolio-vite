import ReactMarkdown from 'react-markdown';
import { SectionAbout } from './section-about';
import { useProfileStore } from '@/stores/profileStore';
import { ProfessionalSummarySkeleton } from './professional-summary-skeleton';

export function ProfessionalSummary({ className = '' }: { className?: string }) {
  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const { profile } = userData?.user ?? {};

  if (isLoading) {
    return <ProfessionalSummarySkeleton />;
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <SectionAbout title="Professional Summary" />
      <div className="border text-lg border-mTeal/10 rounded-xl bg-background p-4 leading-relaxed">
        <ReactMarkdown
          components={{
            strong: ({ children }) => <span className="text-mTeal font-bold">{children}</span>,
            p: ({ children }) => <p className="text-mGray leading-relaxed">{children}</p>,
          }}
        >
          {profile?.bio}
        </ReactMarkdown>
        <div className="text-mGray pt-8 leading-relaxed">
          <span className="text-mTeal font-bold">My goal is simple:</span>
          {profile?.goal}
        </div>
      </div>
    </div>
  );
}
