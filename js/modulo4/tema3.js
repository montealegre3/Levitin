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

//Animación expresiones madonna

const images = document.querySelectorAll('.img-hover');
const overlay = document.createElement('div');
overlay.id = 'image-overlay'; // Este contenedor cubrirá toda la pantalla
document.body.appendChild(overlay);

images.forEach(image => {
  image.addEventListener('click', () => {
    // Limpiar el overlay de imágenes anteriores
    overlay.innerHTML = '';

    const src = image.getAttribute('src');
    
    // Crear 30 copias de la imagen para llenar la pantalla
    for (let i = 0; i < 30; i++) {
      const imgClone = document.createElement('img');
      imgClone.src = src;
      imgClone.classList.add('replicated-image');
      
      // Establecer posiciones aleatorias para cada imagen replicada
      const xPos = Math.random() * 100 - 50; // Aleatorio entre -50vw y 50vw
      const yPos = Math.random() * 100 - 50; // Aleatorio entre -50vh y 50vh
      imgClone.style.setProperty('--x', `${xPos}vw`);
      imgClone.style.setProperty('--y', `${yPos}vh`);
      
      overlay.appendChild(imgClone);
    }

    // Mostrar el overlay
    overlay.style.display = 'flex';
    
    // Después de 6 segundos (duración de la animación), ocultar el overlay
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 6000); // Duración del movimiento
  });
});
