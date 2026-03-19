/* =============================================
   PORTFOLIO SCRIPT - Sanhinda Liyanage
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── CUSTOM CURSOR ─── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Smooth follow for follower
  (function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Hover states
  const hoverEls = document.querySelectorAll('a, button, .skill-card, .service-card, .project-card, .filter-btn, .exp-tab, .contact-detail-item');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });


  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });


  /* ─── HAMBURGER / MOBILE MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* ─── HERO ENTRANCE ANIMATION ─── */
  const heroRevealEls = document.querySelectorAll('.hero .reveal');
  heroRevealEls.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300 + i * 150);
  });


  /* ─── INTERSECTION OBSERVER for SCROLL REVEALS ─── */
  const revealElements = document.querySelectorAll(
    '.reveal:not(.hero .reveal), .reveal-left, .reveal-right'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  /* ─── ACTIVE NAV LINK on SCROLL ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--cranberry)'
            : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));


  /* ─── PROJECT FILTER ─── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.display = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });


  /* ─── EXPERIENCE TABS ─── */
  const expTabs = document.querySelectorAll('.exp-tab');
  const expPanels = document.querySelectorAll('.exp-panel');

  expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      expTabs.forEach(t => t.classList.remove('active'));
      expPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(`tab-${tab.getAttribute('data-tab')}`);
      if (panel) {
        panel.classList.add('active');
        // Re-trigger reveals in new panel
        panel.querySelectorAll('.reveal').forEach(el => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }
    });
  });


  /* ─── CONTACT FORM ─── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = btn.innerHTML;

      btn.innerHTML = `<span>Sending...</span>`;
      btn.disabled = true;

      // Simulate send (replace with your actual submission logic)
      setTimeout(() => {
        btn.innerHTML = `<span>✓ Message Sent!</span>`;
        btn.style.background = 'linear-gradient(135deg, #2d7a4f, #3da067)';
        contactForm.reset();
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }


  /* ─── PARALLAX HERO SHAPES ─── */
  const shapes = document.querySelectorAll('.shape');
  document.addEventListener('mousemove', e => {
    const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 12;
      shape.style.transform = `translate(${xPct * speed}px, ${yPct * speed}px)`;
    });
  });


  /* ─── SMOOTH SCROLL for NAV LINKS ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ─── TYPING EFFECT for HERO LABEL ─── */
  const heroLabel = document.querySelector('.hero-label');
  if (heroLabel) {
    const text = heroLabel.textContent;
    heroLabel.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        heroLabel.textContent += text[i++];
        setTimeout(type, 40);
      }
    };
    setTimeout(type, 600);
  }


  /* ─── FLOATING TITLE TEXT ANIMATION ─── */
  const heroNameLines = document.querySelectorAll('.name-line');
  heroNameLines.forEach((line, idx) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(60px)';
    line.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, 400 + idx * 200);
  });


  /* ─── MARQUEE PAUSE ON HOVER ─── */
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    marqueeTrack.parentElement.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeTrack.parentElement.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }


  /* ─── GLITCH EFFECT on Section Titles (subtle) ─── */
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          title.style.animation = 'titleReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both';
          titleObserver.unobserve(title);
        }
      });
    }, { threshold: 0.5 });
    titleObserver.observe(title);
  });


  /* ─── CARD TILT on Mouse Move ─── */
  const tiltCards = document.querySelectorAll('.service-card, .project-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = (y - cy) / cy * -5;
      const rotY = (x - cx) / cx * 5;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  /* ─── SCROLL PROGRESS INDICATOR ─── */
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed; top: 70px; left: 0; height: 2px;
    background: linear-gradient(90deg, var(--maroon), var(--raspberry));
    z-index: 1001; width: 0%; transition: width 0.1s linear;
    box-shadow: 0 0 8px var(--cranberry);
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    progressBar.style.width = `${(scrolled / scrollable) * 100}%`;
  });


  /* ─── INIT: trigger first reveals (above fold) ─── */
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);

});


/* ─── DYNAMIC CSS KEYFRAMES ─── */
const style = document.createElement('style');
style.textContent = `
  @keyframes titleReveal {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }
`;
document.head.appendChild(style);
