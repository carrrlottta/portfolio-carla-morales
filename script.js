
document.getElementById('year').textContent = new Date().getFullYear();

const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
