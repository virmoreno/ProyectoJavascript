
//INTENCIÓN DE CARGAR LOS SERVICIOS A TRAVES DE EL ARCHIVO JSON - SIN  EXITO

const grillaDeServicios = document.getElementById("tablaServicios")
let carrito = []
let servicio = ""
const cargaServicios = () => {
    for (let servicio of SERVICIOS) {
        let fila = `<tr>
        <td>
            ${servicio.nombre}
        </td>
        <td><button>+</button></td>
    </tr>`
grillaDeServicios.innerHTML += fila
    }
}

// CREO INPUT DE CANTIDAD DE PAGINAS

let paginas = document.getElementById("paginas")

let inputpaginas = document.createElement("INPUT");
inputpaginas.setAttribute("type", "number");
inputpaginas.appendChild(paginas)
