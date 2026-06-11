import { useEffect } from 'react';

/**
 * Port of the design prototype's script.js: theme toggle (persisted),
 * nav elevation on scroll, scroll-reveal, card pointer glow, and active
 * nav-link highlighting. DOM-based to mirror the original interactions,
 * with full cleanup so it behaves under React StrictMode remounts.
 */
export function usePortfolioInteractions() {
  useEffect(() => {
    const root = document.documentElement;

    /* ---------- Theme ---------- */
    try {
      const saved = localStorage.getItem('kj-theme');
      if (saved) root.setAttribute('data-theme', saved);
    } catch {
      /* ignore */
    }
    const toggle = document.getElementById('themeToggle');
    const onToggle = () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('kj-theme', next);
      } catch {
        /* ignore */
      }
    };
    if (toggle) toggle.addEventListener('click', onToggle);

    /* ---------- Nav elevation on scroll ---------- */
    const nav = document.getElementById('nav');
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Scroll reveal ---------- */
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io!.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      reveals.forEach((el) => {
        if (!el.classList.contains('in')) io!.observe(el);
      });
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }

    /* ---------- Card pointer glow ---------- */
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.card'));
    const cardHandlers = cards.map((card) => {
      const handler = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
      };
      card.addEventListener('pointermove', handler);
      return { card, handler };
    });

    /* ---------- Active nav link on scroll ---------- */
    const sections = ['work', 'experience', 'skills', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const navAnchors: Record<string, HTMLAnchorElement> = {};
    document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((a) => {
      const id = (a.getAttribute('href') || '').replace('#', '');
      navAnchors[id] = a;
    });
    let spy: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && sections.length) {
      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            const a = navAnchors[en.target.id];
            if (!a) return;
            if (en.isIntersecting) {
              Object.keys(navAnchors).forEach((k) => {
                navAnchors[k].style.color = '';
              });
              a.style.color = 'var(--ink)';
            }
          });
        },
        { rootMargin: '-45% 0px -50% 0px' }
      );
      sections.forEach((s) => spy!.observe(s));
    }

    return () => {
      if (toggle) toggle.removeEventListener('click', onToggle);
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
      spy?.disconnect();
      cardHandlers.forEach(({ card, handler }) => card.removeEventListener('pointermove', handler));
    };
  }, []);
}
