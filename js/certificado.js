document.addEventListener("DOMContentLoaded", () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioActual = usuarios.find(u => u.logged);

  const btnDescargarPDF = document.getElementById("btnDescargarPDF");
  const btnAbrirModal = document.getElementById("btnAbrirModal");
  const modal = document.getElementById("modalNombre");
  const btnGenerar = document.getElementById("btnGenerarCertificado");
  const nombreInput = document.getElementById("inputNombre");
  const nombreCertificado = document.getElementById("nombreCertificado");
  const fechaCertificado = document.getElementById("fechaCertificado");

  // Mostrar el modal automáticamente al cargar
  modal.style.display = "flex";

  // Mostrar el modal si presionan un botón (opcional)
  if (btnAbrirModal) {
    btnAbrirModal.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  // Generar el certificado
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
      document.getElementById("areaCertificado").style.display = "block";
      modal.style.display = "none";
    });
  }

  // Descargar PDF
  if (btnDescargarPDF) {
    btnDescargarPDF.addEventListener("click", () => {
      const area = document.getElementById("areaCertificado");
      html2pdf().from(area).save("certificado.pdf");
    });
  }
});