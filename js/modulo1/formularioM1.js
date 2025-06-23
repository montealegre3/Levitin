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

  // Validar que todas las preguntas estén respondidas
  if (Object.values(respuestasUser).some(val => !val)) {
    alert("Por favor responde todas las preguntas antes de enviar.");
    return;
  }

  // Calcular acumulado de respuestas correctas
  let acumulado = Object.keys(respuestasCorrectas).reduce((count, key) => {
    return count + (respuestasUser[key] === respuestasCorrectas[key] ? 1 : 0);
  }, 0);

  const modalResultado = new bootstrap.Modal(document.getElementById('modalResultado'));
  const modalContenido = document.getElementById('modalContenido');
  const expresionesContainer = document.getElementById('expresionesContainer');

  // Limpiar expresiones anteriores
  expresionesContainer.innerHTML = "";

  // Imágenes para cada estado
  const imagenesFelices = [
    "../../assets/bethoveen-feliz.webp",
    "../../assets/madonna-feliz.webp",
    "../../assets/michael-feliz.webp",
    "../../assets/selena-feliz.webp"
  ];

  const imagenesTristes = [
    "../../assets/bethoveen-aburrido.webp",
    "../../assets/madonna-aburrida.webp",
    "../../assets/michael-aburrido.webp",
    "../../assets/selena-aburrida.webp"
  ];

  let mensaje = `Tuviste ${acumulado} respuestas correctas de 5. `;

  if (usuarioActual) {
    if (acumulado >= 3) {
      mensaje += "¡Ganaste el examen!";

      if (!usuarioActual.avance) {
        usuarioActual.progress += 25;
        usuarioActual.avance = true;
      } else {
        mensaje += " (Ya habías sumado el 25% anteriormente)";
      }

      if (!usuarioActual.formulariosAprobados.includes(idFormularioActual)) {
        usuarioActual.formulariosAprobados.push(idFormularioActual);
      }

      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      progreso.textContent = `${usuarioActual.progress}%`;
      progreso.style.width = `${usuarioActual.progress}%`;

      form.querySelector("button[type='submit']").disabled = true;

      // Mostrar imágenes felices
      imagenesFelices.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Expresión feliz";
        expresionesContainer.appendChild(img);
      });

    } else {
      mensaje += "Debes repetir el examen";

      // Mostrar imágenes tristes
      imagenesTristes.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Expresión triste";
        expresionesContainer.appendChild(img);
      });
    }
  }

  modalContenido.textContent = mensaje;
  modalResultado.show();

  console.log("Tu acumulado es:", acumulado);
  estadoFormularios(); 
}

form.addEventListener("submit", validarRespuestas);

document.getElementById("cerrarModal").addEventListener("click", () => {
  const modal = bootstrap.Modal.getInstance(document.getElementById('modalResultado'));
  modal.hide();
  window.location.href = "../modulo1/tema3.html";
});



/* Animación para el formulario */ 

  document.addEventListener("DOMContentLoaded", () => {
    let currentTab = 0;
    const tabs = document.querySelectorAll(".tab");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const submitBtn = document.getElementById("submitBtn");

    function showTab(index) {
      tabs.forEach((tab, i) => {
        tab.classList.remove("active");
        if (i === index) tab.classList.add("active");
      });

      prevBtn.style.display = index === 0 ? "none" : "inline-block";
      nextBtn.style.display = index === tabs.length - 1 ? "none" : "inline-block";
      submitBtn.classList.toggle("d-none", index !== tabs.length - 1);
    }

    nextBtn.addEventListener("click", () => {
      if (currentTab < tabs.length - 1) {
        currentTab++;
        showTab(currentTab);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentTab > 0) {
        currentTab--;
        showTab(currentTab);
      }
    });

    // Mostrar la primera tab
    showTab(currentTab);
  });


