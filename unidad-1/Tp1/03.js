"use strict";
/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//declaramos el array para las notas
var notasTP = [];
//declaramos el dato para ver cuantos datos ingresamos
var cantidadElementos = parseInt(readlineSync.question("Ingrese la cantidad de notas a promediar: "));
//teniendo en cuenta el dato ingresado antes, se realiza el ciclo
for (var i = 0; i < cantidadElementos; i++) {
    var elemento = parseInt(readlineSync.question("Ingrese la nota: "));
    notasTP.push(elemento);
}
//definicion suma de los elmentos dentro del array
var suma = notasTP.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
//funcion de promedio entre suma y cantidadElementos
function calcularPromedio(suma, cantidadElementos) {
    var promedio = suma / cantidadElementos;
    return promedio;
}
var promedioFinal = calcularPromedio(suma, cantidadElementos);
console.log("Su promedio es: " + promedioFinal);
