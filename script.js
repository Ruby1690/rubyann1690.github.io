// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const subject =
        "Bookkeeping Project Inquiry from " + name;

    const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service Needed: " + service + "\n\n" +
        "Project Details:\n" +
        message;

    const mailto =
        "mailto:rubyann1690@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
});


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();