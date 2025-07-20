// Reproduce en bucle los beneficios debajo del título
document.addEventListener("DOMContentLoaded", () => {
  const beneficios = [
    "🚀 Entregas rápidas y eficientes.",
    "🎯 Soluciones personalizadas.",
    "📞 Soporte técnico garantizado.",
    "📈 Mejora tu presencia digital."
  ];

  const lista = document.getElementById("benefits");
  if (!lista) return;

  let index = 0;
  const mostrarBeneficio = () => {
    lista.innerHTML = ""; // Limpia anterior
    const li = document.createElement("li");
    li.textContent = beneficios[index];
    li.style.opacity = 0;
    lista.appendChild(li);

    setTimeout(() => li.style.opacity = 1, 100);

    index = (index + 1) % beneficios.length;
  };

  mostrarBeneficio();
  setInterval(mostrarBeneficio, 3000);
});
