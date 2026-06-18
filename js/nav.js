document.addEventListener('DOMContentLoaded', function () {
  var page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.dataset.page === page) a.classList.add('active');
  });
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
});