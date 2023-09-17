$(document).ready(function () {
  $(".progress-bar").each(function () {
    var progress = $(this).attr("data-progress");
    $(this).animate({ width: progress + "%" }, 1000); // 1000ms (1 segundo) de animación
  });
});

const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("show");
});
