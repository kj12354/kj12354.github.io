const Manifesto = () => {
  return (
    <section className="manifesto" id="about">
      <div className="wrap">
        <p className="manifesto-lead reveal">
          Computer Science <em>@ University of Waterloo</em>. Founder and full-stack engineer who ships production systems — from real-time fraud detection to ML platforms serving 15,000+ users.
        </p>
        <p className="manifesto-lead reveal" data-d="1">
          I build the whole thing: native apps, backends, models, and the infrastructure that keeps them up.
        </p>
        <p className="manifesto-lead reveal" data-d="1">
          Right now that also means AI planning tools at Waterloo’s Future Cities Institute, GPU kernels, and RAG systems in production.
        </p>
        <p className="manifesto-punch reveal" data-d="2">
          Open to SWE internships.
          <br />
          <em>Let's build.</em>
        </p>
        <div className="manifesto-actions reveal" data-d="3">
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
          <a className="btn btn-ghost" href="/resume.pdf" download="Krishnam_Resume.pdf">
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
