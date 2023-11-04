const openBtn = document.getElementById("menuOpenBtn");
const closeBtn = document.getElementById("menuCloseBtn");
const menuDiv = document.querySelector(".menu-div");

const openFn = () => {
    menuDiv.style.left = "0";
}

const closeFn = () => {
    menuDiv.style.left = "-100%";
}

openBtn.addEventListener("click", openFn);
closeBtn.addEventListener("click", closeFn);