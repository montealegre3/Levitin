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

  // Mostrar el modal si presionan el botón (opcional)
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
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      document.getElementById("areaCertificado").style.display = "block";
      modal.style.display = "none";
    });
  }

  // Descargar PDF en horizontal
  if (btnDescargarPDF) {
    btnDescargarPDF.addEventListener("click", () => {
      const area = document.getElementById("areaCertificado");

      const opt = {
        margin: 0,
        filename: "certificado.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: "in", format: "a4", orientation: "landscape" }
      };

      html2pdf().set(opt).from(area).save();
    });
  }
});