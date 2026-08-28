const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", function() {
    menu.classList.add("show");
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", function() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", function() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
});