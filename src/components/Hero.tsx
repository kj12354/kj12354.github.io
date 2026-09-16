const queries = [
  {
    n: '01',
    text: 'Ship a location-based social app to the App Store — 1,000+ users in the first 48 hours.',
    tag: '/what2do',
  },
  {
    n: '02',
    text: 'Flag manipulation in prediction markets by scanning 600K+ trades per query in under 10s.',
    tag: '/omenai',
  },
  {
    n: '03',
    text: 'Build a HIPAA-compliant AI triage platform with native iOS + Android. 92% accuracy.',
    tag: '/urgentcare',
  },
  {
    n: '04',
    text: 'Review 10K+ legal documents with a multi-agent RAG pipeline and grounded citations.',
    tag: '/lawder',
  },
  {
    n: '05',
    text: 'Train a transformer job matcher on 50K+ postings. 92% match accuracy.',
    tag: '/jobility',
  },
  {
    n: '06',
    text: 'Serve ML dashboards to 15,000+ users at 99.5% uptime — and cut processing time 85%.',
    tag: '/fluxion',
  },
  {
    n: '07',
    text: 'Build NLP planning and grant-writing tools for Northern communities from StatsCan data.',
    tag: '/future-cities',
    href: '#experience',
  },
  {
    n: '08',
    text: 'Index 15K+ embeddings for developer memory — 94% Top-5 retrieval under 120ms.',
    tag: '/memoryos',
  },
  {
    n: '09',
    text: 'Write custom CUDA/Triton kernels and profile them with Nsight against PyTorch/cuBLAS.',
    tag: '/gpu',
  },
  {
    n: '10',
    text: 'Detect daughter arteries off an abdominal-aorta mask in contrast CT — classical 3D CV, CPU only.',
    tag: '/branchseed',
  },
  {
    n: '11',
    text: 'Author YAML DevOps missions in a sandboxed platform that degrades honestly when Docker isn’t up.',
    tag: '/opscraft',
  },
  {
    n: '12',
    text: 'Speak a journal entry on iOS — Ember transcribes, reflects, and files it on a local timeline.',
    tag: '/ember',
  },
];

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-scene" aria-hidden="true">
        <img src="/hero-garden.png" alt="" />
        <div className="hero-mist"></div>
      </div>

      <div className="hero-title">
        <h1>
          <span>Hello,</span>
          <span>I’m Krishnam</span>
        </h1>
      </div>

      <div className="query-rail" aria-label="Selected work">
        {queries.map((q) => (
          <a className="query-card" href={'href' in q && q.href ? q.href : '#work'} key={q.n}>
            <span className="query-num">{q.n}</span>
            <p className="query-text">{q.text}</p>
            <span className="query-tag">{q.tag}</span>
          </a>
        ))}
      </div>

      <div className="hero-dock">
        <div className="building-chip">UWaterloo · CS</div>
      </div>
    </header>
  );
};

export default Hero;
