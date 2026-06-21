/**
 * Entrance Animations — Scroll-triggered
 * UX-UI System — 4_LIBRARY/motion/entrance-animations.js
 *
 * Requires: GSAP 3.x (loaded before this script)
 * Usage: Call initEntranceAnimations() after DOM ready
 */

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
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
    });
    return;
  }

  const elements = document.querySelectorAll('[data-animate]');
  
  // Set initial hidden state
  elements.forEach(el => {
    gsap.set(el, { opacity: 0 });
    el.style.willChange = 'opacity, transform';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const el = entry.target;
      const type = el.dataset.animate || 'fade-up';
      const delayStr = el.dataset.delay || '0';
      const delay = parseInt(delayStr) / 1000; // GSAP uses seconds
      
      const animations = {
        'fade-up': {
          y: 32,
          duration: 0.6,
          ease: 'power3.out',
        },
        'fade-in': {
          duration: 0.5,
          ease: 'power2.out',
        },
        'slide-left': {
          x: 40,
          duration: 0.6,
          ease: 'power3.out',
        },
        'slide-right': {
          x: -40,
          duration: 0.6,
          ease: 'power3.out',
        },
        'scale-in': {
          scale: 0.92,
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        'fade-down': {
          y: -24,
          duration: 0.6,
          ease: 'power3.out',
        },
      };

      const config = animations[type] || animations['fade-up'];
      
      // Set the from-state before animating to the natural state
      const setConfig = {};
      if (config.y !== undefined) setConfig.y = config.y;
      if (config.x !== undefined) setConfig.x = config.x;
      if (config.scale !== undefined) setConfig.scale = config.scale;
      
      if (Object.keys(setConfig).length > 0) {
        gsap.set(el, setConfig);
      }
      
      gsap.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: config.duration,
        ease: config.ease,
        delay: delay,
        clearProps: 'transform,willChange'
      });

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
 * @param {Object} options - Override options for GSAP
 */
function animateStaggeredList(containerSelector, itemSelector = ':scope > *', options = {}) {
  if (PREFERS_REDUCED) return;

  const containers = document.querySelectorAll(containerSelector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const items = entry.target.querySelectorAll(itemSelector);
      
      gsap.set(items, { opacity: 0, y: 24 });
      
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
        ...options
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  containers.forEach(c => {
    c.querySelectorAll(itemSelector).forEach(item => {
      gsap.set(item, { opacity: 0 }); // Hide initially to prevent flash
    });
    observer.observe(c);
  });
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEntranceAnimations);
} else {
  initEntranceAnimations();
}
