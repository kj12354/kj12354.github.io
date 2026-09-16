import type { ReactNode } from 'react';

type Job = {
  n: string;
  date: string;
  company: string;
  role: string;
  title: string;
  points: ReactNode[];
  tags: string[];
};

const jobs: Job[] = [
  {
    n: '01',
    date: 'Apr 2026 — Present',
    company: 'What2Do',
    role: 'CTO & Founder',
    title: 'Shipped a full-stack social app to the App Store',
    points: [
      'Built the product end-to-end with Next.js 15, React 19, TypeScript and Capacitor — native iOS (Swift) and Android (Kotlin), live on the App Store.',
      'Architected a Supabase backend: 20+ Postgres tables with row-level security, WebSockets and real-time subscriptions.',
      'Implemented push at scale over APNs HTTP/2 with JWT / ES256 signing.',
      <strong key="users">1,000+ users in the first 48 hours.</strong>,
    ],
    tags: ['Next.js 15', 'React 19', 'Supabase', 'Swift', 'Kotlin', 'Capacitor'],
  },
  {
    n: '02',
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
    n: '03',
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
    n: '04',
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
          <span className="section-label">Steps</span>
          <h2 className="section-title">How I work</h2>
        </div>

        <div className="steps-stack">
          {jobs.map((job) => (
            <article className="step-card reveal" key={job.title}>
              <span className="step-num">{job.n}</span>
              <div className="step-meta">
                <div className="date">{job.date}</div>
                <div className="company">{job.company}</div>
                <div className="exp-role">{job.role}</div>
              </div>
              <div className="step-body">
                <h3 className="step-title">{job.title}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
