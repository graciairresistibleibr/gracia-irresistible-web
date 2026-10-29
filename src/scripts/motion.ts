/**
 * Movimiento sobrio del sitio (ver src/styles/motion.css):
 *  - apariciones al hacer scroll, escalonadas dentro de las grillas;
 *  - sombra en la cabecera al bajar;
 *  - leve parallax en las fotos de fondo difuminadas;
 *  - botón «Volver arriba».
 * Sólo se marca para aparecer lo que está fuera de pantalla al cargar, así
 * nada parpadea ni queda oculto si este script no llega a correr.
 */

const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Bloques que aparecen solos y fotos que «se asientan».
const BLOQUES = [
  'main > section > .container > *',
  'main > .section > .container > *',
  'main > article > .container > *',
  '.band__inner',
  '.proximo__inner',
  '[data-reveal]',
].join(',');
const FOTOS = '.foto, .leader__frame, .reveal-img';

function esGrilla(el: Element) {
  const d = getComputedStyle(el).display;
  return (d === 'grid' || d === 'flex') && el.children.length > 1 && !el.matches('.block-head, .reunion__head');
}

function marcar(el: Element, delay = 0) {
  if (el.closest('.hero, .pagehero') || el.classList.contains('reveal')) return;
  const r = el.getBoundingClientRect();
  // Ya visible al cargar: se deja tal cual.
  if (r.top < innerHeight * 0.92 && r.bottom > 0) return;
  el.classList.add('reveal');
  if (delay) (el as HTMLElement).style.setProperty('--reveal-delay', `${delay}s`);
  observer.observe(el);
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
);

function iniciarApariciones() {
  for (const el of document.querySelectorAll(BLOQUES)) {
    // En grillas (tarjetas, columnas) cada elemento aparece con un pequeño desfase.
    const grilla = esGrilla(el) ? el : el.querySelector(':scope > .twocol, :scope > [class*="grid"]');
    if (grilla && esGrilla(grilla)) {
      if (grilla !== el) for (const c of el.children) if (c !== grilla) marcar(c);
      [...grilla.children].forEach((c, i) => marcar(c, Math.min(i, 4) * 0.09));
    } else {
      marcar(el);
    }
  }
  for (const el of document.querySelectorAll(FOTOS)) {
    const r = el.getBoundingClientRect();
    // Ya visible, o fuera de pantalla de costado (galería deslizable en celulares).
    if ((r.top < innerHeight * 0.92 && r.bottom > 0) || r.left >= innerWidth) continue;
    const hermanos = el.parentElement ? [...el.parentElement.children] : [];
    const i = Math.min(hermanos.indexOf(el), 4);
    el.classList.add('reveal', 'reveal--img');
    (el as HTMLElement).style.setProperty('--reveal-delay', `${Math.max(i, 0) * 0.08}s`);
    observer.observe(el);
  }
}

// Cabecera con sombra, parallax y «Volver arriba», en un solo manejador de scroll.
const header = document.querySelector('.site-header');
const fondos = reducido ? [] : [...document.querySelectorAll<HTMLElement>('.band:not(.band--sharp) .band__bg, .pagehero__bg')];
const parallax = matchMedia('(min-width: 768px)').matches;

const toTop = document.createElement('button');
toTop.type = 'button';
toTop.className = 'to-top';
toTop.setAttribute('aria-label', 'Volver arriba');
toTop.innerHTML =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reducido ? 'auto' : 'smooth' }));
document.body.append(toTop);

let pendiente = false;
function alHacerScroll() {
  pendiente = false;
  const y = scrollY;
  header?.classList.toggle('is-scrolled', y > 8);
  toTop.classList.toggle('is-shown', y > innerHeight * 1.2);
  if (!parallax) return;
  for (const bg of fondos) {
    const r = bg.parentElement!.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) continue;
    // La foto se mueve un poco más lento que la página.
    const centro = r.top + r.height / 2 - innerHeight / 2;
    bg.style.transform = `translate3d(0, ${(centro * -0.08).toFixed(1)}px, 0)`;
  }
}
addEventListener(
  'scroll',
  () => {
    if (!pendiente) {
      pendiente = true;
      requestAnimationFrame(alHacerScroll);
    }
  },
  { passive: true },
);
alHacerScroll();

if (!reducido && 'IntersectionObserver' in window) iniciarApariciones();
