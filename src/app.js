// find that hamburger menu button

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners to hamburger menu button

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
