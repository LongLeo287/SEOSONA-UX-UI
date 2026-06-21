// main.js — Portfolio Agency Template
// UX-UI System — Handles nav scroll, mobile menu, form, year

'use strict';

// ─── Nav scroll ───────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ─── Mobile nav ───────────────────────────────────
const toggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  mobileNav?.classList.toggle('open', !open);
});
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
  });
});

// ─── Contact form (client-side validation) ────────
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('cf-submit');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  submitBtn.disabled = true;
  btnText.hidden = true;
  btnLoading.hidden = false;

  // Simulate submission — replace with actual fetch() to your endpoint
  await new Promise(r => setTimeout(r, 1500));

  // Success state
  form.innerHTML = `
    <div style="text-align:center;padding:2rem;">
      <div style="font-size:2rem;margin-bottom:1rem;">✅</div>
      <h3 style="font-family:var(--font-heading);color:var(--color-text-primary);margin-bottom:0.5rem;">Message sent!</h3>
      <p style="color:var(--color-text-body);">We'll get back to you within 24 hours.</p>
    </div>
  `;
});

// ─── Current year ─────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
