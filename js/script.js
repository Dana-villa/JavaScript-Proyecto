const login = document.querySelector(".btn-login")
const back = document.querySelector(".back")
const front = document.querySelector(".front")
/*const card = document.querySelectorAll(".course-card")

const cards = [
    {
        title: "Curso de desarrollo",
        descripcion: 
    }
]


card.forEach(display => {
    display.addEventListener("click", ()=>{
        back.classList.toggle("active")
        const titles = document.querySelectorAll(".course-card__title")
        console.log(titles);
        titles.forEach(title => {
            front.innerHTML = `
            <h1>${title.textContent}</h1>
            <div>
                <input type="text" placeholder="Nombre">
            </div>
        `    
        });
        
    })
}); */

back.addEventListener("click", ()=>{
    back.classList.toggle("active")
})


login.addEventListener("click", ()=>{
    window.location.href = "./pages/loginPage.html"
})

