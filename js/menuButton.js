menuButton = document.querySelector(".menu-button")
menuImage = document.getElementById("menu-image")
navigation = document.querySelector(".navigation")

menuButton.addEventListener("click", () => {
    ["fa-bars", "fa-xmark"].map( img => menuImage.classList.toggle(img))
    navigation.classList.toggle("navigation--active")
} )