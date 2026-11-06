/* Enterprise Property Agents — site behaviour
   Vanilla JS, no dependencies. Runs on every page. */
(function () {
  'use strict';

  /* ---- Sticky header state ------------------------------------------- */
  var header = document.getElementById('siteHeader');
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-solid', y > 24);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile navigation --------------------------------------------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  var scrim = document.getElementById('navScrim');

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-visible', open);
    if (header) header.classList.toggle('is-nav-open', open);
    document.body.classList.toggle('is-locked', open);
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (scrim) scrim.addEventListener('click', function () { setNav(false); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNav(false);
  });

  // Close the drawer after tapping a link, and reset it if the viewport grows.
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
  }
  var wide = window.matchMedia('(min-width: 1001px)');
  var onWide = function (e) { if (e.matches) setNav(false); };
  if (wide.addEventListener) wide.addEventListener('change', onWide);
  else if (wide.addListener) wide.addListener(onWide);

  /* ---- Scroll reveal --------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealables.forEach(function (el, i) {
      // Stagger siblings inside the same grid/row for a gentle cascade.
      if (!el.style.getPropertyValue('--delay')) {
        var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : i;
        el.style.setProperty('--delay', Math.min(sibs, 5) * 70 + 'ms');
      }
      io.observe(el);
    });
  }

  /* ---- Back to top ----------------------------------------------------- */
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Contact form ---------------------------------------------------
     No backend is wired up yet. Rather than silently swallowing an enquiry,
     the form validates, then hands off to the visitor's email client so the
     message actually reaches someone. Replace this block with a real form
     endpoint (Formspree, Netlify Forms, your CRM) when one is available.  */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var get = function (k) { return (data.get(k) || '').toString().trim(); };

      var lines = [
        'Name: ' + get('name'),
        'Email: ' + get('email'),
        'Phone: ' + get('phone'),
        'Enquiry type: ' + get('interest'),
        '',
        get('message')
      ].join('\n');

      var to = form.dataset.mailto || 'hello@enterprisepropertyagents.com.au';
      var href = 'mailto:' + to +
        '?subject=' + encodeURIComponent('Website enquiry from ' + get('name')) +
        '&body=' + encodeURIComponent(lines);

      window.location.href = href;

      if (status) {
        status.textContent = 'Opening your email app with the message ready to send. ' +
          'If nothing happens, email us directly at ' + to + '.';
        status.classList.add('is-visible');
      }
    });
  }

  /* ---- Footer year ----------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
