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
    date: 'Apr 2026 — Present · Baltimore, MD',
    company: 'What2Do',
    role: 'CTO & Founder · Software / AI Engineer',
    title: 'Shipped a full-stack social app to the App Store',
    points: [
      'Built the product end-to-end with Next.js 15, React 19, TypeScript and Capacitor — native iOS (Swift) and Android (Kotlin), live on the App Store.',
      'Architected a Supabase backend: 20+ Postgres tables with row-level security, WebSockets and real-time subscriptions.',
      'Implemented push at scale over APNs HTTP/2 with JWT / ES256 signing.',
      <strong key="users">1,000+ users in the first 48 hours.</strong>,
      'Built an ML recommendation engine with collaborative filtering and sentence-transformer embeddings, serving real-time inference at sub-second latency.',
      'Shipped LLM-powered recommendation features using Claude and OpenAI APIs, with agentic workflows, self-healing retry, and fallbacks.',
      'Deployed a RAG pipeline for semantic retrieval with pgvector, iterating on prompt engineering and output validation from post-launch user feedback.',
      'Designed native iOS in Swift/SwiftUI with biometric auth, WebSocket sync, and offline caching.',
      'Ran PostgreSQL on AWS with Docker, CI/CD, 99.5% uptime, and latency / reliability monitoring.',
      'Debugged issues across the frontend/backend boundary, optimizing throughput under real load.',
    ],
    tags: [
      'Next.js 15',
      'React 19',
      'Supabase',
      'Swift',
      'Kotlin',
      'Capacitor',
      'pgvector',
      'RAG',
      'AWS',
      'Docker',
    ],
  },
  {
    n: '02',
    date: 'Sept 2026 — Dec 2026 · Waterloo, ON',
    company: 'UWaterloo Future Cities Institute',
    role: 'AI Developer',
    title: 'NLP tools for economic development & grant writing',
    points: [
      'Building an AI-powered planning tool that generates aligned economic development plans from Statistics Canada data using NLP.',
      'Developing an NLP grant-writing tool so Northern communities can independently draft funding applications, with recommendation systems.',
      'Integrating survey, municipal, and StatsCan datasets into unified pipelines for two production tools.',
      'Partnering with the Nunavut Economic Developers Association on user-centered pilot testing.',
    ],
    tags: ['NLP', 'StatsCan', 'Predictive analytics', 'RAG', 'Python'],
  },
  {
    n: '03',
    date: 'Jan 2026 — Apr 2026 · Toronto, ON',
    company: 'Blake, Cassels & Graydon LLP',
    role: 'Business Systems Analyst',
    title: 'Internal tooling & AI agents across 7 offices',
    points: [
      'Built 15+ dashboards and 35+ AI agents driving a 40% efficiency gain for 1,500+ users across 7 offices.',
      'Ran 50+ stakeholder interviews and authored 100+ UAT test cases to ship reliably into a regulated environment.',
      'Deployed 35+ AI agents at a national law firm in Toronto and identified where agents underperformed.',
      'Built data pipelines for model training and evaluation in a regulated enterprise environment.',
    ],
    tags: ['AI Agents', 'Dashboards', 'UAT', 'Stakeholder Discovery', 'ML pipelines'],
  },
  {
    n: '04',
    date: 'May 2025 — Aug 2025 · Remote',
    company: 'Fluxion AI',
    role: 'Software Developer · AI/ML Engineer',
    title: 'ML dashboards serving 15,000+ users',
    points: [
      'Built React + Python/FastAPI dashboards serving 15,000+ users at 99.5% uptime.',
      'Trained PyTorch / TensorFlow models for a 77% accuracy improvement over baseline.',
      'Engineered data tooling over 500+ datasets, reducing processing time by 85%.',
      'Built C++ and C# production modules; deployed microservices to AWS with Docker and CI/CD.',
      'Built Golang network automation using NETCONF/YANG and Kafka telemetry, cutting deploy time 75%.',
      'Built production agentic AI systems with LangChain, integrating LLM APIs into automated workflows.',
      'Deployed ML models with REST APIs, monitoring inference latency and data drift in real time on AWS.',
      'Applied prompt engineering and caching strategies to cut LLM inference costs in production.',
      'Accelerated inference through profiling and optimization, cutting serving latency.',
    ],
    tags: ['React', 'FastAPI', 'PyTorch', 'TensorFlow', 'C++', 'Go', 'LangChain', 'AWS', 'Kafka'],
  },
  {
    n: '05',
    date: 'Feb 2025 — Jun 2025 · Waterloo, ON',
    company: 'Waturbine',
    role: 'Controls & Power Team',
    title: 'Embedded controls for a competition wind turbine',
    points: [
      'Programmed microcontrollers (Arduino, Teensy) in C/C++ for the International Small Wind Turbine Contest.',
      'Designed power electronics and validated robustness through hardware bring-up and testing.',
    ],
    tags: ['C / C++', 'Arduino', 'Teensy', 'Embedded'],
  },
  {
    n: '06',
    date: 'Waterloo, ON',
    company: 'WAT.ai — Weatherloo',
    role: 'Member, 8–9 person applied ML research team',
    title: 'Weather forecasting models vs the GFS baseline',
    points: [
      'Built 48 regression models on ERA5/GFS data; reduced RMSE 5% vs GFS baseline across 35,000+ pairs.',
      'Evaluated with RMSE, MAE, Bias, and ACC metrics.',
      'Built a React/Leaflet visualization rendering a 360×181 geospatial forecast grid with real-time playback.',
    ],
    tags: ['PyTorch', 'scikit-learn', 'React', 'Leaflet', 'ERA5', 'GFS'],
  },
  {
    n: '07',
    date: 'Waterloo, ON',
    company: 'WatCloud (WATonomous)',
    role: 'Contributor, student-run compute cluster',
    title: 'Campus GPU/CPU cluster & scheduling',
    points: [
      'Configured Ubuntu servers and multi-tenant access controls for a campus-wide GPU/CPU compute cluster.',
      'Contributed to Slurm-style resource scheduling, TCP/IP/DNS config, and user permission management.',
      'Managed GPU/CPU allocation and networking for distributed ML workloads across campus research teams.',
    ],
    tags: ['Linux', 'Ubuntu', 'Slurm', 'TCP/IP', 'GPU'],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
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
