// Agrega un nuevo plan al carrusel automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  if (swiperWrapper) {
    const nuevoPlan = document.createElement("div");
    nuevoPlan.className = "swiper-slide plan-box";

    nuevoPlan.innerHTML = `
      <div class="plan-header">
        <span class="plan-icon">🎨</span>
        <h3>Diseño Único</h3>
      </div>
      <p class="plan-price">$299</p>
      <ul class="plan-details">
        <li>Diseño gráfico incluido</li>
        <li>Identidad visual personalizada</li>
        <li>Dominio gratis 1 año</li>
      </ul>
      <a href="#contacto" class="plan-cta">Elegir Plan</a>
    `;

    swiperWrapper.appendChild(nuevoPlan);
  }
});
