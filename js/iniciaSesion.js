const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

function iniciarSesion(e) {
    e.preventDefault();

    const usuarioGuardado = Object.values(localStorage).map(item => JSON.parse(item))
        .find(user => user.userN === userName.value.trim() && user.userP === password.value.trim());

    if (usuarioGuardado) {
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioGuardado));
        alert(`Bienvenido, ${usuarioGuardado.userN}!`);
        window.location.href = "../index.html"; // Redirige a la página principal
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    formulario.reset();
}

formulario.addEventListener("submit", iniciarSesion);
