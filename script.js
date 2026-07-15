/* ==========================================
   PORTFOLIO V3
   script.js
   Part 3A
========================================== */

// ===============================
// Mobile Menu
// ===============================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

};

// ===============================
// Close Menu on Click
// ===============================

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        menuIcon.classList.remove("bx-x");

        navbar.classList.remove("active");

    }

});

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 100);

});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            document
                .querySelector(".navbar a[href*=" + id + "]")
                .classList.add("active");

        }

    });

};

// ===============================
// Scroll Animation
// ===============================

const hiddenElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));
/* ==========================================
   PORTFOLIO V3
   script.js
   Part 3B
========================================== */

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

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

// ===============================
// Typing Effect
// ===============================

const typingElement = document.querySelector(".typing-text");

const words = [

    "Full Stack Developer",

    "Frontend Developer",

    "Python Developer",

    "Problem Solver"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }

});

// ===============================
// Image Hover Animation
// ===============================

const profileImage = document.querySelector(".home-image img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.transform = "scale(1.08)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform = "scale(1)";

    });

}
/* ==========================================
   PORTFOLIO V3
   script.js
   Part 3C (FINAL)
========================================== */

// ===============================
// Contact Form Success
// ===============================

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const submitBtn = contactForm.querySelector("button");

        if (submitBtn) {

            submitBtn.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            submitBtn.disabled = true;

        }

    });

}

// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// ===============================
// Console Message
// ===============================

console.log(
"%cPortfolio Developed by Dhiraj Kute 🚀",
"color:#00abf0;font-size:18px;font-weight:bold;"
);

// ===============================
// Current Year
// ===============================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ===============================
// Disable Right Click (Optional)
// ===============================

// document.addEventListener("contextmenu", e => e.preventDefault());

// ===============================
// Portfolio Ready
// ===============================

window.addEventListener("load", () => {

    console.log("Portfolio V3 Loaded Successfully ✅");

});
