document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const form = document.getElementById('quote-form');
  const statusMessage = document.getElementById('form-status');

  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !phone || !message) {
      statusMessage.textContent = 'Please complete all fields before sending your request.';
      return;
    }

    statusMessage.textContent = 'Thanks! Your quote request has been submitted. We will respond shortly.';
    form.reset();
  });
});
