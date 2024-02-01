//crea un contador e inicia en 0
let     idCounter = 0;
//asigna el elemento DOM a una variable para que sea más fácil trabajar con ella
const   input = document.querySelector('input[type="text"]');
//añadimos un inspector de eventos al botón, para ejecutar nuestra función
 userInput.addEventListener('submit', (event) =>
{
    event.preventDefault();
    addTask();
});
//lo mismo, pero ahora al hacer click  se ejecuta actualizar stats si le damos al input, o se elimina si pulsamos la imagen
list.addEventListener("click",(event)=>
{
    if(event.srcElement.nodeName =="INPUT")
    {
        actualizarStats();
    }
    else if(event.srcElement.nodeName == "IMG")
    {
        let borrar = event.srcElement.parentNode;
        borrar.remove();
    }
    addTask();
})
//la función aumenta el contador y genera un elemento div que contiene un checkbox y una etiqueta + una imagen, además activa la función actualizar stats
function    addTask()
{
    idCounter++;
    if(input.value !="")
    {
        list.innerHTML += 
        `<div class="task-container" id = ${idCounter}>
        <label>
            <input type="checkbox" id="done" >
            ${input.value}
        </label>
        <img class="close-btn"src="img/cubo-de-basura.png">
    </div>`
    
        
    }
    input.value="";
    actualizarStats();
    
}
// la función toma la longitud de listElement y la cantidad de checks marcados como check y se usan para mostrar el número de tareas pendientes y totales
function    actualizarStats()
{
 
    let checkbox= document.querySelectorAll('input[type="checkbox"]:checked');
        
        listElement=list.querySelectorAll("div")
        stats.innerHTML=`<p>Tareas pendientes ${listElement.length - checkbox.length} | Tareas realizadas ${checkbox.length}</p>`;
       
}
//función para generar una fecha automática
let fechaActual=new Date();
let fechaElemento =document.getElementById("fecha");
let formatoFecha = (fechaActual.getDate() < 10 ? '0' : '') + fechaActual.getDate()+'/' + (fechaActual.getMonth() < 10 ? '0' : '') +  (fechaActual.getMonth() + 1 ) +"/"+ fechaActual.getFullYear();
    fechaElemento.innerHTML = "Fecha: " + formatoFecha;
