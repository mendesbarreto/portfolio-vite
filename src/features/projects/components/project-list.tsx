import { useProfileStore } from '@/stores/profileStore';
import { useState } from 'react';
import { ProjectListSkeleton } from './project-list-skeleton';
import { DateTime } from 'luxon';
import type { UserProject } from 'module-personal-profile-react-sdk';

export function ProjectCard({
  index,
  project,
  isUncollapse,
  onToggle,
}: {
  index: number;
  project: UserProject;
  isUncollapse: boolean;
  onToggle?: (index: number) => void;
}) {
  const startDateFormatted = DateTime.fromISO(project.startDate).toFormat('LLL yyyy');
  const endDateFormatted = project.endDate
    ? DateTime.fromISO(project.endDate).toFormat('LLL yyyy')
    : 'Present';

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
            {/* Project name */}
            <h3 className="text-2xl text-white font-bold">{project.name}</h3>
            {/* Project Role and company*/}
            <p className="text-mTeal font-semibold text-lg py-2">
              <span>{project.role}</span>
              <span className="text-white">{' • '}</span>
              <span>{project.company}</span>
            </p>
            {/* Project short description*/}
            <p className={`text-mGray text-md ${!isUncollapse ? 'line-clamp-2' : ''}`}>
              {project.shortDescription}
            </p>
            {/* Project stack*/}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((type, tIndex) => {
                const id = `type-${tIndex}`;
                return (
                  <span
                    key={id}
                    className="bg-background border border-mTeal/30 rounded-sm px-1 text-mGray text-md"
                  >
                    {type}
                  </span>
                );
              })}
            </div>
            {/* Project Dates*/}
            <p className="mt-2 text-sm">
              <span className="text-mTeal">{startDateFormatted}</span>
              <span className="text-mTeal">{' – '}</span>
              <span className="text-mTeal">{endDateFormatted}</span>
            </p>
          </div>
          {/* Project Arrow*/}
          <span
            className={`text-mTeal text-xl transition-transform ${isUncollapse ? 'rotate-180' : ''} `}
          >
            {'▼'}
          </span>
        </div>
        {isUncollapse && (
          <div className="border-t mt-2 py-4 border-m-gray/20">
            {project.highlights.map((highlight, hIndex) => {
              const id = `highlight-${hIndex}`;
              return (
                <div key={id} className="flex text-mGray text-md items-center p-2">
                  <span className="text-mTeal mr-3 ">{'▹'}</span>
                  {highlight}
                </div>
              );
            })}
          </div>
        )}
      </button>
    </div>
  );
}

export interface ProjectsProps {
  className?: string;
  onToggle?: (index: number) => {};
}

export function ProjectList({ className }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const projects = userData?.projects ?? [];

  if (isLoading) {
    return <ProjectListSkeleton />;
  }

  return (
    <section className={`${className}`}>
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mTeal">{'##'}</span> {'Main Projects'}
      </h2>
      {projects.map((project, tIndex) => {
        const isUncollapse = expandedProject === tIndex;
        const id = `project-${tIndex}`;
        return (
          <ProjectCard
            key={id}
            index={tIndex}
            project={project}
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
