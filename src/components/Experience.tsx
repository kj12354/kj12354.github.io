import type { ReactNode } from 'react';

type Job = {
  date: string;
  company: ReactNode;
  role: string;
  title: string;
  points: ReactNode[];
  tags: string[];
};

const jobs: Job[] = [
  {
    date: 'Apr 2026 — Present',
    company: 'What2Do',
    role: 'CTO & Founder',
    title: 'Shipped a full-stack social app to the App Store',
    points: [
      'Built the product end-to-end with Next.js 15, React 19, TypeScript and Capacitor — native iOS (Swift) and Android (Kotlin), live on the App Store.',
      'Architected a Supabase backend: 20+ Postgres tables with row-level security, WebSockets and real-time subscriptions.',
      'Implemented push at scale over APNs HTTP/2 with JWT / ES256 signing.',
      <strong style={{ color: 'var(--ink)' }}>1,000+ users in the first 48 hours.</strong>,
    ],
    tags: ['Next.js 15', 'React 19', 'Supabase', 'Swift', 'Kotlin', 'Capacitor'],
  },
  {
    date: 'Jan 2026 — Apr 2026',
    company: 'Blake, Cassels & Graydon LLP',
    role: 'Business Systems Analyst',
    title: 'Internal tooling & AI agents across 7 offices',
    points: [
      'Built 15+ dashboards and 35+ AI agents driving a 40% efficiency gain for 1,500+ users across 7 offices.',
      'Ran 50+ stakeholder interviews and authored 100+ UAT test cases to ship reliably into a regulated environment.',
    ],
    tags: ['AI Agents', 'Dashboards', 'UAT', 'Stakeholder Discovery'],
  },
  {
    date: 'May 2025 — Aug 2025',
    company: 'Fluxion AI',
    role: 'Software Developer',
    title: 'ML dashboards serving 15,000+ users',
    points: [
      'Built React + Python/FastAPI dashboards serving 15,000+ users at 99.5% uptime.',
      'Trained PyTorch / TensorFlow models for a 77% accuracy improvement over baseline.',
      'Engineered data tooling over 500+ datasets, reducing processing time by 85%.',
    ],
    tags: ['React', 'FastAPI', 'PyTorch', 'TensorFlow'],
  },
  {
    date: 'Feb 2025 — Jun 2025',
    company: 'Waturbine',
    role: 'Controls & Power Team',
    title: 'Embedded controls for a competition wind turbine',
    points: [
      'Programmed microcontrollers (Arduino, Teensy) in C/C++ for the International Small Wind Turbine Contest.',
    ],
    tags: ['C / C++', 'Arduino', 'Teensy', 'Embedded'],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Where I've worked</span>
            <h2 className="section-title">Experience</h2>
          </div>
          <span className="section-num">/ 02 — founder to enterprise</span>
        </div>

        <div className="exp-list">
          {jobs.map((job) => (
            <div className="exp reveal" key={job.title}>
              <div className="exp-meta">
                <div className="date">{job.date}</div>
                <div className="company">{job.company}</div>
                <div className="exp-role">{job.role}</div>
              </div>
              <div className="exp-body">
                <div className="title">{job.title}</div>
                <ul className="exp-points">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {job.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
