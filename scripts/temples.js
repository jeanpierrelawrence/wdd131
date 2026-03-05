const year = document.getElementById("currentyear");

const today = new Date();
year.textContent = today.getFullYear()

document.getElementById("lastModified").textContent = document.lastModified;

// NAV LOGIC

const navButton = document.getElementById("nav-toggle");
const nav = document.querySelector("nav");

navButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    nav.classList.toggle("active");
    navButton.classList.toggle("open")
}