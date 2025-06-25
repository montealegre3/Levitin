document.addEventListener("DOMContentLoaded", () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioActual = usuarios.find(u => u.logged);
  
  const btnDescargarPDF = document.getElementById("btnDescargarPDF");
  const btnCertificado = document.getElementById("btnCertificado");
  const btnAbrirModal = document.getElementById("btnAbrirModal");
  const modal = document.getElementById("modalNombre");
  const btnGenerar = document.getElementById("btnGenerarCertificado");
  const nombreInput = document.getElementById("inputNombre");
  const certificado = document.getElementById("certificadoFinal");
  const nombreCertificado = document.getElementById("nombreCertificado");
  const fechaCertificado = document.getElementById("fechaCertificado");

  // Bloquear descarga si ya se descargó el certificado //
  if (usuarioActual?.certificadoDescargado && btnDescargarPDF) {
    btnDescargarPDF.textContent = "Certificado ya descargado";
    btnDescargarPDF.disabled = true;
    btnDescargarPDF.classList.add("btn-secondary");
  }

  // Cambiar botón del dashboard si ya fue descargado //
  if (usuarioActual?.certificadoDescargado && btnCertificado) {
    btnCertificado.textContent = "Certificado ya descargado";
    btnCertificado.disabled = true;
    btnCertificado.classList.add("btn-secondary");
  }

  // Generar certificado //
  if (btnGenerar) {
    btnGenerar.addEventListener("click", () => {
      const nombre = nombreInput.value.trim();
      if (nombre === "") {
        alert("Por favor escribe tu nombre.");
        return;
      }

      nombreCertificado.textContent = nombre;
      fechaCertificado.textContent = new Date().toLocaleDateString("es-ES", {
        year: "numeric", month: "long", day: "numeric"
      });
      certificado.classList.remove("d-none");
      modal.style.display = "none";
    });
  }

  // Descargar PDF solo una vez //
  if (btnDescargarPDF) {
    btnDescargarPDF.addEventListener("click", () => {
      const area = document.getElementById("areaCertificado");

      html2pdf().from(area).save("certificado.pdf").then(() => {
        if (usuarioActual) {
          usuarioActual.certificadoDescargado = true;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }

        btnDescargarPDF.textContent = "Certificado ya descargado";
        btnDescargarPDF.disabled = true;
        btnDescargarPDF.classList.add("btn-secondary");
      });
    });
  }
});
