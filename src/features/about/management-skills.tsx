import { SectionAbout } from './section-about';

export function ManagementSkills({ className = '' }: { className?: string }) {
  const skills = [
    'Expert in Scrum and Kanban methodologies, fostering collaborative and high-performing teams',
    'Proven track record of mentoring engineers, leading technical teams, and developing talent from junior to senior levels',
    'Experienced in collaborating with product managers, designers, and cross-functional teams to deliver robust solutions',
    'Led client engagements and delivered solutions across multiple organizations as a technical consultant',
    'Successfully managed complex migration projects, full game development lifecycles, and multi-client deliverables',
    'Established development processes using JIRA/Github Projects, implemented CI/CD pipelines, and promoted TDD/BDD practices',
    'Skilled in managing client relationships, defining requirements, and aligning technical solutions with business objectives',
    'Delivered technical talks and presentations to engineering teams on best practices in coding, testing, and QA implementation',
  ];
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      <SectionAbout title="Management Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
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
              justiffy-start 
              p-2
              text-lg
              "
            >
              <div key={id} className="flex text-mGray p-2 leading-relaxed">
                <span className="text-mTeal mr-3 mt-1">{'▹'}</span>
                {skill}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
