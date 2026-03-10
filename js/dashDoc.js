/* ═══════════════════════════════════════════════
   DASHBOARD DOCENTE — script.js
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════════════
     ESTILOS DINÁMICOS — se inyectan primero
     ═══════════════════════════════════════════════ */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOutUp {
      from { opacity: 1; transform: translateY(0); }
      to   { opacity: 0; transform: translateY(-10px); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInOverlay {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    /* ── Notif panel ── */
    .notif-panel__header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 14px 16px 10px; border-bottom: 1px solid #f3f4f6;
      font-size: 14px; font-weight: 600; color: #111827;
    }
    .notif-panel__mark-all {
      font-size: 11px; color: #6b7280; background: none;
      border: none; cursor: pointer; text-decoration: underline;
    }
    .notif-panel__list { list-style: none; padding: 8px 0; }
    .notif-panel__item {
      display: flex; align-items: flex-start; gap: 10px;
      padding: 10px 16px; cursor: pointer; transition: background 0.15s;
    }
    .notif-panel__item:hover { background: #f9fafb; }
    .notif-panel__item p  { font-size: 13px; color: #374151; margin: 0; line-height: 1.4; }
    .notif-panel__item small { font-size: 11px; color: #9ca3af; }
    .notif-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
    .notif-panel__item.unread .notif-dot { background: #d161cb; }
    .notif-panel__item.read   .notif-dot { background: #e5e7eb; }
    .notif-panel__item.read p { color: #9ca3af; }

    /* ══════════════════════════════════════════
       VENTANA FLOTANTE DOCENTE
       ══════════════════════════════════════════ */
    .docente-card {
      position: fixed; z-index: 2000; background: #ffffff;
      border-radius: 20px; width: 300px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(209,97,203,0.12);
      border: 1px solid #f0e8ff; overflow: hidden;
      animation: fadeInDown 0.25s ease; font-family: 'Inter', sans-serif;
    }
    .docente-card__banner {
      height: 72px;
      background: linear-gradient(135deg, #d161cb 0%, #6ecbe7 100%);
      position: relative;
    }
    .docente-card__close {
      position: absolute; top: 10px; right: 10px;
      width: 26px; height: 26px; border-radius: 50%;
      background: rgba(255,255,255,0.25); border: none;
      color: #fff; font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s; line-height: 1;
    }
    .docente-card__close:hover { background: rgba(255,255,255,0.45); }
    .docente-card__avatar-wrap {
      position: absolute; bottom: -28px; left: 50%; transform: translateX(-50%);
    }
    .docente-card__avatar {
      width: 56px; height: 56px; border-radius: 50%; border: 3px solid #fff;
      object-fit: cover; background: #2d4a8a; display: block;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .docente-card__avatar-fallback {
      width: 56px; height: 56px; border-radius: 50%; border: 3px solid #fff;
      background: linear-gradient(135deg, #d161cb, #6ecbe7);
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; font-weight: 700; color: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .docente-card__body { padding: 40px 20px 20px; text-align: center; }
    .docente-card__name { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 2px; }
    .docente-card__role {
      font-size: 11px; color: #d161cb; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;
    }
    .docente-card__email { font-size: 12px; color: #9ca3af; margin-bottom: 16px; }
    .docente-card__stats {
      display: flex; border: 1px solid #f3f4f6;
      border-radius: 12px; overflow: hidden; margin-bottom: 16px;
    }
    .docente-card__stat {
      flex: 1; padding: 10px 8px; text-align: center;
      border-right: 1px solid #f3f4f6;
    }
    .docente-card__stat:last-child { border-right: none; }
    .docente-card__stat-val { font-size: 18px; font-weight: 700; color: #111827; display: block; }
    .docente-card__stat-lbl { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.04em; }
    .docente-card__divider { border: none; border-top: 1px solid #f3f4f6; margin: 0 0 14px; }
    .docente-card__actions { display: flex; flex-direction: column; gap: 6px; }
    .docente-card__btn {
      width: 100%; padding: 9px 14px; border-radius: 10px;
      font-size: 13px; font-weight: 500; cursor: pointer; border: none;
      display: flex; align-items: center; gap: 8px;
      transition: filter 0.15s, transform 0.1s; font-family: 'Inter', sans-serif;
      text-align: left;
    }
    .docente-card__btn:active { transform: scale(0.98); }
    .docente-card__btn--primary {
      background: linear-gradient(135deg, #d161cb, #a855f7); color: #fff;
    }
    .docente-card__btn--primary:hover { filter: brightness(1.08); }
    .docente-card__btn--ghost { background: #f9fafb; color: #374151; }
    .docente-card__btn--ghost:hover { background: #f3f4f6; }
    .docente-card__btn--danger { background: #fff5f5; color: #ef4444; }
    .docente-card__btn--danger:hover { background: #fee2e2; }

    /* ══════════════════════════════════════════
       MODAL CERRAR SESIÓN
       ══════════════════════════════════════════ */
    .logout-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.45);
      backdrop-filter: blur(4px); z-index: 3000;
      display: flex; align-items: center; justify-content: center;
      animation: fadeInOverlay 0.2s ease;
    }
    .logout-modal {
      background: #fff; border-radius: 20px; padding: 32px 28px 24px;
      width: 360px; text-align: center;
      box-shadow: 0 24px 64px rgba(0,0,0,0.2);
      animation: fadeInDown 0.25s ease; font-family: 'Inter', sans-serif;
    }
    .logout-modal__icon {
      width: 56px; height: 56px; background: #fee2e2; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 16px; font-size: 24px;
    }
    .logout-modal__title { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 8px; }
    .logout-modal__text { font-size: 13px; color: #6b7280; line-height: 1.5; margin-bottom: 24px; }
    .logout-modal__btns { display: flex; gap: 10px; }
    .logout-modal__btn {
      flex: 1; padding: 11px; border-radius: 12px; font-size: 14px;
      font-weight: 600; cursor: pointer; border: none;
      font-family: 'Inter', sans-serif; transition: filter 0.15s, transform 0.1s;
    }
    .logout-modal__btn:active { transform: scale(0.97); }
    .logout-modal__btn--cancel { background: #f3f4f6; color: #374151; }
    .logout-modal__btn--cancel:hover { background: #e5e7eb; }
    .logout-modal__btn--confirm { background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; }
    .logout-modal__btn--confirm:hover { filter: brightness(1.08); }
  `;
  document.head.appendChild(style);


  /* ═══════════════════════════════════════════════
     1. NAVEGACIÓN SIDEBAR VINCULADA - REDIRECCIONES CORREGIDAS
     ═══════════════════════════════════════════════ */

  const menuItems = document.querySelectorAll('.menu-item');

  // --- ELIMINAR GESTIÓN DE ALUMNOS DE LA BARRA LATERAL ---
  const alumnoMenuItem = document.querySelector('.menu-item[data-path="materiales"]');
  if (alumnoMenuItem) {
    alumnoMenuItem.remove();
  }

  // Determinar la ruta base correcta
  const getBasePath = () => {
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
      return './'; // Si ya estamos en /pages/, las rutas relativas funcionan
    }
    return 'pages/'; // Si estamos en la raíz, necesitamos ir a /pages/
  };

  // Mapa de rutas a páginas HTML con rutas corregidas
  const pageRoutes = {
    dashboard: 'dashDoc.html',
    cursos: 'gestionCursosDoc.html',
  };

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Actualizar clase activa
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      // Redirigir a la página correspondiente
      const path = item.dataset.path;
      if (pageRoutes[path]) {
        const basePath = getBasePath();
        const destination = basePath + pageRoutes[path];
        
        // Mostrar toast de navegación
        const labels = { dashboard: 'Dashboard Principal', cursos: 'Gestión de Cursos' };
        showToast(`Navegando a: ${labels[path]}`, 'info');
        
        // Redirigir después de un pequeño delay para mostrar el toast
        setTimeout(() => {
          window.location.href = destination;
        }, 300);
      }
    });
  });

  // Marcar el item activo basado en la página actual
  function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop();
    
    menuItems.forEach(item => {
      const path = item.dataset.path;
      if ((path === 'dashboard' && currentPage === 'dashDoc.html') ||
          (path === 'cursos' && currentPage === 'gestionCursosDoc.html')) {
        item.classList.add('active');
      }
    });
  }
  
  setActiveMenuItem();


  /* ═══════════════════════════════════════════════
     2. MODAL CERRAR SESIÓN - REDIRECCIÓN CORREGIDA
     ═══════════════════════════════════════════════ */

  function showLogoutModal() {
    const overlay = document.createElement('div');
    overlay.className = 'logout-overlay';
    overlay.innerHTML = `
      <div class="logout-modal">
        <div class="logout-modal__icon">🚪</div>
        <h2 class="logout-modal__title">Cerrar sesión</h2>
        <p class="logout-modal__text">¿Estás seguro de que deseas cerrar sesión?<br>Tu progreso ha sido guardado.</p>
        <div class="logout-modal__btns">
          <button class="logout-modal__btn logout-modal__btn--cancel" id="logout-cancel">Cancelar</button>
          <button class="logout-modal__btn logout-modal__btn--confirm" id="logout-confirm">Sí, salir</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('#logout-cancel').addEventListener('click', () => {
      overlay.remove();
    });

    overlay.querySelector('#logout-confirm').addEventListener('click', () => {
      const modal = overlay.querySelector('.logout-modal');
      modal.querySelector('.logout-modal__title').textContent = 'Cerrando sesión…';
      modal.querySelector('.logout-modal__text').textContent  = 'Hasta pronto, Docente García. 👋';
      modal.querySelector('.logout-modal__btns').style.display = 'none';
      modal.querySelector('.logout-modal__icon').textContent  = '👋';

      setTimeout(() => {
        overlay.remove();
        showToast('Sesión cerrada. ¡Hasta pronto!', 'success');
        setTimeout(() => {
          // Determinar la ruta correcta para loginPage.html
          const path = window.location.pathname;
          if (path.includes('/pages/')) {
            window.location.href = 'loginPage.html'; // Si estamos en pages, login está en el mismo directorio
          } else {
            window.location.href = 'pages/loginPage.html'; // Si estamos en raíz, buscar en pages
          }
        }, 500);
      }, 1500);
    });

    // Cerrar al clicar fuera del modal
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.remove();
    });
  }

  const cerrarSesionBtn = document.querySelector('.cerrar-sesion');
  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener('click', showLogoutModal);
  }


  /* ═══════════════════════════════════════════════
     3. PANEL DE NOTIFICACIONES
     ═══════════════════════════════════════════════ */

  const notifIcon = document.querySelector('.notificacion');
  const badge     = document.querySelector('.notificacion-badge');

  const notifications = [
    { id: 1, text: 'Nuevo comentario en "Introducción a la IA"',        time: 'hace 5 min',  read: false },
    { id: 2, text: 'Entrega pendiente: "Análisis de Datos con Python"', time: 'hace 20 min', read: false },
    { id: 3, text: 'Recordatorio: Clase de Ciberseguridad a las 11 AM', time: 'hace 1 hora', read: false },
  ];

  let notifPanel = null;

  if (notifIcon) {
    notifIcon.addEventListener('click', e => {
      e.stopPropagation();
      notifPanel ? closeNotifPanel() : openNotifPanel();
    });
  }

  function openNotifPanel() {
    notifPanel = document.createElement('div');
    notifPanel.className = 'notif-panel';
    notifPanel.innerHTML = `
      <div class="notif-panel__header">
        <span>Notificaciones</span>
        <button class="notif-panel__mark-all">Marcar todas como leídas</button>
      </div>
      <ul class="notif-panel__list">
        ${notifications.map(n => `
          <li class="notif-panel__item ${n.read ? 'read' : 'unread'}" data-id="${n.id}">
            <span class="notif-dot"></span>
            <div><p>${n.text}</p><small>${n.time}</small></div>
          </li>`).join('')}
      </ul>
    `;

    const rect = notifIcon.getBoundingClientRect();
    Object.assign(notifPanel.style, {
      position: 'fixed',
      top: `${rect.bottom + 8}px`,
      right: `${window.innerWidth - rect.right}px`,
      zIndex: '1000',
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '14px',
      width: '320px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
      overflow: 'hidden',
      animation: 'fadeInDown 0.2s ease',
    });

    document.body.appendChild(notifPanel);

    notifPanel.querySelector('.notif-panel__mark-all').addEventListener('click', () => {
      notifications.forEach(n => n.read = true);
      notifPanel.querySelectorAll('.notif-panel__item').forEach(el => {
        el.classList.remove('unread');
        el.classList.add('read');
      });
      updateBadge();
    });

    notifPanel.querySelectorAll('.notif-panel__item').forEach(el => {
      el.addEventListener('click', () => {
        const notif = notifications.find(n => n.id === +el.dataset.id);
        if (notif) notif.read = true;
        el.classList.remove('unread');
        el.classList.add('read');
        updateBadge();
      });
    });

    setTimeout(() => document.addEventListener('click', onClickOutsideNotif), 0);
  }

  function closeNotifPanel() {
    notifPanel?.remove();
    notifPanel = null;
    document.removeEventListener('click', onClickOutsideNotif);
  }

  function onClickOutsideNotif(e) {
    if (notifPanel && !notifPanel.contains(e.target) && !notifIcon.contains(e.target)) closeNotifPanel();
  }

  function updateBadge() {
    const unread = notifications.filter(n => !n.read).length;
    if (badge) {
      badge.textContent = unread;
      badge.style.display = unread > 0 ? 'flex' : 'none';
    }
  }
  updateBadge();


  /* ═══════════════════════════════════════════════
     4. VENTANA FLOTANTE DEL DOCENTE
     ═══════════════════════════════════════════════ */

  const avatarContainer = document.querySelector('.avatar-container');
  let docenteCard = null;

  if (avatarContainer) {
    avatarContainer.addEventListener('click', e => {
      e.stopPropagation();
      docenteCard ? closeDocenteCard() : openDocenteCard();
    });
  }

  function openDocenteCard() {
    docenteCard = document.createElement('div');
    docenteCard.className = 'docente-card';

    const avatarSrc = document.querySelector('.avatar-img')?.src ?? '';

    docenteCard.innerHTML = `
      <div class="docente-card__banner">
        <button class="docente-card__close" id="dc-close" title="Cerrar">✕</button>
        <div class="docente-card__avatar-wrap">
          ${avatarSrc
            ? `<img class="docente-card__avatar" src="${avatarSrc}" alt="Foto de perfil"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
               <div class="docente-card__avatar-fallback" style="display:none">G</div>`
            : `<div class="docente-card__avatar-fallback">G</div>`}
        </div>
      </div>

      <div class="docente-card__body">
        <p class="docente-card__name">Docente García</p>
        <p class="docente-card__role">Docente · Tecnología</p>
        <p class="docente-card__email">docen.garcia@abc.com</p>

        <div class="docente-card__stats">
          <div class="docente-card__stat">
            <span class="docente-card__stat-val">6</span>
            <span class="docente-card__stat-lbl">Cursos</span>
          </div>
          <div class="docente-card__stat">
            <span class="docente-card__stat-val">180</span>
            <span class="docente-card__stat-lbl">Alumnos</span>
          </div>
          <div class="docente-card__stat">
            <span class="docente-card__stat-val">0</span>
            <span class="docente-card__stat-lbl">Pendientes</span>
          </div>
        </div>
      </div>
    `;

    const rect = avatarContainer.getBoundingClientRect();
    Object.assign(docenteCard.style, {
      position: 'fixed',
      top: `${rect.bottom + 10}px`,
      right: `${window.innerWidth - rect.right}px`,
    });

    document.body.appendChild(docenteCard);

    // Botón X
    docenteCard.querySelector('#dc-close').addEventListener('click', e => {
      e.stopPropagation();
      closeDocenteCard();
    });

    setTimeout(() => document.addEventListener('click', onClickOutsideDocente), 0);
  }

  function closeDocenteCard() {
    docenteCard?.remove();
    docenteCard = null;
    document.removeEventListener('click', onClickOutsideDocente);
  }

  function onClickOutsideDocente(e) {
    if (docenteCard && !docenteCard.contains(e.target) && !avatarContainer.contains(e.target)) {
      closeDocenteCard();
    }
  }


  /* ═══════════════════════════════════════════════
     5. INTERACCIÓN CON TARJETAS DE CURSOS (SOLO EN DASHBOARD)
     ═══════════════════════════════════════════════ */

  // Solo ejecutar si estamos en dashDoc.html
  if (window.location.pathname.includes('dashDoc.html')) {
    document.querySelectorAll('.course-card:not(.course-card--illustration)').forEach(card => {
      card.style.cursor = 'pointer';

      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
        card.style.boxShadow = '0 6px 20px rgba(209,97,203,0.18)';
        card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
      });
      card.addEventListener('click', () => {
        const title = card.querySelector('.course-card__title')?.textContent ?? 'este curso';
        showToast(`Abriendo curso: ${title}`, 'info');
        // Redirigir a la página de gestión de cursos
        setTimeout(() => {
          const basePath = getBasePath();
          window.location.href = basePath + 'gestionCursosDoc.html';
        }, 500);
      });
    });
  }


  /* ═══════════════════════════════════════════════
     6. TOAST / SNACKBAR
     ═══════════════════════════════════════════════ */

  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      Object.assign(container.style, {
        position: 'fixed', bottom: '24px', right: '24px',
        zIndex: '9999', display: 'flex', flexDirection: 'column', gap: '10px',
      });
      document.body.appendChild(container);
    }

    const colors = { success: '#10b981', error: '#ef4444', info: '#3b82f6', warning: '#f59e0b' };
    const toast  = document.createElement('div');
    Object.assign(toast.style, {
      background: '#1f2937', color: '#f9fafb', padding: '12px 18px',
      borderRadius: '10px', fontSize: '13px', fontFamily: "'Inter', sans-serif",
      fontWeight: '500', maxWidth: '320px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      borderLeft: `4px solid ${colors[type] || colors.info}`,
      animation: 'slideInRight 0.25s ease', cursor: 'pointer',
    });
    toast.textContent = message;
    toast.addEventListener('click', () => removeToast(toast));
    container.appendChild(toast);
    setTimeout(() => removeToast(toast), 3500);
  }

  function removeToast(toast) {
    Object.assign(toast.style, { opacity: '0', transform: 'translateX(20px)', transition: 'opacity 0.2s, transform 0.2s' });
    setTimeout(() => toast.remove(), 200);
  }

});