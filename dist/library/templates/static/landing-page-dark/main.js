// main.js — Landing Page Dark Template
// UX-UI System — Handles nav, scroll, init

'use strict';

// ─── Nav scroll shadow ────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ─── Mobile nav toggle ────────────────────────────
const toggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('nav-mobile');
toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu?.classList.toggle('open', !isOpen);
});
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  });
});

// ─── Current year ─────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
