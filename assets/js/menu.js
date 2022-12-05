const burger = document.querySelector("#burger");
const close = document.querySelector("#close");
const nav = document.querySelector(".mobile-menu-wrapper");
const body = document.querySelector("body");

burger.onclick = () => {
    nav.style.transform = `translateX(0px)`;
    body.classList.add("menu-open");
}

close.onclick = () => {
    nav.style.transform = `translateX(-1000px)`;
    body.classList.remove("menu-open");
}

