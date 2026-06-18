const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.05,
    rootMargin: '0px 0px -60px 0px',
  }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 60, 300)}ms`;
  revealOnScroll.observe(element);
});
