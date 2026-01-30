/**
 * Footer Component JavaScript
 * Updates copyright year dynamically
 */

(function() {
  'use strict';

  // Update copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
