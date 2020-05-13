const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
});

const main = document.getElementById("principal");
const btnEntregas = document.getElementById("btnEntregas");
btnEntregas.addEventListener("click", () => {
    main.innerHTML = "<cadastro-filme></cadastro-filme>"
});