const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function iniciarSesion(e) {
    e.preventDefault();

    let usuarioEncontrado = null;

    for (let i = 0; i < usuarios.length; i++) {
        if (
            usuarios[i].userN === userName.value.trim() &&
            usuarios[i].userP === password.value.trim()
        ) {
            usuarioEncontrado = usuarios[i];
            usuarios[i].logged = true;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            break;
        }
    }

    if (usuarioEncontrado) {
        console.log("Usuario encontrado:", usuarioEncontrado);

        document.getElementById("nombreUsuario").textContent = usuarioEncontrado.userN;

        const popup = document.getElementById("bienvenidaPopup");
        popup.classList.remove("popup-oculto");
        popup.classList.add("popup-visible");

        formulario.reset();
    } else {
        alert("Usuario o contraseña incorrectos.");
        formulario.reset();
    }
}

formulario.addEventListener("submit", iniciarSesion);

document.getElementById("btnComenzar").addEventListener("click", () => {
    window.location.href = "/";
});