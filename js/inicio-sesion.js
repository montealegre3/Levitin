const formulario = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#nombreUsuario');
const contraseña = document.querySelector('#contrasenaUsuario');





//Inicio de sesión 
function validarUsuario(e) {
    e.preventDefault();


    let currentUser = JSON.parse(localStorage.getItem('user'))
    console.log(currentUser.userName)
    console.log(currentUser.userPass)
    console.log(currentUser.userEmail)




    console.log(Boolean(nombreUsuario.value.toLowerCase() === currentUser.userName));
    console.log(Boolean(contraseña.value.toLowerCase() === currentUser.userPass));

    if (nombreUsuario.value.toLowerCase() === currentUser.userName && (contraseña.value.toLowerCase() === currentUser.userPass)) {
        console.log('felicidades puedes entrar 😊')
        window.location = "../index.html"
    } else {
        console.log('Sigue intentando')
    }

    formulario.reset()
}


formulario.addEventListener('submit', validarUsuario);




