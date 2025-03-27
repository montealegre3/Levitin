let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


// Mostrar u ocultar botones cuando el usuario inicie sesión 
export function validarSesion() {
  const btnRegistro = document.querySelector('#btnRegistro');
  const btnIniciarSesion = document.querySelector('#btnIniciar');
  const btnModulos = document.querySelector('#btnModulos');
  const userIcon = document.querySelector("#icon");


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

export function mostrarProgreso() {
  const progreso = document.querySelector("#progreso");

  for (let i = 0; i < usuarios.length; i++) {
    progreso.textContent = `${usuarios[i].progress}%`
    progreso.style.width = `${usuarios[i].progress}%`
    
  }

}
