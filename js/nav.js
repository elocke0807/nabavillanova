document.addEventListener('DOMContentLoaded', function () {
  var page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.dataset.page === page) a.classList.add('active');
  });
});