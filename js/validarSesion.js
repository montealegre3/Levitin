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
  console.log("ejecutando estado formularios");
  usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
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
        console.log("entra a condicional ícono")
        icono.classList.add("bi", "bi-check-circle-fill", "text-success");
        icono.classList.remove("bi", "bi-lock-fill", "text-secondary");
      }

      // Desactivar link del formulario aprobado
      if (enlace) {
        console.log("entra a condicional enlace y desactiva candado")
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
      iconoModulo.classList.remove("bi", "bi-lock-fill", "text-secondary");
    } else {
      iconoModulo.classList.add("bi", "bi-lock-fill", "text-secondary");
      iconoModulo.classList.remove("bi", "bi-check-circle-fill", "text-success");
    }
  });
}

// Deja ver el contenido del módulo si el usuario está registrado 

export function condicionarBotonesNavegacion(rutaSiguiente, rutaAnterior, rutaAtras) {
  document.addEventListener("DOMContentLoaded", () => {
    const btnSiguiente = document.getElementById("btnSiguiente");
    const btnAnterior = document.getElementById("btnAnterior");
    const btnAtras = document.getElementById("btnAtras");
    const popup = document.getElementById("miPopup");
    const btnIrRegistro = document.getElementById("btnIrRegistro");
    const btnCerrarPopup = document.getElementById("btnCerrarPopup");

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioLogueado = usuarios.find(u => u.logged);

    // Botón Siguiente
    if (btnSiguiente) {
      btnSiguiente.addEventListener("click", () => {
        if (usuarioLogueado) {
          window.location.href = rutaSiguiente;
        } else {
          // Mostrar popup
          popup.classList.remove("popup-oculto");
          popup.classList.add("popup-visible");
        }
      });
    }

    // Botón Anterior
    if (btnAnterior) {
      btnAnterior.addEventListener("click", () => {
        if (usuarioLogueado) {
          window.location.href = rutaAnterior;
        } else {
          window.location.href = "../../";
        }
      });
    }

    // Botón Atrás
    if (btnAtras) {
      btnAtras.addEventListener("click", () => {
        if (usuarioLogueado) {
          window.location.href = rutaAtras;
        } else {
          // Mostrar popup
          popup.classList.remove("popup-oculto");
          popup.classList.add("popup-visible");
        }
      });
    }

    // Botón "Ir a Registro"
    btnIrRegistro.addEventListener("click", () => {
      window.location.href = "../../vistas/registro.html";
    });

    // Botón "Cerrar"
    btnCerrarPopup.addEventListener("click", () => {
      popup.classList.remove("popup-visible");
      popup.classList.add("popup-oculto");
    });
  });
}

// Activar o desactivar el botón de Certificado //

document.addEventListener("DOMContentLoaded", () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.logged);
  const btnCertificado = document.getElementById("btnCertificado");

  if (usuario && btnCertificado) {
    const progreso = usuario.progress || 0;

    // Verifica si completó el 100%
    if (progreso >= 100) {
      // Activar botón
      btnCertificado.removeAttribute("disabled");
      btnCertificado.classList.add("btn-success");
      btnCertificado.textContent = "Descargar certificado";

      // Detectar la ruta según el contexto
      const currentPath = window.location.pathname;

      let rutaCertificado = "";
      if (currentPath.endsWith("index.html") || currentPath === "/") {
        rutaCertificado = "./vistas/certificado.html";
      } else if (currentPath.includes("../../vistas/modulo")) {
        rutaCertificado = "../../certificado.html";
      } else if (currentPath.includes("/vistas/")) {
        rutaCertificado = "../certificado.html";
      } else {
        rutaCertificado = "./vistas/certificado.html";
      }

      btnCertificado.addEventListener("click", () => {
        window.location.href = rutaCertificado;
      });

    } else {
      // Desactivado hasta completar el progreso
      btnCertificado.setAttribute("disabled", "true");
      btnCertificado.title = "Debes completar todos los formularios para reclamar tu certificado.";
      btnCertificado.textContent = "Reclamar certificado";
    }
  }
});



