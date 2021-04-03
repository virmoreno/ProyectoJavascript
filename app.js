//COTIZAR
let btncotizar = document.getElementById("btnCotizar")
btncotizar.addEventListener("click", cotizar);

function cotizar() {
    let paginas = parseFloat(prompt("Cuántas páginas tiene tu documento?"))
    console.log("la cantidad de páginas es:" + paginas)
    localStorage.setItem('paginas', paginas)
    let precioBase = paginas * 0.75;
    console.log("el precio base es:" + precioBase)
    let texto = prompt("El texto tiene imágenes? SI/NO")
    let texto1 = texto.toUpperCase()
    switch (texto1) {
        case "SI":
            precioBase = precioBase * 4
            break;
        case "NO":
            break;
        default:
            alert("Por favor vuelva a intentarlo respetando el formato solicitado")
            break;

    }
    console.log("el precio actualizado 1 es:" + precioBase)

    let color = prompt("Querés impresión en blanco y negro o en color? escribir BN o C")
    let color1 = color.toUpperCase()
    switch (color1) {
        case "BN":

            break;
        case "C":
            precioBase = precioBase * 10
            break;
        default:
            alert("Por favor vuelva a intentarlo respetando el formato solicitado")
            break;

    }
    console.log("el precio actualizado 2 es:" + precioBase)

    let encuadernacion = prompt("Lo encuadernas? A para Anillado, B para binder, NO para nada")
    let encuadernacion1 = encuadernacion.toUpperCase()
    switch (encuadernacion1) {
        case "A":
            precioBase = precioBase + 100
            break;
        case "B":
            precioBase = precioBase + 200
            break;
        case "NO":
            break;
        default:
            alert("Por favor vuelva a intentarlo respetando el formato solicitado")
            break;

    }
    console.log("el precio actualizado 3 es:" + precioBase)
    let impresion = prompt("Finalmente, deseas impresión doble faz o simple faz? DF para doble faz, SF para simple faz")
    let impresion1 = impresion.toUpperCase()
    switch (impresion1) {
        case "DF":
            precioBase = precioBase * 0.66
            break;
        case "SF":
            break;
        default:
            alert("Por favor vuelva a intentarlo respetando el formato solicitado")
            break;

    }
    console.log("el precio actualizado FINAL es:" + precioBase)
    alert("El precio final es de $" + precioBase + " " + "Muchas gracias por cotizar con nosotros!")
    localStorage.setItem('precio total',precioBase)

    //crear resultados en html con dom bajando datos de local storage

    let resultadofinal = localStorage.getItem('precio total')
    console.log("Se descargó la información correctamente, siendo:$"+ parseFloat(resultadofinal))
    
    let textoresultado = document.createElement("h3")
    textoresultado.innerHTML = "El resultado de la cotización es $"+resultadofinal
    document.body.appendChild(textoresultado);
}

let ultimaCotizacion = document.createElement("p")
ultimaCotizacion.innerHTML = "Última cotización $"+localStorage.getItem('precio total')
document.body.appendChild(ultimaCotizacion);
