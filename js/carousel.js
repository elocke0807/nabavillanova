function carouselMove(e, dir) {
  var wrap = e.target.closest('.carousel-section');
  if (!wrap) return;
  var slides = wrap.querySelectorAll('.carousel-slide');
  var dots = wrap.querySelectorAll('.carousel-dot');
  var cur = Array.from(slides).findIndex(function(s){ return s.classList.contains('active'); });
  if (cur < 0) cur = 0;
  slides[cur].classList.remove('active');
  if (dots[cur]) dots[cur].classList.remove('active');
  cur = (cur + dir + slides.length) % slides.length;
  slides[cur].classList.add('active');
  if (dots[cur]) dots[cur].classList.add('active');
}
function carouselGo(e, idx) {
  var wrap = e.target.closest('.carousel-section');
  if (!wrap) return;
  var slides = wrap.querySelectorAll('.carousel-slide');
  var dots = wrap.querySelectorAll('.carousel-dot');
  slides.forEach(function(s,i){ s.classList.toggle('active', i===idx); });
  dots.forEach(function(d,i){ d.classList.toggle('active', i===idx); });
}
