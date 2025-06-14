// navbar.js

const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbarLinks");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});
