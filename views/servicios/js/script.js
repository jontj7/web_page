document.addEventListener('DOMContentLoaded', function() {
    // 1. Manipulación del DOM: Sticky Navbar al hacer scroll (por ID y Class)
    const mainNavbar = document.getElementById('mainNavbar'); // Selecciona la navbar por su ID
    const logoNavbar = mainNavbar.querySelector('.logo'); // Selecciona el logo dentro de la navbar

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            mainNavbar.classList.add('scrolled'); 
            logoNavbar.style.maxWidth = '120px'; // Reduce el tamaño del logo (manipulación de estilo)
        } else {
            mainNavbar.classList.remove('scrolled'); // Remueve la clase 'scrolled'
            logoNavbar.style.maxWidth = '180px'; // Restaura el tamaño del logo
        }
    });

    // 2. Manipulación del DOM: Toggle de la barra de búsqueda (por ID)
    const searchIconBtn = document.getElementById('searchIconBtn'); // Botón del icono de búsqueda por ID
    const searchContainer = document.getElementById('searchContainer'); // Contenedor de la barra de búsqueda por ID
    const searchInput = searchContainer.querySelector('.search-input'); // El input de búsqueda dentro del contenedor

    searchIconBtn.addEventListener('click', function() {
        searchContainer.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar
        if (searchContainer.classList.contains('active')) {
            searchInput.focus(); // Pone el foco en el input cuando se muestra
        } else {
            searchInput.value = ''; // Limpia el input cuando se oculta
        }
    });

    // 3. Manipulación del DOM: Resaltar enlace activo de la navbar (por Class)
    const navLinks = document.querySelectorAll('#navbarNav .nav-link'); // Selecciona todos los enlaces de navegación por Class

    // Función para remover la clase 'active' de todos los enlaces
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
    }

    // Resaltar enlace activo al hacer scroll 
    const sections = document.querySelectorAll('section'); // Selecciona todas las secciones

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Ajusta el offset para que la sección se considere activa un poco antes
            if (pageYOffset >= sectionTop - mainNavbar.offsetHeight - 50) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    });

     // 4. Manipulación del DOM: Abrir Modal de Promociones (por ID)
    const btnPromociones = document.getElementById('btnPromociones'); // Botón de promociones por ID.
    const modalPromociones = new bootstrap.Modal(document.getElementById('modalPromociones')); 

    btnPromociones.addEventListener('click', function() {
        modalPromociones.show(); // Muestra el modal cuando se hace clic en el botón.
    });

    // 5. Manipulación del DOM: Call to Action con SweetAlert (por ID)
    const ctaButton = document.getElementById('ctaButton');

    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault(); 

            Swal.fire({
                title: '¡Excelente Elección!',
                html: '<p>Nos emociona tu interés. Pronto serás redirigido a nuestra sección de Contacto para que podamos hablar de tu proyecto.</p><p>¡Estamos listos para hacer realidad tus ideas!</p>',
                icon: 'success', // Icono de éxito
                timer: 6000, // Cerrar automáticamente después de 6 segundos.
                timerProgressBar: true,
                showConfirmButton: false, // No mostrar el botón de confirmación.
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
                willClose: () => {
                    // Redirigir a la sección de contacto después de que el SweetAlert se cierre.
                    window.location.href = '#contacto';
                }
            });
        });
    }
});