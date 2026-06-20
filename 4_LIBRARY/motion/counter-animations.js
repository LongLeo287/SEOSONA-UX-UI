/**
 * Counter Animations
 * UX-UI System — 4_LIBRARY/motion/counter-animations.js
 *
 * Requires: Anime.js 4.x
 * Usage: Add data-counter to any element with a numeric value
 */

const PREFERS_REDUCED_COUNTER = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Animate number counters when they scroll into view.
 * 
 * HTML usage:
 * <span data-counter="350" data-suffix="+">0</span>
 * <span data-counter="4.8" data-suffix="x" data-decimals="1">0</span>
 * <span data-counter="98" data-prefix="$" data-suffix="%">0</span>
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  if (PREFERS_REDUCED_COUNTER) {
    counters.forEach(el => {
      const target = parseFloat(el.dataset.counter);
      const decimals = parseInt(el.dataset.decimals || '0');
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      el.textContent = prefix + target.toFixed(decimals) + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const decimals = parseInt(el.dataset.decimals || '0');
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = parseInt(el.dataset.duration || '1800');

      const obj = { value: 0 };
      anime.animate(obj, {
        value: target,
        duration,
        easing: 'easeOutQuart',
        update: () => {
          el.textContent = prefix + obj.value.toFixed(decimals) + suffix;
        },
        complete: () => {
          el.textContent = prefix + target.toFixed(decimals) + suffix;
        },
      });

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}
