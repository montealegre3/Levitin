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
 
  
// Validar formulario

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const form = document.querySelector("#form");
const progreso = document.querySelector("#progreso");
const resultadoMensaje = document.querySelector("#resultado"); 


function capturarRespuestas() {
  const pregunta1 = document.querySelector('input[name="pregunta1"]:checked')?.value;
  const pregunta2 = document.querySelector('input[name="pregunta2"]:checked')?.value;
  const pregunta3 = document.querySelector('input[name="pregunta3"]:checked')?.value;
  const pregunta4 = document.querySelector('input[name="pregunta4"]:checked')?.value;
  const pregunta5 = document.querySelector('input[name="pregunta5"]:checked')?.value;

  return {
    p1: pregunta1,
    p2: pregunta2,
    p3: pregunta3,
    p4: pregunta4,
    p5: pregunta5,
  };

}

// Función para validar respuestas

function validarRespuestas(e) {
  e.preventDefault();

  const idFormularioActual = "formulario1";
  let usuarioActual = usuarios.find(user => user.logged);

  // Si ya aprobó el formulario, evitar que lo responda de nuevo
  if (usuarioActual && usuarioActual.formulariosAprobados.includes(idFormularioActual)) {
    resultadoMensaje.textContent = "Ya has aprobado este formulario. No puedes volver a responderlo. ✅";
    form.querySelector("button[type='submit']").disabled = true; // Desactiva el botón
    return;
  }

  const respuestasCorrectas = {
    p1: "sandia",
    p2: "fresa",
    p3: "pera",
    p4: "mango",
    p5: "naranja",
  };

  const respuestasUser = capturarRespuestas();
  let acumulado = Object.keys(respuestasCorrectas).reduce((count, key) => {
    return count + (respuestasUser[key] === respuestasCorrectas[key] ? 1 : 0);
  }, 0);

  resultadoMensaje.textContent = `Tuviste ${acumulado} respuestas correctas de 5.`;

  if (usuarioActual) {
    if (acumulado >= 3) {
      resultadoMensaje.textContent += " ¡Ganaste el examen! 😊";

      if (!usuarioActual.avance) {
        usuarioActual.progress += 25;
        usuarioActual.avance = true;
      } else {
        resultadoMensaje.textContent += " (Ya habías sumado el 25% anteriormente)";
      }

      // Guardar aprobación del formulario
      if (!usuarioActual.formulariosAprobados.includes(idFormularioActual)) {
        usuarioActual.formulariosAprobados.push(idFormularioActual);
      }

      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      progreso.textContent = `${usuarioActual.progress}%`;
      progreso.style.width = `${usuarioActual.progress}%`;

      // Desactivar formulario tras aprobación
      form.querySelector("button[type='submit']").disabled = true;
    } else {
      resultadoMensaje.textContent += " Debes repetir el examen 😶";
    }
  }

  console.log("Tu acumulado es:", acumulado);
}

form.addEventListener("submit", validarRespuestas);
