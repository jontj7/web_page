// Cambia dinámicamente el título principal del Hero
document.addEventListener("DOMContentLoaded", () => {
  const tituloHero = document.querySelector(".hero-content h1");
  if (tituloHero) {
    setTimeout(() => {
      tituloHero.textContent = "¡Tu web soñada empieza hoy!";
    }, 5000); // después de 5 segundos
  }
});
