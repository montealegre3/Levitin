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

  const form = document.querySelector("#form");

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
    p1: "Sandía",
    p2: "Fresa",
    p3: "Pera",
    p4: "Mango",
    p5: "Naranja",
  }
  let acumulado = 0

  const arrayRespuestasUser = Object.values(respuestasUser)
  const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

  for (let i = 0; i < arrayRespuestasUser.length; i++) {
    if(arrayRespuestasUser[i]  == arrayRespuestasCorrectas[i]){
        acumulado++
    }
    
  }


  if(acumulado >= 3){
    console.log("ganaste el examen 😊")
    usuario.progress += 25
    console.log(usuario.progreso)
    localStorage.setItem("usuario",JSON.stringify(usuarios))
  }else{
      console.log("Debes repetir el examen 😶")
  }

  console.log("Tu acumulado es: ", acumulado)

}
 
form.addEventListener("submit", validarRespuestas)