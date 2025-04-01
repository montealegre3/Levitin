import { validarSesion , mostrarProgreso } from "../validarSesion.js";

validarSesion()
mostrarProgreso()


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

let usuarios = JSON.parse( localStorage.getItem("usuarios") );

console.log(usuarios)

const form = document.querySelector("#form");
let progreso = document.querySelector("#progreso");

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
}

}

function validarRespuestas(e){
e.preventDefault()


const respuestasUser = capturarRespuestas()
const respuestasCorrectas = {
  p1: "sandia",
  p2: "fresa",
  p3: "pera",
  p4: "mango",
  p5: "naranja",
}
let acumulado = 0

console.log(acumulado)

const arrayRespuestasUser = Object.values(respuestasUser)
const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

for (let i = 0; i < arrayRespuestasUser.length; i++) {
  if(arrayRespuestasUser[i]  == arrayRespuestasCorrectas[i]){
      acumulado++
  }
  
}

for (let i = 0; i < usuarios.length; i++) {
  if( usuarios[i].logged && acumulado >= 3){
    console.log("ganaste el examen 😊");

    if(!usuarios[i].avance){
      usuarios[i].progress += 25;
      usuarios[i].avance2 = true;
      console.log("progreso de local",usuarios[i].progress);
      localStorage.setItem("usuarios",JSON.stringify(usuarios));
      progreso.textContent = `${usuarios[i].progress}%`;
      progreso.style.width = `${usuarios[i].progress}%`;
    } else {
      console.log("Ya has sumado el 25% anteriormente.");
    }
  }else{
      console.log("Debes repetir el examen 😶")
  }
}
console.log("Tu acumulado es: ", acumulado)

}

form.addEventListener("submit", validarRespuestas)