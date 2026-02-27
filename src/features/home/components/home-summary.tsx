import { BaseButton } from '@/components/common/base-button';

export function HomeSummary() {
  return (
    <div>
      <div className="w-full md:text-2xl font-bold text-white">
        <span>I'm a </span>
        <span className="text-mTeal">Senior Software Engineering Manager</span>
      </div>
      <div className="text-mGray pt-8 leading-relaxed">
        With <span className="text-mTeal">14+ years</span> in software engineering, I've worked
        across the full stack, leading and mentoring teams that ship quality products. My focus is
        on delivering what clients actually need by collaborating closely with product and design
        and ruthlessly trimming down processes. This means practical agile, a strong focus on
        automation, and a culture of high quality. I stay hands-on by architecting systems, managing
        migrations, and consulting. This keeps my skills sharp and helps me understand my team's
        challenges.
      </div>
      <div className="text-mGray pt-8 leading-relaxed">
        <span className="text-mTeal font-bold">My goal is simple:</span> build high-performing teams
        and scalable solutions that actually work.
      </div>
    </div>
  );
}
