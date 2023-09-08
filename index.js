const menu = document.getElementById("menu")
const nav = document.querySelector(".nav_section")
const closeButton = document.querySelector(".closeButton")

menu.addEventListener("click", () => {  
    nav.classList.add("exitHidden")
    nav.classList.remove("hidden")
    
} )

closeButton.addEventListener("click", () => {  
    nav.classList.add("hidden")
    nav.classList.remove("exitHidden")
} )
