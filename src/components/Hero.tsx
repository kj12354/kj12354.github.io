import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons';

const metrics = [
  { num: '15,000+', lbl: 'Users served' },
  { num: '1k+', lbl: 'Users in 48 hrs' },
  { num: '2×', lbl: 'Hackathon wins' },
  { num: '99.5%', lbl: 'Prod uptime' },
];

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="wrap">
        <div className="hero-status reveal in">
          <span className="dot"></span> Building{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 600, margin: '0 2px' }}>What2Do</strong> · Open to SWE
          internships
        </div>
        <h1>
          <span className="line">
            <span className="chrome">Krishnam</span>
          </span>
          <span className="line">
            <span className="chrome">Jhalani</span>
          </span>
        </h1>
        <p className="hero-sub">
          Computer Science <strong>@ University of Waterloo</strong>. Founder &amp; full-stack engineer shipping
          production systems — from real-time fraud detection to ML platforms serving <strong>15,000+ users</strong>.
        </p>
        <div className="hero-role">
          <span>Founder &amp; CTO, What2Do</span>
          <span className="sep"></span>
          <span>Full-Stack</span>
          <span className="sep"></span>
          <span>AI / ML</span>
          <span className="sep"></span>
          <span>Waterloo, CA</span>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="resume.pdf" download>
            <DownloadIcon />
            Download résumé
          </a>
          <div className="hero-socials">
            <a
              className="icon-btn"
              href="https://github.com/kj12354"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              className="icon-btn"
              href="https://linkedin.com/in/krishnam-jhalani"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a className="icon-btn" href="mailto:k2jhalani@uwaterloo.ca" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-metrics">
          {metrics.map((m, i) => (
            <div className="metric reveal" data-d={i + 1} key={m.lbl}>
              <div className="num">{m.num}</div>
              <div className="lbl">{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
