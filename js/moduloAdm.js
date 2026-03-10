/* ═══════════════════════════════════════════════
   MÓDULO ADMINISTRADOR — moduloAdm.js
   ═══════════════════════════════════════════════ */

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

/* ══════════════════════════════════════════════════════
   CERRAR SESIÓN
   ══════════════════════════════════════════════════════ */

function initCerrarSesion() {
  document.querySelector('.cerrar-sesion')
    ?.addEventListener('click', () => {
      document.getElementById('modal-logout').classList.add('is-open');
    });
}

function cerrarModalLogout() {
  document.getElementById('modal-logout').classList.remove('is-open');
}

function ejecutarCerrarSesion() {
  localStorage.removeItem('session_usuario');
  document.querySelector('.dashboard')?.classList.add('page-exit');
  setTimeout(() => { window.location.href = 'loginPage.html'; }, 220);
}

/* ══════════════════════════════════════════════════════
   POPUP PERFIL DE USUARIO
   ══════════════════════════════════════════════════════ */

const USUARIO = {
  nombre    : 'User Pérez',
  rol       : 'ADMINISTRADOR',
  area      : 'SISTEMAS',
  email     : 'user.perez@abc.edu.co',
  cursos    : 8,
  docentes  : 6,
  pendientes: 0,
  avatar    : '../images/jefe.png',
};

function initPerfilPopup() {
  const avatarContainer = document.querySelector('.avatar-container');
  if (!avatarContainer) return;

  avatarContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    const popup = document.getElementById('popup-perfil');
    popup.classList.toggle('is-open');
  });

  document.addEventListener('click', (e) => {
    const popup = document.getElementById('popup-perfil');
    if (popup && !popup.contains(e.target) && !document.querySelector('.avatar-container')?.contains(e.target)) {
      popup.classList.remove('is-open');
    }
  });
}

/* ══════════════════════════════════════════════════════
   BOTONES "ADMINISTRAR PERSONAL"
   ══════════════════════════════════════════════════════ */

function initBotonesAdmin() {
  const rutas = {
    teal  : 'gestionCursosAdm.html',
    blue  : 'gestionDocentes.html',
    purple: 'dashEst.html',
  };

  document.querySelectorAll('.btn-admin').forEach(btn => {
    btn.addEventListener('click', () => {
      const variante = [...btn.classList]
        .find(c => c.startsWith('btn-admin--'))
        ?.replace('btn-admin--', '');

      const ruta = rutas[variante];
      if (ruta) {
        document.querySelector('.main-content')?.classList.add('page-exit');
        setTimeout(() => { window.location.href = ruta; }, 180);
      } else {
        mostrarToast('Módulo próximamente disponible', 'info');
      }
    });
  });
}

/* ══════════════════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════════════════ */

let toastTimer = null;
function mostrarToast(msg, tipo = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast toast--${tipo} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════════════════════
   INYECTAR HTML (SIN BOTÓN DE CERRAR SESIÓN EN POPUP)
   ══════════════════════════════════════════════════════ */

function inyectarUI() {
  const html = `
  <div id="popup-perfil" class="perfil-popup">
    <button class="perfil-popup__close" id="popup-close" aria-label="Cerrar">&times;</button>
    <div class="perfil-popup__banner"></div>
    <div class="perfil-popup__avatar-wrap">
      <img src="${USUARIO.avatar}" alt="${USUARIO.nombre}" class="perfil-popup__avatar">
    </div>
    <div class="perfil-popup__body">
      <h3 class="perfil-popup__nombre">${USUARIO.nombre}</h3>
      <p class="perfil-popup__rol">${USUARIO.rol} · ${USUARIO.area}</p>
      <p class="perfil-popup__email">${USUARIO.email}</p>
      <div class="perfil-popup__stats">
        <div class="perfil-stat">
          <span class="perfil-stat__num">${USUARIO.cursos}</span>
          <span class="perfil-stat__lbl">CURSOS</span>
        </div>
        <div class="perfil-stat perfil-stat--divider">
          <span class="perfil-stat__num">${USUARIO.docentes}</span>
          <span class="perfil-stat__lbl">DOCENTES</span>
        </div>
        <div class="perfil-stat">
          <span class="perfil-stat__num">${USUARIO.pendientes}</span>
          <span class="perfil-stat__lbl">PENDIENTES</span>
        </div>
      </div>
      </div>
  </div>

  <div id="modal-logout" class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal-box modal-box--sm">
      <div class="modal-header">
        <h2 class="modal-title">Cerrar Sesión</h2>
        <button id="logout-close" class="modal-close" aria-label="Cerrar">&times;</button>
      </div>
      <div class="modal-body">
        <div class="logout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </div>
        <p class="confirm-msg" style="text-align:center">
          ¿Deseas cerrar la sesión actual?<br>
          <span style="font-size:12px;color:#9ca3af">Se redirigirá a la página de inicio de sesión.</span>
        </p>
      </div>
      <div class="modal-footer">
        <button id="btn-logout-cancel" class="btn-modal btn-modal--cancel">Cancelar</button>
        <button id="btn-logout-confirm" class="btn-modal btn-modal--delete">Cerrar Sesión</button>
      </div>
    </div>
  </div>

  <div id="toast" class="toast" role="status" aria-live="polite"></div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  inyectarEstilos();

  document.getElementById('logout-close')?.addEventListener('click', cerrarModalLogout);
  document.getElementById('btn-logout-cancel')?.addEventListener('click', cerrarModalLogout);
  document.getElementById('btn-logout-confirm')?.addEventListener('click', ejecutarCerrarSesion);
  document.getElementById('modal-logout')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModalLogout();
  });
  document.getElementById('popup-close')?.addEventListener('click', () => {
    document.getElementById('popup-perfil').classList.remove('is-open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('popup-perfil')?.classList.remove('is-open');
      cerrarModalLogout();
    }
  });
}

function inyectarEstilos() {
  const style = document.createElement('style');
  style.textContent = `
    .perfil-popup {
      position: fixed;
      top: 64px; right: 24px;
      width: 288px;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 12px 48px rgba(0,0,0,.22);
      z-index: 8000;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-10px) scale(.96);
      pointer-events: none;
      transition: opacity .2s ease, transform .2s ease;
    }
    .perfil-popup.is-open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }
    .perfil-popup__banner {
      height: 76px;
      background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 55%, #f472b6 100%);
    }
    .perfil-popup__close {
      position: absolute;
      top: 10px; right: 12px;
      background: rgba(255,255,255,.28);
      border: none; color: #fff;
      font-size: 18px; line-height: 1;
      width: 26px; height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .15s;
      z-index: 2;
    }
    .perfil-popup__close:hover { background: rgba(255,255,255,.48); }

    .perfil-popup__avatar-wrap {
      display: flex; justify-content: center;
      margin-top: -38px; position: relative; z-index: 1;
    }
    .perfil-popup__avatar {
      width: 76px; height: 76px;
      border-radius: 50%; object-fit: cover;
      border: 3px solid #fff;
      box-shadow: 0 4px 14px rgba(0,0,0,.18);
      background: #e0e7ff;
    }
    .perfil-popup__body {
      padding: 10px 20px 20px;
      text-align: center;
      display: flex; flex-direction: column; align-items: center; gap: 4px;
    }
    .perfil-popup__nombre {
      font-size: 15.5px; font-weight: 700; color: #111827; margin-top: 4px;
    }
    .perfil-popup__rol {
      font-size: 11px; font-weight: 700; color: #8b5cf6; letter-spacing: .6px;
    }
    .perfil-popup__email {
      font-size: 12px; color: #6b7280; margin-bottom: 4px;
    }
    .perfil-popup__stats {
      display: flex; justify-content: center;
      width: 100%;
      margin: 10px 0 14px;
      border-top: 1px solid #f3f4f6;
      border-bottom: 1px solid #f3f4f6;
      padding: 14px 0;
    }
    .perfil-stat {
      flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
    }
    .perfil-stat--divider {
      border-left: 1px solid #e5e7eb;
      border-right: 1px solid #e5e7eb;
    }
    .perfil-stat__num {
      font-size: 22px; font-weight: 700; color: #111827; line-height: 1;
    }
    .perfil-stat__lbl {
      font-size: 9.5px; font-weight: 600; color: #9ca3af; letter-spacing: .5px;
    }

    /* Modal styles remained identical */
    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,.45);
      backdrop-filter: blur(3px);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999;
      opacity: 0; pointer-events: none;
      transition: opacity .2s ease;
    }
    .modal-overlay.is-open { opacity: 1; pointer-events: all; }
    .modal-box {
      background: #fff; border-radius: 16px;
      width: 92%; max-width: 440px;
      box-shadow: 0 20px 60px rgba(0,0,0,.25);
      transform: translateY(16px) scale(.97);
      transition: transform .22s ease; overflow: hidden;
    }
    .modal-overlay.is-open .modal-box { transform: translateY(0) scale(1); }
    .modal-box--sm { max-width: 360px; }
    .modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 20px 14px; border-bottom: 1px solid #f0f0f5;
    }
    .modal-title { font-size: 16px; font-weight: 700; color: #111827; }
    .modal-close {
      background: none; border: none; font-size: 22px;
      cursor: pointer; color: #9ca3af; line-height: 1;
      padding: 2px 6px; border-radius: 6px;
      transition: background .15s, color .15s;
    }
    .modal-close:hover { background: #f3f4f6; color: #374151; }
    .modal-body { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }
    .confirm-msg { font-size: 13.5px; color: #374151; line-height: 1.55; }
    .modal-footer {
      display: flex; justify-content: flex-end; gap: 10px;
      padding: 12px 20px 16px; border-top: 1px solid #f0f0f5;
    }
    .btn-modal {
      padding: 9px 20px; border-radius: 9px; border: none;
      font-size: 13.5px; font-weight: 600; cursor: pointer;
      font-family: inherit; transition: background .15s, transform .1s;
    }
    .btn-modal:active { transform: scale(.97); }
    .btn-modal--cancel { background: #f3f4f6; color: #374151; }
    .btn-modal--cancel:hover { background: #e5e7eb; }
    .btn-modal--delete { background: #ef4444; color: #fff; }
    .btn-modal--delete:hover { background: #dc2626; }
    .logout-icon { display: flex; justify-content: center; margin-bottom: 4px; }
    .logout-icon svg { width: 44px; height: 44px; color: #dc2626; opacity: .8; }

    .toast {
      position: fixed; bottom: 28px; right: 28px;
      background: #1f2937; color: #fff;
      padding: 12px 20px; border-radius: 10px;
      font-size: 13.5px; font-weight: 500;
      box-shadow: 0 8px 24px rgba(0,0,0,.25);
      z-index: 10000;
      opacity: 0; transform: translateY(12px);
      transition: opacity .25s, transform .25s;
      pointer-events: none;
    }
    .toast.show { opacity: 1; transform: translateY(0); }
    .toast--success { border-left: 4px solid #22c55e; }
    .toast--error   { border-left: 4px solid #ef4444; }
    .toast--info    { border-left: 4px solid #3b82f6; }

    .page-exit { animation: fadeOut .18s ease forwards; }
    @keyframes fadeOut { to { opacity: 0; transform: translateY(-6px); } }
    .main-content, .sidebar { animation: fadeIn .3s ease both; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .cerrar-sesion { cursor: pointer; user-select: none; }
    .avatar-container {
      border-radius: 10px; padding: 4px 8px;
      transition: background .15s; cursor: pointer;
    }
    .avatar-container:hover { background: #f3f4f6; }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
  inyectarUI();
  initSidebar();
  initCerrarSesion();
  initPerfilPopup();
  initBotonesAdmin();
});