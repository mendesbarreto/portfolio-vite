import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useProfileStore } from '@/stores/profileStore';

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
  const userData = useProfileStore((state) => state.profileData);
  const phoneNumber = userData?.user.phoneNumber || '-';
  const email = userData?.user.email || '-';

  const linkedInUrl = userData?.user.profile?.linkedInUrl || '-';
  const linkedIn = linkedInUrl.replace('https://www.', '') || '-';

  const facebookUrl = userData?.user.profile?.facebookUrl || '-';
  const facebook = facebookUrl.replace('https://www.', '');

  const twitterUrl = userData?.user.profile?.twitterUrl || '-';
  const twitter = twitterUrl.replace('https://www.', '');

  const contacts = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: phoneNumber,
      href: `tel:${phoneNumber}`,
      target: '_blank',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: linkedIn,
      href: linkedInUrl,
      target: '_blank',
    },
    {
      icon: faTwitter,
      label: 'Twitter',
      value: twitter,
      href: twitterUrl,
      target: '_blank',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Gatineau, QC - Canada',
      href: null,
    },
    {
      icon: faFacebook,
      label: 'Facebook',
      value: facebook,
      href: facebookUrl,
      target: '_blank',
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
              justify-start 
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
