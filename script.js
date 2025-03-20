function toggleMenu() {
    const nav = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".menu-overlay");
    const hamburger = document.querySelector(".hamburger-menu");

    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    hamburger.classList.toggle("active");
}
