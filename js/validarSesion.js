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
  console.log("ejecutando...");
  const usuarioActual = usuarios.find(u => u.logged);
  if (!usuarioActual) return;

  const formulariosAprobados = usuarioActual.formulariosAprobados || [];

  // Íconos de formularios aprobados
  formulariosAprobados.forEach(formId => {
    const contenedor = document.getElementById(formId);
    if (contenedor) {
      const icono = contenedor.querySelector(".estado-formulario");
      const enlace = contenedor.querySelector("a");

      if (icono) {
        icono.classList.add("bi", "bi-check-circle-fill", "text-success");
      }

      // Desactivar link del formulario aprobado
      if (enlace) {
        enlace.removeAttribute("href");
        enlace.classList.add("text-muted", "disabled");
        enlace.style.pointerEvents = "none";
        enlace.style.textDecoration = "none";
      }
    }
  });

  // Formularios NO aprobados: poner ícono de candado
  document.querySelectorAll(".estado-formulario").forEach(icono => {
    const contenedor = icono.closest("div");
    if (contenedor && !formulariosAprobados.includes(contenedor.id)) {
      icono.classList.add("bi", "bi-lock-fill", "text-secondary");
    }
  });

  // Módulos
  const modulos = [
    { id: "modulo1", dependeDe: "formulario1" },
    { id: "modulo2", dependeDe: "formulario2" },
    { id: "modulo3", dependeDe: "formulario3" },
    { id: "modulo4", dependeDe: "formulario4" },
  ];

  modulos.forEach(mod => {
    const moduloDiv = document.getElementById(mod.id);
    if (!moduloDiv) return;

    const iconoModulo = moduloDiv.querySelector(".estado-modulo");
    if (!iconoModulo) return;

    if (formulariosAprobados.includes(mod.dependeDe)) {
      iconoModulo.classList.add("bi", "bi-check-circle-fill", "text-success");
    } else {
      iconoModulo.classList.add("bi", "bi-lock-fill", "text-secondary");
    }
  });
}

// Deja ver el contenido del módulo si el usuario está registrado 

export function condicionarBotonSiguiente(rutaDestino) {
  document.addEventListener("DOMContentLoaded", () => {
    const btnSiguiente = document.getElementById("btnSiguiente");
    if (!btnSiguiente) return;

    btnSiguiente.addEventListener("click", () => {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioLogueado = usuarios.find(u => u.logged);

      if (usuarioLogueado) {
        window.location.href = "../../vistas/modulo1/tema1.html";
      } else {
        alert("Debes iniciar sesión para continuar.");
        window.location.href = "../../vistas/registro.html";
      }
    });
  });
}


