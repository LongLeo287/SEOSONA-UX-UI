/* =============================================================
   Scroll Trigger Utility
   A lightweight intersection observer wrapper for scroll animations
   ============================================================= */

class ScrollTrigger {
  constructor() {
    this.init();
  }

  init() {
    // Setup intersection observer
    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before it comes into view
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play animation
          this.animateElement(entry.target);
          
          // Stop observing once animated if not repeating
          if (!entry.target.hasAttribute('data-scroll-repeat')) {
            this.observer.unobserve(entry.target);
          }
        } else {
          // Optional: reset animation if repeating
          if (entry.target.hasAttribute('data-scroll-repeat')) {
            this.resetElement(entry.target);
          }
        }
      });
    }, options);

    // Observe elements
    this.refresh();
  }

  refresh() {
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach(el => {
      // Pre-process elements (set initial styles)
      this.prepareElement(el);
      this.observer.observe(el);
    });
  }

  prepareElement(el) {
    const type = el.getAttribute('data-scroll');
    
    // Set initial opacity and transforms based on animation type
    el.style.opacity = '0';
    
    switch(type) {
      case 'fade-up':
        el.style.transform = 'translateY(40px)';
        break;
      case 'fade-down':
        el.style.transform = 'translateY(-40px)';
        break;
      case 'slide-left':
        el.style.transform = 'translateX(60px)';
        break;
      case 'slide-right':
        el.style.transform = 'translateX(-60px)';
        break;
      case 'scale-up':
        el.style.transform = 'scale(0.8)';
        break;
    }
    
    // Prepare children if it's a stagger group
    if (el.hasAttribute('data-scroll-stagger')) {
      const children = el.querySelectorAll('.staggered-item');
      children.forEach(child => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
      });
    }
  }

  animateElement(el) {
    const type = el.getAttribute('data-scroll');
    const delay = parseInt(el.getAttribute('data-delay') || 0);
    const duration = parseInt(el.getAttribute('data-duration') || 800);
    const easing = 'cubicBezier(0.215, 0.610, 0.355, 1.000)'; // easeOutCubic

    if (el.hasAttribute('data-scroll-stagger')) {
      const children = el.querySelectorAll('.staggered-item');
      if(typeof anime !== 'undefined') {
        anime({
          targets: children,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100, {start: delay}),
          duration: duration,
          easing: easing
        });
      }
      return;
    }

    // Default animations using anime.js
    if(typeof anime !== 'undefined') {
      let animProps = {
        targets: el,
        opacity: [0, 1],
        delay: delay,
        duration: duration,
        easing: easing
      };

      switch(type) {
        case 'fade-up':
          animProps.translateY = [40, 0];
          break;
        case 'fade-down':
          animProps.translateY = [-40, 0];
          break;
        case 'slide-left':
          animProps.translateX = [60, 0];
          break;
        case 'slide-right':
          animProps.translateX = [-60, 0];
          break;
        case 'scale-up':
          animProps.scale = [0.8, 1];
          break;
      }

      anime(animProps);
    }
  }

  resetElement(el) {
    // Only used if data-scroll-repeat is true
    this.prepareElement(el);
  }
}

// Init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.ScrollController = new ScrollTrigger();
});
