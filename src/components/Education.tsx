const courses = ['OOP', 'Algorithms (Adv.)', 'Functional Programs (Adv.)', 'Linux Tools'];

const Education = () => {
  return (
    <section className="edu-section" id="education">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">University of Waterloo</h2>
        </div>
        <p className="edu-degree reveal">Bachelor of Computer Science (Honours)</p>
        <p className="edu-meta reveal">Expected April 2029 · President’s Scholarship of Distinction</p>
        <div className="chips reveal">
          {courses.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
