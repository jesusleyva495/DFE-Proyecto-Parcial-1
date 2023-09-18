$(document).ready(function () {
  $(".progress-bar").each(function () {
    var progress = $(this).attr("data-progress");
    $(this).animate({ width: progress + "%" }, 1000); // 1000ms (1 segundo) de animación
  });
});

// Configuracion para que el boton funcione
const scrollToBottom = document.getElementById("btn-ir-arriba");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottom.style.display = "block";
    } else {
      scrollToBottom.style.display = "none";
    }
  });
  scrollToBottom.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

// Variables y configuraciones del modal en alcance global
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const navModal = document.getElementById("navModal");
const navLinks = document.querySelector(".nav-links");
let shouldCloseModal = true;

// Define funciones de apertura y cierre del modal
function openModal() {
  navModal.style.display = "block";
}

function closeModal() {
  navModal.style.display = "none";
}

// Evento de clic para los enlaces del menú
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if(shouldCloseModal){
        closeModal();
      }
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});

// Función para ejecutar código en función de la resolución de pantalla
function ejecutarCodigoEnBaseResolucion() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 784) {
    // Agrega eventos para resoluciones menores o iguales a 784px
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);

    closeModal();

    shouldCloseModal = true;

  } else {
    // Elimina eventos para resoluciones mayores a 784px
    openModalBtn.removeEventListener("click", openModal);
    closeModalBtn.removeEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
      if (event.target === navModal) {
        closeModal();
      }
    });

    openModal();

    shouldCloseModal = false;
  }
}

// Ejecutar la función cuando se carga la página
window.addEventListener("load", ejecutarCodigoEnBaseResolucion);

// Ejecutar la función cuando cambia el tamaño de la ventana
window.addEventListener("resize", ejecutarCodigoEnBaseResolucion);
