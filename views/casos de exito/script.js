// Mostrar mensaje de bienvenida
window.addEventListener('DOMContentLoaded', () => {
  alert("¡Bienvenido a los Casos de Éxito de Innova Web!");
  console.log("Innova Web cargado correctamente 🚀");

  // Mostrar animación al hacer scroll
  const cases = document.querySelectorAll('.case');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cases.forEach(c => observer.observe(c));
});

// Mostrar/Ocultar los casos
const toggleBtn = document.getElementById("toggleBtn");
const container = document.getElementById("casesContainer");

toggleBtn.addEventListener("click", () => {
  if (container.style.display === "none") {
    container.style.display = "block";
    toggleBtn.textContent = "Ocultar Casos";
  } else {
    container.style.display = "none";
    toggleBtn.textContent = "Mostrar Casos";
  }
});
