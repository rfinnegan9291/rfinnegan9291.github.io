// Toggle mobile navigation and handle simple form behavior

document.addEventListener('DOMContentLoaded', function () {
  // Fill footer year dynamically
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      // Update aria-expanded for accessibility
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu when a nav link is clicked (useful on mobile)
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Simple contact form handling (no server)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent real submission for this starter site

      // Gather simple form data
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Very basic validation
      if (!name || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'crimson';
        return;
      }

      // Show a friendly success message and clear the form
      status.textContent = 'Thanks! Your message has been received (demo).';
      status.style.color = 'green';
      form.reset();

      // For a real site, you would send the data to a server here (fetch / XHR)
      // Example placeholder:
      // fetch('/send', { method: 'POST', body: JSON.stringify({name,email,message}) })
    });
  }

  // Smooth-scroll for internal links (enhances UX)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});