type SkillCat = {
  name: string;
  ix: string;
  chips: string[];
};

const categories: SkillCat[] = [
  {
    name: 'Languages',
    ix: '01',
    chips: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C / C++', 'C#', 'SQL', 'Go', 'Swift', 'Kotlin', 'Bash', 'HTML / CSS'],
  },
  {
    name: 'AI / ML',
    ix: '02',
    chips: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'Transformers', 'CUDA', 'NLP', 'scikit-learn', 'pandas', 'NumPy', 'RAG', 'Prompt engineering', 'SimpleITK'],
  },
  {
    name: 'LLM & retrieval',
    ix: '03',
    chips: ['OpenAI API', 'Anthropic API', 'pgvector', 'FAISS', 'Agentic workflows', 'Context compression', 'Celery', 'MLflow'],
  },
  {
    name: 'Frontend',
    ix: '04',
    chips: ['React', 'Next.js', 'Vue.js', 'Angular', 'HTML / CSS', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    ix: '05',
    chips: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    name: 'Mobile',
    ix: '06',
    chips: ['iOS · Swift', 'SwiftUI', 'Android · Kotlin', 'React Native', 'Capacitor'],
  },
  {
    name: 'Cloud / DevOps',
    ix: '07',
    chips: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Linux', 'Kafka'],
  },
  {
    name: 'GPU / systems',
    ix: '08',
    chips: ['CUDA', 'Triton', 'Nsight', 'Kernel fusion', 'cuBLAS', 'Embedded C/C++', 'Performance profiling'],
  },
  {
    name: 'Databases',
    ix: '09',
    chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ChromaDB', 'pgvector'],
  },
  {
    name: 'Certifications',
    ix: '10',
    chips: ['AWS Solutions Architect', 'Google Data Analytics', 'CKAD'],
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Skills &amp; stack</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-cat reveal" key={cat.name}>
              <h4>
                <span className="query-num">{cat.ix}</span>
                <span>{cat.name}</span>
              </h4>
              <div className="chips">
                {cat.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
