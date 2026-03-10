/* ============================================================
   DASHBOARD PRINCIPAL — ADMINISTRADOR
   Institución Educativa ABC
   Archivo: js/dashAdm.js
   Usar en: pages/dashAdm.html → <script src="../js/dashAdm.js"></script>
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. NAVEGACIÓN DEL MENÚ LATERAL
       ============================================================ */
    const menuItems = document.querySelectorAll('.menu-item');

    const rutas = {
        dashboard: 'dashAdm.html',
        cursos:    'gestionCursosAdm.html',
        docentes:  'gestionDocentes.html',
        admin:     'moduloAdm.html',
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const path = item.dataset.path;
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            if (rutas[path]) {
                window.location.href = rutas[path];
            }
        });
    });

    /* ============================================================
       2. MODAL CERRAR SESIÓN
       ============================================================ */
    const cerrarSesionBtn = document.querySelector('.cerrar-sesion');

    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" id="modalCerrarSesion" role="dialog" aria-modal="true">
            <div class="modal-box">
                <h2 class="modal-titulo">¿Cerrar sesión?</h2>
                <p class="modal-desc">¿Estás seguro de que deseas cerrar tu sesión actual?</p>
                <div class="modal-actions">
                    <button class="btn-cancelar" id="btnCancelarSesion">Cancelar</button>
                    <button class="btn-confirmar" id="btnConfirmarSesion">Sí, cerrar sesión</button>
                </div>
            </div>
        </div>
    `);

    const modalOverlay = document.getElementById('modalCerrarSesion');
    const btnCancelar  = document.getElementById('btnCancelarSesion');
    const btnConfirmar = document.getElementById('btnConfirmarSesion');

    cerrarSesionBtn?.addEventListener('click', () => modalOverlay.classList.add('modal-visible'));
    btnCancelar?.addEventListener('click', () => modalOverlay.classList.remove('modal-visible'));
    modalOverlay?.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('modal-visible');
    });
    btnConfirmar?.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modalOverlay.classList.remove('modal-visible');
    });

    /* ============================================================
       3. PANEL DE NOTIFICACIONES
       ============================================================ */
    const notificacionBtn   = document.querySelector('.notificacion');
    const notificacionBadge = document.querySelector('.notificacion-badge');

    const notificaciones = [
        { id: 1, texto: 'Nuevo docente registrado: Prof. Martínez',   tiempo: 'Hace 5 min',   leida: false },
        { id: 2, texto: 'El curso "Matemáticas 10°" fue actualizado.', tiempo: 'Hace 1 hora',  leida: false },
        { id: 3, texto: 'Reporte mensual listo para descargar.',       tiempo: 'Hace 3 horas', leida: false },
    ];

    notificacionBtn?.insertAdjacentHTML('afterend', `
        <div class="notif-panel" id="notifPanel">
            <div class="notif-panel__header">
                <span class="notif-panel__titulo">Notificaciones</span>
                <button class="notif-panel__marcar" id="btnMarcarLeidas">Marcar todas como leídas</button>
            </div>
            <ul class="notif-panel__lista" id="notifLista"></ul>
            <div class="notif-panel__footer">Ver todas las notificaciones</div>
        </div>
    `);

    const notifPanel = document.getElementById('notifPanel');
    const notifLista = document.getElementById('notifLista');
    const btnMarcar  = document.getElementById('btnMarcarLeidas');

    function renderNotificaciones() {
        notifLista.innerHTML = '';
        notificaciones.forEach(n => {
            const li = document.createElement('li');
            li.className = `notif-item${n.leida ? '' : ' notif-item--nueva'}`;
            li.innerHTML = `
                <div class="notif-item__contenido">
                    <p class="notif-item__texto">${n.texto}</p>
                    <span class="notif-item__tiempo">${n.tiempo}</span>
                </div>
                ${!n.leida ? '<span class="notif-item__punto"></span>' : ''}
            `;
            li.addEventListener('click', () => {
                n.leida = true;
                actualizarBadge();
                renderNotificaciones();
            });
            notifLista.appendChild(li);
        });
    }

    function actualizarBadge() {
        const sinLeer = notificaciones.filter(n => !n.leida).length;
        notificacionBadge.textContent = sinLeer;
        notificacionBadge.style.display = sinLeer > 0 ? 'inline-block' : 'none';
    }

    notificacionBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const visible = notifPanel.classList.toggle('notif-panel--visible');
        if (visible) {
            renderNotificaciones();
            avatarDropdown?.classList.remove('avatar-dropdown--visible');
        }
    });

    btnMarcar?.addEventListener('click', () => {
        notificaciones.forEach(n => n.leida = true);
        actualizarBadge();
        renderNotificaciones();
    });

    document.addEventListener('click', (e) => {
        if (notifPanel && !notifPanel.contains(e.target) && !notificacionBtn.contains(e.target)) {
            notifPanel.classList.remove('notif-panel--visible');
        }
    });

    actualizarBadge();

    /* ============================================================
       4. DROPDOWN AVATAR / PERFIL
       ============================================================ */
    const avatarContainer = document.querySelector('.avatar-container');

    avatarContainer?.insertAdjacentHTML('afterend', `
        <div class="avatar-dropdown" id="avatarDropdown" role="menu">
            <div class="avatar-dropdown__info">
                <img src="../images/jefe.png" alt="" class="avatar-dropdown__img">
                <div>
                    <p class="avatar-dropdown__nombre">User Pérez</p>
                    <p class="avatar-dropdown__rol">Administrador</p>
                </div>
            </div>
            <hr class="avatar-dropdown__divider">
            <ul class="avatar-dropdown__menu">
                <li class="avatar-dropdown__item">
                    <img src="../images/administrador.png" alt="" class="menu-icon"> Mi Perfil
                </li>
                <li class="avatar-dropdown__item">
                    <img src="../images/dashboard.png" alt="" class="menu-icon"> Configuración
                </li>
            </ul>
            <hr class="avatar-dropdown__divider">
            <div class="avatar-dropdown__item avatar-dropdown__item--salir" id="dropdownCerrarSesion">
                <img src="../images/sesion.png" alt="" class="menu-icon"> Cerrar Sesión
            </div>
        </div>
    `);

    const avatarDropdown = document.getElementById('avatarDropdown');
    const dropdownCerrar = document.getElementById('dropdownCerrarSesion');

    avatarContainer?.addEventListener('click', (e) => {
        e.stopPropagation();
        avatarDropdown.classList.toggle('avatar-dropdown--visible');
        notifPanel?.classList.remove('notif-panel--visible');
    });

    dropdownCerrar?.addEventListener('click', () => {
        avatarDropdown.classList.remove('avatar-dropdown--visible');
        modalOverlay.classList.add('modal-visible');
    });

    document.addEventListener('click', (e) => {
        if (avatarDropdown && !avatarDropdown.contains(e.target) && !avatarContainer.contains(e.target)) {
            avatarDropdown.classList.remove('avatar-dropdown--visible');
        }
    });

    /* ============================================================
       ESTILOS DINÁMICOS — todos en un solo bloque <style>
       ============================================================ */
    const estilos = document.createElement('style');
    estilos.textContent = `

        /* --- Modal --- */
        .modal-overlay {
            display: none; position: fixed; inset: 0;
            background: rgba(0,0,0,0.45); z-index: 1000;
            align-items: center; justify-content: center;
        }
        .modal-overlay.modal-visible { display: flex; }
        .modal-box {
            background: #fff; border-radius: 18px; padding: 2rem 2.5rem;
            max-width: 400px; width: 90%; text-align: center;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
            animation: modalEntrada 0.2s ease;
        }
        @keyframes modalEntrada {
            from { transform: scale(0.92); opacity: 0; }
            to   { transform: scale(1);    opacity: 1; }
        }
        .modal-titulo  { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; color: #111; }
        .modal-desc    { color: #6b7280; font-size: 0.95rem; margin-bottom: 1.5rem; }
        .modal-actions { display: flex; gap: 1rem; justify-content: center; }
        .btn-cancelar  {
            padding: 0.6rem 1.4rem; border-radius: 10px; border: 1px solid #d1d5db;
            background: #fff; cursor: pointer; font-weight: 500; transition: background 0.15s;
        }
        .btn-cancelar:hover  { background: #f3f4f6; }
        .btn-confirmar {
            padding: 0.6rem 1.4rem; border-radius: 10px; border: none;
            background: #ef4444; color: #fff; cursor: pointer; font-weight: 600; transition: background 0.15s;
        }
        .btn-confirmar:hover { background: #dc2626; }

        /* --- Notificaciones --- */
        .notificacion { position: relative; }
        .notif-panel {
            display: none; position: absolute; top: calc(100% + 12px); right: 0;
            width: 320px; background: #fff; border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.14); z-index: 500;
            overflow: hidden; animation: fadeDown 0.18s ease;
        }
        .notif-panel--visible { display: block; }
        @keyframes fadeDown {
            from { transform: translateY(-8px); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
        }
        .notif-panel__header {
            display: flex; justify-content: space-between;
            align-items: center; padding: 1rem 1.2rem 0.6rem;
        }
        .notif-panel__titulo { font-weight: 700; font-size: 0.95rem; color: #111; }
        .notif-panel__marcar {
            font-size: 0.75rem; color: #1e5ba0; background: none;
            border: none; cursor: pointer; font-weight: 500;
        }
        .notif-panel__marcar:hover { text-decoration: underline; }
        .notif-panel__lista { list-style: none; max-height: 260px; overflow-y: auto; }
        .notif-item {
            display: flex; align-items: center; justify-content: space-between;
            padding: 0.75rem 1.2rem; cursor: pointer;
            border-bottom: 1px solid #f3f4f6; transition: background 0.12s;
        }
        .notif-item:hover    { background: #f9fafb; }
        .notif-item--nueva   { background: #eff6ff; }
        .notif-item__texto   { font-size: 0.83rem; color: #222; margin-bottom: 0.2rem; line-height: 1.4; }
        .notif-item__tiempo  { font-size: 0.75rem; color: #9ca3af; }
        .notif-item__punto   {
            width: 8px; height: 8px; border-radius: 50%;
            background: #1e5ba0; flex-shrink: 0; margin-left: 0.8rem;
        }
        .notif-panel__footer {
            padding: 0.7rem 1.2rem; text-align: center;
            font-size: 0.8rem; color: #1e5ba0; cursor: pointer; font-weight: 500;
        }
        .notif-panel__footer:hover { background: #f0f4ff; }

        /* --- Dropdown avatar --- */
        .main-header { position: relative; }
        .avatar-dropdown {
            display: none; position: absolute; top: calc(100% + 8px); right: 2rem;
            width: 230px; background: #fff; border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.14); z-index: 500;
            overflow: hidden; animation: fadeDown 0.18s ease;
        }
        .avatar-dropdown--visible { display: block; }
        .avatar-dropdown__info    { display: flex; align-items: center; gap: 0.8rem; padding: 1rem 1.2rem; }
        .avatar-dropdown__img     { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
        .avatar-dropdown__nombre  { font-weight: 700; font-size: 0.9rem; color: #111; }
        .avatar-dropdown__rol     { font-size: 0.78rem; color: #6b7280; }
        .avatar-dropdown__divider { border: none; border-top: 1px solid #f3f4f6; margin: 0; }
        .avatar-dropdown__menu    { list-style: none; padding: 0.4rem 0; }
        .avatar-dropdown__item {
            display: flex; align-items: center; gap: 0.7rem;
            padding: 0.65rem 1.2rem; font-size: 0.88rem;
            color: #333; cursor: pointer; transition: background 0.12s;
        }
        .avatar-dropdown__item:hover        { background: #f3f4f6; }
        .avatar-dropdown__item--salir       { color: #ef4444; margin-bottom: 0.3rem; }
        .avatar-dropdown__item--salir:hover { background: #fff5f5; }
    `;
    document.head.appendChild(estilos);

});