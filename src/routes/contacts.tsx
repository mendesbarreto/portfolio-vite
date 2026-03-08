import { createFileRoute } from '@tanstack/react-router';
import { SectionAbout } from '@/features/about/section-about';
import {
  Contacts,
  ContactSummary,
  CreditDescription,
} from '@/features/contact/components/contacts-summary';
import { WebSiteHandCrafted } from '@/features/contact/components/website-hand-crafted';
import { useProfileStore } from '@/stores/profileStore';
import { ContactSkeleton } from './contacts-skeleton';

export const Route = createFileRoute('/contacts')({
  component: Contact,
});

function Contact() {
  const isLoading = useProfileStore((state) => state.isLoading);

  if (isLoading) {
    return <ContactSkeleton></ContactSkeleton>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <SectionAbout title="Human-to-Human" className="mt-8" />
      <ContactSummary className="mb-4" />
      <Contacts />
      <SectionAbout title="Credits" className="mt-8" />
      <CreditDescription />
      <WebSiteHandCrafted />
    </div>
  );
}
