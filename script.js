const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

/* Toggle menu */
menuIcon?.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

/* Close menu on scroll */
window.addEventListener('scroll', () => {
  menuIcon?.classList.remove('bx-x');
  navbar?.classList.remove('active');
});

/* ScrollReveal */
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal(
    '.services-container, .portfolio-box, .contact form',
    { origin: 'bottom' }
  );
}

/* Typed.js */
if (typeof Typed !== 'undefined') {
  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Full Stack Developer', 'Java Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
}
