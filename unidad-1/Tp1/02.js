/* Dados 2 arreglos de números enteros de la misma
longitud, obtener un nuevo arreglo a partir de la suma de los
elementos de ambos arreglos en la misma posición, y mostrar el
arreglo resultante. Por ej.
=> [3, 4, 0, 3, 12, 2]
[2, 9, 0, 5, 22, 14]
[-1, 5, 0, 2, 10, 12] */
var conjunto1 = [3, 4, 0, 3, 12, 2];
var conjunto2 = [-1, 5, 0, 2, 10, 12];
var sumArrays = sumar(conjunto1, conjunto2);
function sumar(conjunto1, conjunto2) {
    var resultado = [];
    for (var i = 0; i < conjunto1.length; i++) {
        var suma = conjunto1[i] + conjunto2[i];
        resultado.push(suma);
    }
    return resultado;
}
/* const listNumbers1: number[] = [3, 4, 0, 3, 12, 2];
const listNumbers2: number[] = [-1, 5, 0, 2, 10, 12];
const sumar: number[] = sumar(listNumbers1, listNumbers2); */
console.log(sumArrays);
