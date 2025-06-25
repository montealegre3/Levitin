const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function iniciarSesion(e) {
    e.preventDefault();

    //Para saber si el usuario existe

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].userN === userName.value.trim() && usuarios[i].userP === password.value.trim()) {
            /* localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado)); */
            alert(`Bienvenido, ${usuarios[i].userN}!`); 
            window.location.href = "../";
            usuarios[i].logged = true
            console.log(usuarios)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            return
        } 
        
    }

    alert("Usuario o contraseña incorrectos.");

    formulario.reset();
}

formulario.addEventListener("submit", iniciarSesion);