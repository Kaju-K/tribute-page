menuButton = document.querySelector(".menu-button")
menuImage = document.getElementById("menu-image")
navigation = document.querySelector(".navigation")
navigationLinks = document.querySelectorAll(".links")

const windowWidth = window.innerWidth

menuButton.addEventListener("click", () => {
    ["fa-bars", "fa-xmark"].map( img => menuImage.classList.toggle(img))
    navigation.classList.toggle("navigation--active")
} )

if (windowWidth <= 640) {
    navigationLinks.forEach(link => {
        link.addEventListener("click", event => {
            ["fa-bars", "fa-xmark"].map( img => menuImage.classList.toggle(img))
            navigation.classList.toggle("navigation--active")
        })
    });
}