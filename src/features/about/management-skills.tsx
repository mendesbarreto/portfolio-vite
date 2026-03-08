import { useProfileStore } from '@/stores/profileStore';
import { SectionAbout } from './section-about';
import { ManagementSkillsSkeleton } from './management-skills-skeleton';

export function ManagementSkills({ className = '' }: { className?: string }) {
  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const managementSkills = userData?.managementSkills || [];

  if (isLoading) {
    <ManagementSkillsSkeleton />;
  }

  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      <SectionAbout title="Management Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {managementSkills.map((skill, index) => {
          const id = `skill-${index}`;
          return (
            <div
              key={id}
              className="
              bg-background-light 
              rounded-lg 
              border 
              w-full 
              border-m-teal/20 
              hover:border-mTeal 
              hover:bg-background 
              items-center 
              justify-start 
              p-2
              text-lg
              "
            >
              <div key={id} className="flex text-mGray p-2 leading-relaxed">
                <span className="text-mTeal mr-3 mt-1">{'▹'}</span>
                {skill.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
