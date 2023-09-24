const nav = document.querySelector(".nav");
const mobileMenu = document.querySelector(".nav__mobile-menu");
const pricingToggle = document.querySelector(".toggle");
const titleToggle = document.querySelectorAll(".pricing__heading p");
const price = document.querySelectorAll(".pricing__offer h2");
const perTime = document.querySelectorAll(".pricing__offer p");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("animation");
  nav.classList.toggle("appear");
});

pricingToggle.addEventListener("click", () => {
  pricingToggle.classList.toggle("open");
  titleToggle.forEach((p) => {
    p.classList.toggle("active");
  });

  price.forEach((ele) => {
    ele.classList.toggle("hidden");
  });

  perTime.forEach((ele) => {
    ele.classList.toggle("hidden");
  });
});
