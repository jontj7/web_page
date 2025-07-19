// --- Sidebar Toggle ---
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');

if (sidebar && openBtn && closeBtn) {
  openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
}

// --- Mostrar beneficios dinámicamente ---
const beneficios = [
  "🚀 Entregas rápidas y eficientes.",
  "🎯 Soluciones personalizadas.",
  "📞 Soporte técnico garantizado.",
  "📈 Mejora tu presencia digital."
];

const lista = document.getElementById("benefits");
let index = 0;

if (lista) {
  const mostrarBeneficio = () => {
    if (index < beneficios.length) {
      const li = document.createElement("li");
      li.textContent = beneficios[index];
      lista.appendChild(li);
      setTimeout(() => li.style.opacity = 1, 100);
      index++;
    } else {
      clearInterval(timer);
    }
  };

  const timer = setInterval(mostrarBeneficio, 1000);
}


