// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // MODALES DE CONTENIDOS DE CURSOS
    // ============================================
    
    // Datos de los contenidos de los cursos (extraídos de las imágenes)
    const courseContents = {
        'Curso de Desarrollo Web': {
            title: 'Curso de Desarrollo Web',
            description: 'Introducción a HTML, CSS y fundamentos digitales',
            modules: [
                {
                    name: 'Módulo 1: Fundamentos del Internet',
                    lessons: [
                        'Lección 1.1: Cómo funciona la Web (cliente-servidor)',
                        'Lección 1.2: Navegadores y Servidores'
                    ]
                },
                {
                    name: 'Módulo 2: HTML - Estructura Esencial',
                    lessons: [
                        'Lección 2.1: Etiquetas básicas y jerarquía de texto',
                        'Lección 2.2: Listas, Enlaces e Imágenes'
                    ]
                },
                {
                    name: 'Módulo 3: CSS - Estilo y Diseño',
                    lessons: [
                        'Lección 3.1: Introducción a Selectores y Propiedades',
                        'Lección 3.2: El Modelo de Caja (Padding, Border, Margin)'
                    ]
                },
                {
                    name: 'Módulo 4: Proyecto Integrador',
                    lessons: [
                        'Lección 4.1: Creando tu primera Landing Page',
                        'Lección 4.2: Mejores Prácticas y Publicación'
                    ]
                }
            ]
        },
        'Curso de JavaScript': {
            title: 'Curso de JavaScript Completo',
            description: 'Aprende el lenguaje más popular para la Web desde cero',
            modules: [
                {
                    name: 'Módulo 1: Fundamentos Esenciales',
                    lessons: [
                        'Lección 1.1: Sintaxis y Tipos de Datos',
                        'Lección 1.2: Variables y Operadores'
                    ]
                },
                {
                    name: 'Módulo 2: Lógica y Control',
                    lessons: [
                        'Lección 2.1: Estructuras Condicionales (if/else)',
                        'Lección 2.2: Bucles y Funciones Básicas'
                    ]
                },
                {
                    name: 'Módulo 3: Manipulación del DOM',
                    lessons: [
                        'Lección 3.1: Selección y Modificación de Elementos (HTML)',
                        'Lección 3.2: Gestión de Eventos y Event Listeners'
                    ]
                },
                {
                    name: 'Módulo 4: Proyecto Práctico y Más Allá',
                    lessons: [
                        'Lección 4.1: Creando una Aplicación Web Simple',
                        'Lección 4.2: Mejores Prácticas y Próximos Pasos'
                    ]
                }
            ]
        },
        'Introducción a la Inteligencia Artificial': {
            title: 'Introducción a la Inteligencia Artificial',
            description: 'Aprende los conceptos básicos de la inteligencia artificial y cómo se aplica en el mundo real',
            modules: [
                {
                    name: 'Módulo 1: Fundamentos de IA',
                    lessons: [
                        'Lección 1.1: ¿Qué es la IA y por qué es importante?',
                        'Lección 1.2: Historia y Tipos de IA (Débil vs. Fuerte)'
                    ]
                },
                {
                    name: 'Módulo 2: Machine Learning y Algoritmos',
                    lessons: [
                        'Lección 2.1: Aprendizaje Supervisado, No Supervisado y por Refuerzo',
                        'Lección 2.2: Redes Neuronales y Deep Learning'
                    ]
                },
                {
                    name: 'Módulo 3: Aplicaciones en el Mundo Real y Ética',
                    lessons: [
                        'Lección 3.1: IA en Salud, Finanzas y Transporte',
                        'Lección 3.2: Sesgo, Privacidad y el Futuro de la IA Ética'
                    ]
                },
                {
                    name: 'Módulo 4: Proyecto y Futuro Profesional',
                    lessons: [
                        'Lección 4.1: Desarrollando un Modelo de IA Simple',
                        'Lección 4.2: Tendencias Futuras y Cómo Iniciar tu Carrera'
                    ]
                }
            ]
        }
    };

    // ============================================
    // CREAR ESTRUCTURA DEL MODAL
    // ============================================
    
    // Crear elementos del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    
    const modalSubtitle = document.createElement('p');
    modalSubtitle.className = 'modal-subtitle';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Cerrar');
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    
    // Armar estructura del modal
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalSubtitle);
    modalHeader.appendChild(closeButton);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    modalContainer.appendChild(modalContent);
    modalOverlay.appendChild(modalContainer);
    
    document.body.appendChild(modalOverlay);

    // ============================================
    // FUNCIONES PARA MANEJAR EL MODAL
    // ============================================
    
    // Función para abrir modal con contenido específico
    function openModal(courseKey) {
        const course = courseContents[courseKey];
        if (!course) return;
        
        // Actualizar contenido del modal
        modalTitle.textContent = course.title;
        modalSubtitle.textContent = course.description;
        
        // Generar HTML de los módulos
        let modulesHTML = '';
        course.modules.forEach((module, index) => {
            modulesHTML += `
                <div class="module-item">
                    <div class="module-header" onclick="toggleModule(${index})">
                        <span class="module-name">${module.name}</span>
                        <span class="module-toggle">▼</span>
                    </div>
                    <div class="module-lessons" id="module-${index}">
                        <ul class="lessons-list">
                            ${module.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        
        modalBody.innerHTML = modulesHTML;
        
        // Mostrar modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
    
    // Función para cerrar modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Función para toggle módulos (necesita estar en scope global)
    window.toggleModule = function(moduleIndex) {
        const moduleLessons = document.getElementById(`module-${moduleIndex}`);
        const moduleHeader = moduleLessons.previousElementSibling;
        const toggleIcon = moduleHeader.querySelector('.module-toggle');
        
        if (moduleLessons.classList.contains('active')) {
            moduleLessons.classList.remove('active');
            toggleIcon.textContent = '▼';
        } else {
            moduleLessons.classList.add('active');
            toggleIcon.textContent = '▲';
        }
    };

    // ============================================
    // ASIGNAR EVENTOS A LAS TARJETAS
    // ============================================
    
    // Seleccionar todas las tarjetas de cursos
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Obtener el título del curso
            const titleElement = this.querySelector('.course-card__title');
            if (!titleElement) return;
            
            const courseTitle = titleElement.textContent.trim();
            
            // Verificar si existe contenido para este curso
            if (courseContents[courseTitle]) {
                openModal(courseTitle);
            } else {
                console.warn('No hay contenido disponible para:', courseTitle);
            }
        });
    });

    // ============================================
    // EVENTOS PARA CERRAR MODAL
    // ============================================
    
    // Cerrar con botón X
    closeButton.addEventListener('click', closeModal);
    
    // Cerrar haciendo clic en el overlay
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // ============================================
    // NAVEGACIÓN DEL SIDEBAR (para completar)
    // ============================================
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const path = this.dataset.path;
            if (path) {
                // Aquí puedes implementar la navegación real
                console.log('Navegando a:', path);
                
                // Actualizar estado activo
                menuItems.forEach(mi => mi.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // ============================================
    // CERRAR SESIÓN
    // ============================================
    
    const cerrarSesion = document.querySelector('.cerrar-sesion');
    if (cerrarSesion) {
        cerrarSesion.addEventListener('click', function() {
            // Aquí implementar lógica de cierre de sesión
            if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
                console.log('Cerrando sesión...');
                // Redirigir a login, etc.
            }
        });
    }

    // ============================================
    // NOTIFICACIONES
    // ============================================
    
    const notificacion = document.querySelector('.notificacion');
    if (notificacion) {
        notificacion.addEventListener('click', function() {
            alert('Tienes 1 notificación nueva');
        });
    }
});