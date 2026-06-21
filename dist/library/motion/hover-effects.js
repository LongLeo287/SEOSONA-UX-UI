/**
 * hover-effects.js — Reusable hover interaction patterns
 * UX-UI System — 4_LIBRARY/motion/hover-effects.js
 *
 * Requires: Anime.js 4.x
 * Usage: import or include before </body> — effects init automatically via data attributes
 */

const { animate } = anime;
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────
   MAGNETIC BUTTON EFFECT
   data-magnetic on any button — cursor attraction
   ───────────────────────────────────────────────── */
function initMagneticButtons() {
  if (REDUCED) return;
  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    const strength = parseFloat(btn.dataset.magneticStrength || '0.35');
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      animate(btn, { translateX: dx, translateY: dy, duration: 300, easing: 'easeOutQuart' });
    });
    btn.addEventListener('mouseleave', () => {
      animate(btn, { translateX: 0, translateY: 0, duration: 500, easing: 'easeOutElastic(1, 0.5)' });
    });
  });
}

/* ─────────────────────────────────────────────────
   CARD TILT EFFECT (3D perspective on hover)
   data-tilt on any card element
   ───────────────────────────────────────────────── */
function initTiltCards() {
  if (REDUCED) return;
  document.querySelectorAll('[data-tilt]').forEach(card => {
    const intensity = parseFloat(card.dataset.tiltIntensity || '8');
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.1s ease-out';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      const rotateX = -y * intensity;
      const rotateY =  x * intensity;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

/* ─────────────────────────────────────────────────
   BUTTON RIPPLE EFFECT
   data-ripple on any button/link
   ───────────────────────────────────────────────── */
function initRippleButtons() {
  document.querySelectorAll('[data-ripple]').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top  - size / 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;left:${x}px;top:${y}px;
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:rgba(255,255,255,0.25);
        pointer-events:none;
        transform:scale(0);opacity:1;
      `;
      btn.appendChild(ripple);

      if (!REDUCED) {
        animate(ripple, {
          scale: [0, 1], opacity: [1, 0],
          duration: 600, easing: 'easeOutQuart',
          complete: () => ripple.remove()
        });
      } else {
        ripple.remove();
      }
    });
  });
}

/* ─────────────────────────────────────────────────
   ICON BOUNCE ON HOVER
   data-icon-bounce on icon wrapper — bounces child <svg>/<i>
   ───────────────────────────────────────────────── */
function initIconBounce() {
  if (REDUCED) return;
  document.querySelectorAll('[data-icon-bounce]').forEach(el => {
    const icon = el.querySelector('svg, i, img');
    if (!icon) return;
    el.addEventListener('mouseenter', () => {
      animate(icon, {
        translateY: [0, -5, 0],
        duration: 500,
        easing: 'easeOutElastic(1, 0.6)'
      });
    });
  });
}

/* ─────────────────────────────────────────────────
   LINK UNDERLINE SLIDE
   Add class .link-slide to any <a> for animated underline
   CSS: add .link-slide styles to your stylesheet
   ───────────────────────────────────────────────── */
function injectLinkSlideStyles() {
  const css = `
    .link-slide {
      display: inline-block;
      position: relative;
    }
    .link-slide::after {
      content: '';
      position: absolute;
      bottom: -1px; left: 0;
      width: 0; height: 1.5px;
      background: currentColor;
      transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .link-slide:hover::after { width: 100%; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

/* ─── Auto-init ──────────────────────────────────── */
function initHoverEffects() {
  injectLinkSlideStyles();
  initMagneticButtons();
  initTiltCards();
  initRippleButtons();
  initIconBounce();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHoverEffects);
} else {
  initHoverEffects();
}
