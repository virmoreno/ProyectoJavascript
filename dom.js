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