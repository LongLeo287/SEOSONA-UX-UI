/**
 * Entrance Animations — Scroll-triggered
 * UX-UI System — 4_LIBRARY/motion/entrance-animations.js
 *
 * Requires: Anime.js 4.x (loaded before this script)
 * Usage: Call initEntranceAnimations() after DOM ready
 */

const { animate, stagger } = anime;

const PREFERS_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Initialize all scroll-triggered entrance animations.
 * Add data-animate="fade-up|fade-in|slide-left|slide-right|scale-in"
 * to any element you want animated on scroll.
 */
function initEntranceAnimations() {
  if (PREFERS_REDUCED) {
    // Show all animated elements immediately
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const elements = document.querySelectorAll('[data-animate]');
  
  // Set initial hidden state
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.willChange = 'opacity, transform';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const el = entry.target;
      const type = el.dataset.animate || 'fade-up';
      const delay = parseInt(el.dataset.delay || '0');
      
      const animations = {
        'fade-up': {
          opacity:    [0, 1],
          translateY: [32, 0],
          duration:   600,
          easing:     'easeOutQuart',
        },
        'fade-in': {
          opacity:  [0, 1],
          duration: 500,
          easing:   'easeOutCubic',
        },
        'slide-left': {
          opacity:    [0, 1],
          translateX: [40, 0],
          duration:   600,
          easing:     'easeOutQuart',
        },
        'slide-right': {
          opacity:    [0, 1],
          translateX: [-40, 0],
          duration:   600,
          easing:     'easeOutQuart',
        },
        'scale-in': {
          opacity:  [0, 1],
          scale:    [0.92, 1],
          duration: 500,
          easing:   'easeOutBack',
        },
        'fade-down': {
          opacity:    [0, 1],
          translateY: [-24, 0],
          duration:   600,
          easing:     'easeOutQuart',
        },
      };

      const config = animations[type] || animations['fade-up'];
      animate(el, { ...config, delay });
      observer.unobserve(el);
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Staggered list entrance animation
 * @param {string} containerSelector - Parent element selector
 * @param {string} itemSelector - Child items to animate
 * @param {Object} options - Override options
 */
function animateStaggeredList(containerSelector, itemSelector = ':scope > *', options = {}) {
  if (PREFERS_REDUCED) return;

  const containers = document.querySelectorAll(containerSelector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const items = entry.target.querySelectorAll(itemSelector);
      animate(items, {
        opacity:    [0, 1],
        translateY: [24, 0],
        duration:   500,
        delay:      stagger(80),
        easing:     'easeOutQuart',
        ...options,
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  containers.forEach(c => {
    c.querySelectorAll(itemSelector).forEach(item => item.style.opacity = '0');
    observer.observe(c);
  });
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEntranceAnimations);
} else {
  initEntranceAnimations();
}
