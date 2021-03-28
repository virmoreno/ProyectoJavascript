
let paginas = parseFloat( prompt ("Cuántas páginas tiene tu documento?"))
console.log("la cantidad de páginas es:"+paginas)
let precioBase = paginas * 0.75;
console.log("el precio base es:"+ precioBase)
let texto = prompt ("El texto tiene imágenes? SI/NO (en mayúsculas)")
switch (texto){
    case "SI":
        precioBase=precioBase*4
        break;
    case "NO":
        break;
    default:
        alert("Por favor vuelva a intentarlo respetando el formato solicitado")    
        break;  
       
}
console.log("el precio actualizado 1 es:"+ precioBase)  

let color = prompt ("Querés impresión en blanco y negro o en color? escribir BN o C (en mayúsculas)")
switch (color){
    case "BN":
        
        break;
    case "C":
        precioBase=precioBase*10
        break;
    default:
        alert("Por favor vuelva a intentarlo respetando el formato solicitado")    
        break;  
       
}
console.log("el precio actualizado 2 es:"+ precioBase)  

let encuadernacion = prompt ("Lo encuadernas? A para Anillado, B para binder, NO para nada (en mayúsculas)")
switch (encuadernacion){
    case "A":
        precioBase=precioBase+100
        break;
    case "B":
        precioBase=precioBase+200
        break;
    case "NO":
        break;
    default:
        alert("Por favor vuelva a intentarlo respetando el formato solicitado")    
        break;  
       
}
console.log("el precio actualizado 3 es:"+ precioBase)  

let impresion = prompt("Finalmente, deseas impresión doble faz o simple faz? DF para doble faz, SF para simple faz (en mayúsculas)")
switch (impresion){
    case "DF":
        precioBase=precioBase*0.66
        break;
    case "SF":
        break;
    default:
        alert("Por favor vuelva a intentarlo respetando el formato solicitado")    
        break;  
       
}
console.log("el precio actualizado FINAL es:"+ precioBase)  
alert("El precio final es de $"+ precioBase + " " + "Muchas gracias por cotizar con nosotros!")

const otrosservicios = ["Impresion de Agendas", "Encuadernación de Libros", "Posters", "Merchandising", "Envíos"]

for(let i in otrosservicios){
document.getElementById("servicios").innerHTML += "<li>"+otrosservicios[i]+"</li>"
}


//creo parrafo
let parrafo = document.createElement("p");
let nodo = document.createTextNode("Gracias por Cotizar con nosotros");
parrafo.appendChild(nodo);

let elemento = document.getElementById("gracias")
elemento.appendChild(parrafo)

