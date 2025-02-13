document.addEventListener("DOMContentLoaded", () => {
    const sorprendido = document.querySelector(".beethoven.sorprendido");
    const feliz = document.querySelector(".beethoven.feliz");
  
    // Muestra la imagen inicial
    sorprendido.style.opacity = 1;
  
    // Alterna entre las imágenes
    setInterval(() => {
      if (sorprendido.style.opacity == 1) {
        sorprendido.style.opacity = 0;
        feliz.style.opacity = 1;
      } else {
        sorprendido.style.opacity = 1;
        feliz.style.opacity = 0;
      }
    }, 1000); //Tiempo de duración 
  });


  
  