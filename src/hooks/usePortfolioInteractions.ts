import { useEffect } from 'react';

/**
 * Query-rail drag, scroll-linked hero/progress, staggered reveals,
 * and card pointer glow. DOM-based with cleanup for StrictMode remounts.
 */
export function usePortfolioInteractions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector<HTMLElement>('.hero');
    const heroImg = document.querySelector<HTMLElement>('.hero-scene img');
    const progress = document.getElementById('scrollProgress');

    hero?.classList.add('is-ready');

    /* ---------- Query rail: drag to scroll ---------- */
    const rail = document.querySelector<HTMLElement>('.query-rail');
    let dragCleanup: (() => void) | undefined;
    if (rail) {
      let down = false;
      let dragged = false;
      let startX = 0;
      let startScroll = 0;
      const onDown = (e: PointerEvent) => {
        down = true;
        dragged = false;
        startX = e.clientX;
        startScroll = rail.scrollLeft;
        rail.setPointerCapture(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) dragged = true;
        rail.scrollLeft = startScroll - dx;
      };
      const onUp = () => {
        down = false;
      };
      const onClick = (e: MouseEvent) => {
        if (dragged) {
          e.preventDefault();
          e.stopPropagation();
          dragged = false;
        }
      };
      rail.addEventListener('pointerdown', onDown);
      rail.addEventListener('pointermove', onMove);
      rail.addEventListener('pointerup', onUp);
      rail.addEventListener('pointercancel', onUp);
      rail.addEventListener('click', onClick, true);
      dragCleanup = () => {
        rail.removeEventListener('pointerdown', onDown);
        rail.removeEventListener('pointermove', onMove);
        rail.removeEventListener('pointerup', onUp);
        rail.removeEventListener('pointercancel', onUp);
        rail.removeEventListener('click', onClick, true);
      };
    }

    /* ---------- Scroll-linked motion ---------- */
    let ticking = false;
    const updateScroll = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const p = Math.min(1, y / Math.max(vh, 1));

      if (progress) {
        progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      if (reduceMotion) return;

      hero?.style.setProperty('--hero-fade', String(Math.max(0, 1 - p * 1.15)));
      hero?.style.setProperty('--hero-shift', `${p * 36}px`);
      if (heroImg) {
        heroImg.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();

    /* ---------- Scroll reveal ---------- */
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    reveals.forEach((el) => {
      const parent = el.parentElement;
      if (!parent || parent.classList.contains('steps-stack')) return;
      const siblings = [...parent.children].filter((c) => c.classList.contains('reveal'));
      const i = siblings.indexOf(el);
      if (i > 0) el.style.setProperty('--stagger', `${Math.min(i, 7) * 70}ms`);
    });

    const revealNow = (el: HTMLElement) => el.classList.add('in');
    let io: IntersectionObserver | undefined;

    if (reduceMotion) {
      reveals.forEach(revealNow);
    } else if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              revealNow(en.target as HTMLElement);
              io!.unobserve(en.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: '0px 0px -10% 0px' }
      );
      reveals.forEach((el) => {
        if (!el.classList.contains('in')) io!.observe(el);
      });
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

    return () => {
      dragCleanup?.();
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
      cardHandlers.forEach(({ card, handler }) => card.removeEventListener('pointermove', handler));
    };
  }, []);
}
