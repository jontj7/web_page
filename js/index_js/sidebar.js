document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('openSidebar');

  // Abrir sidebar
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    toggleBtn.classList.add('hidden'); // Oculta el botón
  });

  // Cerrar al hacer clic fuera del sidebar
  document.addEventListener('click', (e) => {
    const clickDentroSidebar = sidebar.contains(e.target);
    const clickEnToggle = toggleBtn.contains(e.target);

    if (!clickDentroSidebar && !clickEnToggle && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      toggleBtn.classList.remove('hidden'); // Muestra el botón
    }
  });

  // Cerrar al hacer clic en cualquier enlace del sidebar
  document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      toggleBtn.classList.remove('hidden');
    });
  });
});
