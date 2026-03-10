/* ═══════════════════════════════════════════════
   GESTIÓN DE DOCENTES — script.js
   ═══════════════════════════════════════════════ */

/* ── DATOS INICIALES ── */
const STORAGE_KEY = 'gestion_docentes';

const GRADIENTS = [
  'blue-purple',
  'green-blue',
  'pink-purple',
  'pink-orange',
  'orange-yellow',
  'purple-pink',
];

const docentesIniciales = [
  {
    id: 1,
    nombre: 'Juan Pérez (Bio)',
    gradiente: 'blue-purple',
    cursos: ['MAT101 Matemáticas', 'BIO102 Biología General'],
  },
  {
    id: 2,
    nombre: 'Carlos Ruiz (Inf)',
    gradiente: 'green-blue',
    cursos: ['INF303 Programación Web', 'INF304 Programación Web', 'INF305 Programación Básica'],
  },
  {
    id: 3,
    nombre: 'Juan Pérez',
    gradiente: 'pink-purple',
    cursos: ['MAT101 Matemáticas', 'BIO102 Biología General'],
  },
  {
    id: 4,
    nombre: 'Laura Gómez',
    gradiente: 'pink-orange',
    cursos: ['LET101 Literatura', 'LET102 Gramática Española'],
  },
  {
    id: 5,
    nombre: 'David Ortega (Ing)',
    gradiente: 'orange-yellow',
    cursos: ['ING201 Inglés Básico', 'ING202 Inglés Avanzado'],
  },
  {
    id: 6,
    nombre: 'Sofía Morales (Mat)',
    gradiente: 'purple-pink',
    cursos: ['MAT103 Álgebra 2'],
  },
];

/* ── ESTADO ── */
let docentes = cargarDocentes();
let idEditando = null;        // null = modo crear, número = modo editar
let idEliminando = null;

/* ── UTILIDADES ── */
function cargarDocentes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [...docentesIniciales];
  } catch {
    return [...docentesIniciales];
  }
}

function guardarDocentes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(docentes));
}

function siguienteId() {
  return docentes.length ? Math.max(...docentes.map(d => d.id)) + 1 : 1;
}

/* ══════════════════════════════════════════════════════
   RENDER
   ══════════════════════════════════════════════════════ */
function renderGrid(lista = docentes) {
  const grid = document.querySelector('.docentes-grid');
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        <p>No se encontraron docentes</p>
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(d => crearTarjetaHTML(d)).join('');
  attachCardEvents();
}

function crearTarjetaHTML(d) {
  const cursosHTML = d.cursos.map(c => `<li>${escHTML(c)}</li>`).join('');
  return `
    <article class="docente-card" data-id="${d.id}">
      <div class="docente-card__header docente-card__header--${d.gradiente}">
        <img src="../images/maestro.png" alt="${escHTML(d.nombre)}" class="docente-card__avatar">
        <span class="docente-card__nombre">${escHTML(d.nombre)}</span>
      </div>
      <div class="docente-card__body">
        <span class="docente-card__label">Cursos asignados</span>
        <ul class="docente-card__cursos">${cursosHTML}</ul>
      </div>
      <div class="docente-card__actions">
        <button class="btn-action btn-action--edit js-edit" data-id="${d.id}" title="Editar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="btn-action btn-action--delete js-delete" data-id="${d.id}" title="Eliminar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/>
            <path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>
    </article>`;
}

function escHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════════════════════
   MODAL CREAR / EDITAR
   ══════════════════════════════════════════════════════ */
function inyectarModal() {
  const gradientOptions = GRADIENTS.map(g =>
    `<button type="button" class="gradient-swatch gradient-swatch--${g}" data-grad="${g}" title="${g}"></button>`
  ).join('');

  const html = `
  <!-- ── MODAL FORMULARIO ── -->
  <div id="modal-docente" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-box">
      <div class="modal-header">
        <h2 id="modal-title" class="modal-title">Añadir Docente</h2>
        <button id="modal-close" class="modal-close" aria-label="Cerrar">&times;</button>
      </div>
      <div class="modal-body">
        <label class="form-label" for="input-nombre">Nombre del docente</label>
        <input id="input-nombre" class="form-input" type="text" placeholder="Ej. Ana García (Fis)" maxlength="60">

        <label class="form-label">Color de tarjeta</label>
        <div class="gradient-picker">${gradientOptions}</div>
        <input type="hidden" id="input-gradiente" value="blue-purple">

        <label class="form-label" for="input-cursos">
          Cursos asignados <span class="form-hint">(uno por línea)</span>
        </label>
        <textarea id="input-cursos" class="form-input form-textarea" placeholder="MAT101 Matemáticas&#10;BIO102 Biología General" rows="4" maxlength="400"></textarea>

        <p id="form-error" class="form-error" hidden></p>
      </div>
      <div class="modal-footer">
        <button id="btn-cancel" class="btn-modal btn-modal--cancel">Cancelar</button>
        <button id="btn-save"   class="btn-modal btn-modal--save">Guardar</button>
      </div>
    </div>
  </div>

  <!-- ── MODAL CONFIRMACIÓN ELIMINAR ── -->
  <div id="modal-confirm" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
    <div class="modal-box modal-box--sm">
      <div class="modal-header">
        <h2 id="confirm-title" class="modal-title">Eliminar docente</h2>
        <button id="confirm-close" class="modal-close" aria-label="Cerrar">&times;</button>
      </div>
      <div class="modal-body">
        <p class="confirm-msg">¿Estás seguro de que deseas eliminar a <strong id="confirm-nombre"></strong>? Esta acción no se puede deshacer.</p>
      </div>
      <div class="modal-footer">
        <button id="btn-confirm-cancel" class="btn-modal btn-modal--cancel">Cancelar</button>
        <button id="btn-confirm-delete" class="btn-modal btn-modal--delete">Eliminar</button>
      </div>
    </div>
  </div>

  <!-- ── TOAST ── -->
  <div id="toast" class="toast" role="status" aria-live="polite"></div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  inyectarEstilosModal();
}

function inyectarEstilosModal() {
  const style = document.createElement('style');
  style.textContent = `
    /* Overlay */
    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,.45);
      backdrop-filter: blur(3px);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999;
      opacity: 0; pointer-events: none;
      transition: opacity .2s ease;
    }
    .modal-overlay.is-open {
      opacity: 1; pointer-events: all;
    }

    /* Caja */
    .modal-box {
      background: #fff;
      border-radius: 16px;
      width: 92%; max-width: 440px;
      box-shadow: 0 20px 60px rgba(0,0,0,.25);
      transform: translateY(16px) scale(.97);
      transition: transform .22s ease;
      overflow: hidden;
    }
    .modal-overlay.is-open .modal-box {
      transform: translateY(0) scale(1);
    }
    .modal-box--sm { max-width: 360px; }

    /* Header */
    .modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 20px 14px;
      border-bottom: 1px solid #f0f0f5;
    }
    .modal-title {
      font-size: 16px; font-weight: 700; color: #111827;
    }
    .modal-close {
      background: none; border: none; font-size: 22px;
      cursor: pointer; color: #9ca3af; line-height: 1;
      padding: 2px 6px; border-radius: 6px;
      transition: background .15s, color .15s;
    }
    .modal-close:hover { background: #f3f4f6; color: #374151; }

    /* Body */
    .modal-body { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }
    .form-label {
      font-size: 12px; font-weight: 600; color: #374151;
      display: flex; align-items: center; gap: 6px;
    }
    .form-hint { font-weight: 400; color: #9ca3af; }
    .form-input {
      width: 100%; padding: 9px 12px;
      border: 1.5px solid #e5e7eb; border-radius: 9px;
      font-size: 13.5px; font-family: inherit; color: #111827;
      outline: none; transition: border-color .2s, box-shadow .2s;
      resize: none;
    }
    .form-input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,.1);
    }
    .form-textarea { min-height: 90px; }
    .form-error {
      font-size: 12px; color: #ef4444; font-weight: 500;
      padding: 6px 10px; background: #fef2f2;
      border-radius: 7px; border-left: 3px solid #ef4444;
    }

    /* Gradient picker */
    .gradient-picker { display: flex; gap: 8px; flex-wrap: wrap; }
    .gradient-swatch {
      width: 28px; height: 28px; border-radius: 50%;
      border: 2.5px solid transparent;
      cursor: pointer; transition: transform .15s, border-color .15s;
    }
    .gradient-swatch:hover { transform: scale(1.15); }
    .gradient-swatch.selected { border-color: #1d4ed8; transform: scale(1.18); }

    .gradient-swatch--blue-purple   { background: linear-gradient(135deg, #ced4db, #a78bfa); }
    .gradient-swatch--green-blue    { background: linear-gradient(135deg, #34d399, #60a5fa); }
    .gradient-swatch--pink-purple   { background: linear-gradient(135deg, #f472b6, #a78bfa); }
    .gradient-swatch--pink-orange   { background: linear-gradient(135deg, #f472b6, #fb923c); }
    .gradient-swatch--orange-yellow { background: linear-gradient(135deg, #fb923c, #fbbf24); }
    .gradient-swatch--purple-pink   { background: linear-gradient(135deg, #a78bfa, #f472b6); }

    /* Footer */
    .modal-footer {
      display: flex; justify-content: flex-end; gap: 10px;
      padding: 12px 20px 16px;
      border-top: 1px solid #f0f0f5;
    }
    .btn-modal {
      padding: 9px 20px; border-radius: 9px; border: none;
      font-size: 13.5px; font-weight: 600; cursor: pointer;
      font-family: inherit; transition: background .15s, transform .1s;
    }
    .btn-modal:active { transform: scale(.97); }
    .btn-modal--cancel { background: #f3f4f6; color: #374151; }
    .btn-modal--cancel:hover { background: #e5e7eb; }
    .btn-modal--save { background: #2563eb; color: #fff; }
    .btn-modal--save:hover { background: #1d4ed8; }
    .btn-modal--delete { background: #ef4444; color: #fff; }
    .btn-modal--delete:hover { background: #dc2626; }

    /* Confirm msg */
    .confirm-msg { font-size: 13.5px; color: #374151; line-height: 1.55; }

    /* Toast */
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
    .toast.show {
      opacity: 1; transform: translateY(0);
    }
    .toast--success { border-left: 4px solid #22c55e; }
    .toast--error   { border-left: 4px solid #ef4444; }

    /* Empty state */
    .empty-state {
      grid-column: 1/-1;
      display: flex; flex-direction: column; align-items: center;
      gap: 12px; padding: 60px 20px;
      color: #9ca3af;
    }
    .empty-state svg { width: 48px; height: 48px; opacity: .4; }
    .empty-state p { font-size: 14px; }
  `;
  document.head.appendChild(style);
}

/* ══════════════════════════════════════════════════════
   ABRIR / CERRAR MODALES
   ══════════════════════════════════════════════════════ */
function abrirModalFormulario(docente = null) {
  idEditando = docente ? docente.id : null;

  const overlay = document.getElementById('modal-docente');
  const titulo  = document.getElementById('modal-title');
  const inputNombre = document.getElementById('input-nombre');
  const inputCursos = document.getElementById('input-cursos');
  const inputGrad   = document.getElementById('input-gradiente');
  const error       = document.getElementById('form-error');

  titulo.textContent = docente ? 'Editar Docente' : 'Añadir Nuevo Docente';
  inputNombre.value  = docente ? docente.nombre : '';
  inputCursos.value  = docente ? docente.cursos.join('\n') : '';
  const gradActivo   = docente ? docente.gradiente : GRADIENTS[0];
  inputGrad.value    = gradActivo;

  // Marcar swatch activo
  document.querySelectorAll('.gradient-swatch').forEach(sw => {
    sw.classList.toggle('selected', sw.dataset.grad === gradActivo);
  });

  error.hidden = true;
  overlay.classList.add('is-open');
  setTimeout(() => inputNombre.focus(), 50);
}

function cerrarModalFormulario() {
  document.getElementById('modal-docente').classList.remove('is-open');
  idEditando = null;
}

function abrirModalConfirm(docente) {
  idEliminando = docente.id;
  document.getElementById('confirm-nombre').textContent = docente.nombre;
  document.getElementById('modal-confirm').classList.add('is-open');
}

function cerrarModalConfirm() {
  document.getElementById('modal-confirm').classList.remove('is-open');
  idEliminando = null;
}

/* ══════════════════════════════════════════════════════
   CRUD
   ══════════════════════════════════════════════════════ */
function guardarDocente() {
  const nombre  = document.getElementById('input-nombre').value.trim();
  const cursos  = document.getElementById('input-cursos').value
    .split('\n').map(l => l.trim()).filter(Boolean);
  const gradiente = document.getElementById('input-gradiente').value;
  const error   = document.getElementById('form-error');

  // Validación
  if (!nombre) {
    mostrarError(error, 'El nombre del docente es obligatorio.');
    return;
  }
  if (cursos.length === 0) {
    mostrarError(error, 'Agrega al menos un curso asignado.');
    return;
  }

  if (idEditando !== null) {
    // EDITAR
    const idx = docentes.findIndex(d => d.id === idEditando);
    if (idx !== -1) {
      docentes[idx] = { ...docentes[idx], nombre, cursos, gradiente };
      mostrarToast('Docente actualizado correctamente', 'success');
    }
  } else {
    // CREAR
    docentes.push({ id: siguienteId(), nombre, cursos, gradiente });
    mostrarToast('Docente añadido correctamente', 'success');
  }

  guardarDocentes();
  renderGrid(filtrarPorBusqueda());
  cerrarModalFormulario();
}

function eliminarDocente() {
  if (idEliminando === null) return;
  docentes = docentes.filter(d => d.id !== idEliminando);
  guardarDocentes();
  renderGrid(filtrarPorBusqueda());
  cerrarModalConfirm();
  mostrarToast('Docente eliminado', 'error');
}

/* ── Buscar ── */
function filtrarPorBusqueda() {
  const q = (document.querySelector('.search-input')?.value || '').toLowerCase().trim();
  if (!q) return docentes;
  return docentes.filter(d =>
    d.nombre.toLowerCase().includes(q) ||
    d.cursos.some(c => c.toLowerCase().includes(q))
  );
}

/* ══════════════════════════════════════════════════════
   FEEDBACK
   ══════════════════════════════════════════════════════ */
function mostrarError(el, msg) {
  el.textContent = msg;
  el.hidden = false;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

let toastTimer = null;
function mostrarToast(msg, tipo = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast toast--${tipo} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════════════════════
   EVENTOS
   ══════════════════════════════════════════════════════ */
function attachCardEvents() {
  document.querySelectorAll('.js-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = docentes.find(x => x.id === +btn.dataset.id);
      if (d) abrirModalFormulario(d);
    });
  });

  document.querySelectorAll('.js-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = docentes.find(x => x.id === +btn.dataset.id);
      if (d) abrirModalConfirm(d);
    });
  });
}

function initEventos() {
  // Botón "Añadir Nuevo Docente"
  document.querySelector('.btn-add')?.addEventListener('click', () => abrirModalFormulario());

  // Buscador
  document.querySelector('.search-input')?.addEventListener('input', () => {
    renderGrid(filtrarPorBusqueda());
  });

  // Modal formulario — cerrar
  document.getElementById('modal-close')?.addEventListener('click', cerrarModalFormulario);
  document.getElementById('btn-cancel')?.addEventListener('click', cerrarModalFormulario);
  document.getElementById('modal-docente')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModalFormulario();
  });

  // Modal formulario — guardar
  document.getElementById('btn-save')?.addEventListener('click', guardarDocente);
  document.getElementById('input-nombre')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') guardarDocente();
  });

  // Gradient swatches
  document.querySelectorAll('.gradient-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      document.querySelectorAll('.gradient-swatch').forEach(s => s.classList.remove('selected'));
      sw.classList.add('selected');
      document.getElementById('input-gradiente').value = sw.dataset.grad;
    });
  });

  // Modal confirmación — cerrar
  document.getElementById('confirm-close')?.addEventListener('click', cerrarModalConfirm);
  document.getElementById('btn-confirm-cancel')?.addEventListener('click', cerrarModalConfirm);
  document.getElementById('modal-confirm')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModalConfirm();
  });

  // Modal confirmación — eliminar
  document.getElementById('btn-confirm-delete')?.addEventListener('click', eliminarDocente);

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      cerrarModalFormulario();
      cerrarModalConfirm();
    }
  });

  // ── SIDEBAR NAVEGACIÓN ──
  initSidebar();

  // ── CERRAR SESIÓN ──
  initCerrarSesion();
}

/* ══════════════════════════════════════════════════════
   SIDEBAR — NAVEGACIÓN
   ══════════════════════════════════════════════════════ */

// Mapa: data-path → ruta del archivo HTML relativo a pages/gestionDocentes.html
const RUTAS_SIDEBAR = {
  dashboard : 'dashboard1.html',
  cursos    : 'gestionCursosAdm.html',
  docentes  : 'gestionDocentes.html',
  lecciones : 'dashDoc.html',
  admin     : 'moduloAdm.html',
};

const ARCHIVO_A_PATH = {
  'dashboard1.html'      : 'dashboard',
  'gestionCursosAdm.html': 'cursos',
  'gestionDocentes.html' : 'docentes',
  'dashDoc.html'         : 'lecciones',
  'moduloAdm.html'       : 'admin',
};

function initSidebar() {
  const items = document.querySelectorAll('.menu-item[data-path]');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const path = item.dataset.path;

      // Si ya estamos en esta sección, no hacer nada
      if (item.classList.contains('active')) return;

      const ruta = RUTAS_SIDEBAR[path];

      if (ruta) {
        // Animación de salida rápida antes de navegar
        document.querySelector('.main-content')?.classList.add('page-exit');
        setTimeout(() => {
          window.location.href = ruta;
        }, 180);
      } else {
        // Sección sin página aún — feedback visual
        mostrarToast(`Módulo "${item.querySelector('span')?.innerText.replace('\n', ' ')}" próximamente`, 'info');
      }

      // Marcar activo visualmente de inmediato
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Resaltar el item correcto según la URL actual
  const paginaActual = window.location.pathname.split('/').pop();
  // Mapa inverso nombre-archivo → data-path
  const ARCHIVO_A_PATH = {
    'dashAdm.html'       : 'dashboard',
    'gestionCursosAdm.html': 'cursos',
    'gestionDocentes.html' : 'docentes',
    'dashDoc.html'         : 'lecciones',
    'moduloAdm.html'       : 'admin',
  };
  const pathActivo = ARCHIVO_A_PATH[paginaActual];
  items.forEach(item => {
    item.classList.toggle('active', item.dataset.path === pathActivo);
  });
}

/* ══════════════════════════════════════════════════════
   CERRAR SESIÓN
   ══════════════════════════════════════════════════════ */
function initCerrarSesion() {
  const btnCerrar = document.querySelector('.cerrar-sesion');
  if (!btnCerrar) return;

  btnCerrar.addEventListener('click', () => {
    abrirModalCerrarSesion();
  });
}

function abrirModalCerrarSesion() {
  document.getElementById('modal-logout').classList.add('is-open');
}

function cerrarModalCerrarSesion() {
  document.getElementById('modal-logout').classList.remove('is-open');
}

function ejecutarCerrarSesion() {
  // Limpiar sesión del localStorage (NO borra los datos de docentes)
  localStorage.removeItem('session_usuario');

  // Animación de salida
  document.querySelector('.dashboard')?.classList.add('page-exit');

  setTimeout(() => {
    window.location.href = 'loginPage.html';
  }, 220);
}

/* ── Inyectar modal de cerrar sesión + estilos extra ── */
function inyectarModalLogout() {
  const html = `
  <div id="modal-logout" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="logout-title">
    <div class="modal-box modal-box--sm">
      <div class="modal-header">
        <h2 id="logout-title" class="modal-title">Cerrar Sesión</h2>
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
        <button id="btn-logout-confirm" class="btn-modal btn-modal--logout">Cerrar Sesión</button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  // Estilos extra para logout y animaciones de página
  const style = document.createElement('style');
  style.textContent = `
    .btn-modal--logout {
      background: #dc2626; color: #fff;
    }
    .btn-modal--logout:hover { background: #b91c1c; }

    .logout-icon {
      display: flex; justify-content: center; margin-bottom: 4px;
    }
    .logout-icon svg {
      width: 44px; height: 44px;
      color: #dc2626; opacity: .8;
    }

    /* Animación salida de página */
    .page-exit {
      animation: fadeOut .18s ease forwards;
    }
    @keyframes fadeOut {
      to { opacity: 0; transform: translateY(-6px); }
    }

    /* Animación entrada de página */
    .main-content, .sidebar {
      animation: fadeIn .3s ease both;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Toast variante info */
    .toast--info { border-left: 4px solid #3b82f6; }

    /* Hover sidebar - cursor pointer en cerrar sesión */
    .cerrar-sesion { cursor: pointer; user-select: none; }
  `;
  document.head.appendChild(style);

  // Eventos del modal logout
  document.getElementById('logout-close')?.addEventListener('click', cerrarModalCerrarSesion);
  document.getElementById('btn-logout-cancel')?.addEventListener('click', cerrarModalCerrarSesion);
  document.getElementById('modal-logout')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModalCerrarSesion();
  });
  document.getElementById('btn-logout-confirm')?.addEventListener('click', ejecutarCerrarSesion);
}

/* ══════════════════════════════════════════════════════
   POPUP PERFIL USUARIO
   ══════════════════════════════════════════════════════ */

function inyectarPopupPerfil() {

  const usuario = {
    nombre: "User Pérez",
    rol: "ADMINISTRADOR",
    area: "SISTEMAS",
    email: "adm.perez@abc.com",
    cursos: docentes.length,
    docentes: docentes.length,
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

/* ══════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════ */
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