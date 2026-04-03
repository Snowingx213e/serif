(function() {
  'use strict';

  // Custom Cursor
  function initCustomCursor() {
    // Check if touch device
    if ('ontouchstart' in window) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      // Smooth follow for cursor ring
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      // Faster follow for dot
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .product-card, .contact-card, input, textarea, select');
    interactiveElements.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('hover');
      });
    });

    // Click effect
    document.addEventListener('mousedown', function() {
      cursor.classList.add('click');
    });
    document.addEventListener('mouseup', function() {
      cursor.classList.remove('click');
    });
  }

  // Click Ripple Effect
  function initRippleEffect() {
    document.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);

      setTimeout(function() {
        ripple.remove();
      }, 600);
    });
  }

  // Scroll Animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    document.querySelectorAll('.product-card').forEach(function(el, index) {
      el.classList.add('fade-in');
      el.style.transitionDelay = (index * 0.1) + 's';
      observer.observe(el);
    });

    document.querySelectorAll('.contact-card').forEach(function(el, index) {
      el.classList.add('scale-in');
      el.style.transitionDelay = (index * 0.15) + 's';
      observer.observe(el);
    });

    document.querySelectorAll('.section-title').forEach(function(el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    document.querySelectorAll('.team-panel-glow').forEach(function(el) {
      el.classList.add('slide-in-left');
      observer.observe(el);
    });
  }

  // Magnetic Button Effect
  function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-cart, .contact-btn');
    
    buttons.forEach(function(button) {
      button.classList.add('magnetic-btn');
      
      button.addEventListener('mousemove', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = 'translate(' + (x * 0.3) + 'px, ' + (y * 0.3) + 'px)';
      });
      
      button.addEventListener('mouseleave', function() {
        button.style.transform = 'translate(0, 0)';
      });
    });
  }

  // Floating Particles
  function initParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particlesContainer.appendChild(particle);

      setTimeout(function() {
        particle.remove();
      }, 6000);
    }

    // Create particles periodically
    setInterval(createParticle, 800);
  }

  // Page Transition
  function initPageTransition() {
    document.body.classList.add('page-transition');
  }

  // Smooth Scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#products' || href === '#contact') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // Add glow pulse to important buttons
  function initGlowEffects() {
    const ctaButtons = document.querySelectorAll('.btn-primary.large, .modal-buy-cta');
    ctaButtons.forEach(function(btn) {
      btn.classList.add('glow-pulse');
    });
  }

  // Parallax Effect on Hero
  function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallaxElements = hero.querySelectorAll('.hero-content, .hero-visual');
      
      parallaxElements.forEach(function(el, index) {
        const speed = (index + 1) * 0.5;
        el.style.transform = 'translateY(' + (scrolled * speed * 0.1) + 'px)';
      });
    });
  }

  // Initialize all animations
  function init() {
    initCustomCursor();
    initRippleEffect();
    initScrollAnimations();
    initMagneticButtons();
    initParticles();
    initPageTransition();
    initSmoothScroll();
    initGlowEffects();
    initParallax();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
