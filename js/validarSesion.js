// Mostrar u ocultar botones cuando el usuario inicie sesión 
export function validarSesion() {
  const btnRegistro = document.querySelector('#btnRegistro');
  const btnIniciarSesion = document.querySelector('#btnIniciar');
  const btnModulos = document.querySelector('#btnModulos');
  const userIcon = document.querySelector("#icon");

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].logged) {
          btnModulos.style.display = "block";
          userIcon.style.display = "block";
          btnRegistro.style.display = "none";
          btnIniciarSesion.style.display = "none";

          // Saludo
          const titulo = document.querySelector("#titulo");
          const correoTitulo = document.querySelector("#correoTitulo");

          titulo.textContent = `Nombre: ${usuarios[i].userN}`;
          correoTitulo.textContent = `Correo: ${usuarios[i].userE}`;

          return;
      }
  }

  // Si no hay sesión iniciada
  btnModulos.style.display = "none";
  userIcon.style.display = "none";
  btnRegistro.style.display = "block";
  btnIniciarSesion.style.display = "block";
}

// Cerrar sesión 
function cerrarSesion() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].logged) {
          usuarios[i].logged = false;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          break; // Terminamos el bucle una vez encontrada la sesión activa
      }
  }

  // Redirigir a la página de inicio
  window.location = "../index.html";
}

// Agregar evento al botón de cerrar sesión si existe en la página
const btnCerrar = document.querySelector('.btnCerrar');
if (btnCerrar) {
  btnCerrar.addEventListener("click", cerrarSesion);
}
