import { MoonIcon, SunIcon } from './icons';

const Navbar = () => {
  return (
    <nav className="nav" id="nav">
      <a className="brand" href="#home">
        <span className="mark">KJ</span>
        <span>Krishnam Jhalani</span>
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-tools">
        <button className="icon-btn theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <MoonIcon />
          <SunIcon />
        </button>
        <a className="nav-cta" href="#contact">Get in touch</a>
      </div>
    </nav>
  );
};

export default Navbar;
