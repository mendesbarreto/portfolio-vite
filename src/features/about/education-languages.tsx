import { SectionAbout } from './section-about';

function EducationCard() {
  return (
    <div
      className={`rounded-lg hover:bg-background my-2 border border-mGray/10 bg-background-light hover:border-mTeal/80`}
    >
      <div className="flex items-start justify-between p-8">
        <div className="flex-1">
          <h3 className="text-lg text-white font-bold">{'Education'}</h3>
          <p className="text-mTeal font-semibold text-sm py-2">
            <span>{'Education'}</span>
            <span className="text-white">{' • '}</span>
            <span>{'University Anhembi Morumbi'}</span>
          </p>
          <p className={`text-mGray text-sm`}>
            {`Bachelor's Degree in Game Design and Development`}
          </p>
          <p className="mt-2 text-xs">
            <span className="text-mTeal">{'2010'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function EducationLanguages({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col w-full mb-4 ${className}`}>
      <SectionAbout title="Education & Languages" className="mb-4"></SectionAbout>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <EducationCard />
        <EducationCard />
      </div>
    </div>
  );
}
