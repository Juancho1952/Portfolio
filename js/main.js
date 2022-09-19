
const bxmenu = document.querySelector("#bx-menu")
const lowernavbar = document.querySelector("#navbar")

bxmenu.addEventListener("click", () => {
    lowernavbar.classList.toggle("navbar-show");
});

window.addEventListener("load", () => {
    const loaderTittle = document.querySelector(".loader-tittle")
    setTimeout(() => {
        loaderTittle.style.display = "none";
    }, 2000);
})