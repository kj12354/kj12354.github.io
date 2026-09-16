import { ExternalIcon, GithubIcon, TrophyIcon } from './icons';

type Project = {
  n: string;
  name: string;
  kind: string;
  desc: string;
  metrics: { v: string; k: string }[];
  tags: string[];
  github?: string;
};

const projects: Project[] = [
  {
    n: '02',
    name: 'UrgentCare',
    kind: 'AI healthcare · mobile',
    desc: 'Triage and diagnostics platform with HIPAA-compliant infrastructure and native iOS + Android apps. CUDA-optimized inference cut latency 40%. Production deep-learning healthcare app at 92% speech-to-text accuracy for 500+ users, with kernel-level CUDA optimization and AWS/Docker performance monitoring.',
    metrics: [
      { v: '92%', k: 'Accuracy' },
      { v: '−40%', k: 'Latency' },
      { v: '500+', k: 'Users' },
    ],
    tags: ['PyTorch', 'CUDA', 'C++', 'React', 'AWS', 'Docker', 'Swift', 'Kotlin'],
  },
  {
    n: '03',
    name: 'LawDer',
    kind: 'Legal document analysis · RAG',
    desc: 'Multi-agent LLM system for contract review — semantic search over 10K+ documents with a retrieval-augmented pipeline and grounded citations. LangGraph agents with dynamic routing, tool use, and self-healing retry; PostgreSQL + Redis cut retrieval from minutes to sub-second. Prompt-injection resistance, output validation, and privacy-by-design for regulated legal documents.',
    metrics: [
      { v: '10K+', k: 'Documents' },
      { v: '88%', k: 'Accuracy' },
      { v: '500+', k: 'Users' },
    ],
    tags: ['Next.js', 'Flask', 'FastAPI', 'LangChain', 'LangGraph', 'pgvector', 'Cohere', 'ChromaDB', 'RAG'],
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
  {
    n: '06',
    name: 'TripMind',
    kind: 'AI travel recommendations',
    desc: 'AI travel recommendation platform blending TruncatedSVD with transformer embeddings and a dynamic alpha. pgvector IVFFLAT cosine search over 10K listings; p95 under 300ms at 50 concurrent users via Locust. Celery recomputes preference vectors every 10 interactions, with an A/B framework using chi-square tests.',
    metrics: [
      { v: '10K', k: 'Listings' },
      { v: '<300ms', k: 'p95 latency' },
      { v: '50', k: 'Concurrent users' },
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'scikit-learn', 'Celery', 'Redis', 'React'],
  },
  {
    n: '07',
    name: 'MemoryOS',
    kind: 'AI developer memory · RAG',
    desc: 'AI developer memory platform that indexed 1,000+ LLM conversations as structured checkpoints, cutting manual documentation effort by 90%. RAG over 15K+ embeddings with <120ms average retrieval and 94% Top-5 accuracy. Hierarchical summarization cut LLM context size 96%, compressing 150K-token chats. Four-provider LLM backend with Git-backed versioning, pgvector, and CLI/IDE integrations.',
    metrics: [
      { v: '15K+', k: 'Embeddings' },
      { v: '<120ms', k: 'Retrieval' },
      { v: '94%', k: 'Top-5 accuracy' },
      { v: '−96%', k: 'Context size' },
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'pgvector', 'PostgreSQL', 'Git', 'RAG'],
  },
  {
    n: '08',
    name: 'GPU Kernel Optimization',
    kind: 'CUDA · Triton · systems',
    desc: 'Custom CUDA and Triton GPU kernels for ML workloads, benchmarked against PyTorch/cuBLAS to map high-level ops to hardware. Profiled with NVIDIA Nsight for memory bandwidth, occupancy, and register-usage bottlenecks. Raised throughput via tiling, kernel fusion, and memory-access tuning, with a reproducible suite for latency, throughput, and memory across GPU configs.',
    metrics: [
      { v: 'CUDA', k: 'Custom kernels' },
      { v: 'Triton', k: 'GPU ops' },
      { v: 'Nsight', k: 'Profiling' },
    ],
    tags: ['CUDA', 'Triton', 'Python', 'Nsight', 'PyTorch', 'cuBLAS'],
  },
  {
    n: '09',
    name: '3D CVXM',
    kind: '3D biomedical simulation',
    desc: '3D biomedical drug-transport model, porting a 2D MATLAB solver to Python. Achieved a 150× speedup (24–48 hrs to <10 min) via Adam-optimizer numerical acceleration, and cut 90th-percentile SSE error 31.6% vs the MATLAB baseline with formal verification and validation.',
    metrics: [
      { v: '150×', k: 'Speedup' },
      { v: '<10 min', k: 'From 24–48 hrs' },
      { v: '−31.6%', k: 'SSE error' },
    ],
    tags: ['Python', 'PyTorch', 'SciPy', 'NumPy', 'SimpleITK'],
  },
  {
    n: '10',
    name: 'Branchseed',
    kind: 'Medical imaging · 3D vessel detection',
    desc: 'Classical-CV detector for the Toralis challenge: finds every eligible artery that branches directly off a supplied abdominal-aorta mask on contrast CT, and writes ostium / seed / radius / direction landmarks in SimpleITK LPS millimetres. Adaptive HU calibration, 3D Frangi vesselness, outward growth, and a centreline walk — CPU only, no GPU, no network, no pretrained weights. Draft score on cases 19–23: precision 0.586, recall 0.895, F1 0.708, typically 0.5–4 s per 1.5 mm case.',
    metrics: [
      { v: '0.708', k: 'Draft F1' },
      { v: '0.895', k: 'Recall' },
      { v: '0.5–4s', k: 'Per 1.5 mm case' },
    ],
    tags: ['Python', 'SimpleITK', '3D Frangi', 'Classical CV', 'NIfTI'],
    github: 'https://github.com/kj12354/gaffer_ai',
  },
  {
    n: '11',
    name: 'OpsCraft',
    kind: 'DevOps education platform · sandboxed missions',
    desc: 'Instructor-authored YAML missions on Next.js: three levels (700 / 750 / 1000 XP) with an API that boots degraded when Docker or the database are missing — /health says so, POST /runs names what to start. Level 2 runs DinD offline; Level 3 is a real git remote over SSH. Scores recompute from an append-only event log; 22 tests pass.',
    metrics: [
      { v: '3', k: 'Levels' },
      { v: '22', k: 'Tests' },
      { v: '503', k: 'Honest degrade' },
    ],
    tags: ['Next.js', 'TypeScript', 'Python', 'Docker', 'DinD', 'YAML', 'SSH', 'CI'],
  },
  {
    n: '12',
    name: 'Ember',
    kind: 'Voice-first journaling · iOS',
    desc: 'A voice-first journaling iOS app that reflects a person’s growth back at them: speak → transcribe → a short warm reflection → saved to a local timeline. Growth callbacks resurface a past entry with an encouraging frame; a weekly check-in is a phone-call-style recap of consistency, streak, and themes. SwiftUI + SwiftData on iOS 17+. Voice recording, local persistence, notifications, and the call screen are real; transcription and reflections sit behind protocols so a live AI service can drop in. First launch seeds ~50 entries across 12 months so the timeline, streaks, and callbacks have something to show.',
    metrics: [
      { v: 'iOS 17+', k: 'SwiftUI + SwiftData' },
      { v: '~50', k: 'Seeded entries' },
      { v: '3.2s', k: 'Speak → save' },
    ],
    tags: ['Swift', 'SwiftUI', 'SwiftData', 'iOS', 'AVFoundation'],
    github: 'https://github.com/kj12354/ember',
  },
];

const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-label">Projects</span>
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
                LLM-generated explanations over a live streaming feed. Shipped in under 24 hours to win Canada's
                largest AI hackathon. Redis caching with async workers cut latency 15s→sub-second at a &gt;60% cache
                hit rate, with self-healing retry across LLM API calls under rate limits and partial failures.
              </p>
              <div className="tags">
                {[
                  'Next.js',
                  'TypeScript',
                  'Python',
                  'FastAPI',
                  'LangChain',
                  'PostgreSQL',
                  'Redis',
                  'Isolation Forest',
                  'LLM',
                  'Docker',
                ].map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
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
                <div className="pm">
                  <div className="v">&gt;60%</div>
                  <div className="k">Cache hit rate</div>
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
                  <a
                    href={p.github ?? 'https://github.com/kj12354'}
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub repo"
                  >
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
