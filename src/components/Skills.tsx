type SkillCat = {
  name: string;
  ix: string;
  chips: string[];
  dataD: number;
};

const categories: SkillCat[] = [
  {
    name: 'Languages',
    ix: '01',
    chips: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C / C++', 'SQL', 'Go', 'Swift', 'Kotlin'],
    dataD: 1,
  },
  {
    name: 'AI / ML',
    ix: '02',
    chips: ['PyTorch', 'TensorFlow', 'LangChain', 'Transformers', 'CUDA', 'NLP'],
    dataD: 2,
  },
  {
    name: 'Frontend',
    ix: '03',
    chips: ['React', 'Next.js', 'Vue.js', 'Angular', 'HTML / CSS'],
    dataD: 3,
  },
  {
    name: 'Backend',
    ix: '04',
    chips: ['FastAPI', 'Flask', 'Node.js', 'Spring Boot'],
    dataD: 1,
  },
  {
    name: 'Mobile',
    ix: '05',
    chips: ['iOS · Swift', 'Android · Kotlin', 'React Native', 'Capacitor'],
    dataD: 2,
  },
  {
    name: 'Cloud / DevOps',
    ix: '06',
    chips: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    dataD: 3,
  },
  {
    name: 'Databases',
    ix: '07',
    chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ChromaDB'],
    dataD: 1,
  },
  {
    name: 'Certifications',
    ix: '08',
    chips: ['AWS Solutions Architect', 'Google Data Analytics', 'CKAD'],
    dataD: 2,
  },
  {
    name: 'Education',
    ix: '09',
    chips: ["BCS, Waterloo · '29", "President's Scholarship of Distinction"],
    dataD: 3,
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Toolkit</span>
            <h2 className="section-title">Skills &amp; stack</h2>
          </div>
          <span className="section-num">/ 03 — what I build with</span>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-cat reveal" data-d={cat.dataD} key={cat.name}>
              <h4>
                <span>{cat.name}</span>
                <span className="ix">{cat.ix}</span>
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
