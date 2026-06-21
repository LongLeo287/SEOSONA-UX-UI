/* =============================================================
   Dynamic SaaS Motion Homepage - Main JS
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ─── INIT LOADER ───
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderText = document.getElementById('loader-text');
  
  if (typeof anime !== 'undefined') {
    // Simulate loading progress
    anime({
      targets: loaderBar,
      width: '100%',
      easing: 'easeInOutExpo',
      duration: 1500,
      update: function(anim) {
        loaderText.innerHTML = 'Loading Experience... ' + Math.round(anim.progress) + '%';
      },
      complete: function() {
        // Hide loader and start intro sequence
        anime({
          targets: loader,
          opacity: 0,
          duration: 500,
          easing: 'linear',
          complete: function() {
            loader.style.display = 'none';
            playIntroSequence();
          }
        });
      }
    });
  } else {
    loader.style.display = 'none';
  }

  // ─── INTRO SEQUENCE ───
  function playIntroSequence() {
    // Animate hero elements
    const heroTitleLines = document.querySelectorAll('.hero-title .line');
    const heroSub = document.querySelector('.hero-sub');
    const heroCta = document.querySelector('.hero-cta');
    const badge = document.querySelector('.badge-wrapper');
    const floatCards = document.querySelectorAll('.float-card');
    
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });
    
    tl
    .add({
      targets: badge,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 200
    })
    .add({
      targets: heroTitleLines,
      opacity: [0, 1],
      translateY: [40, 0],
      rotateZ: [2, 0],
      delay: anime.stagger(100),
      easing: 'easeOutCubic'
    }, '-=800')
    .add({
      targets: heroSub,
      opacity: [0, 1],
      translateY: [20, 0],
    }, '-=600')
    .add({
      targets: heroCta,
      opacity: [0, 1],
      translateY: [20, 0],
    }, '-=800')
    .add({
      targets: floatCards,
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [40, 0],
      delay: anime.stagger(150),
      easing: 'easeOutBack'
    }, '-=1000');

    // Continuous float animation for cards
    floatCards.forEach((card, i) => {
      anime({
        targets: card,
        translateY: [0, (i%2===0 ? -15 : 15)],
        direction: 'alternate',
        loop: true,
        duration: 3000 + (i * 500),
        easing: 'easeInOutSine'
      });
    });
  }

  // ─── CUSTOM CURSOR ───
  const cursor = document.getElementById('custom-cursor');
  const cursorFollower = document.getElementById('custom-cursor-follower');
  
  if (cursor && cursorFollower && window.matchMedia("(pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    
    // Update target mouse coords
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Immediately update small cursor
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follow for the larger circle
    function renderCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      
      requestAnimationFrame(renderCursor);
    }
    renderCursor();
    
    // Add hover states for interactive elements
    const hoverables = document.querySelectorAll('a, button, .hover-list-item, [data-magnetic]');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
    
    // Magnetic effect
    const magnetics = document.querySelectorAll('[data-magnetic]');
    magnetics.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
      });
    });
  } else {
    // Disable custom cursor on touch devices
    document.body.style.cursor = 'auto';
    if(cursor) cursor.style.display = 'none';
    if(cursorFollower) cursorFollower.style.display = 'none';
  }

  // ─── NAVBAR SCROLL ───
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // ─── TYPEWRITER EFFECT ───
  const codeEl = document.getElementById('typewriter-code');
  if (codeEl) {
    const codeString = `
<span class="kw">import</span> { animate } <span class="kw">from</span> <span class="str">'motion'</span>;

<span class="fn">animate</span>(
  <span class="str">'.card'</span>,
  { <span class="op">y:</span> [<span class="num">50</span>, <span class="num">0</span>], <span class="op">opacity:</span> [<span class="num">0</span>, <span class="num">1</span>] },
  { <span class="op">delay:</span> <span class="fn">stagger</span>(<span class="num">0.1</span>), <span class="op">easing:</span> <span class="str">'spring'</span> }
);
`;
    
    // Simple intersection observer to start typing when in view
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        let i = 0;
        codeEl.innerHTML = ''; // clear first
        
        // Use a simple timeout loop instead of complex parsing for demo
        // In real world, we'd parse HTML tags and type text nodes
        codeEl.innerHTML = codeString;
        observer.disconnect();
      }
    });
    observer.observe(document.querySelector('.code-showcase'));
  }

  // ─── MARQUEE ANIMATION ───
  if (typeof anime !== 'undefined') {
    const marquee1 = document.querySelector('#marquee1 .marquee-content');
    const marquee2 = document.querySelector('#marquee2 .marquee-content');
    
    if(marquee1) {
      anime({
        targets: marquee1,
        translateX: ['0%', '-50%'],
        loop: true,
        duration: 20000,
        easing: 'linear'
      });
    }
    
    if(marquee2) {
      anime({
        targets: marquee2,
        translateX: ['-50%', '0%'],
        loop: true,
        duration: 20000,
        easing: 'linear'
      });
    }
  }

  // ─── HOVER IMAGE REVEAL ───
  const listItems = document.querySelectorAll('.hover-list-item');
  const revealImg = document.getElementById('hover-image-reveal');
  
  if (revealImg && window.matchMedia("(pointer: fine)").matches) {
    listItems.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        const imgSrc = item.getAttribute('data-img');
        revealImg.style.backgroundImage = `url(${imgSrc})`;
        revealImg.classList.add('active');
        
        // Dim other items
        listItems.forEach(other => {
          if (other !== item) other.style.opacity = '0.3';
        });
      });
      
      item.addEventListener('mousemove', (e) => {
        revealImg.style.left = e.clientX + 'px';
        revealImg.style.top = e.clientY + 'px';
      });
      
      item.addEventListener('mouseleave', () => {
        revealImg.classList.remove('active');
        // Restore all
        listItems.forEach(other => other.style.opacity = '1');
      });
    });
  }

});
