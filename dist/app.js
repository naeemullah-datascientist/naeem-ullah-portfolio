const taglines = [
  "I build thoughtful digital experiences.",
  "Curious by nature. Creative by design.",
  "Turning ideas into things you can explore.",
  "Making room for ideas to become real."
];

const taglineElement = document.querySelector('#typed-tagline');
const shuffleButton = document.querySelector('#shuffle-tagline');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let taglineIndex = 0;
let typingTimer;

function typeTagline(value) {
  window.clearTimeout(typingTimer);
  if (reducedMotion.matches) {
    taglineElement.textContent = value;
    return;
  }
  taglineElement.textContent = '';
  let index = 0;
  const step = () => {
    taglineElement.textContent = value.slice(0, index + 1);
    index += 1;
    if (index < value.length) typingTimer = window.setTimeout(step, 31);
  };
  step();
}

shuffleButton.addEventListener('click', () => {
  taglineIndex = (taglineIndex + 1) % taglines.length;
  typeTagline(taglines[taglineIndex]);
});

if (!reducedMotion.matches) typeTagline(taglines[0]);

document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach((section) => section.classList.add('is-visible'));
}
