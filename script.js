/* [JS] ── 1. CUSTOM GLOW CURSOR ──────────────────────── */
(function () {
  const glow = document.getElementById('cursorGlow');
  const dot = document.getElementById('cursorDot');
  let mx = 0, my = 0;
  let gx = 0, gy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateCursor() {
    gx += (mx - gx) * 0.12;
    gy += (my - gy) * 0.12;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .skill-card, .project-card, .social-icon').forEach(el => {
    el.addEventListener('mouseenter', () => { glow.style.transform = 'translate(-50%,-50%) scale(2.2)'; glow.style.opacity = '0.6'; });
    el.addEventListener('mouseleave', () => { glow.style.transform = 'translate(-50%,-50%) scale(1)'; glow.style.opacity = '1'; });
  });
})();

/* [JS] ── 2. PARTICLES CANVAS ────────────────────────── */
(function () {
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', () => { resize(); init(); });
  resize();

  function rand(a, b) { return a + Math.random() * (b - a); }
  const COLORS = ['rgba(0,245,255,', 'rgba(0,102,255,', 'rgba(0,170,255,'];

  function Particle() {
    this.reset = function () {
      this.x = rand(0, W); this.y = rand(0, H);
      this.r = rand(0.6, 2.2);
      this.dx = rand(-0.35, 0.35); this.dy = rand(-0.5, 0.15);
      this.life = rand(0.3, 0.9);
      this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
    };
    this.reset();
  }

  function init() {
    const count = Math.floor((W * H) / 8000);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + p.life + ')'; ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.y < -5 || p.x < -5 || p.x > W + 5) p.reset();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(0,245,255,' + (0.06 * (1 - dist / 100)) + ')';
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  init(); draw();
})();

/* [JS] ── 3. TYPING EFFECT ───────────────────────────── */
(function () {
  const el = document.getElementById('typedText');
  const titles = ['Web Developer', 'Frontend Developer'];
  let ti = 0, ci = 0, deleting = false;

  function type() {
    const current = titles[ti];
    if (!deleting) {
      el.textContent = current.slice(0, ci + 1); ci++;
      if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.slice(0, ci - 1); ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % titles.length; }
    }
    setTimeout(type, deleting ? 55 : 95);
  }
  type();
})();

/* [JS] ── 4. NAV — HAMBURGER & SCROLLSPY ─────────────── */
(function () {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    let current = '';
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 160) current = sec.id; });
    links.forEach(l => l.classList.toggle('active', l.dataset.section === current));
    document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  links.forEach(l => l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }));
})();

/* [JS] ── 5. SMOOTH SCROLLING ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* [JS] ── 6. SCROLL REVEAL ───────────────────────────── */
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-fill').forEach(fill => {
          const bar = fill.closest('.skill-bar');
          fill.style.width = (bar.dataset.width || 80) + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* [JS] ── 7. SKILL BARS ──────────────────────────────── */
(function () {
  function checkBars() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
      if (bar.getBoundingClientRect().top < window.innerHeight - 60)
        bar.querySelector('.skill-fill').style.width = (bar.dataset.width || 80) + '%';
    });
  }
  window.addEventListener('scroll', checkBars);
  checkBars();
})();

/* [JS] ── 8. 3D TILT ON PROJECT CARDS ────────────────── */
(function () {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(700px) rotateX(${-(y / rect.height) * 12}deg) rotateY(${(x / rect.width) * 12}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
})();

/* [JS] ── 9. CONTACT FORM (EmailJS) ────────────────────── */
(function () {
  const btn = document.getElementById('sendBtn');
  const success = document.getElementById('formSuccess');
  if (!btn) return;

  const SERVICE_ID  = 'service_1aw8fpz';
  const TEMPLATE_ID = 'template_ysgjd0l';

  btn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    if (!name || !email || !msg) {
      btn.style.boxShadow = '0 0 20px rgba(255,80,80,0.6)';
      btn.innerHTML = '⚠ Please fill all fields';
      setTimeout(() => { btn.style.boxShadow = ''; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'; }, 2000);
      return;
    }

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name:    name,
      email:   email,
      message: msg,
    }).then(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      success.classList.add('show');
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled = false;
        success.classList.remove('show');
        ['name', 'email', 'message'].forEach(id => document.getElementById(id).value = '');
      }, 3500);
    }).catch((err) => {
      console.error('EmailJS error:', err);
      btn.style.boxShadow = '0 0 20px rgba(255,80,80,0.6)';
      btn.innerHTML = '✗ Failed — try again';
      setTimeout(() => {
        btn.style.boxShadow = '';
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled = false;
      }, 3000);
    });
  });
})();


/* [JS] ── 10. RIPPLE EFFECT ──────────────────────────── */
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const r = document.createElement('span');
    const rect = this.getBoundingClientRect();
    r.style.cssText = `position:absolute;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.18);transform:scale(0);left:${e.clientX - rect.left - 90}px;top:${e.clientY - rect.top - 90}px;animation:rippleAnim 0.6s ease-out forwards;pointer-events:none;`;
    this.style.position = 'relative'; this.style.overflow = 'hidden';
    this.appendChild(r); setTimeout(() => r.remove(), 700);
  });
});

const s = document.createElement('style');
s.textContent = '@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }';
document.head.appendChild(s);
