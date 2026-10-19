import { useEffect } from 'react';

/**
 * Port of the design prototype's script.js: query-rail drag,
 * scroll-reveal, and card pointer glow. DOM-based to mirror the original
 * interactions, with full cleanup so it behaves under React StrictMode remounts.
 */
export function usePortfolioInteractions() {
  useEffect(() => {
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

    /* ---------- Scroll reveal ---------- */
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    const revealNow = (el: HTMLElement) => el.classList.add('in');
    let io: IntersectionObserver | undefined;
    const checkReveals = () => {
      const vh = window.innerHeight;
      reveals.forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) revealNow(el);
      });
    };
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              revealNow(en.target as HTMLElement);
              io!.unobserve(en.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
      );
      reveals.forEach((el) => {
        if (!el.classList.contains('in')) io!.observe(el);
      });
    }
    window.addEventListener('scroll', checkReveals, { passive: true });
    requestAnimationFrame(checkReveals);

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
      window.removeEventListener('scroll', checkReveals);
      cardHandlers.forEach(({ card, handler }) => card.removeEventListener('pointermove', handler));
    };
  }, []);
}
