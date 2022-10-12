//se selecciona el nav y los links que se muestran
const navToggle =document.querySelector(".nav-toggle"); 
const links =document.querySelector(".links");

navToggle.addEventListener("click",function (){
    links.classList.toggle("show-links");
});