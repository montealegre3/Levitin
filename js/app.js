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



//Cerrar sesión 

const btnCerrar = document.querySelector('.btnCerrar');

function cerrarSesion() {
  window.location = "../vistas/cerrar.html"
}

btnCerrar.addEventListener("click", cerrarSesion)



// Mostrar u ocultar botones cuando el usuario inicie sesión 

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos los elementos del DOM
  const btnRegistro = document.querySelector('#btnRegistro');
  const btnIniciarSesion = document.querySelector('#btnIniciar');
  const btnModulos = document.querySelector('#btnModulos');
  const userIcon = document.querySelector("#icon");


  // Verificamos si el usuario ha iniciado sesión
  // true o false
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  for (let i = 0; i < usuarios.length; i++) {

    let confirmarSesion = usuarios[i] ? usuarios[i].logged : false

    console.log(confirmarSesion)

    if (confirmarSesion) {
      // Usuario autenticado: Mostrar módulos e icono de usuario, ocultar registro e inicio de sesión
      btnModulos.style.display = "block";
      btnRegistro.style.display = "none";
      btnIniciarSesion.style.display = "none";

      // Saludo (nombre y correo de usuario) 
      const titulo = document.querySelector("#titulo");
      const correoTitulo = document.querySelector("#correoTitulo");

      titulo.textContent = `Nombre: ${usuarios[i].userN}`;
      correoTitulo.textContent = `Correo: ${usuarios[i].userE}`;


      return
    }

  }

  // Usuario NO autenticado: Mostrar registro e inicio de sesión, ocultar módulos e icono de usuario
  btnModulos.style.display = "none";
  userIcon.style.display = "none";
  btnRegistro.style.display = "block";
  btnIniciarSesion.style.display = "block";






});
