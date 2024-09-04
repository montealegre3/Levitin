const saludo = document.querySelector('#saludo');

let nombreUsuario = JSON.parse(localStorage.getItem('user'));

saludo.innerHTML = `Hola ${saludo.userName} 🎶🎶`


const btnIniciarSesion = document.querySelector('#btnIniciarSesion');
const btnRegistro = document.querySelector('#btnRegistro');
const saludoUsuario = document.querySelector('#saludo');
const cerrarSesion = document.querySelector('#cerrar');
const container = document.querySelector('.card-container1');

// Verifica si el usuario está registrado 
function verificarSesion() {
    let currentUser = JSON.parse(localStorage.getItem('user'));

    if (currentUser) {
        // Si hay un usuario logueado, mostrar su nombre, ocultar botones inicio de sesion y mostrar boton cerrar sesión
        saludoUsuario.textContent = `Bienvenido, ${currentUser.userName} 🎶🎶`;
        btnIniciarSesion.style.display = 'none';
        btnRegistro.style.display = 'none';
        cerrarSesion.style.display = 'inline-block'
    } else {
        // Si no hay usuario logueado, mostrar los botones, ocultar el nombre y el boton de cerrar sesion
        saludoUsuario.textContent = '';
        btnIniciarSesion.style.display = 'inline-block';
        btnRegistro.style.display = 'inline-block';
        cerrarSesion.style.display = 'none';
    }
}


cerrarSesion.addEventListener('click' , () => {
    localStorage.removeItem('user');
    verificarSesion();
})

document.addEventListener('DOMContentLoaded', verificarSesion);



// Funcion para las cards
function mostrarResults(results) {
    results.forEach( element => {
        let card = document.createElement('div');
        card.classList.add("card")
    
        card.innerHTML = `
       
            <div class="card1">
                <div class="card-icon">${element.icon}</div>
                <hr class="divider">
                <h1 id="Texto">MÓDULO 1</h1>
                <p class="card-text">La introducción a la psicología musical:
                    Abarcaremos tanto la historia y 
                    evolución cómo la importancia y
                    prácticas de la psicología musical</p>
                <div class="flecha">➡️</div>
            </div>
            <div class="card2">
                <div class="card-icon">🎵</div>
                <hr class="divider">
                <h1 id="Texto">MÓDULO 2</h1>
                <p class="card-text">Percepción musical: Abarcaremos
                    desde los elementos de la música
                    (tono, ritmo, melodia y armonía)
                    hasta el procesamiento auditivo</p>
                <div class="flecha">➡️</div>
            </div>
        `
    
        container.appendChild(card);
    })
}

/* mostrarResults(cardsData) */


document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'flecha'
    const flechas = document.querySelectorAll('.flecha');

    // Añade un evento de clic a cada flecha
    flechas.forEach(flecha => {
        flecha.addEventListener('click', () => {
            // Obtiene el valor del atributo 'data-link'
            const link = flecha.getAttribute('data-link');
            // Redirige al usuario a la página especificada
            window.location.href = link;
        });
    });
});

















