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

// Google Maps Consent
const loadMapButton = document.getElementById('loadMapButton');
const mapWrapper = document.getElementById('mapWrapper');
const mapConsent = document.getElementById('mapConsent');

if (loadMapButton && mapWrapper && mapConsent) {
  loadMapButton.addEventListener('click', () => {
    mapWrapper.innerHTML = `
      <iframe
        title="Google Maps Standort Alltagshelden Nord"
        src="https://www.google.com/maps?q=Wendemuthstra%C3%9Fe%2017%2C%2022041%20Hamburg&output=embed"
        width="100%"
        height="360"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `;

    mapConsent.style.display = 'none';
  });
}
