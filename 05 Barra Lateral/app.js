const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){  //evento para mostrar la barra lateral 
    sidebar.classList.toggle("show-sidebar"); 
});

closeBtn.addEventListener("click",function(){ //evento para remover "eliminar" la barra lateral   
    sidebar.classList.remove("show-sidebar");
});