/**
 * page-transitions.js — Smooth page-to-page transitions
 * UX-UI System — 4_LIBRARY/motion/page-transitions.js
 *
 * Requires: Anime.js 4.x
 * Usage: Include on every page. Intercepts same-origin <a> clicks.
 * Add class="no-transition" to any link to skip.
 */

const REDUCED_PT = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────
   SETUP: Inject transition overlay into DOM
   ───────────────────────────────────────────────── */
function createOverlay() {
  const el = document.createElement('div');
  el.id = 'pt-overlay';
  el.setAttribute('aria-hidden', 'true');
  el.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: #04091A;
    opacity: 0; pointer-events: none;
    transform-origin: bottom;
  `;
  document.body.appendChild(el);
  return el;
}

/* ─────────────────────────────────────────────────
   ANIMATE OUT → navigate → ANIMATE IN
   ───────────────────────────────────────────────── */
function transitionTo(url) {
  const overlay = document.getElementById('pt-overlay') || createOverlay();
  overlay.style.pointerEvents = 'all';

  if (REDUCED_PT) {
    window.location.href = url;
    return;
  }

  anime.animate(overlay, {
    opacity: [0, 1],
    duration: 300,
    easing: 'easeInQuart',
    complete: () => { window.location.href = url; }
  });
}

function transitionIn() {
  const overlay = document.getElementById('pt-overlay');
  if (!overlay) return;

  if (REDUCED_PT) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    return;
  }

  anime.animate(overlay, {
    opacity: [1, 0],
    duration: 400,
    easing: 'easeOutQuart',
    complete: () => {
      overlay.style.pointerEvents = 'none';
    }
  });
}

/* ─────────────────────────────────────────────────
   INTERCEPT LINK CLICKS
   ───────────────────────────────────────────────── */
function interceptLinks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    if (link.classList.contains('no-transition')) return;
    if (link.target === '_blank') return;
    if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;

    // Same origin only
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;

    // Same page anchor — skip
    if (url.pathname === window.location.pathname && url.hash) return;

    e.preventDefault();
    transitionTo(url.href);
  });
}

/* ─────────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────────── */
function initPageTransitions() {
  createOverlay();
  interceptLinks();

  // Animate in when page loads
  if (document.readyState === 'complete') {
    transitionIn();
  } else {
    window.addEventListener('load', transitionIn);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageTransitions);
} else {
  initPageTransitions();
}
