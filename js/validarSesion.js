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
  userIcon.classList.add("d-none") ;
  btnRegistro.style.display = "block";
  btnIniciarSesion.style.display = "block";

  return userIcon

}

export function mostrarProgreso() {
  const progreso = document.querySelector("#progreso");

  for (let i = 0; i < usuarios.length; i++) {
    progreso.textContent = `${usuarios[i].progress}%`
    progreso.style.width = `${usuarios[i].progress}%`
    
  }

}

export function estadoFormularios() {

  
  
  console.log("ejecutando..")
  const usuarioActual = usuarios.find(u => u.logged);
  if (!usuarioActual) return;

  const formulariosAprobados = usuarioActual.formulariosAprobados || [];

  console.log(formulariosAprobados)

  formulariosAprobados.forEach(formId => {
    
    const contenedor = document.getElementById(formId);
    if (contenedor) {
      const icono = contenedor.querySelector(".estado-formulario");
      
      if (icono) {
        icono.classList.add("bi", "bi-check-circle-fill", "text-success");
      }
    }
  });

  // Para los que NO están aprobados
  document.querySelectorAll(".estado-formulario").forEach(icono => {
    const contenedor = icono.closest("div");
    console.log(contenedor)
    if (contenedor && !formulariosAprobados.includes(contenedor.id)) {
      icono.classList.add("bi", "bi-lock-fill", "text-secondary");
    }
  });
}

