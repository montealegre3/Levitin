const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1');

const popup = document.getElementById("miPopup");
const btnIrRegistro = document.getElementById("btnIrRegistro");
const btnCerrarPopup = document.getElementById("btnCerrarPopup");

function registrarUsuario(e) {
  e.preventDefault();

  let usuario = {
    userN: userName.value.trim(),
    userE: email.value.trim(),
    userP: password.value.trim(),
    logged: false,
    progress: 0,
    avance: false,
    avance2: false,
    avance3: false,
    avance4: false,
    certificado: false,
    formulariosAprobados: []
  };

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userE === email.value.trim()) {
      alert("Este correo ya está registrado. Usa otro o inicia sesión.");
      formulario.reset();
      return;
    }
  }

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Mostrar modal de registro exitoso
  popup.classList.remove("popup-oculto");
  popup.classList.add("popup-visible");
}

formulario.addEventListener("submit", registrarUsuario);

// Botón Aceptar (redirigir)
btnIrRegistro.addEventListener("click", () => {
  window.location.href = "./iniciaSesion.html";
});

// Botón cerrar (solo cerrar)
btnCerrarPopup.addEventListener("click", () => {
  popup.classList.remove("popup-visible");
  popup.classList.add("popup-oculto");
});

formulario.addEventListener("submit", registrarUsuario);
