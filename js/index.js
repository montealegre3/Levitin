const saludo = document.querySelector('#saludo');

let nombreUsuario = JSON.parse(localStorage.getItem('user'));

saludo.innerHTML = `Hola ${saludo.userName} 🎶🎶`


const btnIniciarSesion = document.querySelector('#btnIniciarSesion');
const btnRegistro = document.querySelector('#btnRegistro');
const saludoUsuario = document.querySelector('#saludo');
const cerrarSesion = document.querySelector('#cerrar');



// Verifica si el usuario está registrado 
function verificarSesion() {
    let currentUser = JSON.parse(localStorage.getItem('user'));

    if (currentUser) {
        // Si hay un usuario logueado, mostrar su nombre, ocultar botones inicio de sesion y mostrar boton cerrar sesión
        saludoUsuario.textContent = `Bienvenido, ${currentUser.userName} 🎶🎶`;
        btnIniciarSesion.style.display = 'none';
        btnRegistro.style.display = 'none';
        cerrarSesion.style.display = 'inline-block'
    } else {
        // Si no hay usuario logueado, mostrar los botones, ocultar el nombre y el boton de cerrar sesion
        saludoUsuario.textContent = '';
        btnIniciarSesion.style.display = 'inline-block';
        btnRegistro.style.display = 'inline-block';
        cerrarSesion.style.display = 'none';
    }
}


cerrarSesion.addEventListener('click' , () => {
    localStorage.removeItem('user');
    verificarSesion();
})

document.addEventListener('DOMContentLoaded', verificarSesion);







