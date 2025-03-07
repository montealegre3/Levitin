document.addEventListener("DOMContentLoaded", () => {
    const sorprendido = document.querySelector(".beethoven.sorprendido");
    const feliz = document.querySelector(".beethoven.feliz");
  
    // Muestra la imagen inicial
    sorprendido.style.opacity = 1;
  
    // Alterna entre las imágenes
    setInterval(() => {
      if (sorprendido.style.opacity == 1) {
        sorprendido.style.opacity = 0;
        feliz.style.opacity = 1;
      } else {
        sorprendido.style.opacity = 1;
        feliz.style.opacity = 0;
      }
    }, 1000); //Tiempo de duración 
  });

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
  const userIcon = document.getElementById("user-icon");
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


  
  