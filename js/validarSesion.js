// Mostrar u ocultar botones cuando el usuario inicie sesión 

export function validarSesion(){
    // Seleccionamos los elementos del DOM
    const btnRegistro = document.querySelector('#btnRegistro');
    const btnIniciarSesion = document.querySelector('#btnIniciar');
    const btnModulos = document.querySelector('#btnModulos');
    const userIcon = document.querySelector("#user-icon");
  
  
    // Verificamos si el usuario ha iniciado sesión
    // true o false
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    for (let i = 0; i < usuarios.length; i++) {
  
      let confirmarSesion = usuarios[i] ? usuarios[i].logged : false
  
      console.log(confirmarSesion)
  
      if (confirmarSesion) {
        // Usuario autenticado: Mostrar módulos e icono de usuario, ocultar registro e inicio de sesión
        btnModulos.style.display = "block";
        userIcon.style.display = "block";
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
}
