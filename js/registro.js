const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

function registrarUsuario(e) {
    e.preventDefault();

    let usuario = {
        userN: userName.value.trim(),
        userE: email.value.trim(),
        userP: password.value.trim()
    };

    // Obtener lista de usuarios guardados en localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[usuario.userE]) {
        alert("Este correo ya está registrado. Usa otro o inicia sesión.");
        return;
    }

    // Guardar usuario en la lista de usuarios
    usuarios[usuario.userE] = usuario;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    formulario.reset();
    window.location.href = "./iniciaSesion.html";
}

formulario.addEventListener("submit", registrarUsuario);
