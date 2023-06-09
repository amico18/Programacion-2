/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */

import * as readlineSync from "readline-sync";

//declaramos el array para las notas
const notasTP: number[] = [];

//declaramos el dato para ver cuantos datos ingresamos
const cantidadElementos = parseInt(
  readlineSync.question("Ingrese la cantidad de notas a promediar: ")
);

//teniendo en cuenta el dato ingresado antes, se realiza el ciclo
for (let i = 0; i < cantidadElementos; i++) {
  const elemento = parseInt(readlineSync.question("Ingrese la nota: "));
  notasTP.push(elemento);
}

//definicion suma de los elmentos dentro del array

const suma = notasTP.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

//funcion de promedio entre suma y cantidadElementos

function calcularPromedio(suma: number, cantidadElementos: number): number {
  const promedio = suma / cantidadElementos;
  return promedio;
}

let promedioFinal: number = calcularPromedio(suma, cantidadElementos);

console.log("Su promedio es: " + promedioFinal);
