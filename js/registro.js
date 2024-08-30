const formulario = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#nombreUsuario');
const email = document.querySelector('#emailUsuario');
const contraseña = document.querySelector('#contrasenaUsuario');


function registrarUser(e){
    e.preventDefault();


    //Registrar el dato de "user" en localStorage
    let user = {
    userName: nombreUsuario.value.toLowerCase(),
    userPass: contraseña.value.toLowerCase(),
    userEmail: email.value.toLowerCase(),

}

    localStorage.setItem('user', JSON.stringify(user))

    formulario.reset();
}


formulario.addEventListener('submit', registrarUser)



