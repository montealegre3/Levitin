const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

function registrarUsuario(e) {
    e.preventDefault();

    const usuario = {
        userN: userName.value.trim(),
        userE: email.value.trim(),
        userP: password.value.trim()
    };

    // Verifica si ya existe un usuario con el mismo correo
    if (localStorage.getItem(usuario.userE)) {
        alert("Este correo ya está registrado. Usa otro o inicia sesión.");
        return;
    }

    localStorage.setItem(usuario.userE, JSON.stringify(usuario));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    formulario.reset();

    // Redirigir a la página de inicio de sesión
    window.location.href = "./iniciaSesion.html";
}

formulario.addEventListener("submit", registrarUsuario);
