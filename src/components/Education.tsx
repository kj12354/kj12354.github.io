const courses = ['OOP', 'Algorithms (Adv.)', 'Functional Programs (Adv.)', 'Linux Tools'];

const Education = () => {
  return (
    <section className="edu-section" id="education">
      <div className="wrap">
        <article className="edu-panel reveal">
          <span className="query-num">UW</span>
          <div className="edu-main">
            <span className="section-label">Education</span>
            <h2 className="edu-school">University of Waterloo</h2>
            <p className="edu-degree">Bachelor of Computer Science (Honours)</p>
            <p className="edu-meta">Expected April 2029 · President’s Scholarship of Distinction</p>
          </div>
          <div className="edu-courses">
            <span className="section-label">Coursework</span>
            <div className="chips">
              {courses.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
