
// Selectores
const agregar = document.querySelector('#addBtn');
const eliminar = document.querySelector('#removeBtn'); 
const input = document.querySelector('#input');
const contenido = document.querySelector('#contenido');
// Arreglo
let arrayNumeros = []
// Instanciar eventos de Click  
window.onload = () => {
    agregar.addEventListener("click",function(){

        if(input.value === ""){
            desplegarMensaje();
        }else{
        agregarNumero(input.value);
        }
    })
    eliminar.addEventListener("click",function(){
        if(input.value === ""){
            desplegarMensaje();
        }else{
        eliminarNumero(input.value);
        }
    })
    
}

function agregarNumero(e) {
    const check = arrayNumeros.filter(x => x === e);
    console.log(check);
    if(check.length === 0){
        arrayNumeros.push(e);
        contenido.textContent = '';
        arrayNumeros.forEach(valor => agregarNumeroHTML(valor));

    }else{
        alert("el valor ingresado ya existe");
    }
    
}

function eliminarNumero(e) {
    var index = arrayNumeros.indexOf(e);
    if(index !== -1){
        arrayNumeros.splice(index,1);
    }else{
    contenido.textContent = '';
    arrayNumeros.forEach(Element => agregarNumeroHTML(Element));
    }

}
function desplegarMensaje(e){
    alert("ingrese un valor primero y luego presione un boton");

}


function agregarNumeroHTML(number) {
    contenido.innerHTML += `
        <div>
            <p class="bg-cyan-500 p-3 rounded-sm font-bold text-lg text-center">${number}</p>
        </div>    
    `;
}