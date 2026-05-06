const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));

const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const initial = button.textContent;
    button.textContent = 'Message envoye';
    button.disabled = true;

    setTimeout(() => {
      form.reset();
      button.textContent = initial;
      button.disabled = false;
    }, 1500);
  });
}
