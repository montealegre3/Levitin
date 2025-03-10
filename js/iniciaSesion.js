const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

function iniciarSesion(e) {
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    let usuarioEncontrado = Object.values(usuarios).find(
        user => user.userN === userName.value.trim() && user.userP === password.value.trim()
    );

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
        alert(`Bienvenido, ${usuarioEncontrado.userN}!`);
        window.location.href = "../index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    formulario.reset();
}

formulario.addEventListener("submit", iniciarSesion);
