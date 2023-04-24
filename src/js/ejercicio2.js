// Selectores
const formulario = document.querySelector('#formulario');
const contenido = document.querySelector('#contenido');
// Elementos de la API
let paginaActual = 1;
const termino = 'futbol'
const key = '1732750-d45b5378879d1e877cd1d35a6';

// Instanciar evento de Submit
window.onload = () => {
    formulario.addEventListener('submit',validarFormulario)
}


function validarFormulario(e){
    const busqueda = document.querySelector('#termino').value;
    if(busqueda === ''){
        alert("ingrese un termino de busqueda para buscar");
        return;
    }
    buscarImagenes();
}

async function buscarImagenes(){
    const inputUsuarioEjemplo = document.querySelector('#termino').value;
    const url = `https://pixabay.com/api/?key=${key}&q=${inputUsuarioEjemplo}&per_page=30&page=${paginaActual}`;
    try{
        const responde = await axios.get(url);
        mostrarImagenesHTML(responde.data.image);
    }catch(error){
        console.log(error);
    }
}


function mostrarImagenesHTML(){
    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }

    example.forEach(elemento => {
        

        contenido.innerHTML += `
            <div class="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
                    <img class="rounded-t-lg" src=${urlPrevia} alt={tags} />
                    <div class="p-4">
                        <p class="text-lg font-semibold">${meGusta} Me Gusta</p>
                        <p class="text-lg font-semibold">${vistas} Vistas </p>
        
                        <a href=${imageHD} 
                        rel="noopener noreferrer" 
                        target="_blank" class="mt-4 block bg-green-400 text-lg p-3 rounded cursor-pointer text-center uppercase font-semibold hover:bg-green-600 transition">Ver Imagen Completa</a>
            </div>
            `;
    });
}