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

// ── MODAL HTML ───────────────────────────────────────────────────────────────
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

// ── RENDER MODAL ─────────────────────────────────────────────────────────────
function abrirModal(cursoId) {
  const curso = cursosData.find(c => c.id === cursoId);
  if (!curso) return;

  const overlay  = document.getElementById("modal-overlay");
  const card     = document.getElementById("modal-card");
  const body     = document.getElementById("modal-body");

  // Color accent del curso
  card.style.setProperty("--curso-color", curso.color);
  card.style.setProperty("--curso-bg",    curso.colorBg);

  // Módulos
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
  // pequeña animación de entrada
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

// ── ESTILOS DEL MODAL (inyectados en <head>) ─────────────────────────────────
function inyectarEstilosModal() {
  const style = document.createElement("style");
  style.textContent = `
    /* ── OVERLAY ── */
    #modal-overlay {
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
    #modal-overlay.active { display: flex; }

    /* ── CARD ── */
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
    .modal-card.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    /* Scrollbar dentro del modal */
    .modal-card::-webkit-scrollbar { width: 6px; }
    .modal-card::-webkit-scrollbar-track { background: transparent; }
    .modal-card::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }

    /* ── CERRAR ── */
    .modal-close {
      position: sticky;
      top: 14px;
      float: right;
      margin: 14px 14px 0 0;
      background: #f1f5f9;
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #64748b;
      transition: background 0.18s, color 0.18s;
      z-index: 10;
      flex-shrink: 0;
    }
    .modal-close:hover { background: #e2e8f0; color: #1e293b; }

    /* ── HEADER ── */
    .modal-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 20px 24px 18px;
      margin-top: -36px; /* compensa el botón flotante */
      padding-top: 14px;
    }
    .modal-header-thumb {
      width: 88px;
      height: 62px;
      border-radius: 10px;
      overflow: hidden;
      flex-shrink: 0;
      background: #1e293b;
    }
    .modal-header-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .modal-header-info { flex: 1; }
    .modal-titulo {
      font-size: 17px;
      font-weight: 700;
      color: #111827;
      line-height: 1.25;
      margin-bottom: 5px;
    }
    .modal-desc {
      font-size: 13px;
      color: #6b7280;
      line-height: 1.5;
    }

    /* ── BODY ── */
    .modal-body {
      padding: 6px 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* ── MÓDULO ── */
    .modulo-item {
      display: flex;
      margin-top: 20px;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 16px;
      border-radius: 12px;
      background: #f8fafc;
      border: 1px solid #e8edf3;
      transition: background 0.18s, box-shadow 0.18s;
    }
    .modulo-item:hover {
      background: var(--curso-bg, #f0f9ff);
      box-shadow: 0 2px 10px rgba(0,0,0,0.07);
    }
    .modulo-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      padding: 8px;
    }
    .modulo-icon-wrap svg { width: 100%; height: 100%; }
    .modulo-content { flex: 1; }
    .modulo-titulo {
      font-size: 13.5px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .modulo-lecciones {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .modulo-lecciones li {
      font-size: 12.5px;
      color: #475569;
      display: flex;
      align-items: flex-start;
      gap: 7px;
      line-height: 1.45;
    }
    .leccion-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 5px;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 520px) {
      .modal-card { border-radius: 14px; }
      .modal-header { flex-direction: column; }
      .modal-header-thumb { width: 100%; height: 120px; }
    }
  `;
  document.head.appendChild(style);
}

// ── VINCULAR TARJETAS CON CURSOS ──────────────────────────────────────────────
function vincularTarjetas() {
  const tarjetas = document.querySelectorAll(".course-card");
  const ids = ["desarrollo-web", "javascript", "inteligencia-artificial"];

  tarjetas.forEach((card, i) => {
    const id = ids[i];
    if (!id) return;

    card.setAttribute("data-curso", id);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver lecciones: ${cursosData.find(c=>c.id===id)?.titulo}`);

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
      document.querySelectorAll(".menu-item").forEach(m => m.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

// ── BOTÓN AÑADIR MÓDULO ───────────────────────────────────────────────────────
function initBtnAdd() {
  const btn = document.querySelector(".btn-add");
  if (!btn) return;
  btn.addEventListener("click", () => {
    alert("Función para añadir nuevo módulo (en desarrollo).");
  });
}

// ── CERRAR MODAL (overlay click / botón / Escape) ─────────────────────────────
function initCerrarModal() {
  document.getElementById("modal-close").addEventListener("click", cerrarModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) cerrarModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") cerrarModal();
  });
}

// ── NOTIFICACIÓN ──────────────────────────────────────────────────────────────
function initNotificacion() {
  const bell = document.querySelector(".notificacion");
  if (!bell) return;
  bell.addEventListener("click", () => {
    const badge = bell.querySelector(".notificacion-badge");
    if (badge) { badge.style.display = "none"; }
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  inyectarEstilosModal();
  crearModal();
  vincularTarjetas();
  initCerrarModal();
  initSidebar();
  initBtnAdd();
  initNotificacion();
});