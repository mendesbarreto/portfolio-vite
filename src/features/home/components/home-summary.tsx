import profileImage from '/img-profile.png';

export function HomeSummary() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:px-0">
      <div className="md:w-1/2 text-left  w-full">
        {' '}
        <div className="w-full md:text-2xl font-bold text-white">
          <span>I'm a </span>
          <span className="text-mTeal">Senior Software Engineering Manager</span>
        </div>
        <div className="text-mGray pt-8 leading-relaxed">
          With <span className="text-mTeal font-bold">14+ years</span> in software engineering, I've
          worked across the full stack, leading and mentoring teams that ship quality products. My
          focus is on delivering what clients actually need by collaborating closely with product
          and design, leveraging{' '}
          <span className="text-mTeal font-bold">AI-augmented workflows</span>, and ruthlessly
          trimming down processes. This means practical agile, automation, and a culture of high
          quality. I stay hands-on by architecting systems, managing migrations, and implementing{' '}
          <span className="text-mTeal font-bold">AI tools</span> that multiply team productivity.
          This keeps my skills sharp and helps me understand my team's challenges.{' '}
        </div>
        <div className="text-mGray pt-8 leading-relaxed">
          <span className="text-mTeal font-bold">My goal is simple:</span> build high-performing
          teams and scalable solutions that actually work, enhanced by strategic AI adoption.
        </div>
      </div>
      <div>
        <div className="w-full md:w-117 max-w-117 mb-12">
          <img src={profileImage} alt="Douglas" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
