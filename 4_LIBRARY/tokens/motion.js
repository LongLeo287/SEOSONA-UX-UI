/* =============================================================
   MOTION TOKENS — Anime.js Configuration
   UX-UI System — 4_LIBRARY/tokens/motion.js
   ============================================================= */

/**
 * MOTION SYSTEM
 * Import this file in any project using Anime.js animations.
 * All animation values must come from this token set.
 */

const MOTION = {

  // ─── Easing Functions ──────────────────────────────────────
  easing: {
    // Standard UI transitions
    default:     'easeOutQuart',
    enter:       'easeOutCubic',
    exit:        'easeInCubic',
    // Emphasis
    bounce:      'easeOutBack',
    elastic:     'spring(1, 80, 10, 0)',
    // Smooth
    smooth:      'easeInOutQuart',
    linear:      'linear',
  },

  // ─── Durations (ms) ────────────────────────────────────────
  duration: {
    instant:  100,   // Near-instant feedback (toggle, checkbox)
    micro:    150,   // Hover state, focus ring
    short:    250,   // Button press, icon swap
    default:  400,   // Element entrance
    medium:   600,   // Card animation, panel slide
    long:     800,   // Hero entrance, page-level
    slow:    1200,   // Dramatic reveal, page transition
    counter: 1800,   // Number counter animations
  },

  // ─── Delays ────────────────────────────────────────────────
  delay: {
    stagger:    80,   // Between staggered list items
    staggerSm:  50,   // Tight stagger (many items)
    staggerLg: 120,   // Loose stagger (few items)
    afterLoad: 200,   // After page ready
    hero:      300,   // Hero sequence start delay
  },

  // ─── Translation Distances (px) ────────────────────────────
  translate: {
    xs:  8,
    sm:  16,
    md:  24,
    lg:  40,
    xl:  60,
  },

  // ─── Scale Values ──────────────────────────────────────────
  scale: {
    subtle:  0.97,
    sm:      0.95,
    md:      0.90,
    hover:   1.02,
    pop:     1.05,
  },

};

// ─── Reduced Motion Detection ──────────────────────────────
const PREFERS_REDUCED = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/**
 * Apply reduced motion overrides when user preference is set.
 * Use this wrapper before any animation call.
 *
 * @param {Object} config - Anime.js config object
 * @returns {Object} - Modified config respecting motion preference
 */
function motionSafe(config) {
  if (!PREFERS_REDUCED) return config;
  return {
    ...config,
    duration: MOTION.duration.instant,
    delay: 0,
    translateY: 0,
    translateX: 0,
    opacity: config.opacity
      ? (Array.isArray(config.opacity) ? [config.opacity[1], config.opacity[1]] : config.opacity)
      : undefined,
  };
}

// Export for module use
if (typeof module !== 'undefined') {
  module.exports = { MOTION, PREFERS_REDUCED, motionSafe };
}
