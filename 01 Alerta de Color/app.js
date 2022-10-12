const colors =["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function() {  //Evento Listener para obtener un numero random 
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]; //obtiene el estilo de Background 
    color.textContent = colors[randomNumber]; //obtiene el contenido del texto de color
});

function getRandomNumber(){  //Funcion que obtiene el numero random y lo multiplica por los valores que tiene colors 
    return Math.floor(Math.random()* colors.length);
}