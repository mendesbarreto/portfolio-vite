import { useProfileStore } from '@/stores/profileStore';
import { HighlightsSkeleton } from './highlights-skeleton';

export function Card({
  icon,
  title,
  value,
  label,
  description,
}: {
  title: string;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="
      bg-background-light p-3  rounded-lg border border-m-gray/20 hover:border-mTeal hover:scale-105 hover:shadow-lg"
    >
      <div className="text-4xl m-3">{icon}</div>
      <div className="text-lg text-mTeal font-bold">{title}</div>
      <div className="text-3xl text-mTeal font-bold py-3">{value}</div>
      <div className="text-sm text-white font-semibold">{label}</div>
      <div className="text-sm text-mGray py-2">{description}</div>
    </div>
  );
}

export function Highlights() {
  const userData = useProfileStore((state) => state.profileData);
  const isLoading = useProfileStore((state) => state.isLoading);
  const achievements = userData?.achievements ?? [];

  if (isLoading) {
    return <HighlightsSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {achievements.map((card, index) => {
        const id = `achievement-${index}`;
        return (
          <Card
            key={id}
            title={card.title}
            value={card.value}
            label={card.label}
            description={card.description}
            icon={card.icon}
          />
        );
      })}
    </div>
  );
}
