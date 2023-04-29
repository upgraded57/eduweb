$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: true,
  items: 1,
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.onclick = () => {
  nav.classList.toggle("active");
};
