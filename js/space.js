// Guardamos en variables el acceso a la URL y al buscador HTML

let URL_NASA = "https://images-api.nasa.gov/";
const URL_JUPITER = "https://images-api.nasa.gov/search?q=jupiter";
const buscador = document.querySelector("#inputBuscar");
const botonBuscar = document.querySelector("#btnBuscar");
const contenedor = document.querySelector("#contenedor");

function mostrarDatos(array){
    contenedor.innerHTML = "";
    for (const item of array) {
        contenedor.innerHTML +=
        `<div class="col-md-4 d-inline-flex tarjeta">
        <div class="my-2 mx-2 card border">
        <img src="${item.links[0].href}" class="card-img-top">
        <div class="card-body border bg-light">
        <h3 class="card-title">Título: ${item.data[0].title}</h1>
        <h5 class="card-subtitle">Fecha: ${item.data[0].date_created}</h5>
        <h6 class="card-text" id="description">Descripción: ${item.data[0].description}</h6>
        </div></div></div>`
    }
}

/*
contenedor.innerHTML = `<div id="contenedorDatos">`
    for (const item of array) {
        contenedor.innerHTML +=
        `<div class="col-md-4">
        <div class="my-2 mx-2 card border" id="objeto">
        <img src="${item.links[0].href}" class="card-img-top" width="200">
        <div class="card-body border bg-light">
        <h3 class="card-title">Título: ${item.data[0].title}</h1>
        <h5 class="card-subtitle">Fecha: ${item.data[0].date_created}</h5>
        <h6 class="card-text" id="description">Descripción: ${item.data[0].description}</h6>
        </div></div></div>`
    }
    contenedor.innerHTML += `</div>`
*/
async function buscarDatos(url){
    let response = await fetch(url);
    if (response.ok){
        let responseContents = await response.json();
        mostrarDatos(responseContents.collection.items);
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
