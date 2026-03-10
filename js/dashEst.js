/* ═══════════════════════════════════════════════
   DASHBOARD ESTUDIANTE — dashEst.js
   ═══════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ═══════════════════════════════════════════════
     1. NAVEGACIÓN SIDEBAR
     ═══════════════════════════════════════════════ */

  const menuItems = document.querySelectorAll(".menu-item");

  const pageRoutes = {
    dashboard: "dashEst.html",
    cursos: "gestionCursosEst.html",
    reporte: "reportesCursos.html"
  };

  menuItems.forEach(item => {
    item.addEventListener("click", () => {

      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const path = item.dataset.path;

      if (pageRoutes[path]) {
        window.location.href = pageRoutes[path];
      }
    });
  });


  /* ═══════════════════════════════════════════════
     2. MODAL CERRAR SESIÓN
     ═══════════════════════════════════════════════ */

  const cerrarSesionBtn = document.querySelector(".cerrar-sesion");

  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", showLogoutModal);
  }

  function showLogoutModal() {

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.4)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "2000";

    overlay.innerHTML = `
      <div style="
        background:white;
        padding:30px;
        border-radius:18px;
        width:340px;
        text-align:center;
        box-shadow:0 20px 60px rgba(0,0,0,0.2);
      ">
        <h3 style="margin-bottom:10px;">Cerrar sesión</h3>
        <p style="color:#64748b;font-size:14px;margin-bottom:20px;">
          ¿Seguro que deseas cerrar sesión?
        </p>

        <div style="display:flex;gap:10px;">
          <button id="cancelLogout"
            style="
            flex:1;
            padding:10px;
            border:none;
            border-radius:10px;
            background:#e5e7eb;
            cursor:pointer;">
            Cancelar
          </button>

          <button id="confirmLogout"
            style="
            flex:1;
            padding:10px;
            border:none;
            border-radius:10px;
            background:#ef4444;
            color:white;
            cursor:pointer;">
            Salir
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector("#cancelLogout").onclick = () => overlay.remove();

    overlay.querySelector("#confirmLogout").onclick = () => {
      window.location.href = "loginPage.html";
    };

    overlay.onclick = e => {
      if (e.target === overlay) overlay.remove();
    };

  }



  /* ═══════════════════════════════════════════════
     3. VENTANA FLOTANTE DEL USUARIO
     ═══════════════════════════════════════════════ */

  const avatarContainer = document.querySelector(".avatar-container");
  let userCard = null;

  if (avatarContainer) {

    avatarContainer.addEventListener("click", e => {
      e.stopPropagation();

      if (userCard) {
        closeUserCard();
      } else {
        openUserCard();
      }
    });

  }

  function openUserCard() {

    userCard = document.createElement("div");

    userCard.style.position = "fixed";
    userCard.style.width = "300px";
    userCard.style.background = "white";
    userCard.style.borderRadius = "20px";
    userCard.style.boxShadow = "0 20px 60px rgba(0,0,0,0.18)";
    userCard.style.overflow = "hidden";
    userCard.style.zIndex = "2000";

    const rect = avatarContainer.getBoundingClientRect();

    userCard.style.top = rect.bottom + 10 + "px";
    userCard.style.right = (window.innerWidth - rect.right) + "px";

    userCard.innerHTML = `
    
      <div style="
        background:linear-gradient(135deg,#8b5cf6,#60a5fa);
        height:90px;
        position:relative;
        text-align:center;
      ">

        <button id="closeUserCard"
        style="
        position:absolute;
        right:10px;
        top:10px;
        border:none;
        background:rgba(255,255,255,0.3);
        width:28px;
        height:28px;
        border-radius:50%;
        color:white;
        cursor:pointer;">✕</button>

        <img src="../images/hacker.png"
        style="
        width:70px;
        height:70px;
        border-radius:50%;
        border:4px solid white;
        position:absolute;
        bottom:-35px;
        left:50%;
        transform:translateX(-50%);
        ">
      </div>

      <div style="padding:45px 20px 20px;text-align:center">

        <h3 style="margin-bottom:2px;">Juanita Pérez</h3>
        <p style="font-size:12px;color:#8b5cf6;font-weight:600;">
        ESTUDIANTE
        </p>

        <p style="font-size:12px;color:#64748b;margin-bottom:15px;">
        juanita.perez@abc.com
        </p>

        <div style="
        display:flex;
        border:1px solid #e5e7eb;
        border-radius:12px;
        overflow:hidden">

          <div style="flex:1;padding:10px">
            <strong>6</strong>
            <div style="font-size:11px;color:#64748b">CLASES</div>
          </div>

          <div style="flex:1;padding:10px;border-left:1px solid #e5e7eb">
            <strong>0</strong>
            <div style="font-size:11px;color:#64748b">PENDIENTES</div>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(userCard);

    userCard.querySelector("#closeUserCard").onclick = closeUserCard;

    setTimeout(() => {
      document.addEventListener("click", clickOutsideUser);
    });

  }

  function closeUserCard() {
    if (userCard) {
      userCard.remove();
      userCard = null;
      document.removeEventListener("click", clickOutsideUser);
    }
  }

  function clickOutsideUser(e) {
    if (!userCard.contains(e.target) && !avatarContainer.contains(e.target)) {
      closeUserCard();
    }
  }



  /* ═══════════════════════════════════════════════
     4. VENTANA VER CURSO
     ═══════════════════════════════════════════════ */

  const courseLinks = document.querySelectorAll(".course-link");

  courseLinks.forEach(link => {

    link.addEventListener("click", e => {
      e.preventDefault();

      const card = link.closest(".course-card");
      const title = card.querySelector(".course-title").textContent;

      showCourseModal(title);
    });

  });


  function showCourseModal(courseTitle) {

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.4)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "3000";

    overlay.innerHTML = `
    
    <div style="
    background:white;
    padding:30px;
    border-radius:20px;
    width:400px;
    box-shadow:0 20px 60px rgba(0,0,0,0.2);
    text-align:center;
    ">

      <h2 style="margin-bottom:10px;">${courseTitle}</h2>

      <p style="color:#64748b;font-size:14px;margin-bottom:20px">
      Aquí podrás ver el contenido del curso,
      actividades, materiales y evaluaciones.
      </p>

      <button id="enterCourse"
      style="
      padding:10px 20px;
      border:none;
      border-radius:10px;
      background:linear-gradient(135deg,#3b82f6,#8b5cf6);
      color:white;
      cursor:pointer;
      ">
      Entrar al curso
      </button>

    </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector("#enterCourse").onclick = () => {
      window.location.href = "cursoEst.html";
    };

    overlay.onclick = e => {
      if (e.target === overlay) overlay.remove();
    };

  }



  /* ═══════════════════════════════════════════════
     5. PANEL DE NOTIFICACIONES
     ═══════════════════════════════════════════════ */

  const notif = document.querySelector(".notificacion");
  const badge = document.querySelector(".notificacion-badge");

  if (notif) {

    notif.addEventListener("click", () => {

      badge.style.display = "none";

      alert("Tienes nuevas notificaciones académicas.");

    });

  }

});