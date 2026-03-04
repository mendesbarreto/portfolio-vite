import { TerminalBlock } from '@/components/common/terminal-block';
import { Highlights } from '@/features/home/components/highlights';
import { HomeSummary } from '@/features/home/components/home-summary';
import { ProjectList } from '@/features/projects/components/project-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <HomeSummary />
      <TerminalBlock title="achievement">
        <Highlights></Highlights>
      </TerminalBlock>
      <TerminalBlock className="mt-16" title="projects">
        <ProjectList></ProjectList>
      </TerminalBlock>
    </div>
  );
}
