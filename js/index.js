const navLinks= document.querySelectorAll(".nav-links li a")
console.log(navLinks);
navLinks.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active")
    })
})