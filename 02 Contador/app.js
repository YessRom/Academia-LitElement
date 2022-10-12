//inicializar en cero 
let count = 0;
//selecciona el valor y los botones 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener ("click", function(e){ //Evento lsistener del boton al "cliclear"
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){ // si es decrementar disminuye el valor 
            count--; 
        }else if (styles.contains("increase")){ // si no es asi aumenta el valor
            count++;
        } else{
            count = 0 ;
        }

        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "#222";
        }
        value.textContent =count;
    });
});
