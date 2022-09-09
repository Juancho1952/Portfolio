
const bxmenu = document.querySelector("#bx-menu")
const lowernavbar = document.querySelector("#navbar")

bxmenu.addEventListener("click", () => {
    lowernavbar.classList.toggle("navbar-show");
});