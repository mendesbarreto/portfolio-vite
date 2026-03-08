import { useProfileStore } from '@/stores/profileStore';
import { SectionAbout } from './section-about';
import type { UserProfile } from 'module-personal-profile-react-sdk';
import { FromToDatesText } from '@/components/common/from-to-dates-text';
import { EducationLanguagesSkeleton } from './education-languages-skeleton';

function EducationCard({ profile }: { profile: UserProfile | undefined }) {
  const education = profile?.education;
  return (
    <div
      className={`rounded-lg hover:bg-background my-2 border border-mGray/20 bg-background-light hover:border-mTeal/80`}
    >
      <div className="flex items-start justify-between p-8">
        <div className="flex-1">
          <h3 className="text-2xl text-white font-bold">{'Education'}</h3>
          <p className="text-mTeal font-semibold text-lg py-2">
            <span>{education?.institution}</span>
          </p>
          <p className={`text-mGray text-md`}>{`${education?.title}`}</p>
          <div className="mt-2 text-md">
            <FromToDatesText startDate={education?.startDate || ''} endDate={education?.endDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguagesCard({ profile }: { profile: UserProfile | undefined }) {
  const languages = profile?.languages || [];
  return (
    <div
      className={`rounded-lg hover:bg-background my-2 border border-mGray/20 bg-background-light hover:border-mTeal/80`}
    >
      <div className="flex items-start justify-between p-8">
        <div className="flex-1">
          <h3 className="text-2xl text-white font-bold">{'Languages'}</h3>
          {languages.map((item, index) => {
            const id = `language-${index}`;
            return (
              <div key={id} className="flex justify-between items-center gap-4 mt-4">
                <p className={`text-mGray text-lg`}>{item.name}</p>
                <p className="text-mTeal font-semibold text-lg">
                  <span>{item.proficiency}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export function EducationLanguages({ className = '' }: { className?: string }) {
  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const profile = userData?.user?.profile;

  if (isLoading) {
    return <EducationLanguagesSkeleton></EducationLanguagesSkeleton>;
  }

  return (
    <div className={`flex flex-col w-full mb-4 ${className}`}>
      <SectionAbout title="Education & Languages" className="mb-4"></SectionAbout>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <EducationCard profile={profile} />
        <LanguagesCard profile={profile} />
      </div>
    </div>
  );
}
