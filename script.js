/* ==========================================
   PREMIUM NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navLinks = document.querySelectorAll(".menu a[href^='#']");
const sections = document.querySelectorAll("section[id]");

/* ==========================
   Sticky Navbar
========================== */

function updateNavbar() {
    if (window.scrollY > 60) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

/* ==========================
   Active Navigation
========================== */

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

/* ==========================
   Scroll Events
========================== */

window.addEventListener("scroll", () => {

    updateNavbar();
    updateActiveLink();

});

/* ==========================
   Mobile Menu
========================== */

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }

});

/* ==========================
   Smooth Scroll
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: "smooth"
        });

        menu.classList.remove("active");
        menuBtn.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});

/* ==========================
   Initialize
========================== */

updateNavbar();
updateActiveLink();