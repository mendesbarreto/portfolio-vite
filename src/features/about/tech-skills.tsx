import { useProfileStore } from '@/stores/profileStore';
import { SectionAbout } from './section-about';
import { TechSkillsSkeleton } from './tech-skills-skeleton';

export function TechSkills({ className = '' }: { className?: string }) {
  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const techSkills = userData?.techSkills || [];

  if (isLoading) {
    return <TechSkillsSkeleton />;
  }

  return (
    <section className={`flex flex-col gap-4 w-full ${className}`}>
      <SectionAbout title="Tech Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techSkills.map((item, index) => {
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
              p-2"
            >
              <div
                key={id}
                className="flex flex-col text-mTeal text-2xl font-bold p-2 leading-relaxed"
              >
                {item.title}
                <div className="flex flex-wrap gap-2 mt-4 justify-start">
                  {item.skills.map((skill, sIndex) => {
                    const id = `tech-skill-${sIndex}`;
                    return (
                      <span
                        key={id}
                        className="bg-background border border-mTeal/30 font-normal rounded-sm p-1.5 text-mGray text-lg"
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
