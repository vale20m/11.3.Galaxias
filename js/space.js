// Guardamos en variables el acceso a la URL y al buscador HTML

let URL_NASA = "https://images-api.nasa.gov/";
const buscador = document.querySelector("#inputBuscar");
const botonBuscar = document.querySelector("#btnBuscar");
const contenedor = document.querySelector("#contenedor");

function mostrarDatos(array){
    contenedor.innerHTML = "";
    for (const datos of array) {
        
    }
}

async function buscarDatos(url){
    let response = await fetch(url);
    if (response.ok){
        let responseContents = response.json();
        mostrarDatos(responseContents);
    } else {
        console.log("HTTP ERROR: " + response.status);
    }
}

botonBuscar.addEventListener("click", function(){
    URL_NASA = "https://images-api.nasa.gov/";
    if (buscador.value != ""){
        URL_NASA += "search?q=" + buscador.value;
        buscarDatos(URL_NASA);
    }
});
