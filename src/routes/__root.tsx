import { SocialMediaButtons } from '@/components/common/social-media-buttons';
import { TerminalHeader } from '@/components/common/terminal-header';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-1064 mx-auto pt-8 md:pt-16 px-4">
        <TerminalHeader />
        <Outlet />
        <SocialMediaButtons></SocialMediaButtons>
      </div>
    </div>
  );
}
