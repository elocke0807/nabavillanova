document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.cards-section, .team-section, .stats-section, .events-section, .text-section, .cta-section, .carousel-section').forEach(function (el) {
    el.classList.add('reveal');
  });
  document.querySelectorAll('.cards-grid, .team-grid, .placement-grid, .stats-grid, .events-list').forEach(function (grid) {
    Array.from(grid.children).forEach(function (child, i) {
      child.classList.add('reveal');
      child.style.transitionDelay = Math.min(i * 0.08, 0.4) + 's';
    });
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
});
