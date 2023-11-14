window.onscroll = () => {
    let header  = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
}

let hover = document.querySelector(".hover");
let activate = document.querySelector(".activate");
let hover2 = document.querySelector(".hover2");
let activate2 = document.querySelector(".activate2");

hover.onmouseenter = () => {
    activate.classList.add("active");
}

hover.onmouseleave = () => {
    activate.classList.remove("active");
}

hover2.onmouseenter = () => {
    activate2.classList.add("active");
}

hover2.onmouseleave = () => {
    activate2.classList.remove("active");
}