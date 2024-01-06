let menuIcono = document.getElementById("iconmenu")
let contenidoPagina = document.getElementById("contentMenu")

menuIcono.addEventListener("click", function(){
    console.log("me tocaste loco");
    contenidoPagina.style.display = "none"
})