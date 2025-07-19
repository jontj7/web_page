// Manejo básico del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cotizacionForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Enviando...";
      setTimeout(() => {
        status.textContent = "¡Cotización enviada con éxito!";
        form.reset();
      }, 1500);
    });
  }
});
