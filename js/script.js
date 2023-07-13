const toggleNav = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav");
const blackScreen = document.querySelector(".black-screen");
const body = document.querySelector("body");

document.addEventListener("click", e => {
    const isRightButton = e.target.matches(".toggle-menu");
    const closeButton = e.target.matches(".toggle-menu[aria-expanded = true]");

    if (!isRightButton && e.target.closest(".nav") != null) return

    if (isRightButton) {
        nav.classList.add("open");
        blackScreen.classList.add("black-open");
        body.classList.add("no-scroll");
        toggleNav.setAttribute("aria-expanded", true);
    }
    else {
        nav.classList.remove("open");
        blackScreen.classList.remove("black-open");
        body.classList.remove("no-scroll");
        toggleNav.setAttribute("aria-expanded", false);
    }

    if (closeButton === true) {
        nav.classList.remove("open");
        blackScreen.classList.remove("black-open");
        body.classList.remove("no-scroll");
        toggleNav.setAttribute("aria-expanded", false);
    }
});


