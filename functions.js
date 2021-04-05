var pagTot = document.getElementById('paginas')

function calculo() {
    var paginas = document.getElementById('paginas').value
    console.log("la cantidad de páginas es:" + paginas)
    var txtS = document.getElementById('textS')
    var txtCI = document.getElementById('textCI')
    var encB = document.getElementById('encB')
    var encA = document.getElementById('encA')
    var encNO = document.getElementById('encNO')
    var impDF = document.getElementById('impDF')
    var impSF = document.getElementById('impSF')
    let precioBase = paginas * 0.75;
    console.log("el precio base es:" + precioBase)

    if (txtS.checked == true) {
        console.log("texts true");
    }
    if (txtCI.checked == true) {
        precioBase = precioBase * 4
        console.log("text ci true"+" "+"nuevo precio"+ " " + precioBase)
    }
    if (encB.checked == true) {
        precioBase = precioBase + 200
        console.log("encB true"+" "+"nuevo precio"+ " " + precioBase);
    }
    if (encA.checked == true) {
        precioBase = precioBase + 100
        console.log("encA true"+" "+"nuevo precio"+ " " + precioBase);
    }
    if (encNO.checked == true) {
        console.log("encNO true");
    }
    if (impDF.checked == true) {
        precioBase = precioBase * 0.66
        console.log("impDF true"+" "+"nuevo precio"+ " " + precioBase);
    }
    if (impSF.checked == true) {
        console.log("impSF true");
           }

console.log("el precio final es"+" "+ precioBase)
localStorage.setItem("preciofinal",precioBase)
document.getElementById("result").innerHTML += "el precio final es"+" "+ parseFloat(precioBase)
}


function getInputValue() {

    var ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked) {
                document.getElementById("result").innerHTML += ele[i].name + ":" +
                    ele[i].value + "<br>"

                var results = ele[i].value
                console.log(results)

            }
        }
    }
    calculo()
   
 
}
