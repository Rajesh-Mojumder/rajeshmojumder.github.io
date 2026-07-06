// Reveal sections on scroll
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Mobile table-of-contents toggle
const tocToggle = document.getElementById('tocToggle');
const tocMobile = document.getElementById('tocMobile');

if (tocToggle && tocMobile) {
  tocToggle.addEventListener('click', () => {
    const isOpen = tocMobile.classList.toggle('open');
    tocToggle.setAttribute('aria-expanded', String(isOpen));
    tocToggle.textContent = isOpen ? 'Contents ▴' : 'Contents ▾';
  });

  tocMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      tocMobile.classList.remove('open');
      tocToggle.setAttribute('aria-expanded', 'false');
      tocToggle.textContent = 'Contents ▾';
    });
  });
}
