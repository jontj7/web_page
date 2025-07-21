document.addEventListener('DOMContentLoaded', function() {
  
  if (typeof teamSwiper === 'undefined') {
    console.error('La instancia de Swiper "teamSwiper" no se encontró.');
    return;
  }

  // Seleccionar los elementos de la ventana modal una sola vez
  const modalVentana = document.getElementById('equipo-modal');
  const botonCerrar = document.getElementById('cerrar-modal');
  const modalFoto = document.getElementById('modal-foto');
  const modalNombre = document.getElementById('modal-nombre');
  const modalCargo = document.getElementById('modal-cargo');
  const modalBio = document.getElementById('modal-bio');
  const modalLinkedin = document.getElementById('modal-linkedin');

  // Si no se encuentra el modal en el HTML, detenemos el script para evitar errores.
  if (!modalVentana) {
    return;
  }

  // ---- Función para abrir la ventana con datos ----
  function abrirModal(tarjeta) {
    // Obtenemos los datos de los atributos 'data-*' de la tarjeta
    const nombre = tarjeta.getAttribute('data-nombre');
    const cargo = tarjeta.getAttribute('data-cargo');
    const bio = tarjeta.getAttribute('data-bio');
    const foto = tarjeta.getAttribute('data-foto');
    const linkedin = tarjeta.getAttribute('data-linkedin');

    // Rellenamos la ventana con la información
    modalFoto.src = foto;
    modalFoto.alt = 'Foto de ' + nombre;
    modalNombre.textContent = nombre;
    modalCargo.textContent = cargo;
    modalBio.textContent = bio;
    modalLinkedin.href = linkedin;
    
    // Mostramos la ventana
    modalVentana.style.display = 'flex';
  }

  // ---- Función para cerrar la ventana ----
  function cerrarModal() {
    modalVentana.style.display = 'none';
  }

  // ---- MÉTODO CORRECTO PARA ASIGNAR EVENTOS CON SWIPER ----
  teamSwiper.on('click', function () {
    // 'this.clickedSlide' es la forma segura de Swiper para saber a qué slide se le hizo clic.
    const tarjetaClickeada = this.clickedSlide;
    
    // Verificamos que realmente se hizo clic en una tarjeta
    if (tarjetaClickeada) {
      abrirModal(tarjetaClickeada);
    }
  });

  // --- Asignamos los eventos para cerrar el modal (esto no cambia) ---
  
  // 1. Cerrar con el botón 'X'
  botonCerrar.addEventListener('click', cerrarModal);

  // 2. Cerrar haciendo clic fuera del contenido del modal
  modalVentana.addEventListener('click', function(evento) {
    // Si el objetivo del clic es el fondo oscuro (el overlay)
    if (evento.target === modalVentana) {
      cerrarModal();
    }
  });
});