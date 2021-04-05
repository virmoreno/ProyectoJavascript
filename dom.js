//CREO ENCABEZADO 

let titulo = document.getElementById("titulo");
titulo.innerText = "COTIZADOR DE GRÁFICA (SIMULADOR)"

//CARGA DE SERVICIOS A TRAVES DE ARCHIVO JSON

function agregoServicios() {
    for (let i = 0; i < SERVICIOS.length; i++) {
        document.getElementById("otrosservicios").innerHTML += "<li>" + SERVICIOS[i].nombre + "</li>"
    }
}
agregoServicios();

//MUESTRO RESULTADOS DE SESIÓN ANTERIOR BAJADO DE LOCALSTORAGE

document.getElementById("btnUlt").addEventListener("click", ultimaCot);

function ultimaCot() {
    let resultadoFinal = localStorage.getItem("preciofinal")
    document.getElementById("ult").innerHTML = "La última cotización fue de $" + resultadoFinal
}