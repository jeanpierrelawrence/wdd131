let menuList = document.querySelector("#menu-list")
let menuBtn = document.querySelector("#menu-toggle")

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("is-active")
})