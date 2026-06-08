import { ExternalIcon, GithubIcon, TrophyIcon } from './icons';

type Project = {
  name: string;
  kind: string;
  desc: string;
  metrics: { v: string; k: string }[];
  tags: string[];
  dataD: number;
};

const projects: Project[] = [
  {
    name: 'UrgentCare',
    kind: 'AI healthcare platform · mobile',
    desc: 'Triage and diagnostics platform with HIPAA-compliant infrastructure and native iOS + Android apps. CUDA-optimized inference cut latency 40%.',
    metrics: [
      { v: '92%', k: 'Accuracy' },
      { v: '−40%', k: 'Latency (CUDA)' },
      { v: '500+', k: 'Users' },
    ],
    tags: ['PyTorch', 'CUDA', 'React', 'AWS', 'Docker', 'Swift', 'Kotlin'],
    dataD: 1,
  },
  {
    name: 'LawDer',
    kind: 'AI legal document analysis · RAG',
    desc: 'Multi-agent LLM system for contract review — semantic search over 10K+ documents with a retrieval-augmented pipeline and grounded citations.',
    metrics: [
      { v: '10K+', k: 'Documents' },
      { v: '88%', k: 'Accuracy' },
      { v: '500+', k: 'Users' },
    ],
    tags: ['Next.js', 'Flask', 'Cohere', 'ChromaDB', 'RAG', 'AWS'],
    dataD: 2,
  },
  {
    name: 'Jobility',
    kind: 'Deep-learning job recommender',
    desc: 'Transformer-based matching engine trained on a 50K+ posting dataset, ranking candidates to roles with learned embeddings.',
    metrics: [
      { v: '92%', k: 'Match accuracy' },
      { v: '50K+', k: 'Dataset' },
    ],
    tags: ['PyTorch', 'TensorFlow', 'Flask', 'React', 'Transformers'],
    dataD: 1,
  },
  {
    name: 'DealPulse',
    kind: 'Real-time data platform',
    desc: 'Streaming ingestion + transformation pipelines that replaced manual reporting — cutting hands-on work by 90% with sub-second freshness.',
    metrics: [
      { v: '−90%', k: 'Manual work' },
      { v: 'Realtime', k: 'Pipelines' },
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    dataD: 2,
  },
];

const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Things I've built</h2>
          </div>
          <span className="section-num">/ 01 — five of many</span>
        </div>

        <div className="proj-grid">
          {/* FEATURED */}
          <article className="card featured reveal">
            <div className="feat-layout">
              <div className="feat-main">
                <span className="award">
                  <TrophyIcon />
                  Won — GenAI Genesis · Canada's largest AI hackathon
                </span>
                <div className="card-top" style={{ marginBottom: 14 }}>
                  <div>
                    <div className="proj-name chrome">OmenAI</div>
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
                  plus three external APIs, scanning{' '}
                  <strong style={{ color: 'var(--ink)' }}>600K+ trades per query in under 10s</strong> with parallel
                  workers. A two-phase detection pipeline uses Isolation Forest for outlier scoring, then layers
                  LLM-generated explanations over a live streaming feed.
                </p>
                <div className="tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Python</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Redis</span>
                  <span className="tag">Isolation Forest</span>
                  <span className="tag">LLM</span>
                </div>
              </div>
              <div className="feat-side">
                <div className="proj-metrics" style={{ flexDirection: 'column', gap: 22, marginTop: 0 }}>
                  <div className="pm">
                    <div className="v chrome">600K+</div>
                    <div className="k">Trades / query · &lt;10s</div>
                  </div>
                  <div className="pm">
                    <div className="v chrome">15→&lt;1s</div>
                    <div className="k">Latency w/ Redis cache</div>
                  </div>
                  <div className="pm">
                    <div className="v chrome">3 APIs</div>
                    <div className="k">+ on-chain ingestion</div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {projects.map((p) => (
            <article className="card reveal" data-d={p.dataD} key={p.name}>
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
