/* ═══════════════════════════════════════════════
   Lecciones y Contenidos — Institución Educativa ABC
   leccionesCursos.js
   ═══════════════════════════════════════════════ */

// ── DATA DE CURSOS ──────────────────────────────────────────────────────────
const cursosData = [
  {
    id: "desarrollo-web",
    titulo: "Curso de Desarrollo Web",
    descripcion: "Introducción a HTML, CSS y fundamentos digitales",
    imagen: "../images/desarrollo-web.webp",
    color: "#0ea5e9",
    colorBg: "#e0f7f9",
    modulos: [
      {
        numero: 1,
        titulo: "Fundamentos del Internet",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="28" rx="3" stroke="#0ea5e9" stroke-width="2.5"/><rect x="10" y="14" width="10" height="8" rx="1" stroke="#0ea5e9" stroke-width="2"/><line x1="24" y1="14" x2="38" y2="14" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="19" x2="38" y2="19" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="26" x2="38" y2="26" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="30" x2="30" y2="30" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="36" x2="30" y2="36" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="36" x2="24" y2="40" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="40" x2="32" y2="40" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 1.1: Cómo funciona la Web (cliente-servidor).",
          "Lección 1.2: Navegadores y Servidores."
        ]
      },
      {
        numero: 2,
        titulo: "HTML – Estructura Esencial",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="28" rx="3" stroke="#0ea5e9" stroke-width="2.5"/><line x1="4" y1="15" x2="44" y2="15" stroke="#0ea5e9" stroke-width="2"/><circle cx="10" cy="11.5" r="1.5" fill="#0ea5e9"/><circle cx="15" cy="11.5" r="1.5" fill="#0ea5e9"/><circle cx="20" cy="11.5" r="1.5" fill="#0ea5e9"/><line x1="10" y1="22" x2="22" y2="22" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="27" x2="38" y2="27" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="31" x2="30" y2="31" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 2.1: Etiquetas básicas y jerarquía de texto.",
          "Lección 2.2: Listas, Enlaces e Imágenes."
        ]
      },
      {
        numero: 3,
        titulo: "CSS – Estilo y Diseño",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6C24 6 8 10 8 26C8 34.84 15.16 42 24 42C32.84 42 40 34.84 40 26C40 10 24 6 24 6Z" stroke="#0ea5e9" stroke-width="2.5"/><path d="M18 24C18 20.69 20.69 18 24 18" stroke="#0ea5e9" stroke-width="2.5" stroke-linecap="round"/><path d="M20 30C20 27.24 21.79 24.89 24.29 24.21" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 3.1: Introducción a Selectores y Propiedades.",
          "Lección 3.2: El Modelo de Caja (Padding, Border, Margin)."
        ]
      },
      {
        numero: 4,
        titulo: "Proyecto Integrador",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="28" rx="3" stroke="#0ea5e9" stroke-width="2.5"/><line x1="4" y1="15" x2="44" y2="15" stroke="#0ea5e9" stroke-width="2"/><rect x="10" y="20" width="28" height="12" rx="2" stroke="#0ea5e9" stroke-width="2"/><line x1="18" y1="36" x2="30" y2="36" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="36" x2="24" y2="40" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="40" x2="32" y2="40" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 4.1: Creando tu primera Landing Page.",
          "Lección 4.2: Mejores Prácticas y Publicación."
        ]
      }
    ]
  },
  {
    id: "javascript",
    titulo: "Curso de JavaScript Completo",
    descripcion: "Aprende el lenguaje más popular para la Web desde cero",
    imagen: "../images/js.webp",
    color: "#0891b2",
    colorBg: "#cffafe",
    modulos: [
      {
        numero: 1,
        titulo: "Fundamentos Esenciales",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="4" stroke="#0891b2" stroke-width="2.5"/><path d="M16 20L20 24L16 28" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="22" y1="28" x2="30" y2="28" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 1.1: Sintaxis y Tipos de Datos.",
          "Lección 1.2: Variables y Operadores."
        ]
      },
      {
        numero: 2,
        titulo: "Lógica y Control",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 8V16" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/><path d="M24 16L16 24" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/><path d="M24 16L32 24" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/><path d="M16 24L8 32" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/><path d="M16 24L24 32" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/><path d="M32 24L24 32" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/><path d="M32 24L40 32" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 2.1: Estructuras Condicionales (if/else).",
          "Lección 2.2: Bucles y Funciones Básicas."
        ]
      },
      {
        numero: 3,
        titulo: "Manipulación del DOM",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="40" height="28" rx="3" stroke="#0891b2" stroke-width="2.5"/><line x1="4" y1="14" x2="44" y2="14" stroke="#0891b2" stroke-width="2"/><rect x="10" y="19" width="16" height="10" rx="2" stroke="#0891b2" stroke-width="2"/><path d="M32 36L36 40L44 30" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        lecciones: [
          "Lección 3.1: Selección y Modificación de Elementos (HTML).",
          "Lección 3.2: Gestión de Eventos y Event Listeners."
        ]
      },
      {
        numero: 4,
        titulo: "Proyecto Práctico y Más Allá",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6L28 18H40L30 26L34 38L24 30L14 38L18 26L8 18H20L24 6Z" stroke="#0891b2" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
        lecciones: [
          "Lección 4.1: Creando una Aplicación Web Simple.",
          "Lección 4.2: Mejores Prácticas y Próximos Pasos."
        ]
      }
    ]
  },
  {
    id: "inteligencia-artificial",
    titulo: "Introducción a la Inteligencia Artificial",
    descripcion: "Aprende los conceptos básicos de la inteligencia artificial y cómo se aplica en el mundo real",
    imagen: "../images/ai.webp",
    color: "#7c3aed",
    colorBg: "#ede9fe",
    modulos: [
      {
        numero: 1,
        titulo: "Fundamentos de la IA",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="10" stroke="#f59e0b" stroke-width="2.5"/><circle cx="24" cy="24" r="3" fill="#f59e0b"/><line x1="24" y1="8" x2="24" y2="14" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="24" y1="34" x2="24" y2="40" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="8" y1="24" x2="14" y2="24" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="34" y1="24" x2="40" y2="24" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="13" y1="13" x2="17.24" y2="17.24" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="30.76" y1="30.76" x2="35" y2="35" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="35" y1="13" x2="30.76" y2="17.24" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><line x1="17.24" y1="30.76" x2="13" y2="35" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 1.1: ¿Qué es la IA y por qué es importante?.",
          "Lección 1.2: Historia y Tipos de IA (Débil vs. Fuerte)."
        ]
      },
      {
        numero: 2,
        titulo: "Machine Learning y Algoritmos",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="20" r="10" stroke="#f59e0b" stroke-width="2.5"/><path d="M12 34C12 28.48 17.37 24 24 24C30.63 24 36 28.48 36 34" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/><path d="M20 20C20 22.21 21.79 24 24 24" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><path d="M28 20C28 17.79 26.21 16 24 16" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 2.1: Aprendizaje Supervisado, No Supervisado y por Refuerzo.",
          "Lección 2.2: Redes Neuronales y Deep Learning."
        ]
      },
      {
        numero: 3,
        titulo: "Aplicaciones en el Mundo Real y Ética",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6L38 12V24C38 32 32 38.5 24 42C16 38.5 10 32 10 24V12L24 6Z" stroke="#7c3aed" stroke-width="2.5" stroke-linejoin="round"/><line x1="18" y1="24" x2="22" y2="28" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="22" y1="28" x2="30" y2="19" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        lecciones: [
          "Lección 3.1: IA en Salud, Finanzas y Transporte.",
          "Lección 3.2: Sesgo, Privacidad y el Futuro de la IA Ética."
        ]
      },
      {
        numero: 4,
        titulo: "Proyecto y Futuro Profesional",
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6C18 12 12 18 12 26C12 32.63 17.37 38 24 38C30.63 38 36 32.63 36 26C36 18 30 12 24 6Z" stroke="#7c3aed" stroke-width="2.5"/><path d="M20 24C20 22 22 20 24 20" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="38" x2="24" y2="42" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/><line x1="18" y1="42" x2="30" y2="42" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        lecciones: [
          "Lección 4.1: Desarrollando un Modelo de IA Simple.",
          "Lección 4.2: Tendencias Futuras y Cómo Iniciar tu Carrera."
        ]
      }
    ]
  }
];

/* ══════════════════════════════════════════════════════
   SIDEBAR — NAVEGACIÓN
   ══════════════════════════════════════════════════════ */

const RUTAS_SIDEBAR = {
  dashboard : 'dashboard1.html',
  cursos    : 'gestionCursosAdm.html',
  docentes  : 'gestionDocentes.html',
  lecciones : 'dashDoc.html',
  admin     : 'moduloAdm.html',
};

const ARCHIVO_A_PATH = {
  'dashboard1.html'       : 'dashboard',
  'gestionCursosAdm.html' : 'cursos',
  'gestionDocentes.html'  : 'docentes',
  'dashDoc.html'          : 'lecciones',
  'moduloAdm.html'        : 'admin',
};

function initSidebar() {
  const items = document.querySelectorAll('.menu-item[data-path]');
  const pathCompleto = window.location.pathname;
  const paginaActual = pathCompleto.substring(pathCompleto.lastIndexOf('/') + 1);
  const pathActivo   = ARCHIVO_A_PATH[paginaActual];

  items.forEach(item => {
    item.classList.toggle('active', item.dataset.path === pathActivo);
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) return;

      const ruta = RUTAS_SIDEBAR[item.dataset.path];
      if (ruta) {
        document.querySelector('.main-content')?.classList.add('page-exit');
        setTimeout(() => { window.location.href = ruta; }, 180);
      } else {
        mostrarToast('Módulo próximamente disponible', 'info');
      }

      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ── MODAL DE VER LECCIONES (HTML) ─────────────────────────────────────────────
function crearModal() {
  const overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-card" id="modal-card" role="dialog" aria-modal="true">
      <button class="modal-close" id="modal-close" aria-label="Cerrar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="modal-body" id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ── RENDER MODAL DE LECCIONES ─────────────────────────────────────────────────
function abrirModal(cursoId) {
  const curso = cursosData.find(c => c.id === cursoId);
  if (!curso) return;

  const overlay = document.getElementById("modal-overlay");
  const card    = document.getElementById("modal-card");
  const body    = document.getElementById("modal-body");

  card.style.setProperty("--curso-color", curso.color);
  card.style.setProperty("--curso-bg",    curso.colorBg);

  

  body.innerHTML = curso.modulos.map(mod => `
    <div class="modulo-item">
      <div class="modulo-icon-wrap" style="color:${curso.color}; background:${curso.colorBg}">
        ${mod.icono}
      </div>
      <div class="modulo-content">
        <h4 class="modulo-titulo">Módulo ${mod.numero}: ${mod.titulo}</h4>
        <ul class="modulo-lecciones">
          ${mod.lecciones.map(lec => `
            <li>
              <span class="leccion-dot" style="background:${curso.color}"></span>
              ${lec}
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => card.classList.add("visible"));
}

function cerrarModal() {
  const overlay = document.getElementById("modal-overlay");
  const card    = document.getElementById("modal-card");
  card.classList.remove("visible");
  setTimeout(() => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }, 280);
}

// ── MODAL AÑADIR NUEVO MÓDULO ─────────────────────────────────────────────────
function crearModalNuevoModulo() {
  const overlay = document.createElement("div");
  overlay.id = "modal-nuevo-overlay";
  overlay.innerHTML = `
    <div class="modal-nuevo-card" id="modal-nuevo-card" role="dialog" aria-modal="true" aria-labelledby="modal-nuevo-titulo">
      <div class="modal-nuevo-header">
        <div class="modal-nuevo-header-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <h2 class="modal-nuevo-titulo" id="modal-nuevo-titulo">Añadir Nuevo Módulo</h2>
          <p class="modal-nuevo-subtitulo">Completa la información para crear el módulo</p>
        </div>
        <button class="modal-nuevo-close" id="modal-nuevo-close" aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <div class="modal-nuevo-body">
        <!-- Nombre del curso -->
        <div class="form-group">
          <label class="form-label" for="nuevo-nombre">Nombre del Curso <span class="form-required">*</span></label>
          <input type="text" id="nuevo-nombre" class="form-input" placeholder="Ej: Curso de Python para Principiantes" maxlength="80">
        </div>

        <!-- Descripción -->
        <div class="form-group">
          <label class="form-label" for="nuevo-desc">Descripción <span class="form-required">*</span></label>
          <textarea id="nuevo-desc" class="form-input form-textarea" placeholder="Breve descripción del contenido del curso..." maxlength="200" rows="3"></textarea>
        </div>

        <!-- Color de acento -->
        <div class="form-group">
          <label class="form-label">Color de acento</label>
          <div class="color-picker-row">
            <div class="color-option selected" data-color="#0ea5e9" data-bg="#e0f7f9" style="background:#0ea5e9" title="Azul cielo"></div>
            <div class="color-option" data-color="#0891b2" data-bg="#cffafe" style="background:#0891b2" title="Cyan"></div>
            <div class="color-option" data-color="#7c3aed" data-bg="#ede9fe" style="background:#7c3aed" title="Violeta"></div>
            <div class="color-option" data-color="#16a34a" data-bg="#dcfce7" style="background:#16a34a" title="Verde"></div>
            <div class="color-option" data-color="#dc2626" data-bg="#fee2e2" style="background:#dc2626" title="Rojo"></div>
            <div class="color-option" data-color="#d97706" data-bg="#fef3c7" style="background:#d97706" title="Ámbar"></div>
            <div class="color-option" data-color="#db2777" data-bg="#fce7f3" style="background:#db2777" title="Rosa"></div>
            <div class="color-option" data-color="#475569" data-bg="#f1f5f9" style="background:#475569" title="Gris pizarra"></div>
          </div>
        </div>

        <!-- Lecciones -->
        <div class="form-group">
          <label class="form-label">Lecciones del módulo <span class="form-required">*</span></label>
          <div id="lecciones-lista" class="lecciones-lista"></div>
          <button type="button" class="btn-agregar-leccion" id="btn-agregar-leccion">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            Agregar lección
          </button>
        </div>

        <div id="form-error" class="form-error" style="display:none"></div>
      </div>

      <div class="modal-nuevo-footer">
        <button type="button" class="btn-cancelar" id="btn-cancelar-nuevo">Cancelar</button>
        <button type="button" class="btn-crear" id="btn-crear-modulo">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Crear Módulo
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

// Color seleccionado actualmente en el form
let colorSeleccionado = { color: "#0ea5e9", bg: "#e0f7f9" };
let leccionesCount = 0;

function agregarFilaLeccion(texto = "") {
  leccionesCount++;
  const lista = document.getElementById("lecciones-lista");
  const fila = document.createElement("div");
  fila.className = "leccion-fila";
  fila.dataset.id = leccionesCount;
  fila.innerHTML = `
    <span class="leccion-num">${lista.children.length + 1}</span>
    <input type="text" class="form-input leccion-input" placeholder="Ej: Lección 1.1: Introducción al tema..." value="${texto}" maxlength="120">
    <button type="button" class="btn-remove-leccion" aria-label="Eliminar lección">
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
        <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    </button>
  `;
  fila.querySelector(".btn-remove-leccion").addEventListener("click", () => {
    fila.remove();
    renumerarLecciones();
  });
  lista.appendChild(fila);
}

function renumerarLecciones() {
  document.querySelectorAll(".leccion-fila").forEach((f, i) => {
    f.querySelector(".leccion-num").textContent = i + 1;
  });
}

function abrirModalNuevo() {
  const overlay = document.getElementById("modal-nuevo-overlay");
  const card    = document.getElementById("modal-nuevo-card");

  // Reset
  document.getElementById("nuevo-nombre").value = "";
  document.getElementById("nuevo-desc").value = "";
  document.getElementById("lecciones-lista").innerHTML = "";
  document.getElementById("form-error").style.display = "none";
  leccionesCount = 0;
  colorSeleccionado = { color: "#0ea5e9", bg: "#e0f7f9" };

  // Reset color picker
  document.querySelectorAll(".color-option").forEach(el => el.classList.remove("selected"));
  document.querySelector('.color-option[data-color="#0ea5e9"]')?.classList.add("selected");

  // Agregar 2 lecciones vacías por defecto
  agregarFilaLeccion();
  agregarFilaLeccion();

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => card.classList.add("visible"));
}

function cerrarModalNuevo() {
  const overlay = document.getElementById("modal-nuevo-overlay");
  const card    = document.getElementById("modal-nuevo-card");
  card.classList.remove("visible");
  setTimeout(() => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }, 280);
}

function crearTarjetaCurso(curso) {
  const article = document.createElement("article");
  article.className = "course-card";
  article.setAttribute("data-curso", curso.id);
  article.setAttribute("role", "button");
  article.setAttribute("tabindex", "0");
  article.setAttribute("aria-label", `Ver lecciones: ${curso.titulo}`);

  // Placeholder: bloque de color como thumbnail cuando no hay imagen propia
  article.innerHTML = `
    <div class="course-card__thumbnail" style="background: ${curso.colorBg}; display:flex; align-items:center; justify-content:center;">
      <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="28" rx="4" stroke="${curso.color}" stroke-width="2.5"/>
        <line x1="4" y1="16" x2="44" y2="16" stroke="${curso.color}" stroke-width="2"/>
        <line x1="14" y1="24" x2="34" y2="24" stroke="${curso.color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="14" y1="29" x2="28" y2="29" stroke="${curso.color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="20" y1="36" x2="28" y2="36" stroke="${curso.color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="24" y1="36" x2="24" y2="40" stroke="${curso.color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="16" y1="40" x2="32" y2="40" stroke="${curso.color}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="course-card__body">
      <h3 class="course-card__title">${curso.titulo}</h3>
      <p class="course-card__desc">${curso.descripcion}</p>
    </div>
  `;

  article.addEventListener("click", () => abrirModal(curso.id));
  article.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirModal(curso.id); }
  });

  return article;
}

function procesarNuevoModulo() {
  const nombre = document.getElementById("nuevo-nombre").value.trim();
  const desc   = document.getElementById("nuevo-desc").value.trim();
  const errorEl = document.getElementById("form-error");

  // Obtener lecciones
  const inputs = document.querySelectorAll(".leccion-input");
  const lecciones = Array.from(inputs)
    .map(inp => inp.value.trim())
    .filter(v => v.length > 0);

  // Validación
  if (!nombre) {
    mostrarError(errorEl, "El nombre del curso es obligatorio.");
    return;
  }
  if (!desc) {
    mostrarError(errorEl, "La descripción es obligatoria.");
    return;
  }
  if (lecciones.length === 0) {
    mostrarError(errorEl, "Debes agregar al menos una lección.");
    return;
  }

  errorEl.style.display = "none";

  // Generar ID único
  const nuevoId = "curso-" + Date.now();

  // Crear estructura de módulo único
  const nuevoCurso = {
    id: nuevoId,
    titulo: nombre,
    descripcion: desc,
    imagen: null,
    color: colorSeleccionado.color,
    colorBg: colorSeleccionado.bg,
    modulos: [
      {
        numero: 1,
        titulo: nombre,
        icono: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="40" height="28" rx="4" stroke="${colorSeleccionado.color}" stroke-width="2.5"/>
          <line x1="4" y1="16" x2="44" y2="16" stroke="${colorSeleccionado.color}" stroke-width="2"/>
          <line x1="14" y1="24" x2="34" y2="24" stroke="${colorSeleccionado.color}" stroke-width="2" stroke-linecap="round"/>
          <line x1="14" y1="29" x2="28" y2="29" stroke="${colorSeleccionado.color}" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        lecciones
      }
    ]
  };

  // Agregar a datos globales
  cursosData.push(nuevoCurso);

  // Crear y agregar tarjeta al grid
  const grid  = document.querySelector(".courses-grid");
  const tarjeta = crearTarjetaCurso(nuevoCurso);
  grid.appendChild(tarjeta);

  cerrarModalNuevo();
  mostrarToast("¡Módulo creado exitosamente!");
}

function mostrarError(el, msg) {
  el.textContent = msg;
  el.style.display = "block";
  el.style.animation = "none";
  requestAnimationFrame(() => { el.style.animation = ""; });
}

// ── TOAST NOTIFICATION ────────────────────────────────────────────────────────
function mostrarToast(mensaje) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.classList.add("toast-show");
  setTimeout(() => toast.classList.remove("toast-show"), 3000);
}

// ── MODAL DE CONFIRMACIÓN CERRAR SESIÓN ───────────────────────────────────────
function crearModalCerrarSesion() {
  const overlay = document.createElement("div");
  overlay.id = "modal-sesion-overlay";
  overlay.innerHTML = `
    <div class="modal-sesion-card" id="modal-sesion-card" role="dialog" aria-modal="true">
      <div class="modal-sesion-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
          <polyline points="16 17 21 12 16 7" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="21" y1="12" x2="9" y2="12" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3 class="modal-sesion-titulo">¿Cerrar sesión?</h3>
      <p class="modal-sesion-desc">Serás redirigido a la página de inicio de sesión. ¿Deseas continuar?</p>
      <div class="modal-sesion-btns">
        <button class="btn-sesion-cancelar" id="btn-sesion-cancelar">Cancelar</button>
        <button class="btn-sesion-confirmar" id="btn-sesion-confirmar">Cerrar sesión</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function abrirModalSesion() {
  const overlay = document.getElementById("modal-sesion-overlay");
  const card    = document.getElementById("modal-sesion-card");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => card.classList.add("visible"));
}

function cerrarModalSesion() {
  const overlay = document.getElementById("modal-sesion-overlay");
  const card    = document.getElementById("modal-sesion-card");
  card.classList.remove("visible");
  setTimeout(() => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }, 280);
}

// ── ESTILOS INYECTADOS ────────────────────────────────────────────────────────
function inyectarEstilosModal() {
  const style = document.createElement("style");
  style.textContent = `
    /* ── OVERLAY GENÉRICO ── */
    #modal-overlay,
    #modal-nuevo-overlay,
    #modal-sesion-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.55);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    #modal-overlay.active,
    #modal-nuevo-overlay.active,
    #modal-sesion-overlay.active { display: flex; }

    /* ── CARD VER LECCIONES ── */
    .modal-card {
      background: #fff;
      border-radius: 20px;
      width: 100%;
      max-width: 640px;
      max-height: 88vh;
      overflow-y: auto;
      box-shadow: 0 24px 60px rgba(0,0,0,0.22);
      position: relative;
      opacity: 0;
      transform: translateY(24px) scale(0.97);
      transition: opacity 0.28s ease, transform 0.28s ease;
    }
    .modal-card.visible { opacity: 1; transform: translateY(0) scale(1); }
    .modal-card::-webkit-scrollbar { width: 6px; }
    .modal-card::-webkit-scrollbar-track { background: transparent; }
    .modal-card::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }

    .modal-close {
      position: sticky;
      top: 14px;
      float: right;
      margin: 14px 14px 0 0;
      background: #f1f5f9;
      border: none;
      border-radius: 50%;
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      color: #64748b;
      transition: background 0.18s, color 0.18s;
      z-index: 10;
    }
    .modal-close:hover { background: #e2e8f0; color: #1e293b; }

    .modal-body {
      padding: 6px 24px 28px;
      display: flex; flex-direction: column; gap: 16px;
    }
    .modulo-item {
      display: flex; margin-top: 20px; align-items: flex-start;
      gap: 14px; padding: 14px 16px; border-radius: 12px;
      background: #f8fafc; border: 1px solid #e8edf3;
      transition: background 0.18s, box-shadow 0.18s;
    }
    .modulo-item:hover { background: var(--curso-bg, #f0f9ff); box-shadow: 0 2px 10px rgba(0,0,0,0.07); }
    .modulo-icon-wrap {
      width: 44px; height: 44px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; padding: 8px;
    }
    .modulo-icon-wrap svg { width: 100%; height: 100%; }
    .modulo-content { flex: 1; }
    .modulo-titulo { font-size: 13.5px; font-weight: 700; color: #1e293b; margin-bottom: 8px; line-height: 1.3; }
    .modulo-lecciones { list-style: none; display: flex; flex-direction: column; gap: 5px; }
    .modulo-lecciones li { font-size: 12.5px; color: #475569; display: flex; align-items: flex-start; gap: 7px; line-height: 1.45; }
    .leccion-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }

    /* ── CARD NUEVO MÓDULO ── */
    .modal-nuevo-card {
      background: #fff;
      border-radius: 20px;
      width: 100%;
      max-width: 560px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 24px 60px rgba(0,0,0,0.22);
      opacity: 0;
      transform: translateY(24px) scale(0.97);
      transition: opacity 0.28s ease, transform 0.28s ease;
    }
    .modal-nuevo-card.visible { opacity: 1; transform: translateY(0) scale(1); }
    .modal-nuevo-card::-webkit-scrollbar { width: 6px; }
    .modal-nuevo-card::-webkit-scrollbar-track { background: transparent; }
    .modal-nuevo-card::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }

    .modal-nuevo-header {
      display: flex; align-items: center; gap: 14px;
      padding: 20px 20px 18px;
      border-bottom: 1px solid #f1f5f9;
      position: sticky; top: 0; background: #fff; z-index: 5;
      border-radius: 20px 20px 0 0;
    }
    .modal-nuevo-header-icon {
      width: 40px; height: 40px; border-radius: 10px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .modal-nuevo-titulo { font-size: 16px; font-weight: 700; color: #111827; margin: 0; }
    .modal-nuevo-subtitulo { font-size: 12px; color: #6b7280; margin: 2px 0 0; }
    .modal-nuevo-close {
      margin-left: auto; background: #f1f5f9; border: none;
      border-radius: 50%; width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: #64748b;
      transition: background 0.18s, color 0.18s;
    }
    .modal-nuevo-close:hover { background: #e2e8f0; color: #1e293b; }

    .modal-nuevo-body { padding: 20px 22px 8px; display: flex; flex-direction: column; gap: 18px; }

    .form-group { display: flex; flex-direction: column; gap: 7px; }
    .form-label { font-size: 13px; font-weight: 600; color: #374151; }
    .form-required { color: #ef4444; }
    .form-input {
      width: 100%; padding: 10px 13px;
      border: 1.5px solid #e5e7eb; border-radius: 9px;
      font-size: 13.5px; color: #111827;
      font-family: 'Inter', sans-serif;
      transition: border-color 0.18s, box-shadow 0.18s;
      outline: none;
    }
    .form-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
    .form-textarea { resize: vertical; min-height: 72px; }

    /* Color picker */
    .color-picker-row { display: flex; gap: 10px; flex-wrap: wrap; }
    .color-option {
      width: 30px; height: 30px; border-radius: 50%;
      cursor: pointer; border: 2.5px solid transparent;
      transition: transform 0.15s, border-color 0.15s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    }
    .color-option:hover { transform: scale(1.15); }
    .color-option.selected { border-color: #1e293b; transform: scale(1.1); }

    /* Lecciones */
    .lecciones-lista { display: flex; flex-direction: column; gap: 8px; }
    .leccion-fila {
      display: flex; align-items: center; gap: 8px;
    }
    .leccion-num {
      min-width: 22px; height: 22px; border-radius: 50%;
      background: #e5e7eb; color: #374151;
      font-size: 11px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .leccion-input { flex: 1; padding: 8px 11px; font-size: 13px; }
    .btn-remove-leccion {
      background: none; border: none; cursor: pointer;
      color: #9ca3af; padding: 4px; border-radius: 6px;
      transition: color 0.15s, background 0.15s;
      display: flex; align-items: center;
    }
    .btn-remove-leccion:hover { color: #ef4444; background: #fee2e2; }

    .btn-agregar-leccion {
      display: flex; align-items: center; gap: 6px;
      margin-top: 6px; padding: 8px 14px;
      background: none; border: 1.5px dashed #d1d5db;
      border-radius: 8px; cursor: pointer;
      font-size: 13px; color: #6b7280;
      font-family: 'Inter', sans-serif;
      transition: border-color 0.18s, color 0.18s, background 0.18s;
      width: 100%;
    }
    .btn-agregar-leccion:hover { border-color: #2563eb; color: #2563eb; background: #eff6ff; }

    .form-error {
      background: #fef2f2; border: 1px solid #fecaca;
      color: #dc2626; border-radius: 8px;
      padding: 9px 13px; font-size: 13px;
      animation: shake 0.3s ease;
    }
    @keyframes shake {
      0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)}
    }

    .modal-nuevo-footer {
      display: flex; align-items: center; justify-content: flex-end; gap: 10px;
      padding: 16px 22px 20px;
      border-top: 1px solid #f1f5f9;
    }
    .btn-cancelar {
      padding: 10px 20px; background: none; border: 1.5px solid #e5e7eb;
      border-radius: 9px; font-size: 14px; font-weight: 500;
      color: #374151; cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.18s, border-color 0.18s;
    }
    .btn-cancelar:hover { background: #f9fafb; border-color: #d1d5db; }
    .btn-crear {
      display: flex; align-items: center; gap: 7px;
      padding: 10px 22px; background: #2563eb; border: none;
      border-radius: 9px; font-size: 14px; font-weight: 600;
      color: #fff; cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.18s, transform 0.15s;
    }
    .btn-crear:hover { background: #1d4ed8; transform: translateY(-1px); }

    /* ── MODAL CERRAR SESIÓN ── */
    .modal-sesion-card {
      background: #fff; border-radius: 18px;
      width: 100%; max-width: 380px;
      padding: 32px 28px 26px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.2);
      text-align: center;
      opacity: 0; transform: translateY(20px) scale(0.97);
      transition: opacity 0.28s ease, transform 0.28s ease;
    }
    .modal-sesion-card.visible { opacity: 1; transform: translateY(0) scale(1); }
    .modal-sesion-icon {
      width: 56px; height: 56px; border-radius: 50%;
      background: #fef2f2; display: flex;
      align-items: center; justify-content: center;
      margin: 0 auto 16px;
    }
    .modal-sesion-titulo { font-size: 18px; font-weight: 700; color: #111827; margin: 0 0 8px; }
    .modal-sesion-desc { font-size: 13.5px; color: #6b7280; line-height: 1.6; margin: 0 0 24px; }
    .modal-sesion-btns { display: flex; gap: 10px; }
    .btn-sesion-cancelar {
      flex: 1; padding: 11px;
      background: none; border: 1.5px solid #e5e7eb;
      border-radius: 9px; font-size: 14px; font-weight: 500;
      color: #374151; cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.18s;
    }
    .btn-sesion-cancelar:hover { background: #f9fafb; }
    .btn-sesion-confirmar {
      flex: 1; padding: 11px;
      background: #ef4444; border: none;
      border-radius: 9px; font-size: 14px; font-weight: 600;
      color: #fff; cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.18s;
    }
    .btn-sesion-confirmar:hover { background: #dc2626; }

    /* ── TOAST ── */
    #app-toast {
      position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(20px);
      background: #111827; color: #fff;
      padding: 12px 24px; border-radius: 10px;
      font-size: 14px; font-weight: 500;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      z-index: 2000; opacity: 0;
      transition: opacity 0.25s, transform 0.25s;
      white-space: nowrap;
    }
    #app-toast.toast-show { opacity: 1; transform: translateX(-50%) translateY(0); }

    /* ── RESPONSIVE ── */
    @media (max-width: 520px) {
      .modal-card, .modal-nuevo-card { border-radius: 14px; }
    }
  `;
  document.head.appendChild(style);
}

// ── VINCULAR TARJETAS EXISTENTES ──────────────────────────────────────────────
function vincularTarjetas() {
  const tarjetas = document.querySelectorAll(".course-card");
  const ids = ["desarrollo-web", "javascript", "inteligencia-artificial"];

  tarjetas.forEach((card, i) => {
    const id = ids[i];
    if (!id) return;

    card.setAttribute("data-curso", id);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver lecciones: ${cursosData.find(c => c.id === id)?.titulo}`);

    card.addEventListener("click", () => abrirModal(id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirModal(id); }
    });
  });
}

// ── SIDEBAR NAVIGATION ────────────────────────────────────────────────────────
function initSidebar() {
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const path = item.dataset.path;

      // Marcar activo visualmente
      document.querySelectorAll(".menu-item").forEach(m => m.classList.remove("active"));
      item.classList.add("active");

      // Navegar si tiene ruta definida
      if (path && RUTAS_SIDEBAR[path]) {

        const currentPage = window.location.pathname.split("/").pop();
        const targetPage  = RUTAS_SIDEBAR[path].split("/").pop();

        if (currentPage !== targetPage) {
          setTimeout(() => {
            window.location.href = RUTAS_SIDEBAR[path];
          }, 120);
        }

      }
    });
  });
}

// ── BOTÓN AÑADIR MÓDULO ───────────────────────────────────────────────────────
function initBtnAdd() {
  const btn = document.querySelector(".btn-add");
  if (!btn) return;
  btn.addEventListener("click", abrirModalNuevo);
}

// ── EVENTOS MODAL NUEVO MÓDULO ────────────────────────────────────────────────
function initEventosModalNuevo() {
  // Cerrar
  document.getElementById("modal-nuevo-close").addEventListener("click", cerrarModalNuevo);
  document.getElementById("btn-cancelar-nuevo").addEventListener("click", cerrarModalNuevo);
  document.getElementById("modal-nuevo-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) cerrarModalNuevo();
  });

  // Agregar lección
  document.getElementById("btn-agregar-leccion").addEventListener("click", () => {
    agregarFilaLeccion();
  });

  // Crear módulo
  document.getElementById("btn-crear-modulo").addEventListener("click", procesarNuevoModulo);

  // Color picker
  document.querySelectorAll(".color-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".color-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      colorSeleccionado = {
        color: opt.dataset.color,
        bg: opt.dataset.bg
      };
    });
  });
}

// ── CERRAR MODAL LECCIONES ────────────────────────────────────────────────────
function initCerrarModal() {
  document.getElementById("modal-close").addEventListener("click", cerrarModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) cerrarModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      cerrarModal();
      cerrarModalNuevo();
      cerrarModalSesion();
    }
  });
}

// ── CERRAR SESIÓN ─────────────────────────────────────────────────────────────
function initCerrarSesion() {
  const btn = document.querySelector(".cerrar-sesion");
  if (!btn) return;
  btn.addEventListener("click", abrirModalSesion);

  document.getElementById("btn-sesion-cancelar").addEventListener("click", cerrarModalSesion);
  document.getElementById("modal-sesion-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) cerrarModalSesion();
  });
  document.getElementById("btn-sesion-confirmar").addEventListener("click", () => {
    // Redirige al login — ajusta la ruta según tu estructura de carpetas
    window.location.href = "../pages/loginPage.html";
  });
}

// ── NOTIFICACIÓN ──────────────────────────────────────────────────────────────
function initNotificacion() {
  const bell = document.querySelector(".notificacion");
  if (!bell) return;
  bell.addEventListener("click", () => {
    const badge = bell.querySelector(".notificacion-badge");
    if (badge) badge.style.display = "none";
  });
}


/* ══════════════════════════════════════════════════════
   POPUP PERFIL USUARIO
   ══════════════════════════════════════════════════════ */

function inyectarPopupPerfil() {

  const usuario = {
    nombre: "User Pèrez",
    rol: "ADMINISTRADOR",
    area: "TECNOLOGIA",
    email: "adm.perez@abc.com",
    cursos: cursosData.length,
    docentes: 5,
    pendientes: 0,
    avatar: "../images/jefe.png"
  };

  const html = `
  <div id="popup-perfil" class="perfil-popup">

    <button id="perfil-close" class="perfil-popup__close">&times;</button>

    <div class="perfil-popup__banner"></div>

    <div class="perfil-popup__avatar-wrap">
      <img src="${usuario.avatar}" class="perfil-popup__avatar">
    </div>

    <div class="perfil-popup__body">

      <h3 class="perfil-popup__nombre">${usuario.nombre}</h3>

      <p class="perfil-popup__rol">
        ${usuario.rol} · ${usuario.area}
      </p>

      <p class="perfil-popup__email">
        ${usuario.email}
      </p>

      <div class="perfil-popup__stats">

        <div class="perfil-stat">
          <span class="perfil-stat__num">${usuario.cursos}</span>
          <span class="perfil-stat__lbl">CURSOS</span>
        </div>

        <div class="perfil-stat perfil-stat--divider">
          <span class="perfil-stat__num">${usuario.docentes}</span>
          <span class="perfil-stat__lbl">DOCENTES</span>
        </div>

        <div class="perfil-stat">
          <span class="perfil-stat__num">${usuario.pendientes}</span>
          <span class="perfil-stat__lbl">PENDIENTES</span>
        </div>

      </div>

    </div>

  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  inyectarEstilosPerfil();
}

function inyectarEstilosPerfil() {

  const style = document.createElement("style");

  style.textContent = `

  .perfil-popup{
    position:fixed;
    top:70px;
    right:24px;
    width:280px;
    background:#fff;
    border-radius:20px;
    box-shadow:0 14px 40px rgba(0,0,0,.25);
    z-index:8000;
    overflow:hidden;

    opacity:0;
    transform:translateY(-10px) scale(.96);
    pointer-events:none;
    transition:.2s;
  }

  .perfil-popup.is-open{
    opacity:1;
    transform:translateY(0) scale(1);
    pointer-events:auto;
  }

  .perfil-popup__banner{
    height:76px;
    background:linear-gradient(135deg,#a78bfa,#60a5fa,#f472b6);
  }

  .perfil-popup__close{
    position:absolute;
    top:10px;
    right:12px;
    background:rgba(255,255,255,.3);
    border:none;
    color:#fff;
    font-size:18px;
    width:26px;
    height:26px;
    border-radius:50%;
    cursor:pointer;
  }

  .perfil-popup__avatar-wrap{
    display:flex;
    justify-content:center;
    margin-top:-36px;
  }

  .perfil-popup__avatar{
    width:74px;
    height:74px;
    border-radius:50%;
    border:3px solid #fff;
    object-fit:cover;
  }

  .perfil-popup__body{
    padding:12px 20px 20px;
    text-align:center;
  }

  .perfil-popup__nombre{
    font-size:16px;
    font-weight:700;
  }

  .perfil-popup__rol{
    font-size:11px;
    font-weight:700;
    color:#8b5cf6;
  }

  .perfil-popup__email{
    font-size:12px;
    color:#6b7280;
  }

  .perfil-popup__stats{
    display:flex;
    justify-content:center;
    margin-top:12px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    padding:12px 0;
  }

  .perfil-stat{
    flex:1;
    text-align:center;
  }

  .perfil-stat--divider{
    border-left:1px solid #eee;
    border-right:1px solid #eee;
  }

  .perfil-stat__num{
    font-size:20px;
    font-weight:700;
  }

  .perfil-stat__lbl{
    font-size:9px;
    color:#9ca3af;
  }

  .avatar-container{
    cursor:pointer;
  }

  `;

  document.head.appendChild(style);
}

function initPopupPerfil(){

  const avatar = document.querySelector(".avatar-container");
  const popup = document.getElementById("popup-perfil");

  if(!avatar || !popup) return;

  avatar.addEventListener("click",(e)=>{
    e.stopPropagation();
    popup.classList.toggle("is-open");
  });

  document.addEventListener("click",(e)=>{
    if(!popup.contains(e.target) && !avatar.contains(e.target)){
      popup.classList.remove("is-open");
    }
  });

  document.getElementById("perfil-close")?.addEventListener("click",()=>{
    popup.classList.remove("is-open");
  });

}

document.addEventListener("DOMContentLoaded", () => {
  inyectarEstilosModal();
  crearModal();
  crearModalNuevoModulo();
  crearModalCerrarSesion();
  vincularTarjetas();
  initCerrarModal();
  initEventosModalNuevo();
  initCerrarSesion();
  initSidebar();
  initBtnAdd();
  initNotificacion();
});

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  inyectarModal();
  inyectarModalLogout();
  renderGrid();
  initEventos();
});
document.addEventListener("DOMContentLoaded", () => {
  inyectarEstilosModal();
  crearModal();
  crearModalNuevoModulo();
  crearModalCerrarSesion();
  vincularTarjetas();
  initCerrarModal();
  initEventosModalNuevo();
  initCerrarSesion();
  initSidebar();
  initBtnAdd();
  initNotificacion();

  // PERFIL USUARIO
  inyectarPopupPerfil();
  initPopupPerfil();
});