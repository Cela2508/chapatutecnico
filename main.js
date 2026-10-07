// Menú móvil
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  navbar.addEventListener('click', e => {
    if (e.target.tagName === 'A') { navbar.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
  });
}

// Carrusel del hero: arrastrar con mouse (en táctil se usa el scroll nativo)
const carousel = document.getElementById('hero-carousel');
if (carousel) {
  let down = false, moved = false, startX = 0, startLeft = 0;
  carousel.scrollLeft = carousel.firstElementChild.offsetWidth * 0.55; // 1.ª tarjeta cortada
  carousel.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch') return;
    down = true; moved = false; startX = e.clientX; startLeft = carousel.scrollLeft;
  });
  window.addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) { moved = true; carousel.classList.add('dragging'); carousel.scrollLeft = startLeft - dx; }
  });
  window.addEventListener('pointerup', () => { down = false; carousel.classList.remove('dragging'); });
  carousel.addEventListener('click', e => { if (moved) e.preventDefault(); }, true);
}
