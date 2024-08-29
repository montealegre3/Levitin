const formulario = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#nombreUsuario');
const email = document.querySelector('#emailUsuario');
const contraseña = document.querySelector('#contrasenaUsuario');


function registrarUser(e){
    e.preventDefault();


    //Registrar el dato de "user" en localStorage
    let user = {
    userName: nombreUsuario.value,
    userPass: contraseña.value,
    userEmail: email.value,

}

    localStorage.setItem('user', JSON.stringify(user))

    formulario.reset();
}


formulario.addEventListener('submit', registrarUser)



