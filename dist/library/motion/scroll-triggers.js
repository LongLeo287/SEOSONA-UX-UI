/**
 * scroll-triggers.js — Scroll-progress based animations
 * UX-UI System — 4_LIBRARY/motion/scroll-triggers.js
 *
 * Requires: Anime.js 4.x
 * Usage: Include after Anime.js, call initScrollTriggers() or let it auto-init
 */

const REDUCED_SCROLL = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────
   PARALLAX SCROLL
   data-parallax="speed" on any element
   speed: 0.1 (subtle) to 0.5 (strong)
   ───────────────────────────────────────────────── */
function initParallax() {
  if (REDUCED_SCROLL) return;
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax || '0.2');
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 + scrollY;
      const offset = (scrollY - center + window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────────────
   PROGRESS BAR
   data-scroll-progress on any element
   Fills the element width based on scroll position
   ───────────────────────────────────────────────── */
function initScrollProgressBar() {
  const bars = document.querySelectorAll('[data-scroll-progress]');
  if (!bars.length) return;

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min((window.scrollY / max) * 100, 100);
    bars.forEach(bar => { bar.style.width = `${pct}%`; });
  }, { passive: true });
}

/* ─────────────────────────────────────────────────
   REVEAL ON PERCENTAGE SCROLL
   data-reveal-at="50" — animate when user scrolled 50% of page
   data-animate attribute defines the animation type (reuses entrance-animations types)
   ───────────────────────────────────────────────── */
function initRevealAtScrollPercentage() {
  if (REDUCED_SCROLL) return;
  const els = document.querySelectorAll('[data-reveal-at]');
  if (!els.length) return;

  const triggered = new Set();

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / max) * 100;

    els.forEach(el => {
      if (triggered.has(el)) return;
      const threshold = parseFloat(el.dataset.revealAt || '50');
      if (pct >= threshold) {
        triggered.add(el);
        anime.animate(el, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          easing: 'easeOutQuart'
        });
      }
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────────────
   STICKY SCROLL INDICATOR (reading progress)
   Add id="scroll-indicator" to any element with position:fixed
   ───────────────────────────────────────────────── */
function initReadingIndicator() {
  const indicator = document.getElementById('scroll-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min((window.scrollY / max) * 100, 100);
    indicator.style.width = `${pct}%`;
  }, { passive: true });
}

/* ─────────────────────────────────────────────────
   FADE OUT ON SCROLL (for hero sections)
   data-fade-out on hero content — fades/shrinks as user scrolls
   ───────────────────────────────────────────────── */
function initHeroFadeOut() {
  if (REDUCED_SCROLL) return;
  const hero = document.querySelector('[data-fade-out]');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroH = hero.offsetHeight;
    const progress = Math.min(scrollY / (heroH * 0.6), 1);
    hero.style.opacity = 1 - progress;
    hero.style.transform = `translateY(${progress * 30}px) scale(${1 - progress * 0.03})`;
  }, { passive: true });
}

/* ─── Auto-init ──────────────────────────────────── */
function initScrollTriggers() {
  initParallax();
  initScrollProgressBar();
  initRevealAtScrollPercentage();
  initReadingIndicator();
  initHeroFadeOut();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollTriggers);
} else {
  initScrollTriggers();
}
