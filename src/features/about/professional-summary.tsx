import { SectionAbout } from './section-about';

export function ProfessionalSummary({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <SectionAbout title="Professional Summary" />
      <div className="border text-lg border-mTeal/10 rounded-xl bg-background p-4 leading-relaxed">
        <div className="text-mGray">
          With <span className="text-mTeal font-bold">14+ years</span> in software engineering, I've
          worked across the full stack, leading and mentoring teams that ship quality products. My
          focus is on delivering what clients actually need by collaborating closely with product
          and design and ruthlessly trimming down processes. This means practical agile, a strong
          focus on automation, and a culture of high quality. I stay hands-on by architecting
          systems, managing migrations, and consulting. This keeps my skills sharp and helps me
          understand my team's challenges.
        </div>
        <div className="text-mGray pt-8 leading-relaxed">
          <span className="text-mTeal font-bold">My goal is simple:</span> build high-performing
          teams and scalable solutions that actually work.
        </div>
      </div>
    </div>
  );
}
