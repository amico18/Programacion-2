/* Dado un arreglo de números determinar cuál es el
mayor y mostrarlo, si existe el número cero una o más veces en el
arreglo también mostrar “Hay un cero”, pero una sola vez. Por ej.
=> [3, 4, ​0​, 3, ​0​, 9, ​12​, 5]
12
“Hay un cero”
=> [4, -4, 10, 23, 3, 4, 12, ​50​]
50   */


//DECLARACION DE VARIABLES
let listNumbers: number[] = [4, -4, 10, 23, 3, 4, 12, 50];
let numeroMayor = 0;
let mensaje: string = "";

// PASO 2 SABER CUAL ES MAYOR

for (let listNumber of listNumbers) {
  if (listNumber > numeroMayor) {
    numeroMayor = listNumber;
  }
}

console.log(numeroMayor + "" + mensaje);

// FUNCIONA
