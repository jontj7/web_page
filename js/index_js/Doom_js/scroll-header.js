document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header.navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Bajando: ocultar
      header.classList.add("hide-header");
    } else {
      // Subiendo: mostrar
      header.classList.remove("hide-header");
    }

    lastScroll = currentScroll;
  });
});
