const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnIcon = document.getElementById("toggle-btn-icon")
const navigations = document.getElementById('navigations')
toggleBtn.addEventListener('click', () => {
    const visibility = navigations.getAttribute("data-visible")
    if (visibility == 'false') {
        navigations.setAttribute('data-visible', "true");
        navigations.setAttribute('aria-expanded', "true");
        navigations.style.transform = "translateX(0%)";
        toggleBtnIcon.src = "./assets/shared/icon-close.svg"
    }
    else if (visibility === "true") {
        navigations.setAttribute('data-visible', "false");
        navigations.setAttribute('aria-expanded', "false");
        navigations.style.transform = "translateX(100%)";
        toggleBtnIcon.src = "./assets/shared/icon-hamburger.svg"
    }
});