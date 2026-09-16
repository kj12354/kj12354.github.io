type SkillCat = {
  name: string;
  ix: string;
  chips: string[];
};

const categories: SkillCat[] = [
  {
    name: 'Languages',
    ix: '01',
    chips: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C / C++', 'SQL', 'Go', 'Swift', 'Kotlin'],
  },
  {
    name: 'AI / ML',
    ix: '02',
    chips: ['PyTorch', 'TensorFlow', 'LangChain', 'Transformers', 'CUDA', 'NLP'],
  },
  {
    name: 'Frontend',
    ix: '03',
    chips: ['React', 'Next.js', 'Vue.js', 'Angular', 'HTML / CSS'],
  },
  {
    name: 'Backend',
    ix: '04',
    chips: ['FastAPI', 'Flask', 'Node.js', 'Spring Boot'],
  },
  {
    name: 'Mobile',
    ix: '05',
    chips: ['iOS · Swift', 'Android · Kotlin', 'React Native', 'Capacitor'],
  },
  {
    name: 'Cloud / DevOps',
    ix: '06',
    chips: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    name: 'Databases',
    ix: '07',
    chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ChromaDB'],
  },
  {
    name: 'Certifications',
    ix: '08',
    chips: ['AWS Solutions Architect', 'Google Data Analytics', 'CKAD'],
  },
  {
    name: 'Education',
    ix: '09',
    chips: ["BCS, Waterloo · '29", "President's Scholarship of Distinction"],
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
