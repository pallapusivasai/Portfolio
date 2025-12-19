let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
};

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });

new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Full Stack Developer', 'Java Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});
