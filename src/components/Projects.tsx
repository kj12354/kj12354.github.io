import { ExternalIcon, GithubIcon, TrophyIcon } from './icons';

type Project = {
  n: string;
  name: string;
  kind: string;
  desc: string;
  metrics: { v: string; k: string }[];
  tags: string[];
};

const projects: Project[] = [
  {
    n: '02',
    name: 'UrgentCare',
    kind: 'AI healthcare · mobile',
    desc: 'Triage and diagnostics platform with HIPAA-compliant infrastructure and native iOS + Android apps. CUDA-optimized inference cut latency 40%.',
    metrics: [
      { v: '92%', k: 'Accuracy' },
      { v: '−40%', k: 'Latency' },
      { v: '500+', k: 'Users' },
    ],
    tags: ['PyTorch', 'CUDA', 'React', 'AWS', 'Swift', 'Kotlin'],
  },
  {
    n: '03',
    name: 'LawDer',
    kind: 'Legal document analysis · RAG',
    desc: 'Multi-agent LLM system for contract review — semantic search over 10K+ documents with a retrieval-augmented pipeline and grounded citations.',
    metrics: [
      { v: '10K+', k: 'Documents' },
      { v: '88%', k: 'Accuracy' },
      { v: '500+', k: 'Users' },
    ],
    tags: ['Next.js', 'Flask', 'Cohere', 'ChromaDB', 'RAG'],
  },
  {
    n: '04',
    name: 'Jobility',
    kind: 'Deep-learning job recommender',
    desc: 'Transformer-based matching engine trained on a 50K+ posting dataset, ranking candidates to roles with learned embeddings.',
    metrics: [
      { v: '92%', k: 'Match accuracy' },
      { v: '50K+', k: 'Dataset' },
    ],
    tags: ['PyTorch', 'TensorFlow', 'Flask', 'React', 'Transformers'],
  },
  {
    n: '05',
    name: 'DealPulse',
    kind: 'Real-time data platform',
    desc: 'Streaming ingestion + transformation pipelines that replaced manual reporting — cutting hands-on work by 90% with sub-second freshness.',
    metrics: [
      { v: '−90%', k: 'Manual work' },
      { v: 'Realtime', k: 'Pipelines' },
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
  },
];

const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-label">Work</span>
          <h2 className="section-title">What I've shipped</h2>
        </div>

        <article className="card featured reveal">
          <span className="query-num">01</span>
          <span className="award">
            <TrophyIcon />
            Won — GenAI Genesis · Canada's largest AI hackathon
          </span>
          <div className="feat-layout">
            <div>
              <div className="card-top">
                <div>
                  <div className="proj-name">OmenAI</div>
                  <div className="proj-kind">Prediction-market fraud detection · real-time surveillance</div>
                </div>
                <div className="proj-links">
                  <a href="https://github.com/kj12354" target="_blank" rel="noopener" aria-label="GitHub repo">
                    <GithubIcon />
                  </a>
                  <a href="#" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <p className="proj-desc">
                A real-time surveillance engine that flags manipulation in prediction markets. Ingests on-chain data
                plus three external APIs, scanning <strong>600K+ trades per query in under 10s</strong> with parallel
                workers. A two-phase detection pipeline uses Isolation Forest for outlier scoring, then layers
                LLM-generated explanations over a live streaming feed.
              </p>
              <div className="tags">
                {['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Isolation Forest', 'LLM'].map(
                  (t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="feat-side">
              <div className="proj-metrics">
                <div className="pm">
                  <div className="v">600K+</div>
                  <div className="k">Trades / query · &lt;10s</div>
                </div>
                <div className="pm">
                  <div className="v">15→&lt;1s</div>
                  <div className="k">Latency w/ Redis cache</div>
                </div>
                <div className="pm">
                  <div className="v">3 APIs</div>
                  <div className="k">+ on-chain ingestion</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="proj-grid">
          {projects.map((p) => (
            <article className="card reveal" key={p.name}>
              <span className="query-num">{p.n}</span>
              <div className="card-top">
                <div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-kind">{p.kind}</div>
                </div>
                <div className="proj-links">
                  <a href="https://github.com/kj12354" target="_blank" rel="noopener" aria-label="GitHub repo">
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-metrics">
                {p.metrics.map((m) => (
                  <div className="pm" key={m.k}>
                    <div className="v">{m.v}</div>
                    <div className="k">{m.k}</div>
                  </div>
                ))}
              </div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
