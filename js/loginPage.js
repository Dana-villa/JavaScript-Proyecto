const front = document.querySelector(".front")

const roles = ["admin", "teacher", "student"]

const users = [
    {
        nombre: "User Pérez",
        rol: "admin",
        correo: "adm.perez@abc.com",
        contraseña: "1234"
    },
    {
        nombre: "Docente García",
        rol:"teacher",
        correo: "docen.garcia@abc.com",
        contraseña: "1234"
    },
    {
        nombre: "Juanita Pérez",
        rol:"student",
        correo: "juanita.perez@abc.com",
        contraseña: "1234"
    }
]


function login() {
    front.innerHTML = `
    <h1 class="titulo-bienvenida">Bienvenidos de nuevo</h1>
    <p class="subtitulo">Acceda a su cuenta para continuar.</p>

    <div class="campo">
        <img src="../images/correo.png" alt="Correo">
        <input type="email" placeholder="Digite el usuario" class="input-campo input-campo__email">
    </div>

    <div class="campo">
        <img src="../images/contra.png" alt="Contraseña">
        <input type="password" placeholder="Contraseña" id="password-field" class="input-campo input-campo__pass">
        </div>

    <div class="olvidado-wrapper">
        <a href="#" class="olvidado">¿Olvidó su contraseña?</a>
    </div>

    <button class="btn-iniciar">Iniciar Sesión</button>

    <div class="pie-registro">
        <a href="#" class="olvidado">¿Olvidó su contraseña?</a>
        <h3 href="#" class="link-registro">Registrarse</h3>
    </div>
`
}
login()
const registro = document.querySelector(".link-registro")
const loginbtn = document.querySelector(".btn-iniciar")

loginbtn.addEventListener("click", ()=>{
    users.forEach((name) => {
        const user = document.querySelector(".input-campo__email").value
        if (user == name.nombre) {
            const password = document.querySelector(".input-campo__pass").value
            if (password !== name.contraseña) throw new Error(alert("Usuario o contraseña incorrectos"))
            switch (name.rol){
                case roles[0]:
                    window.location.href = "../pages/dashboard1.html"
                    break
                case roles[1]:
                    window.location.href = "../pages/dashboard2.html"
                    break
                case roles[2]:
                    window.location.href = "../pages/dashboard3.html"
                    break
            }
        }
    });
})

registro.addEventListener("click", () => {
    register()
})

function register(){
    front.innerHTML = `
    <h1>Crear cuenta</h1>
                    <p class="subtitle">Complete sus datos para registrarse.</p>

                    <div class="success-banner" id="successBanner">
                    &#10003; ¡Registro exitoso! Bienvenido.
                    </div>

                    <div class="input-group" id="group-nombre">
                    <span class="icon">&#128100;</span>
                    <input type="text" id="nombre" placeholder="Nombre completo" autocomplete="name"/>
                    <div class="error-msg">Por favor ingrese su nombre.</div>
                    </div>

                    <div class="input-group" id="group-email">
                    <span class="icon">&#9993;</span>
                    <input type="email" id="email" placeholder="Correo electrónico" autocomplete="email"/>
                    <div class="error-msg">Ingrese un correo electrónico válido.</div>
                    </div>

                    <div class="input-group" id="group-telefono">
                    <span class="icon">&#128222;</span>
                    <input type="tel" id="telefono" placeholder="Teléfono (opcional)" autocomplete="tel"/>
                    <div class="error-msg"></div>
                    </div>

                    <div class="input-group" id="group-password">
                    <span class="icon">&#128274;</span>
                    <input type="password" id="password" placeholder="Contraseña" autocomplete="new-password"/>
                    <div class="error-msg">La contraseña debe tener al menos 6 caracteres.</div>
                    </div>

                    <div class="input-group" id="group-confirm">
                    <span class="icon">&#128274;</span>
                    <input type="password" id="confirm" placeholder="Confirmar contraseña" autocomplete="new-password"/>
                    <div class="error-msg">Las contraseñas no coinciden.</div>
                    </div>

                    <button class="btn-submit" id="btnRegister" onclick="handleRegister()">Registrarse</button>

    `
}