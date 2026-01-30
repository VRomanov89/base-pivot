/**
 * Navbar Component JavaScript
 * Handles sticky scroll state, active link highlighting, and mobile menu toggle
 */

(function() {
  'use strict';

  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.querySelector('.icon-btn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Sticky scroll state
  const onScroll = () => {
    const scrolled = window.scrollY > 8;
    if (navbar) {
      navbar.classList.toggle('is-scrolled', scrolled);
    }
  };

  // Initialize scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Set initial state

  // Active link highlighting based on current path
  const setActiveLink = () => {
    const path = window.location.pathname.replace(/\/$/, '');
    const links = document.querySelectorAll('.nav__link, .mobile-menu__link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;

      const normalizedHref = href.replace(/\/$/, '');

      // Check if this link matches the current page
      const isActive =
        normalizedHref === path ||
        (normalizedHref !== '' && path.startsWith(normalizedHref) && normalizedHref.length > 1);

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  setActiveLink();

  // Mobile menu toggle
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.hidden = isOpen;

      // Update aria-label
      mobileBtn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    });

    // Close mobile menu when clicking a link
    mobileMenu.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.matches('a')) {
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.setAttribute('aria-label', 'Open menu');
        mobileMenu.hidden = true;
      }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden) {
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.setAttribute('aria-label', 'Open menu');
        mobileMenu.hidden = true;
        mobileBtn.focus();
      }
    });
  }
})();
