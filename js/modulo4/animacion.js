import { validarSesion , mostrarProgreso , estadoFormularios , condicionarBotonSiguiente } from "../validarSesion.js";

validarSesion()
mostrarProgreso()
estadoFormularios()
condicionarBotonSiguiente("../../vistas/modulo4/tema1.html");

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