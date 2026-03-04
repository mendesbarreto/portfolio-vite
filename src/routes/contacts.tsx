import { createFileRoute } from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SectionAbout } from '@/features/about/section-about';
import badgeHandCraft from '/crafted-with-care.png';

export const Route = createFileRoute('/contacts')({
  component: Contact,
});

export function ContactSummary({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className} mt-4`}>
      <div className="border text-lg border-mTeal/10 rounded-xl bg-background p-4 leading-relaxed">
        <div className="text-mGray">
          I'm always open to discussing{' '}
          <span className="text-mTeal font-bold">new opportunities</span>, collaborations, or just
          connecting with fellow tech enthusiasts. Feel free to reach out through any of the
          channels below.
        </div>
      </div>
    </div>
  );
}

export function CreditDescription({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className} mt-4`}>
      <div className="border text-lg border-mTeal/10 rounded-xl bg-background p-4 leading-relaxed">
        <div className="text-mGray">
          This site was designed and coded by a real-life{' '}
          <span className="text-mTeal font-bold">{'human (basically ME)'}</span>. No AI teammates
          here! (Except for a few of the cool images you see.)"{' '}
        </div>
      </div>
    </div>
  );
}

export function Contacts({ className = '' }: { className?: string }) {
  const contacts = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'mendes-barreto@live.com',
      href: 'mailto:mendes-barreto@live.com',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+1 (581) 748 0657',
      href: 'tel:+15817480657',
      target: '_blank',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mendesbarreto',
      href: 'https://www.linkedin.com/in/mendesbarreto',
      target: '_blank',
    },
    {
      icon: faGlobe,
      label: 'Portfolio',
      value: 'mendesbarreto.gobit.dev',
      href: 'https://mendesbarreto.gobit.dev/',
      target: '_blank',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Gatineau, QC - Canada',
      href: null,
    },
  ];
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => {
          const id = `contact-${index}`;
          return (
            <a
              href={contact.href || undefined}
              target={contact.target}
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
              <div key={id} className="flex text-mGray p-2 leading-relaxed items-center">
                <div className={`text-mTeal text-4xl mr-4 mt-1`}>
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <div className="flex flex-col justify-start text-start">
                  <span className="text-white mr-3 mt-1 font-bold">{contact.label}</span>
                  <span className="text-mGray/80">{contact.value}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function WebSiteHandCrafted() {
  return (
    <div className="flex flex-col items-center justify-center  gap-4 w-full">
      <div className="flex w-100 p-4">
        <img src={badgeHandCraft} alt="Douglas" className="w-full h-auto" />
      </div>
    </div>
  );
}

function Contact() {
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
