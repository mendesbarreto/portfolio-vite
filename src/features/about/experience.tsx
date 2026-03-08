import { useProfileStore } from '@/stores/profileStore';
import type { ProfessionalExperience } from 'module-personal-profile-react-sdk';
import { useState } from 'react';
import { ExperienceSkeleton } from './experience-skeleton';
import { FromToDatesText } from '@/components/common/from-to-dates-text';

export function Experience({ className = '' }: { className?: string }) {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const experiences = userData?.experience ?? [];

  if (isLoading) {
    return <ExperienceSkeleton />;
  }

  return (
    <section className={`${className} w-full`}>
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mTeal">{'##'}</span> {'Professional Experience'}
      </h2>
      {experiences.map((job, jIndex) => {
        const isUncollapse = expandedProject === jIndex;
        const id = `job-${jIndex}`;
        return (
          <ExperienceCard
            key={id}
            index={jIndex}
            experience={job}
            isUncollapse={isUncollapse}
            onToggle={(index) => {
              if (expandedProject === index) {
                setExpandedProject(null);
                return;
              }
              setExpandedProject(index);
            }}
          />
        );
      })}
    </section>
  );
}

function ExperienceCard({
  index,
  experience: experience,
  isUncollapse,
  onToggle,
}: {
  index: number;
  experience: ProfessionalExperience;
  isUncollapse: boolean;
  onToggle?: (index: number) => void;
}) {
  return (
    <div
      className={`rounded-lg hover:bg-background my-4 border ${!isUncollapse ? 'bg-background-light border-m-gray/20 hover:border-mTeal' : 'border-mTeal bg-background hover:border-mTeal/80'}`}
    >
      <button
        type="button"
        className="w-full p-6 text-left hover:bg-background rounded-lg transition-colors"
        onClick={() => onToggle?.(index)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* Job Title */}
            <h3 className="text-2xl text-white font-bold">{experience.title}</h3>
            {/* Project Role and company*/}
            <p className="text-mTeal font-semibold text-lg py-2">
              <span>{experience.company}</span>
              <span className="text-white">{' • '}</span>
              <span>{experience.size}</span>
            </p>
            {/* Company short description*/}
            <p className={`text-mGray text-md ${!isUncollapse ? 'line-clamp-2' : ''}`}>
              {experience.companyDescription}
            </p>
            {/* Job period */}
            <FromToDatesText startDate={experience.startDate} endDate={experience.endDate} />
          </div>
          {/* Project Arrow*/}
          <span
            className={`text-mTeal text-xl transition-transform ${isUncollapse ? 'rotate-180' : ''} `}
          >
            {'▼'}
          </span>
        </div>
        {/* Job highlights  */}
        {isUncollapse && (
          <div className="border-t mt-2 py-4 border-m-gray/20">
            {experience.highlights.map((experience, hIndex) => {
              const id = `experience-${hIndex}`;
              return (
                <div key={id} className="flex text-mGray text-lg items-start justify-start p-1">
                  <span className="text-mTeal mr-3 mt-1">{'▹'}</span>
                  {experience}
                </div>
              );
            })}
          </div>
        )}
      </button>
    </div>
  );
}
