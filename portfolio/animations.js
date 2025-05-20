// Reveal sections on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('section').forEach((section, index) => {
  section.style.animationPlayState = 'paused';
  section.style.setProperty('--delay', `${index * 0.2}s`);
  observer.observe(section);
});
