/* ═══════════════════════════════
   RUTAS SIDEBAR
═══════════════════════════════ */

const RUTAS = {
dashboard:"dashboard1.html",
cursos:"gestionCursosAdm.html",
docentes:"gestionDocentes.html",
reporte: "reporteCursos.html";
admin:"moduloAdm.html"
};


/* ═══════════════════════════════
   SIDEBAR
═══════════════════════════════ */

function initSidebar(){

document.querySelectorAll(".menu-item").forEach(item=>{

item.addEventListener("click",()=>{

const ruta=RUTAS[item.dataset.path];

if(!ruta){
mostrarToast("Módulo no disponible","info");
return;
}

document.querySelector(".main-content")
?.classList.add("page-exit");

setTimeout(()=>{

window.location.href=ruta;

},180);

});

});

}


/* ═══════════════════════════════
   PERFIL USUARIO
═══════════════════════════════ */

function initPerfil(){

const avatar=document.querySelector(".avatar-container");

avatar?.addEventListener("click",(e)=>{

e.stopPropagation();

document
.getElementById("perfil-popup")
.classList.toggle("open");

});

document.addEventListener("click",(e)=>{

const popup=document.getElementById("perfil-popup");

if(!popup.contains(e.target) &&
!avatar.contains(e.target)){

popup.classList.remove("open");

}

});

}


/* ═══════════════════════════════
   CURSOS - VER
═══════════════════════════════ */

function initCursos(){

document.querySelectorAll(".course-card")
.forEach(card=>{

card.addEventListener("click",()=>{

const titulo=card.querySelector(".course-card__title").innerText;
const desc=card.querySelector(".course-card__desc").innerText;

const modal=document.getElementById("curso-modal");

modal.querySelector(".curso-titulo").innerText=titulo;
modal.querySelector(".curso-desc").innerText=desc;

modal.classList.add("open");

});

});

}


function cerrarCursoModal(){

document.getElementById("curso-modal")
.classList.remove("open");

}


/* ═══════════════════════════════
   AÑADIR MODULO
═══════════════════════════════ */

function initNuevoModulo(){

document.querySelector(".btn-add")
?.addEventListener("click",()=>{

document.getElementById("nuevo-modulo")
.classList.add("open");

});

}


function cerrarNuevoModulo(){

document.getElementById("nuevo-modulo")
.classList.remove("open");

}


function guardarModulo(){

const nombre=document.getElementById("mod-nombre").value;
const desc=document.getElementById("mod-desc").value;
const img=document.getElementById("mod-img").value;

if(!nombre){
mostrarToast("Ingrese el nombre del módulo","error");
return;
}

const grid=document.querySelector(".courses-grid");

const card=document.createElement("article");

card.className="course-card";

card.innerHTML=`

<div class="course-card__thumbnail">
<img src="${img || '../images/desarrollo-web.webp'}">
</div>

<div class="course-card__body">
<h3 class="course-card__title">${nombre}</h3>
<p class="course-card__desc">${desc || 'Nuevo módulo agregado'}</p>
</div>

`;

grid.appendChild(card);

cerrarNuevoModulo();

initCursos();

mostrarToast("Módulo creado correctamente");

}


/* ═══════════════════════════════
   CERRAR SESIÓN
═══════════════════════════════ */

function initCerrarSesion(){

document.querySelector(".cerrar-sesion")
?.addEventListener("click",()=>{

document.getElementById("logout-modal")
.classList.add("open");

});

}

function cancelarLogout(){

document.getElementById("logout-modal")
.classList.remove("open");

}

function confirmarLogout(){

localStorage.removeItem("session_usuario");

setTimeout(()=>{

window.location.href="loginPage.html";

},500);

}


/* ═══════════════════════════════
   TOAST
═══════════════════════════════ */

let toastTimer;

function mostrarToast(msg,tipo="success"){

const toast=document.getElementById("toast");

toast.textContent=msg;

toast.className=`toast toast-${tipo} show`;

clearTimeout(toastTimer);

toastTimer=setTimeout(()=>{

toast.classList.remove("show");

},3000);

}


/* ═══════════════════════════════
   INYECTAR UI
═══════════════════════════════ */

function inyectarUI(){

document.body.insertAdjacentHTML("beforeend",`

<!-- PERFIL -->

<div id="perfil-popup" class="perfil-popup">

<button class="perfil-close"
onclick="document.getElementById('perfil-popup').classList.remove('open')">✕</button>

<div class="perfil-banner"></div>

<div class="perfil-avatar-wrap">
<img src="../images/jefe.png">
</div>

<div class="perfil-body">

<h3>Docente García</h3>

<p class="perfil-rol">DOCENTE · TECNOLOGÍA</p>

<p class="perfil-email">docen.garcia@abc.com</p>

<div class="perfil-stats">

<div>
<span>6</span>
<p>Cursos</p>
</div>

<div>
<span>180</span>
<p>Alumnos</p>
</div>

<div>
<span>0</span>
<p>Pendientes</p>
</div>

</div>

</div>

</div>


<!-- MODAL CURSO -->

<div id="curso-modal" class="modal">

<div class="modal-box">

<button class="modal-close"
onclick="cerrarCursoModal()">✕</button>

<h2 class="curso-titulo"></h2>

<p class="curso-desc"></p>

<button class="btn-primary">Ver lecciones</button>

</div>

</div>


<!-- NUEVO MODULO -->

<div id="nuevo-modulo" class="modal">

<div class="modal-box">

<h2>Nuevo Módulo</h2>

<input id="mod-nombre" placeholder="Nombre del módulo">

<textarea id="mod-desc" placeholder="Descripción"></textarea>

<input id="mod-img" placeholder="URL imagen">

<div class="modal-actions">

<button onclick="cerrarNuevoModulo()">Cancelar</button>

<button onclick="guardarModulo()" class="btn-primary">
Crear
</button>

</div>

</div>

</div>


<!-- LOGOUT -->

<div id="logout-modal" class="modal">

<div class="modal-box">

<h3>Cerrar sesión</h3>

<p>¿Desea cerrar la sesión actual?</p>

<div class="modal-actions">

<button onclick="cancelarLogout()">Cancelar</button>

<button onclick="confirmarLogout()" class="btn-danger">
Cerrar sesión
</button>

</div>

</div>

</div>

<div id="toast" class="toast"></div>

`);

inyectarEstilos();

}


/* ═══════════════════════════════
   ESTILOS
═══════════════════════════════ */

function inyectarEstilos(){

const style=document.createElement("style");

style.textContent=`

.perfil-popup{

position:fixed;
top:70px;
right:25px;

width:290px;

background:white;

border-radius:20px;

overflow:hidden;

box-shadow:0 20px 60px rgba(0,0,0,0.25);

transform:translateY(-10px) scale(.95);

opacity:0;

pointer-events:none;

transition:.25s;

z-index:9000;

}

.perfil-popup.open{
opacity:1;
transform:translateY(0) scale(1);
pointer-events:auto;
}

.perfil-banner{

height:90px;

background:linear-gradient(135deg,#8b5cf6,#60a5fa);

}

.perfil-close{

position:absolute;

right:12px;
top:12px;

border:none;

background:rgba(255,255,255,.3);

color:white;

width:26px;

height:26px;

border-radius:50%;

cursor:pointer;

}

.perfil-avatar-wrap{

display:flex;
justify-content:center;

margin-top:-35px;

}

.perfil-avatar-wrap img{

width:70px;
height:70px;

border-radius:50%;

border:3px solid white;

}

.perfil-body{

text-align:center;

padding:12px 20px 20px;

}

.perfil-rol{

font-size:12px;

color:#7c3aed;

font-weight:700;

}

.perfil-email{

font-size:12px;

color:#6b7280;

}

.perfil-stats{

display:flex;

justify-content:space-around;

margin-top:12px;

padding-top:12px;

border-top:1px solid #eee;

}

.perfil-stats span{

font-size:20px;

font-weight:700;

}

.modal{

position:fixed;

inset:0;

background:rgba(0,0,0,.45);

display:flex;

align-items:center;

justify-content:center;

opacity:0;

pointer-events:none;

transition:.2s;

z-index:10000;

}

.modal.open{

opacity:1;

pointer-events:auto;

}

.modal-box{

background:white;

padding:25px;

border-radius:14px;

width:340px;

}

.modal-actions{

display:flex;

gap:10px;

justify-content:flex-end;

margin-top:15px;

}

.modal-box input,
.modal-box textarea{

width:100%;

margin-top:10px;

padding:8px;

border:1px solid #ddd;

border-radius:6px;

}

.btn-primary{

background:#2563eb;

color:white;

border:none;

padding:8px 14px;

border-radius:6px;

cursor:pointer;

}

.btn-danger{

background:#ef4444;

color:white;

border:none;

padding:8px 14px;

border-radius:6px;

}

.toast{

position:fixed;

bottom:25px;

right:25px;

background:#1f2937;

color:white;

padding:10px 18px;

border-radius:8px;

opacity:0;

transform:translateY(10px);

transition:.2s;

}

.toast.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

}


/* ═══════════════════════════════
   INIT
═══════════════════════════════ */

document.addEventListener("DOMContentLoaded",()=>{

inyectarUI();

initSidebar();

initPerfil();

initCursos();

initNuevoModulo();

initCerrarSesion();

});