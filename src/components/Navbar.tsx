import { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="nav" id="nav">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="mark">KJ</span>
          <span>Krishnam Jhalani</span>
        </a>
        <div className="nav-tools">
          <button className="icon-btn theme-toggle" id="themeToggle" aria-label="Toggle theme">
            <MoonIcon />
            <SunIcon />
          </button>
          <button
            className="icon-btn menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div
        className={`menu-overlay${open ? ' open' : ''}`}
        hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="menu-cta"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Krishnam_Resume.pdf"
            onClick={() => setOpen(false)}
          >
            Résumé
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
