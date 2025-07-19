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
