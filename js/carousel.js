function carouselMove(btn, dir) {
  const wrap = btn.closest('.carousel-section');
  const slides = wrap.querySelectorAll('.carousel-slide');
  const dots = wrap.querySelectorAll('.carousel-dot');
  let cur = [...slides].findIndex(s => s.classList.contains('active'));
  slides[cur].classList.remove('active');
  dots[cur] && dots[cur].classList.remove('active');
  cur = (cur + dir + slides.length) % slides.length;
  slides[cur].classList.add('active');
  dots[cur] && dots[cur].classList.add('active');
}

function carouselGo(dot, idx) {
  const wrap = dot.closest('.carousel-section');
  const slides = wrap.querySelectorAll('.carousel-slide');
  const dots = wrap.querySelectorAll('.carousel-dot');
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}
