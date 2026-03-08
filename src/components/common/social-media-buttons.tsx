import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useProfileStore } from '@/stores/profileStore';

export function SocialMediaButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const userData = useProfileStore((state) => state.profileData);

  const linkedInUrl = userData?.user.profile?.linkedInUrl || '-';
  const githubUrl = userData?.user.profile?.githubUrl || '-';
  const twitterUrl = userData?.user.profile?.twitterUrl || '-';
  const facebookUrl = userData?.user.profile?.linkedInUrl || '-';

  const socialLinks = [
    {
      icon: faGithub,
      href: githubUrl,
    },
    {
      icon: faLinkedin,
      href: linkedInUrl,
    },
    {
      icon: faTwitter,
      href: twitterUrl,
    },
    {
      icon: faFacebook,
      href: facebookUrl,
    },
  ];

  return (
    <>
      <div className="fixed bottom-8 right-12 z-50">
        <div className="flex flex-col-reverse items-end gap-3">
          {isOpen && (
            <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-5">
              {socialLinks.map((media, index) => {
                const id = `social-link-${index}`;
                return (
                  <a
                    key={id}
                    href={media.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex justify-center items-center w-12 h-12 bg-black border border-mTeal rounded-lg p-3 hover:bg-mTeal/50 transition-all`}
                  >
                    <FontAwesomeIcon icon={media.icon} size="lg" className="text-mTeal" />
                  </a>
                );
              })}
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex justify-center items-center w-14 h-14 bg-black border border-mTeal rounded-lg shadow-lg hover:bg-mTeal/50 transition-all ${
              isOpen ? 'rotate-45' : ''
            }`}
            aria-label="Toggle social links"
          >
            <FontAwesomeIcon icon={faShare} size="lg" className="text-mTeal" />
          </button>
        </div>
      </div>
    </>
  );
}
