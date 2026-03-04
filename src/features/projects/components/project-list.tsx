import { useState } from 'react';

interface Project {
  name: string;
  shortDescription: string;
  techStack: string[];
  company: string;
  role: string;
  timePeriod?: string;
  link?: string;
  highlights: string[];
}

export function ProjectCard({
  index,
  project,
  isExpended,
  onToggle,
}: {
  index: number;
  project: Project;
  isExpended: boolean;
  onToggle?: (index: number) => void;
}) {
  return (
    <div
      className={`rounded-lg hover:bg-background my-4 border ${!isExpended ? 'bg-background-light border-m-gray/20 hover:border-mTeal' : 'border-mTeal bg-background hover:border-mTeal/80'}`}
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
            <p className={`text-mGray text-md ${!isExpended ? 'line-clamp-2' : ''}`}>
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
              <span className="text-mTeal">{project.timePeriod}</span>
            </p>
          </div>
          {/* Project Arrow*/}
          <span
            className={`text-mTeal text-xl transition-transform ${isExpended ? 'rotate-180' : ''} `}
          >
            {'▼'}
          </span>
        </div>
        {isExpended && (
          <div className="border-t mt-2 py-4 border-m-gray/20">
            {project.highlights.map((highlight, hIndex) => {
              const id = `highlight-${hIndex}`;
              return (
                <div key={id} className="flex text-mGray text-md items-start justiffy-start p-1.5">
                  <span className="text-mTeal mr-3 mt-1">{'▹'}</span>
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

  const projects: Project[] = [
    {
      name: 'Kampi',
      shortDescription:
        'Intelligent copilot for shrimp farmers using AI and computer vision to replace manual guesswork with data-driven insights. Features three pillars: Pond Vision for biometric monitoring via smartphone photos, Optima for predictive analytics and growth forecasting, and FarmBook for team coordination across the production chain.',
      techStack: [
        'Python',
        'TypeScript/JS',
        'MongoDB',
        'MySQL',
        'Node.js',
        'Bun',
        'Next.js',
        'Google Cloud',
        'Terraform',
        'Ansible',
        'C++',
        'Android',
        'iOS',
        'React Native + Native Development',
      ],
      company: 'Xpertsea',
      role: 'Senior Software Engineering Manager',
      timePeriod: 'Oct 2021 – Present',
      link: 'https://bekampi.com/',
      highlights: [
        'Led cross-functional team in development of AI-powered platform with three product pillars',
        'Architected technical strategy for predictive analytics and computer vision systems',
        'Managed technical roadmap for omnichannel platform supporting iOS, iPadOS, and web',
        'Directed infrastructure modernization using Google Cloud, Terraform, and Ansible',
      ],
    },
    {
      name: 'Social.Mom',
      shortDescription:
        'Social network platform designed to counter social isolation during motherhood and reinforce the social safety net of families. Enables mothers to connect locally, plan activities, and access community groups and organizations in their area through a bilingual interface.',
      techStack: ['iOS native', 'Android native', 'Java Spring Boot', 'React'],
      company: 'Social.mom',
      role: 'Senior Native iOS Developer',
      timePeriod: 'Oct 2019 – Aug 2021',
      link: 'https://social.mom/en',
      highlights: [
        'Engineered and maintained high-traffic iOS application with bilingual support (English/French)',
        'Led major re-architecture reducing maintenance overhead and new feature development time by 20%',
        'Established formal testing culture with E2E and unit testing for improved application reliability',
      ],
    },
    {
      name: 'Meu Carrefour',
      shortDescription:
        "All-in-one retail companion and cornerstone of Carrefour Brazil's omnichannel strategy, empowering millions of users to manage loyalty rewards, shop for groceries online, and streamline in-store visits through smart utility tools like barcode scanning and proximity services.",
      techStack: ['iOS native', 'TypeScript', 'Node.js', 'Java'],
      company: 'Carrefour Brazil',
      role: 'Senior iOS Developer',
      timePeriod: 'Feb 2016 – Jun 2016',
      highlights: [
        'Developed comprehensive mobile shopping experience with barcode scanner and store locator',
        'Implemented loyalty program integration with Purple Label discounts and cashback tracking',
        'Built shopping list management system with cross-platform synchronization',
      ],
    },
    {
      name: 'Itaú Unibanco Mobile Banking',
      shortDescription:
        "Mobile banking application for one of Brazil's largest financial institutions, providing users with secure access to core banking services including account management and financial transactions.",
      techStack: ['Windows Phone', 'iOS', '.NET'],
      company: 'Itaú Unibanco',
      role: 'Windows Phone and iOS Developer',
      timePeriod: 'July 2015 – Jan 2016',
      highlights: [
        'Implemented login with CPF for secure user authentication',
        'Developed account statement functionality for transaction history access',
        'Built transfers and payments features for core banking operations',
      ],
    },
    {
      name: 'Mundo do Sítio',
      shortDescription:
        'Persistent, multi-user virtual world designed to integrate pedagogical goals with immersive gameplay as a digital extension of the Sítio do Picapau Amarelo IP. Featured complex economy, social interactions, and library of educational mini-games for millions of Brazilian students.',
      techStack: ['Unity 3D', 'Flash ActionScript (SWC)', 'Java', 'SmartFox Server', 'HTML5/JS'],
      company: 'Editora Globo',
      role: 'Lead Game Programmer / Full Stack',
      timePeriod: 'Aug 2010 – Apr 2015',
      highlights: [
        'Engineered full-stack architecture handling high-concurrency traffic with low-latency communication',
        'Developed interactive gameplay mechanics and real-time state synchronization for 30+ educational mini-games',
        "Implemented secure authentication, profile registration, and parental control features for children's platform",
      ],
    },
  ];

  return (
    <section className={`${className}`}>
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mTeal">{'##'}</span> {'Main Projects'}
      </h2>
      {projects.map((project, tIndex) => {
        const isExpended = expandedProject === tIndex;
        const id = `project-${tIndex}`;
        return (
          <ProjectCard
            key={id}
            index={tIndex}
            project={project}
            isExpended={isExpended}
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
