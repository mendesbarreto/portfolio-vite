import { ManagementSkills } from '@/features/about/management-skills';
import { Experience } from '@/features/about/experience';
import { ProfessionalSummary } from '@/features/about/professional-summary';
import { TechSkills } from '@/features/about/tech-skills';
import { createFileRoute } from '@tanstack/react-router';
import { EducationLanguages } from '@/features/about/education-languages';

export const Route = createFileRoute('/about')({
  component: About,
});

export function About() {
  return (
    <div className="flex flex-col justify-between items-start gap-8 pt-4 md:px-0">
      <ProfessionalSummary className="mt-4" />
      <ManagementSkills />
      <TechSkills />
      <Experience />
      <EducationLanguages />
    </div>
  );
}
