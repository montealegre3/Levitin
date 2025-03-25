/* 
1. Al momento de visualizar la página, si el usuario no está registrado podrá observar el contenido del index y tendrá reflejado los botones de 
inicia sesión y registro, pero no podrá ver los botones de dashborad y módulos, en cambio si el usuario está registrado ya no verá los 
botones de registrarse e iniciar sesión, sino que verá los botones de dashboard y módulos

2. En la sección de "lo que aprenderás" hay unos botones que dicen "ver más", si el usuario no está registrado y da click en cualquiera de esos botones, solo 
podrá visualizar el contenido que será visible en esa página, visualizando los botones de registrar e iniciar sesión y no verá los botones de dashboard y módulos,
además, si estando en esa página da click en el boton "comienza" no podrá visualizar el contenido del módulo hasta que se registre

3. Si el usuario está registrado podrá estudiar todo el contenido de los módulos en el orden que desee, pero, si no está registrado, no podrá estudiar 
el contenido de los módulos hasta que se registre. Cada módulo es aprobado una vez que el usuario haya completado el formulario que se presenta al 
finalizar cada módulo. Si el usuario estudia todos los módulos sin realizar los formularios, en la sección del dashboard "módulos aprobados" y "formularios aprobados"
se verá reflejado un icono de candado, dando a entender que no han sido completados en su totalidad, en cambio, si el usuario estudia los módulos y realiza los formularios, 
en la sección del dashboard "módulos aprobados" y "formularios aprobados" se activará un icono de check, dando a entender que ha completado en su totalildad cada módulo 

4. Durante todo el desarrollo del curso hay unas cajitas de comentario, el usuario es libre de decidir si quiere o no quiere responder las preguntas o comentar lo que desee,
es opcional 

*/





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


