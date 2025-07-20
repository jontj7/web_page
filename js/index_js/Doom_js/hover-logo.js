// Efecto hover en logo de navbar
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "rotate(-5deg) scale(1.05)";
      logo.style.transition = "transform 0.3s ease";
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "rotate(0) scale(1)";
    });
  }
});
