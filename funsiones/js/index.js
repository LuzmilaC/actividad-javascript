function rectangulo (altura, ancho) {
return ancho * altura
}
function triangulo (base, altura) {
return base * altura
}

function largoDelArray( array)

{
return array.length
}

function cantidadDeLetras (frase) {
return frase.length 
}
console.log(largoDelArray(["azul", "rosa", "violeta", "negro"]));
console.log(cantidadDeLetras("vida"));

function dolarHoy (precio) {
    return precio/1000
}
console.log(dolarHoy(2000));

function precioFinal (monto) {
return monto+(monto*21/100)
}
console.log(precioFinal(1000));

function mitad (entero) {
    return entero/2
}
console.log(mitad(1000));
let dias=["lunes", "martes", "miercoles", "jueves", "viernes"]
function diaSegunNumero( numero) {
    return dias[numero-1]
}
console.log(diaSegunNumero(2));