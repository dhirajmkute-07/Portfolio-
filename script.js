// ==============================
// PORTFOLIO SCRIPT - PART 3A
// ==============================

// Active Navbar While Scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// Smooth Button Animation
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


// ==============================
// Fade In Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("hidden");

    observer.observe(sec);

});
// ==============================
// PORTFOLIO SCRIPT - PART 3B
// ==============================


// Navbar Shadow on Scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// Simple Typing Effect
// ==============================

const typingText = document.querySelector(".home-content h2");

const roles = [

    "Full Stack Developer",

    "Python Developer",

    "Web Designer",

    "CSE Student"

];

let roleIndex = 0;

setInterval(() => {

    roleIndex++;

    if (roleIndex >= roles.length) {

        roleIndex = 0;

    }

    typingText.textContent = roles[roleIndex];

}, 2500);
// ==============================
// PORTFOLIO SCRIPT - PART 3C
// ==============================

// Loading Animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Contact Form Validation
const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        // e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("✅ Thank you! Your message has been submitted.");

        this.reset();

    });

}


// Project Card Hover Animation
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});


// Smooth Image Hover
const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {
        image.style.transition = "0.4s";
        image.style.transform = "scale(1.03)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });

});


// Footer Year Auto Update
const footerText = document.querySelector("footer p");

if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = `© ${year} Dhiraj Kute | All Rights Reserved.`;
}

console.log("🚀 Portfolio Loaded Successfully!");