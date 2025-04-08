import { validarSesion , mostrarProgreso , estadoFormularios } from "../validarSesion.js";

validarSesion()
mostrarProgreso()
estadoFormularios()

//Código para la funcionalidad del menu dropwdom

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-submenu .dropdown-toggle").forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que la página recargue
        e.stopPropagation(); // Evita que el menú principal se cierre

        let submenu = this.nextElementSibling;
        if (submenu.classList.contains("show")) {
          submenu.classList.remove("show");
        } else {
          document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach(function (el) {
            el.classList.remove("show");
          });
          submenu.classList.add("show");
        }
      });
    });

    // Cierra el submenú si se hace clic fuera de él
    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach(function (el) {
        el.classList.remove("show");
      });
    });
});

// Menú lateral (resultado definitivo)

document.addEventListener("DOMContentLoaded", function () {
  const userIcon = document.getElementById("icon");
  const userMenu = document.getElementById("user-menu");
  const overlay = document.getElementById("overlay");

  userIcon.addEventListener("click", function (event) {
      event.preventDefault();
      userMenu.classList.toggle("show");
      overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", function () {
      userMenu.classList.remove("show");
      overlay.classList.remove("show");
  });
});

// Desactiva el botón de "Responder formulario" si pasa o no pasa el formulario

document.addEventListener("DOMContentLoaded", () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioActual = usuarios.find(u => u.logged);
  const formularioId = "formulario1";

  const enlaceFormulario = document.querySelector('#formulario a');
  const botonFormulario = enlaceFormulario?.querySelector("button");

  if (usuarioActual && usuarioActual.formulariosAprobados?.includes(formularioId)) {
    // Desactiva el botón
    botonFormulario.disabled = true;
    botonFormulario.textContent = "Formulario ya respondido ✅";
    botonFormulario.classList.add("btn-secondary");
    botonFormulario.classList.remove("btn2");

    // Desactiva el enlace
    enlaceFormulario.removeAttribute("href");
    enlaceFormulario.style.pointerEvents = "none";
    enlaceFormulario.style.textDecoration = "none";
    enlaceFormulario.style.cursor = "not-allowed";
  }
});

