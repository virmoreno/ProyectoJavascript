//constructor
class clientesSatisfechos {
constructor (cliente,paginas,color,encuadernacion)
{
    this.cliente = cliente;
    this.paginas = paginas;
    this.color = color.toUpperCase();
    this.encuadernacion = encuadernacion.toUpperCase(); 
}
precioTotal(){
    this.precio=this.paginas * 0.75
}
}
const cliente1 = new clientesSatisfechos ("Carlos",8000,"Color","Binder");
const cliente2 = new clientesSatisfechos ("Adriana",15000,"Color", "Anillado")

console.table(cliente1)
console.table(cliente2)
cliente1.precioTotal();
cliente2.precioTotal();

//creo detalle clientes satisfechos a raiz de un array

