/* ============================================================
   Patitas Felices — Interacciones
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else                    navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- Active nav link (based on current URL) ---------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    if (href === currentPath) link.classList.add('active');
    if (currentPath === '' && href === 'index.html') link.classList.add('active');
  });

  /* ---------- Close mobile menu on click ---------- */
  const navCollapse = document.getElementById('mainNav');
  if (navCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).hide();
        }
      });
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    revealItems.forEach(el => io.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Counters animation ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const duration = 1800;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString('es-MX');
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString('es-MX');
        };
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) backToTop.classList.add('show');
      else                       backToTop.classList.remove('show');
    }, { passive: true });
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

      setTimeout(() => {
        const modal = document.getElementById('successModal');
        if (modal) new bootstrap.Modal(modal).show();
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1100);
    });
  }

  /* ---------- Service modal (servicios.html) ---------- */
  const serviceModal = document.getElementById('serviceModal');
  if (serviceModal) {
    serviceModal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const id = trigger.getAttribute('data-service');
      const svc = SERVICIOS.find(s => s.id === id);
      if (!svc) return;

      serviceModal.querySelector('.modal-img').src = svc.imagen;
      serviceModal.querySelector('.modal-img').alt = svc.nombre;
      serviceModal.querySelector('.modal-title').textContent = svc.nombre;
      serviceModal.querySelector('.modal-body p').textContent = svc.descripcion;

      const iconEl = serviceModal.querySelector('.modal-icon');
      iconEl.className = 'modal-icon bi ' + svc.icono;

      const priceEl = serviceModal.querySelector('.modal-price');
      if (svc.precioDesde > 0) {
        priceEl.innerHTML = '<small>Desde</small> $' + svc.precioDesde.toLocaleString('es-MX') + ' <small>MXN</small>';
        priceEl.style.display = 'block';
      } else {
        priceEl.innerHTML = '<small>Precio variable según producto</small>';
        priceEl.style.display = 'block';
      }
    });
  }

  /* ---------- Mark active FAQ item on open ---------- */
  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      if (item) {
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active-faq'));
        if (btn.classList.contains('collapsed')) item.classList.add('active-faq');
      }
    });
  });
})();
