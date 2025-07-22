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

    // Event listener para cada enlace (al hacer clic)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            removeActiveClass(); // Remueve 'active' de todos los enlaces
            this.classList.add('active'); // Añade 'active' al enlace clickeado
            this.setAttribute('aria-current', 'page'); // Actualiza aria-current

            // Smooth scroll al hacer clic en un enlace de la navbar
            e.preventDefault(); // Evita el comportamiento por defecto del ancla
            const targetId = this.getAttribute('href'); // Obtiene el ID del destino
            const targetSection = document.querySelector(targetId); // Selecciona la sección
            if (targetSection) {
                // Scroll suave
                window.scrollTo({
                    top: targetSection.offsetTop - mainNavbar.offsetHeight, // Ajusta para la altura de la navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Opcional: Resaltar enlace activo al hacer scroll (más avanzado)
    const sections = document.querySelectorAll('section'); // Asume que tus secciones tendrán la etiqueta <section>

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
    const btnPromociones = document.getElementById('btnPromociones'); // Botón de promociones por ID
    const modalPromociones = new bootstrap.Modal(document.getElementById('modalPromociones')); // Instancia del modal de Bootstrap

    btnPromociones.addEventListener('click', function() {
        modalPromociones.show(); // Muestra el modal cuando se hace clic en el botón
    });
});