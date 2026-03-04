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
  const achievements = [
    {
      icon: '🚀',
      title: 'Speed Master',
      value: '5x',
      label: 'Feature Delivery Velocity',
      description: 'Feature lead time: 13 weeks → 2 weeks',
      color: 'text-mTeal',
    },
    {
      icon: '⚡',
      title: 'Pipeline Wizard',
      value: '86%',
      label: 'CI/CD Speed Improvement',
      description: 'Build & deploy: 50min → 7min',
    },
    {
      icon: '🚢',
      title: 'Shipping Machine',
      value: '30+',
      label: 'Apps Launched to Production',
      description: 'Mobile, web & games across platforms',
    },
    {
      icon: '💰',
      title: 'Cost Optimizer',
      value: '20%',
      label: 'Infrastructure Cost Cut',
      description: 'Full cloud migration from AWS to GCP',
    },
    {
      icon: '💡',
      title: 'Team Catalyst',
      value: 'Multi-Year',
      label: 'Technical Talks Delivered',
      description: 'Best practices in coding, testing & QA',
    },
    {
      icon: '🏦',
      title: 'FinTech Builder',
      value: '3',
      label: 'Banking Apps Delivered',
      description: 'High-security financial mobile solutions',
    },
    {
      icon: '🔄',
      title: 'Legacy Slayer',
      value: 'COBOL→.NET',
      label: 'Modernization Expert',
      description: 'Migrated critical legacy systems',
    },
    {
      icon: '🏆',
      title: 'Agile Champion',
      value: 'TDD/BDD',
      label: 'Testing Culture Established',
      description: 'Promoted quality practices across teams',
    },
  ];

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
