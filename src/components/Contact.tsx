import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './icons';

const Contact = () => {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>
            Let's talk
          </span>
          <h2 className="reveal" data-d="1">
            <span className="chrome">Let's build</span>
            <br />
            <span className="chrome">something real.</span>
          </h2>
          <p className="reveal" data-d="2">
            Open to SWE internships and ambitious side projects. The fastest way to reach me is email — I reply quickly.
          </p>
          <div className="contact-actions reveal" data-d="3">
            <a className="btn btn-primary" href="mailto:k2jhalani@uwaterloo.ca">
              <MailIcon />
              k2jhalani@uwaterloo.ca
            </a>
            <a className="btn btn-ghost" href="resume.pdf" download>
              Résumé
            </a>
          </div>
          <div className="contact-links reveal" data-d="4">
            <a href="https://github.com/kj12354" target="_blank" rel="noopener">
              <GithubIcon /> github.com/kj12354
            </a>
            <a href="https://linkedin.com/in/krishnam-jhalani" target="_blank" rel="noopener">
              <LinkedinIcon /> krishnam-jhalani
            </a>
            <a href="tel:+14372999437">
              <PhoneIcon /> +1 (437) 299-9437
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div
          className="wrap"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}
        >
          <span className="c">© 2026 Krishnam Jhalani · Built from scratch</span>
          <div className="links">
            <a href="#home">Top ↑</a>
            <a href="https://github.com/kj12354" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="https://linkedin.com/in/krishnam-jhalani" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
