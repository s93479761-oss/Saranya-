// Toggle navigation for mobile

const toggleBtn = document.querySelector(".toggle-btn");

const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {

  navLinks.classList.toggle("show");

});

// Contact form validation

const form = document.getElementById("contactForm");

const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = form.name.value.trim();

  const email = form.email.value.trim();

  const message = form.message.value.trim();

  if (name.length < 2) {

    formMsg.textContent = "Please enter a valid name.";

    formMsg.style.color = "red";

    return;

  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {

    formMsg.textContent = "Please enter a valid email address.";

    formMsg.style.color = "red";

    return;

  }

  if (message.length < 10) {

    formMsg.textContent = "Message should be at least 10 characters.";

    formMsg.style.color = "red";

    return;

  }

  formMsg.textContent = "Thank you! Your message has been sent.";

  formMsg.style.color = "green";

  form.reset();

});