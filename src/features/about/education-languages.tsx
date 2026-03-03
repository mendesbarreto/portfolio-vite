import { SectionAbout } from './section-about';

function EducationCard() {
  return (
    <div
      className={`rounded-lg hover:bg-background my-2 border border-mGray/20 bg-background-light hover:border-mTeal/80`}
    >
      <div className="flex items-start justify-between p-8">
        <div className="flex-1">
          <h3 className="text-2xl text-white font-bold">{'Education'}</h3>
          <p className="text-mTeal font-semibold text-lg py-2">
            <span>{'University Anhembi Morumbi'}</span>
          </p>
          <p className={`text-mGray text-md`}>
            {`Bachelor's Degree in Game Design and Development`}
          </p>
          <p className="mt-2 text-md">
            <span className="text-mTeal">{'2010'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function LanguagesCard() {
  const languages = [
    { language: 'English', proficiency: 'Fluent' },
    { language: 'Portuguese', proficiency: 'Native' },
    { language: 'French', proficiency: 'Professional' },
  ];
  return (
    <div
      className={`rounded-lg hover:bg-background my-2 border border-mGray/20 bg-background-light hover:border-mTeal/80`}
    >
      <div className="flex items-start justify-between p-8">
        <div className="flex-1">
          <h3 className="text-2xl text-white font-bold">{'Languages'}</h3>
          {languages.map((item, index) => {
            const id = `language-${index}`;
            return (
              <div key={id} className="flex justify-between items-center gap-4 mt-4">
                <p className={`text-mGray text-lg`}>{item.language}</p>
                <p className="text-mTeal font-semibold text-lg">
                  <span>{item.proficiency}</span>
                </p>
              </div>
            );
          })}
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
        <LanguagesCard />
      </div>
    </div>
  );
}
