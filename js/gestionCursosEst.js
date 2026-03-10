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

// ── ESTILOS DROPDOWN DOCENTE + MODAL LOGOUT + TOAST ──────────────────────────
function inyectarEstilosUI() {
  const style = document.createElement('style');
  style.textContent = `
    /* ── Dropdown flotante del docente ── */
    .avatar-container { position: relative; }

    .avatar-dropdown {
      position: absolute;
      top: calc(100% + 14px);
      right: 0;
      width: 290px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.18), 0 2px 10px rgba(0,0,0,0.08);
      z-index: 999;
      overflow: hidden;
      transform-origin: top right;
      transform: scale(0.92) translateY(-8px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.24s cubic-bezier(.34,1.56,.64,1),
                  opacity 0.18s ease;
    }
    .avatar-dropdown.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    /* Cabecera con gradiente */
    .dropdown-header {
      position: relative;
      background: linear-gradient(135deg, #a78bfa 0%, #7c9ef8 50%, #93c5fd 100%);
      padding: 28px 20px 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    /* Botón X de cierre */
    .dropdown-close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      border: none;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      transition: background 0.15s;
      font-family: 'Inter', sans-serif;
    }
    .dropdown-close-btn:hover { background: rgba(255,255,255,0.5); }

    /* Avatar centrado con borde blanco */
    .dropdown-avatar {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #ffffff;
      box-shadow: 0 4px 14px rgba(0,0,0,0.15);
      margin-bottom: 10px;
    }
    .dropdown-user-name {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 3px;
    }
    .dropdown-user-role {
      font-size: 11px;
      font-weight: 700;
      color: rgba(255,255,255,0.9);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .dropdown-user-email {
      font-size: 12px;
      color: rgba(255,255,255,0.82);
    }

    /* Estadísticas */
    .dropdown-stats {
      display: flex;
      margin: 16px;
      gap: 8px;
    }
    .dropdown-stat {
      flex: 1;
      background: #f8fafc;
      border: 1px solid #e8edf5;
      border-radius: 12px;
      padding: 10px 6px 8px;
      text-align: center;
    }
    .dropdown-stat-value {
      font-size: 20px;
      font-weight: 800;
      color: #111827;
      line-height: 1;
      margin-bottom: 4px;
    }
    .dropdown-stat-label {
      font-size: 9.5px;
      font-weight: 600;
      color: #9ca3af;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* ── Modal cierre de sesión ── */
    .logout-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15,23,42,0.45);
      backdrop-filter: blur(3px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }
    .logout-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }
    .logout-modal {
      background: #fff;
      border-radius: 20px;
      padding: 32px 28px 24px;
      width: 340px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
      transform: scale(0.9) translateY(10px);
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1);
    }
    .logout-overlay.open .logout-modal {
      transform: scale(1) translateY(0);
    }
    .logout-modal-icon { font-size: 40px; margin-bottom: 14px; }
    .logout-modal-title {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 8px;
    }
    .logout-modal-text {
      font-size: 13.5px;
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .logout-modal-actions { display: flex; gap: 10px; }
    .btn-cancel-logout,
    .btn-confirm-logout {
      flex: 1;
      padding: 11px 0;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      font-family: 'Inter', sans-serif;
      transition: background 0.18s, transform 0.1s;
    }
    .btn-cancel-logout { background: #f1f5f9; color: #374151; }
    .btn-cancel-logout:hover { background: #e2e8f0; }
    .btn-confirm-logout { background: #dc2626; color: #fff; }
    .btn-confirm-logout:hover { background: #b91c1c; transform: translateY(-1px); }

    /* ── Toast ── */
    .toast {
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: #1e293b;
      color: #fff;
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 13.5px;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      z-index: 3000;
      transform: translateY(20px);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .toast.show { transform: translateY(0); opacity: 1; }

    /* ── Sidebar active ── */
    .menu-item.active {
      background: rgba(255,255,255,0.15) !important;
    }
  `;
  document.head.appendChild(style);
}

// ── DROPDOWN DEL DOCENTE ──────────────────────────────────────────────────────
function initDropdownDocente() {
  const avatarContainer = document.querySelector('.avatar-container');
  if (!avatarContainer) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'avatar-dropdown';
  dropdown.innerHTML = `
    <div class="dropdown-header">
      <button class="dropdown-close-btn">✕</button>
      <img src="../images/hacker.png" alt="Foto de perfil" class="dropdown-avatar">
      <span class="dropdown-user-name">Juanita Pérez</span>
      <span class="dropdown-user-role">Estudiante</span>
      <span class="dropdown-user-email">juanita.perez@abc.com</span>
    </div>
    <div class="dropdown-stats">
      <div class="dropdown-stat">
        <div class="dropdown-stat-value">6</div>
        <div class="dropdown-stat-label">Clases</div>
      </div>
      <div class="dropdown-stat">
        <div class="dropdown-stat-value">0</div>
        <div class="dropdown-stat-label">Pendientes</div>
      </div>
    </div>
  `;
  avatarContainer.appendChild(dropdown);

  // Abrir / cerrar al hacer clic en el avatar
  avatarContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    dropdown.classList.toggle('open', !isOpen);
  });

  // Impedir que clics dentro del dropdown lo cierren
  dropdown.addEventListener('click', e => e.stopPropagation());

  // Botón ✕
  dropdown.querySelector('.dropdown-close-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.remove('open');
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', () => dropdown.classList.remove('open'));
}

// ── MODAL DE CIERRE DE SESIÓN ─────────────────────────────────────────────────
function crearLogoutModal() {
  const logoutOverlay = document.createElement('div');
  logoutOverlay.className = 'logout-overlay';
  logoutOverlay.id = 'logout-overlay';
  logoutOverlay.innerHTML = `
    <div class="logout-modal">
      <div class="logout-modal-icon">🔒</div>
      <h2 class="logout-modal-title">¿Cerrar sesión?</h2>
      <p class="logout-modal-text">
        Tu sesión se cerrará y serás redirigido<br>a la página de inicio de sesión.
      </p>
      <div class="logout-modal-actions">
        <button class="btn-cancel-logout">Cancelar</button>
        <button class="btn-confirm-logout">Sí, cerrar sesión</button>
      </div>
    </div>
  `;
  document.body.appendChild(logoutOverlay);

  logoutOverlay.querySelector('.btn-cancel-logout').addEventListener('click', cerrarLogout);
  logoutOverlay.addEventListener('click', e => { if (e.target === logoutOverlay) cerrarLogout(); });
  logoutOverlay.querySelector('.btn-confirm-logout').addEventListener('click', () => {
    cerrarLogout();
    showToast('👋 Cerrando sesión...');
    setTimeout(() => { window.location.href = '../index.html'; }, 1200);
  });
}

function abrirLogout() {
  document.getElementById('logout-overlay')?.classList.add('open');
}
function cerrarLogout() {
  document.getElementById('logout-overlay')?.classList.remove('open');
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
let _toastTimeout = null;
function showToast(message, duration = 2800) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  clearTimeout(_toastTimeout);
  toast.textContent = message;
  toast.classList.add('show');
  _toastTimeout = setTimeout(() => toast.classList.remove('show'), duration);
}

// ── MODAL DE LECCIONES (HTML) ─────────────────────────────────────────────────
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

// ── ESTILOS DEL MODAL DE LECCIONES ───────────────────────────────────────────
function inyectarEstilosModal() {
  const style = document.createElement("style");
  style.textContent = `
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

    .modal-body {
      padding: 6px 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

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

    @media (max-width: 520px) {
      .modal-card { border-radius: 14px; }
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
    card.setAttribute("aria-label", `Ver lecciones: ${cursosData.find(c => c.id === id)?.titulo}`);
    card.addEventListener("click", () => abrirModal(id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirModal(id); }
    });
  });
}

// ── SIDEBAR ───────────────────────────────────────────────────────────────────
function initSidebar() {
  const menuItems = document.querySelectorAll(".menu-item");

  // Marcar el ítem activo según la página actual
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  const pageMapping = {
    'gestionCursosEst': 'cursos',
    'dashboard3': 'dashboard',
  };
  const activePath = pageMapping[currentPage] || 'cursos';
  menuItems.forEach(m => {
    m.classList.toggle('active', m.dataset.path === activePath);
  });

  // Navegación
  const routes = {
    'dashboard': '../pages/dashboard3.html',
    'cursos':    '../pages/gestionCursosEst.html',
  };
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuItems.forEach(m => m.classList.remove("active"));
      item.classList.add("active");
      const url = routes[item.dataset.path];
      if (url) setTimeout(() => { window.location.href = url; }, 150);
    });
  });

  // Botón cerrar sesión del sidebar
  const cerrarSesionBtn = document.querySelector('.cerrar-sesion');
  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener('click', abrirLogout);
  }
}

// ── CERRAR MODAL DE LECCIONES ─────────────────────────────────────────────────
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
    if (badge) badge.style.display = "none";
    showToast('🔔 Sin notificaciones nuevas');
  });
}

/* ══════════════════════════════════════════════════════
   POPUP PERFIL USUARIO
   ══════════════════════════════════════════════════════ */

function inyectarPopupPerfil() {

  const usuario = {
    nombre: "Juanita Pérez",
    rol: "Estudiante",
    area: "",
    email: "juanita.perez@abc.com",
    cursos: docentes.length,
    docentes: docentes.length,
    pendientes: 0,
    avatar: "../images/hacker.png"
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

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  inyectarModal();
  inyectarModalLogout();
  renderGrid();
  initEventos();
});
document.addEventListener('DOMContentLoaded', () => {
  inyectarModal();
  inyectarModalLogout();
  inyectarPopupPerfil();   // NUEVO
  renderGrid();
  initEventos();
  initPopupPerfil();       // NUEVO
});

document.addEventListener("DOMContentLoaded", () => {
  inyectarEstilosUI();       // estilos dropdown, logout, toast
  inyectarEstilosModal();    // estilos modal de lecciones
  initDropdownDocente();     // ventana flotante del docente
  crearLogoutModal();        // modal de confirmación de cierre de sesión
  crearModal();              // modal de lecciones
  vincularTarjetas();        // click en tarjetas de cursos
  initCerrarModal();         // cierre del modal de lecciones
  initSidebar();             // navegación sidebar + cerrar sesión
  initNotificacion();        // badge de notificaciones
});